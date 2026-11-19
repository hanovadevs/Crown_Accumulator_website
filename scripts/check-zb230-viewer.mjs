// Runs the actual scene controller and actual GLTF geometry loader with a mock GPU/DOM.
// This checks lifecycle and transitions, not browser shading or touch delivery.
// node --experimental-vm-modules scripts/check-zb230-viewer.mjs
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const original = await fs.readFile("public/models/solo-zb-230.glb");
const jsonLength = original.readUInt32LE(12);
const doc = JSON.parse(original.subarray(20, 20 + jsonLength).toString());
// Node has no image decoder; structural validation checks the original embedded texture.
for (const material of doc.materials) delete material.pbrMetallicRoughness.baseColorTexture;
delete doc.images; delete doc.textures; delete doc.samplers;
const json = Buffer.from(JSON.stringify(doc));
const padded = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32);
json.copy(padded);
const bin = original.subarray(20 + jsonLength);
const header = Buffer.alloc(20);
header.write("glTF"); header.writeUInt32LE(2, 4);
header.writeUInt32LE(20 + padded.length + bin.length, 8);
header.writeUInt32LE(padded.length, 12); header.writeUInt32LE(0x4e4f534a, 16);
const geometryAsset = Buffer.concat([header, padded, bin]);
const buffer = geometryAsset.buffer.slice(geometryAsset.byteOffset, geometryAsset.byteOffset + geometryAsset.byteLength);

