"""Rebuild the Solo ZB 230 exterior in Blender 5.2; normalized visual units."""
import bpy
import math
import json
import sys
from pathlib import Path
from mathutils import Vector

SOURCE = Path(__file__).resolve().parent
COLLECTION = "SoloZB230_Model"
STUDIO = "SoloZB230_Studio"
OUTPUT = SOURCE.parents[2] / "public" / "models" / "solo-zb-230.glb"

# Never delete other models or collections in an interactive Blender document.
for collection_name in [COLLECTION, STUDIO]:
    previous = bpy.data.collections.get(collection_name)
    if previous:
        meshes = [obj.data for obj in previous.objects if obj.type == "MESH"]
        for obj in list(previous.objects):
            bpy.data.objects.remove(obj, do_unlink=True)
        for mesh in set(meshes):
            if mesh.users == 0:
                bpy.data.meshes.remove(mesh)
        bpy.data.collections.remove(previous)

model = bpy.data.collections.new(COLLECTION)
studio = bpy.data.collections.new(STUDIO)
bpy.context.scene.collection.children.link(model)
bpy.context.scene.collection.children.link(studio)
root = bpy.data.objects.new("BatteryRoot", None)
model.objects.link(root)

def move_to(obj, collection):
    for current in list(obj.users_collection):
        current.objects.unlink(obj)
    collection.objects.link(obj)
    return obj

def material(name, rgb, roughness, metallic=0):
    result = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    result.use_nodes = True
    principled = result.node_tree.nodes.get("Principled BSDF")
    principled.inputs["Base Color"].default_value = (*rgb, 1)
    principled.inputs["Roughness"].default_value = roughness
    principled.inputs["Metallic"].default_value = metallic
    return result

white = material("ZB230 | Warm polypropylene", (0.88, 0.87, 0.80), 0.32)
blue = material("ZB230 | Cobalt molded plastic", (0.003, 0.025, 0.72), 0.19)
yellow = material("ZB230 | Yellow cap plastic", (1.0, 0.65, 0.002), 0.32)
metal = material("ZB230 | Cast terminal", (0.46, 0.47, 0.48), 0.56, 0.82)

def bevel(obj, width=0.003, segments=3):
    modifier = obj.modifiers.new("Molded edge radii", "BEVEL")
    modifier.width = width
    modifier.segments = segments
    modifier = obj.modifiers.new("Weighted corner normals", "WEIGHTED_NORMAL")
    modifier.keep_sharp = True
    for polygon in obj.data.polygons:
        polygon.use_smooth = True

def box(name, dimensions, location, mat, parent=root, radius=0.003):
    bpy.ops.mesh.primitive_cube_add(size=1, location=location)
    obj = move_to(bpy.context.object, model)
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    obj.parent = parent
    if radius:
        bevel(obj, radius)
    return obj

def cylinder(name, radius, depth, location, mat, parent=root, vertices=32):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=location)
    obj = move_to(bpy.context.object, model)
    obj.name = name
    obj.data.materials.append(mat)
    obj.parent = parent
    bevel(obj, min(depth * 0.15, 0.002), 2)
    return obj

def rounded_ring(width, depth, radius, steps=8):
    points = []
    for x, y, start in [
        (width/2-radius, depth/2-radius, 0),
        (-width/2+radius, depth/2-radius, math.pi/2),
        (-width/2+radius, -depth/2+radius, math.pi),
        (width/2-radius, -depth/2+radius, math.pi*1.5),
    ]:
        for i in range(steps):
            angle = start + (i / steps) * math.pi/2
            points.append((x + radius*math.cos(angle), y + radius*math.sin(angle)))
    return points

# Closed bottom, exterior walls, rim, and empty cavity. No speculative cell internals.
outer = rounded_ring(0.98, 0.34, 0.018)
inner = rounded_ring(0.95, 0.31, 0.014)
vertices = []
for ring, z in [(outer, 0.012), (outer, 0.4), (inner, 0.4), (inner, 0.027)]:
    vertices.extend((x, y, z) for x, y in ring)
count = len(outer)
faces = []
for i in range(count):
    j = (i+1) % count
    faces.extend([
        (i, j, count+j, count+i),
        (count+i, count+j, 2*count+j, 2*count+i),
        (2*count+i, 2*count+j, 3*count+j, 3*count+i),
    ])
faces.extend([tuple(reversed(range(count))), tuple(range(3*count, 4*count))])
mesh = bpy.data.meshes.new("CaseBody_Shell")
mesh.from_pydata(vertices, [], faces)
mesh.update()
case = bpy.data.objects.new("CaseBody", mesh)
model.objects.link(case)
case.parent = root
case.data.materials.append(white)
bevel(case, 0.0025, 3)
box("LowerMoldedFoot", (0.99, 0.35, 0.014), (0, 0, 0.009), white, case, 0.006)
for side in [-1, 1]:
    for index, x in enumerate([0.405, 0.431, 0.457, 0.480]):
        box(f"FrontRib_{side}_{index}", (0.012, 0.016, 0.37), (x*side, -0.171, 0.207), white, case, 0.005)
    for index, y in enumerate([-0.105, -0.035, 0.035, 0.105]):
        box(f"SideRib_{side}_{index}", (0.012, 0.013, 0.366), (0.489*side, y, 0.205), white, case, 0.004)

