"""Run with Blender Python; reopen saved source and independently inspect GLB."""
import bpy
import json
import struct
from pathlib import Path
from mathutils import Vector

folder = Path(__file__).resolve().parent
blend = folder / "solo-zb-230.blend"
glb = folder.parents[2] / "public/models/solo-zb-230.glb"
bpy.ops.wm.open_mainfile(filepath=str(blend))
expected = {"BatteryRoot", "CaseBody", "Lid", "HandleLeft", "HandleRight", "Cap01", "Cap02", "Cap03", "TerminalVisible", "FrontPrint"}
collection = bpy.data.collections["SoloZB230_Model"]
assert expected <= {obj.name for obj in collection.objects}
assert bpy.data.objects["FrontPrint"].parent.name == "CaseBody"
assert "TerminalEstimated" not in {obj.name for obj in collection.objects}
assert all(obj.parent for obj in collection.objects if obj.name != "BatteryRoot")
assert bpy.data.objects["FrontPrint"].data.uv_layers
packed = [image.name for image in bpy.data.images if image.packed_file]
assert "front-print.png" in packed
points = [obj.matrix_world @ Vector(corner) for obj in collection.objects if obj.type == "MESH" for corner in obj.bound_box]
low = [min(point[axis] for point in points) for axis in range(3)]
high = [max(point[axis] for point in points) for axis in range(3)]
data = glb.read_bytes()
assert data[:4] == b"glTF"
length = struct.unpack_from("<I", data, 12)[0]
doc = json.loads(data[20:20+length])
names = [node.get("name") for node in doc["nodes"]]
assert expected <= set(names)
assert len(names) == len(set(names))
assert not any("Studio" in name or "Display" in name for name in names)
triangles = sum(doc["accessors"][part["indices"]]["count"] // 3 for mesh in doc["meshes"] for part in mesh["primitives"])
assert triangles < 60000
assert all("uri" not in item for item in doc.get("buffers", []))
assert all("bufferView" in item and "uri" not in item for item in doc["images"])
assert len(doc["images"]) == 1
assert len(doc["materials"]) == 5
assert all(".001" not in item["name"] for item in doc["materials"])
assert doc["nodes"][names.index("Lid")]["translation"][1] > .4
assert len(doc["nodes"][names.index("BatteryRoot")].get("children", [])) == 8
report = {
    "blender": bpy.app.version_string,
    "saved_blend_reopened": True,
    "unrelated_default_cube_retained_and_excluded": "Cube" in bpy.data.objects and "Cube" not in names,
    "bytes": len(data), "triangles": triangles, "nodes": len(names),
    "required_nodes": sorted(expected), "materials": [item["name"] for item in doc["materials"]],
    "embedded_images": doc["images"], "packed_blend_images": packed,
    "blender_bounds_xyz": {"min": low, "max": high},
    "gltf_axes": "Y up, front +Z; independent exterior targets have local Y lift",
    "source_face_print": "Single front UV decal; QR-like and certification-like marks omitted",
}
(folder / "validation.json").write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps(report, indent=2))