class Target extends EventTarget {
  listeners = new Map();
  addEventListener(type, fn, options) { super.addEventListener(type, fn, options); this.listeners.set(fn, type); }
  removeEventListener(type, fn, options) { super.removeEventListener(type, fn, options); this.listeners.delete(fn); }
}
class Canvas extends Target {
  setAttribute() {}
  setPointerCapture() {}
  remove() { this.host?.children.splice(this.host.children.indexOf(this), 1); }
  getContext() { return { createRadialGradient: () => ({ addColorStop() {} }), fillRect() {} }; }
}
class Observer {
  static instances = [];
  constructor(callback) { this.callback = callback; this.disconnected = false; Observer.instances.push(this); }
  observe() {}
  disconnect() { this.disconnected = true; }
  emit(visible = true) { this.callback([{ isIntersecting: visible }]); }
}
class Renderer {
  static instances = [];
  domElement = new Canvas();
  renders = 0; disposed = 0;
  constructor() { Renderer.instances.push(this); }
  setClearColor() {} setSize() {} setPixelRatio(value) { this.dpr = value; }
  compile() {}
  render(scene, camera) { this.scene = scene; this.camera = camera; this.renders++; }
  dispose() { this.disposed++; }
  forceContextLoss() {}
}
const document = new Target();
document.hidden = false;
document.createElement = () => new Canvas();
const media = new Target(); media.matches = false;
const window = new Target();
const frames = new Map(); let frameId = 0, now = 0;
let failFetch = false;
const context = vm.createContext({
  console, document, window, matchMedia: () => media,
  IntersectionObserver: Observer, ResizeObserver: Observer,
  AbortController, ImageBitmap: class {}, devicePixelRatio: 3, innerHeight: 800,
  requestAnimationFrame: (fn) => { frames.set(++frameId, fn); return frameId; },
  cancelAnimationFrame: (id) => frames.delete(id),
  fetch: async (_url, { signal }) => ({ ok: !failFetch && !signal.aborted, arrayBuffer: async () => buffer }),
});
const threeModule = new vm.SyntheticModule(Object.keys(THREE), function () {
  for (const key of Object.keys(THREE)) this.setExport(key, key === "WebGLRenderer" ? Renderer : THREE[key]);
}, { context });
const loaderModule = new vm.SyntheticModule(["GLTFLoader"], function () { this.setExport("GLTFLoader", GLTFLoader); }, { context });
const source = await fs.readFile("src/components/products/battery-scene.ts", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const sceneModule = new vm.SourceTextModule(compiled, { context });
await sceneModule.link((name) => name === "three" ? threeModule : loaderModule);
await sceneModule.evaluate();
function tick(count = 1) {
  for (let i = 0; i < count; i++) {
    now += 1000 / 60;
    const pending = [...frames.values()]; frames.clear();
    pending.forEach((frame) => frame(now));
  }
}
function event(target, type, values = {}) {
  const value = new Event(type, { cancelable: true });
  Object.assign(value, values); target.dispatchEvent(value); return value;
}
async function settle() { for (let i = 0; i < 15; i++) await new Promise(setImmediate); }
function mount() {
  const host = { clientWidth: 640, clientHeight: 640, children: [], appendChild(canvas) { this.children.push(canvas); canvas.host = this; }, getBoundingClientRect: () => ({ top: 80, height: 640 }) };
  const start = Observer.instances.length;
  const status = { ready: 0, errors: 0, reset: 0 };
  const controller = sceneModule.namespace.createBatteryScene(host, { ready: () => status.ready++, error: () => status.errors++, reset: () => status.reset++ });
  const renderer = Renderer.instances.at(-1);
  const visibility = Observer.instances[start], resize = Observer.instances[start + 1];
  visibility.emit(true); resize.emit();
  return { host, status, controller, renderer, visibility, resize, canvas: renderer.domElement };
}
const first = mount();
await settle(); tick(200);
assert.equal(first.status.ready, 1);
assert.equal(first.status.errors, 0);
assert.equal(first.renderer.dpr, 2);
const names = ["Lid", "HandleLeft", "HandleRight", "Cap01", "Cap02", "Cap03", "TerminalVisible"];
const rest = new Map(names.map((name) => [name, first.renderer.scene.getObjectByName(name).position.clone()]));
const print = first.renderer.scene.getObjectByName("FrontPrint");
const printRest = print.position.clone();
for (let i = 0; i < 20; i++) {
  first.controller.setExploded(true); tick(8);
  first.controller.setExploded(false); tick(5);
}
tick(250);
for (const name of names) assert.ok(first.renderer.scene.getObjectByName(name).position.equals(rest.get(name)), `${name} returns exactly to rest`);
first.controller.setExploded(true); tick(250);
assert.ok(first.renderer.scene.getObjectByName("Cap01").position.y > rest.get("Cap01").y + .28);
assert.ok(print.position.equals(printRest));
assert.equal(print.parent.name, "CaseBody");
event(first.canvas, "keydown", { key: "Home" }); tick(250);
assert.equal(first.status.reset, 1);
for (const name of names) assert.ok(first.renderer.scene.getObjectByName(name).position.equals(rest.get(name)));
const count = first.renderer.renders; tick(60);
assert.equal(first.renderer.renders, count, "quiet rest has no continuous RAF");
event(first.canvas, "keydown", { key: "ArrowRight" });
first.visibility.emit(false); tick(60);
assert.equal(first.renderer.renders, count, "offscreen rendering paused");
first.visibility.emit(true); tick(120);
assert.ok(first.renderer.renders > count);
const draggedYaw = first.renderer.scene.children[0].rotation.y;
event(window, "scroll"); tick(60);
assert.equal(first.renderer.scene.children[0].rotation.y, draggedYaw, "manual input stops scroll poses");
document.hidden = true; event(document, "visibilitychange");
first.controller.setExploded(true); tick(60);
assert.equal(frames.size, 0, "hidden tab schedules no frames");
document.hidden = false; event(document, "visibilitychange"); tick(250);
first.host.clientWidth = 360; first.host.clientHeight = 360; first.resize.emit(); tick();
assert.equal(first.renderer.dpr, 1.5);
const yawBeforeTouch = first.renderer.scene.children[0].rotation.y;
event(first.canvas, "pointerdown", { button: 0, pointerId: 1, pointerType: "touch", clientX: 100, clientY: 100 });
const verticalMove = event(first.canvas, "pointermove", { pointerId: 1, clientX: 102, clientY: 150 });
tick(60);
assert.equal(verticalMove.defaultPrevented, false, "vertical touch is not prevented");
assert.equal(first.renderer.scene.children[0].rotation.y, yawBeforeTouch);
event(first.canvas, "pointerdown", { button: 0, pointerId: 2, pointerType: "touch", clientX: 100, clientY: 100 });
event(first.canvas, "pointermove", { pointerId: 2, clientX: 190, clientY: 102 });
event(first.canvas, "pointerup", { pointerId: 2 }); tick(120);
assert.ok(first.renderer.scene.children[0].rotation.y > yawBeforeTouch + .5, "horizontal touch input rotates");
for (let i = 0; i < 56; i++) event(first.canvas, "keydown", { key: "ArrowRight" });
tick(120);
assert.ok(first.renderer.scene.children[0].rotation.y > Math.PI * 2, "horizontal orbit can complete a full turn");
for (let i = 0; i < 30; i++) event(first.canvas, "keydown", { key: "ArrowUp" });
tick(120);
assert.ok(Math.abs(first.renderer.scene.children[0].rotation.x + .14) < .001, "vertical inspection is clamped");
media.matches = true; event(media, "change");
first.controller.setExploded(false); tick();
for (const name of names) assert.ok(first.renderer.scene.getObjectByName(name).position.equals(rest.get(name)), "reduced motion assembles immediately");
event(first.canvas, "webglcontextlost");
assert.equal(first.status.errors, 1);
assert.equal(first.host.children.length, 0);
assert.equal(first.canvas.listeners.size, 0);
assert.equal(first.renderer.disposed, 1);
first.controller.dispose(); assert.equal(first.renderer.disposed, 1);
failFetch = true;
const failed = mount(); await settle();
assert.equal(failed.status.errors, 1);
assert.equal(failed.status.ready, 0);
assert.equal(failed.host.children.length, 0);
failFetch = false;
const retry = mount(); await settle(); tick();
assert.equal(retry.status.ready, 1);
assert.equal(retry.host.children.length, 1);
retry.controller.dispose();
const abandoned = mount(); abandoned.controller.dispose(); await settle();
assert.equal(abandoned.status.ready, 0);
assert.equal(abandoned.host.children.length, 0);
assert.equal(document.listeners.size + window.listeners.size + media.listeners.size, 0);
assert.equal(frames.size, 0);
console.log("PASS: actual GLTF geometry, 20 interrupted assembly cycles, exact rest transforms, attached print, keyboard reset/clamps, pointer gesture logic, quiet/offscreen/hidden pause, resize/DPR, reduced motion, context loss, failed load, retry and disposal.");
console.log("GPU rendering, texture appearance and real browser pointer/touch delivery require browser verification.");
