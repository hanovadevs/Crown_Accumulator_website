import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export interface BatteryScene {
  setExploded(value: boolean): void;
  reset(): void;
  dispose(): void;
}

// One owner for each transform: all input changes targets, only frame() applies them.
export function createBatteryScene(host: HTMLElement, callbacks: { ready(): void; error(): void; reset(): void }): BatteryScene {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "low-power" });
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "Solo ZB 230 exterior. Drag horizontally or use arrow keys to rotate. Plus and minus zoom. Home resets the view.");
  host.appendChild(canvas);
  renderer.setClearColor(0xf3efe7);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 20);
  const pivot = new THREE.Group();
  scene.add(pivot);
  scene.add(new THREE.HemisphereLight(0xfffcf4, 0x8b8278, 1.5));
  const key = new THREE.DirectionalLight(0xffffff, 2);
  key.position.set(-2, 3, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xe3eaff, 1.1);
  rim.position.set(2, 2, -2);
  scene.add(rim);
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(.67, .68, .055, 64), new THREE.MeshStandardMaterial({ color: 0xdcd3c3, roughness: .87 }));
  pedestal.position.y = -.028;
  scene.add(pedestal);
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 128;
  const ctx = shadowCanvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 12, 64, 64, 64);
    gradient.addColorStop(0, "rgba(49,39,26,.3)");
    gradient.addColorStop(1, "rgba(49,39,26,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.65, 1.25), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -.057;
  scene.add(shadow);

  const reducedQuery = matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = reducedQuery.matches;
  let dead = false;
  let failed = false;
  let visible = false;
  let loaded = false;
  let frameId = 0;
  let previous = 0;
  let entrance = reduced ? 1 : 0;
  let manual = false;
  let yaw = .24, targetYaw = 0, pitch = 0, targetPitch = 0;
  let zoom = 1;
  let expanded = false, spread = 0;
  let targetSpread = 0;
  let width = 1, height = 1;
  let modelSize = new THREE.Vector3(1.02, .53, .36);
  const parts: { node: THREE.Object3D; rest: THREE.Vector3; lift: number }[] = [];
  const abort = new AbortController();
  const cleanups: (() => void)[] = [];

  type SceneEvents = WindowEventMap & DocumentEventMap & { webglcontextlost: Event };
  function listen<K extends keyof SceneEvents>(target: EventTarget, type: K, handler: (event: SceneEvents[K]) => void, options?: AddEventListenerOptions) {
    target.addEventListener(type, handler as EventListener, options);
    cleanups.push(() => target.removeEventListener(type, handler as EventListener, options));
  }
  function invalidate() {
    if (!dead && !failed && visible && !document.hidden && !frameId) frameId = requestAnimationFrame(frame);
  }
  function fitCamera() {
    const viewHeight = modelSize.y + .23 + spread * .42;
    const distance = Math.max(viewHeight / (2 * Math.tan(THREE.MathUtils.degToRad(17))), (Math.hypot(modelSize.x, modelSize.z) + .12) / (2 * Math.tan(THREE.MathUtils.degToRad(17)) * camera.aspect));
    const center = modelSize.y / 2 + spread * .145;
    camera.position.set(0, center + distance * .2, distance * zoom);
    camera.lookAt(0, center, 0);
  }
  function frame(now: number) {
    frameId = 0;
    if (dead || failed || !visible || document.hidden) return;
    const dt = previous ? Math.min((now - previous) / 1000, .05) : 1 / 60;
    previous = now;
    if (!manual && entrance < 1 && loaded) {
      entrance = Math.min(1, entrance + dt / 1.4);
      targetYaw = .24 * Math.pow(1 - entrance, 3);
    }
    const blend = reduced ? 1 : 1 - Math.exp(-dt * 10);
    yaw += (targetYaw - yaw) * blend;
    pitch += (targetPitch - pitch) * blend;
    spread += (targetSpread - spread) * (reduced ? 1 : 1 - Math.exp(-dt * 5));
    if (Math.abs(spread - targetSpread) < .0001) spread = targetSpread;
    for (const part of parts) {
      part.node.position.copy(part.rest);
      // Exported glTF is Y-up; original Blender Z is converted by the exporter.
      part.node.position.y += part.lift * spread;
    }
    pivot.rotation.set(pitch, yaw, 0);
    fitCamera();
    renderer.render(scene, camera);
    if ((loaded && !manual && entrance < 1) || Math.abs(yaw - targetYaw) > .0001 || Math.abs(pitch - targetPitch) > .0001 || spread !== targetSpread) invalidate();
  }
  function userInput() { manual = true; entrance = 1; }
  function reset() {
    manual = false; entrance = 1; yaw = THREE.MathUtils.euclideanModulo(yaw + Math.PI, Math.PI * 2) - Math.PI; targetYaw = 0; targetPitch = 0; zoom = 1;
    expanded = false; targetSpread = 0;
    callbacks.reset();
    invalidate();
  }
  function disposeObject(object: THREE.Object3D) {
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    object.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      geometries.add(child.geometry);
      for (const material of Array.isArray(child.material) ? child.material : [child.material]) {
        materials.add(material);
        for (const value of Object.values(material)) if (value instanceof THREE.Texture) textures.add(value);
      }
    });
    geometries.forEach((value) => value.dispose());
    materials.forEach((value) => value.dispose());
    textures.forEach((value) => { value.dispose(); if (typeof ImageBitmap !== "undefined" && value.image instanceof ImageBitmap) value.image.close(); });
  }
  function fail() {
    if (dead || failed) return;
    failed = true;
    abort.abort();
    cancelAnimationFrame(frameId);
    frameId = 0;
    callbacks.error();
    dispose();
  }
  listen(canvas, "webglcontextlost", (event) => { event.preventDefault(); fail(); });
  listen(reducedQuery, "change", () => { reduced = reducedQuery.matches; entrance = 1; targetYaw = yaw; targetPitch = pitch; invalidate(); });
  listen(document, "visibilitychange", () => {
    previous = 0;
    if (document.hidden) { cancelAnimationFrame(frameId); frameId = 0; } else invalidate();
  });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    previous = 0;
    if (visible) invalidate(); else { cancelAnimationFrame(frameId); frameId = 0; }
  });
  observer.observe(host);
  const resize = new ResizeObserver(() => {
    width = Math.max(1, host.clientWidth); height = Math.max(1, host.clientHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, width < 600 ? 1.5 : 2));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    invalidate();
  });
  resize.observe(host);
  listen(window, "scroll", () => {
    if (!visible || manual || expanded || reduced || entrance < 1) return;
    const rect = host.getBoundingClientRect();
    const progress = THREE.MathUtils.clamp((innerHeight - rect.top) / (innerHeight + rect.height), 0, 1);
    targetYaw = (progress - .5) * .32;
    targetPitch = (progress - .5) * .12;
    invalidate();
  }, { passive: true });

  let drag: { id: number; x: number; y: number; yaw: number; horizontal: boolean } | null = null;
  listen(canvas, "pointerdown", (event) => {
    if (event.button !== 0 || drag) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, yaw: targetYaw, horizontal: event.pointerType !== "touch" };
    canvas.setPointerCapture(event.pointerId);
    if (event.pointerType !== "touch") userInput();
  });
  listen(canvas, "pointermove", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (!drag.horizontal) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6) { drag = null; return; }
      if (Math.abs(dx) < 7) return;
      drag.horizontal = true;
      userInput();
    }
    targetYaw = drag.yaw + dx / width * Math.PI * 2;
    invalidate();
  });
  const endDrag = () => { drag = null; };
  listen(canvas, "pointerup", endDrag);
  listen(canvas, "pointercancel", endDrag);
  listen(canvas, "lostpointercapture", endDrag);
  listen(canvas, "keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "+", "=", "-", "Home"].includes(event.key)) return;
    event.preventDefault();
    userInput();
    if (event.key === "Home") reset();
    if (event.key === "ArrowLeft") targetYaw -= .12;
    if (event.key === "ArrowRight") targetYaw += .12;
    if (event.key === "ArrowUp") targetPitch -= .06;
    if (event.key === "ArrowDown") targetPitch += .06;
    if (event.key === "+" || event.key === "=") zoom -= .05;
    if (event.key === "-") zoom += .05;
    targetPitch = THREE.MathUtils.clamp(targetPitch, -.14, .22);
    zoom = THREE.MathUtils.clamp(zoom, .94, 1.3);
    invalidate();
  });

  fetch("/models/solo-zb-230.glb", { signal: abort.signal })
    .then((response) => { if (!response.ok) throw new Error("Model unavailable"); return response.arrayBuffer(); })
    .then((buffer) => { if (dead || failed) return null; return new GLTFLoader().parseAsync(buffer, ""); })
    .then((gltf) => {
      if (!gltf) return;
      if (dead || failed) { disposeObject(gltf.scene); return; }
      const root = gltf.scene.getObjectByName("BatteryRoot");
      if (!root) { disposeObject(gltf.scene); throw new Error("Missing model root"); }
      const bounds = new THREE.Box3().setFromObject(gltf.scene);
      modelSize = bounds.getSize(new THREE.Vector3());
      const center = bounds.getCenter(new THREE.Vector3());
      gltf.scene.position.set(-center.x, -bounds.min.y, -center.z);
      for (const [name, lift] of [["Lid", .10], ["HandleLeft", .21], ["HandleRight", .21], ["Cap01", .29], ["Cap02", .29], ["Cap03", .29], ["TerminalVisible", .18]] as const) {
        const node = root.getObjectByName(name);
        if (!node) { disposeObject(gltf.scene); throw new Error(`Missing ${name}`); }
        parts.push({ node, rest: node.position.clone(), lift });
      }
      pivot.add(gltf.scene);
      loaded = true;
      // Compile and render before revealing the canvas in place of the poster.
      fitCamera();
      renderer.compile(scene, camera);
      renderer.render(scene, camera);
      if (dead || failed) return;
      callbacks.ready();
      invalidate();
    }).catch(() => { if (!dead) fail(); });

  function dispose() {
      if (dead) return;
      dead = true;
      abort.abort();
      cancelAnimationFrame(frameId);
      observer.disconnect(); resize.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      disposeObject(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
  }
  return {
    setExploded(value) { userInput(); expanded = value; targetSpread = value ? 1 : 0; invalidate(); },
    reset,
    dispose,
  };
}