lid = box("Lid", (1.015, 0.362, 0.025), (0, 0, 0.414), blue, root, 0.008)
# Child locations are explicitly local to their moving parent.
for name, y in [("LidFrontLip", -0.173), ("LidRearLip", 0.173)]:
    box(name, (0.97, 0.008, 0.005), (0, y, 0.013), blue, lid, 0.002)
for index, x in enumerate([-0.38, -0.35, -0.32, -0.29, -0.08, -0.05, -0.02, 0.01, 0.04, 0.07, 0.10, 0.32, 0.35, 0.38]):
    box(f"LidMoldDetail_{index}", (0.009, 0.022, 0.004), (x, -0.153, 0.014), blue, lid, 0.002)

def make_handle(name, x, angle):
    outer = rounded_ring(0.125, 0.098, 0.028, 8)
    inner = rounded_ring(0.077, 0.057, 0.018, 8)
    verts = []
    # Two planar frames with a genuine through opening, extruded along Y.
    for ring, y in [(outer, -0.014), (inner, -0.014), (outer, 0.014), (inner, 0.014)]:
        verts.extend((px, y, pz + 0.049) for px, pz in ring)
    n = len(outer)
    polys = []
    for i in range(n):
        j = (i+1) % n
        polys.extend([(i,j,n+j,n+i),(2*n+i,3*n+i,3*n+j,2*n+j),
                      (i,2*n+i,2*n+j,j),(n+i,n+j,3*n+j,3*n+i)])
    data = bpy.data.meshes.new(name+"_Frame")
    data.from_pydata(verts, [], polys)
    data.update()
    obj = bpy.data.objects.new(name, data)
    model.objects.link(obj)
    obj.data.materials.append(blue)
    obj.parent = root
    obj.location = (x, 0.035, 0.426)
    obj.rotation_euler.z = angle
    bevel(obj, 0.004, 3)
    for side in [-1,1]:
        box(name+"_Mount_"+str(side), (0.045, 0.052, 0.012), (side*0.050, 0, 0.004), blue, obj, 0.004)
    return obj

left_handle = make_handle("HandleLeft", -0.428, -0.95)
right_handle = make_handle("HandleRight", 0.428, 0.95)
right_handle.data = left_handle.data
caps = []
for index, x in enumerate([-0.285, -0.005, 0.255]):
    cap = cylinder(f"Cap{index+1:02}", 0.036, 0.009, (x,-0.025,0.432), yellow)
    cylinder(f"Cap{index+1:02}_Grip", 0.031, 0.017, (0,0,0.010), yellow, cap)
    for grip in range(16):
        angle = 2*math.pi*grip/16
        obj = box(f"Cap{index+1:02}_GripRib_{grip}", (0.004,0.007,0.014),
                  (math.cos(angle)*0.030,math.sin(angle)*0.030,0.011), yellow, cap, 0.001)
        obj.rotation_euler.z = angle
    caps.append(cap)
# Share repeated cap geometry and materials, while preserving independent parent nodes.
for index in [1,2]:
    caps[index].data = caps[0].data
terminal = cylinder("TerminalVisible", 0.017, 0.038, (0.355,-0.039,0.443), metal)
cylinder("TerminalBase", 0.023, 0.006, (0,0,-0.017), metal, terminal)

# Alpha decal, front only. UV orientation is explicit and independent of other faces.
label_mat = bpy.data.materials.get("ZB230 | Source front printing") or bpy.data.materials.new("ZB230 | Source front printing")
label_mat.use_nodes = True
label_mat.surface_render_method = "DITHERED"
nodes = label_mat.node_tree.nodes
for node in list(nodes):
    if node.type == "TEX_IMAGE":
        nodes.remove(node)
texture = nodes.new("ShaderNodeTexImage")
texture.image = bpy.data.images.load(str(SOURCE / "textures/front-print.png"), check_existing=True)
texture.image.reload()
texture.image.colorspace_settings.name = "sRGB"
texture.image.pack()
principled = nodes.get("Principled BSDF")
label_mat.node_tree.links.new(texture.outputs["Color"], principled.inputs["Base Color"])
label_mat.node_tree.links.new(texture.outputs["Alpha"], principled.inputs["Alpha"])
principled.inputs["Roughness"].default_value = 0.43
decal_mesh = bpy.data.meshes.new("FrontPrint_UV")
decal_mesh.from_pydata([(-.29,-.1707,.034),(.29,-.1707,.034),(.29,-.1707,.369),(-.29,-.1707,.369)], [], [(0,1,2,3)])
decal_mesh.update()
uv = decal_mesh.uv_layers.new(name="FrontArtwork")
for loop, point in zip(uv.data, [(0,0),(1,0),(1,1),(0,1)]):
    loop.uv = point
