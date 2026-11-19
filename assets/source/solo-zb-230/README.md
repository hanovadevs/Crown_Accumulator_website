# SOLO ZB 230 exterior model

Editable Blender 5.2.1 LTS source for `/products/solo-zb-230`. This is a visual exterior approximation, not CAD or a dimensional drawing. Product specifications continue to come from `src/data/products.ts`.

## Deliverables

- `solo-zb-230.blend`: editable objects, packed front artwork, separate model and studio collections, saved three-quarter camera.
- `rebuild.py`: rebuilds only `SoloZB230_Model`, `SoloZB230_Studio` and the owned preview scene. Other objects and collections are retained.
- `textures/front-print.png`: front-only 2048 × 1183 alpha decal extracted from the supplied photograph; a visual facsimile, not print-ready packaging artwork.
- `extract-print.py`: repeatable source-art extraction using Pillow.
- `references/00-product-source.png`: supplied product photograph copied from the Crown Accumulator document folder. Component boards were supplied in the conversation; no local copies were available.
- `renders/front.png` and `renders/three-quarter.png`: renders of the actual reopened Blender file. The podium is a display prop, excluded from the GLB.
- `../../../public/models/solo-zb-230.glb`: embedded web model. See `validation.json` for measured bytes, triangle count, materials and bounds.
- `validate.py`: independent saved-file and GLB structural checks.

From the repository root in PowerShell:

```powershell
& 'C:\Program Files\Blender Foundation\Blender 5.2\blender.exe' -b --python-exit-code 1 -P assets/source/solo-zb-230/rebuild.py
& 'C:\Program Files\Blender Foundation\Blender 5.2\blender.exe' -b --python-exit-code 1 -P assets/source/solo-zb-230/validate.py
node --experimental-vm-modules scripts/check-zb230-viewer.mjs
npm.cmd run lint
npm.cmd run build
```

Run `python assets/source/solo-zb-230/extract-print.py` only when refreshing the supplied source artwork; it requires Pillow. The packed texture is already included in the Blender file and GLB.

## Geometry and artwork assumptions

Working units are normalized visual ratios: case width 0.98, overall lid width 1.015, depth approximately 0.35, case height 0.40, lid thickness 0.025 and assembled height approximately 0.524. These are not millimeter measurements or approved product dimensions.

Depth, wall thickness, rear/underside detailing, side ribs, handle mounting feet and handle orientation are estimated from the front photograph and supplied visual boards. The front end ribs, two open handles, three yellow caps, visible post and red printing follow the source. A simple empty case shell supports the exterior illustration; no internal cells, plates, acid or electrical connections are modeled. Only `TerminalVisible` is included; no second terminal or guessed polarity is added.

The label retains the existing Solo wordmark, ZB 230, 23 Plates, 150 AH, 12V, UPPER, lightning motif and Crown manufacturer line. The unverified QR-like graphic and certification-like stamp are omitted. The source crop limits close-up artwork detail; it is not a vector reconstruction.

`BatteryRoot` contains independent `CaseBody`, `Lid`, `HandleLeft`, `HandleRight`, `Cap01`, `Cap02`, `Cap03` and `TerminalVisible` targets. `FrontPrint` stays parented to `CaseBody`. Blender uses Z-up/front −Y; glTF uses Y-up/front +Z. Browser lift offsets use each target's exported local Y and stored rest position.

## Website integration

`src/components/products/ImmersiveProductShowcase.tsx` selects the viewer only for the existing ZB 230 slug. `ZB230Viewer.tsx` owns the poster, status, retry and text controls. It imports `battery-scene.ts` after the visitor selects Explore in 3D; the photo is the default and the GLB is not part of the initial page load.

The scene controller owns one demand-driven render loop for the 1.4-second entrance, restrained native-scroll poses, damped horizontal inspection and reversible exterior assembly. Pointer input stops scripted poses. Vertical touch gestures remain native with `touch-action: pan-y`. Keyboard arrows inspect, +/− adjust bounded zoom and Home resets both the model and the button state. Reduced motion disables automatic poses and makes requested assembly changes immediate. DPR is capped at 1.5 for narrow viewers and 2 otherwise; no postprocessing or shadow maps are used. A lightweight radial contact shadow and separate low pedestal provide the studio setting.

The original photograph and product actions remain server-rendered. Load failure, unsupported WebGL or context loss retain the static poster. Retry tears down the previous scene, observers, listeners and GPU resources. Animation pauses offscreen and in hidden tabs; textures/geometries shared inside one scene are disposed once, without a cross-instance asset cache.

## Verification and remaining browser check

Blender was run locally, the saved `.blend` was reopened before rendering, front and three-quarter renders were visually inspected, and the GLB's target names, front UVs, embedded texture, materials, bounds and triangle budget were checked. `validation.json` records the latest measured artifact.

`scripts/check-zb230-viewer.mjs` runs the actual scene controller with the actual GLTF geometry loader and a mock renderer/DOM. It passes 20 interrupted assembly cycles with exact rest restoration, attached front print, keyboard reset, manual/scroll separation, quiet rest, offscreen/hidden-tab pause, resize/DPR, reduced motion, context loss, failed load, retry and disposal. The harness excludes image decoding and GPU rendering; it does not substitute for a browser visual test.

Lint, TypeScript and the production build pass. HTTP checks on the local route and GLB return 200; the route retains its poster, enquiry action and specifications. Browser inspection was attempted through both available computer-use entry points; both returned `Computer Use native pipe is unavailable`. Desktop/mobile shading, real label appearance, native touch scrolling, browser pointer delivery and resize/navigation behavior still require a real browser check when that connection is restored.

Local route: `http://localhost:3000/products/solo-zb-230`.