decal = bpy.data.objects.new("FrontPrint", decal_mesh)
model.objects.link(decal)
decal.parent = case
decal.data.materials.append(label_mat)

bpy.context.scene.unit_settings.system = "NONE"
root["Model type"] = "Visual exterior approximation; normalized width 1.0; not a dimensional drawing"
root["Source"] = "Supplied SOLO ZB 230 product image"
root["Estimated geometry"] = "Depth, rear, underside, wall thickness, handle mounts and orientation"
root["Unverified artwork omitted"] = "QR-like graphic and certification-like mark"
root["Export axes"] = "Blender Z up / front -Y; glTF Y up / front +Z"
for obj in model.objects:
    if obj.type == "MESH":
        obj.select_set(True)
    else:
        obj.select_set(False)
bpy.ops.object.select_all(action="DESELECT")
for obj in model.objects:
    obj.select_set(True)
bpy.context.view_layer.objects.active = case
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
bpy.ops.export_scene.gltf(
    filepath=str(OUTPUT), export_format="GLB", use_selection=True,
    export_yup=True, export_apply=True, export_materials="EXPORT",
    export_cameras=False, export_lights=False, export_image_format="AUTO",
)

# Studio is separate from the exported model.
floor_mat = material("Studio | Ivory", (0.88,0.85,0.79), 0.8)
stone_mat = material("Studio | Pale stone", (0.74,0.69,0.59), 0.8)
bpy.ops.mesh.primitive_cylinder_add(vertices=96, radius=0.69, depth=0.065, location=(0,0,-0.0325))
pedestal = move_to(bpy.context.object, studio)
pedestal.name = "DisplayPedestal_ExcludeFromExport"
pedestal.data.materials.append(stone_mat)
bevel(pedestal, 0.008, 3)
bpy.ops.mesh.primitive_plane_add(size=200, location=(0,0,-0.067))
floor = move_to(bpy.context.object, studio)
floor.name = "StudioFloor_ExcludeFromExport"
floor.data.materials.append(floor_mat)

def aim(obj, point):
    obj.rotation_euler = (Vector(point)-obj.location).to_track_quat("-Z","Y").to_euler()

for name, location, energy, size in [
    ("Key", (-1.5,-1.8,2.2), 60, 2),
    ("Fill", (1.8,-.5,1.6), 40, 1.6),
    ("Rim", (.2,1.3,1.9), 70, 1.5),
]:
    data = bpy.data.lights.new("ZB230_"+name, "AREA")
    data.energy, data.shape, data.size = energy, "DISK", size
    obj = bpy.data.objects.new("ZB230_"+name,data)
    studio.objects.link(obj)
    obj.location = location
    aim(obj,(0,0,.2))
camera_data = bpy.data.cameras.new("ZB230_StudioCamera")
camera = bpy.data.objects.new("ZB230_StudioCamera",camera_data)
studio.objects.link(camera)
camera_data.type = "ORTHO"
camera_data.ortho_scale = 1.4
preview_name = "SoloZB230_Preview"
old_preview = bpy.data.scenes.get(preview_name)
if old_preview:
    bpy.data.scenes.remove(old_preview)
scene = bpy.data.scenes.new(preview_name)
scene.collection.children.link(model)
scene.collection.children.link(studio)
scene.world = bpy.data.worlds.get("ZB230_StudioWorld") or bpy.data.worlds.new("ZB230_StudioWorld")
bpy.context.window.scene = scene
scene.camera = camera
scene.render.engine = "CYCLES"
scene.cycles.device = "CPU"
scene.cycles.samples = 16
scene.cycles.use_denoising = True
scene.world.color = (0.70,0.68,0.63)
scene.world.use_nodes = True
background = scene.world.node_tree.nodes.get("Background")
background.inputs["Color"].default_value = (0.82, 0.80, 0.76, 1)
background.inputs["Strength"].default_value = 0.7
scene.view_settings.view_transform = "Standard"
scene.view_settings.exposure = -0.5
scene.render.resolution_x = 1100
scene.render.resolution_y = 850
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = "PNG"
camera.location = (0,-2,.55)
aim(camera,(0,0,.25))

# Save and reopen the actual deliverable before rendering it.
blend_path = SOURCE / "solo-zb-230.blend"
bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))
bpy.ops.wm.open_mainfile(filepath=str(blend_path))
scene = bpy.context.scene
if "--skip-renders" not in sys.argv:
    scene.render.filepath = str(SOURCE / "renders/front.png")
    bpy.ops.render.render(write_still=True)
scene.camera.location = (1.1,-2,1.0)
aim(scene.camera,(0,0,.24))
if "--skip-renders" not in sys.argv:
    scene.render.filepath = str(SOURCE / "renders/three-quarter.png")
    bpy.ops.render.render(write_still=True)
# Save the preferred three-quarter studio camera in the editable file.
bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))
print("ZB230_DELIVERABLES", json.dumps({"blend":str(blend_path),"glb":str(OUTPUT),"bytes":OUTPUT.stat().st_size}))
