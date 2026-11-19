"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { BatteryScene } from "./battery-scene";

export function ZB230Viewer({ poster, name }: { poster: string; name: string }) {
  const host = useRef<HTMLDivElement>(null);
  const scene = useRef<BatteryScene | null>(null);
  const [status, setStatus] = useState<"photo" | "loading" | "ready" | "error">("photo");
  const [exploded, setExploded] = useState(false);
  const active = status === "loading" || status === "ready";

  useEffect(() => {
    const element = host.current;
    if (!active || !element) return;
    let cancelled = false;
    import("./battery-scene").then(({ createBatteryScene }) => {
      if (cancelled) return;
      scene.current = createBatteryScene(element, {
        ready: () => { if (!cancelled) setStatus("ready"); },
        error: () => { if (!cancelled) setStatus("error"); },
        reset: () => { if (!cancelled) setExploded(false); },
      });
    }).catch(() => { if (!cancelled) setStatus("error"); });
    return () => {
      cancelled = true;
      scene.current?.dispose();
      scene.current = null;
    };
  }, [active]);

  function reset() { setExploded(false); scene.current?.reset(); }

  return (
    <figure className="battery-viewer" aria-label={`${name}, exterior view`}>
      <div className="battery-viewer-stage" data-ready={status === "ready"}>
        <Image src={poster} alt={`${name}: ivory case, blue lid and handles, three yellow caps and red Solo label`} fill preload sizes="(max-width: 900px) 90vw, 49vw" className="battery-viewer-poster" />
        <div ref={host} className="battery-viewer-canvas" aria-hidden={status !== "ready"} />
      </div>
      <div className="battery-viewer-controls">
        {!active && <button type="button" onClick={() => setStatus("loading")}>{status === "error" ? "Retry 3D" : "Explore in 3D"}</button>}
        {status === "ready" && <>
          <button type="button" aria-pressed={exploded} onClick={() => { const next = !exploded; setExploded(next); scene.current?.setExploded(next); }}>{exploded ? "Assemble" : "Explore parts"}</button>
          <button type="button" onClick={reset}>Reset view</button>
          <button type="button" onClick={() => { setExploded(false); setStatus("photo"); }}>Back to photo</button>
        </>}
        {status === "loading" && <button type="button" onClick={() => setStatus("photo")}>Back to photo</button>}
      </div>
      <figcaption>
        <p role="status">{status === "loading" ? "Loading interactive view…" : status === "error" ? "3D is unavailable. The product image is shown." : status === "ready" ? "Drag to rotate. Arrow keys to inspect; + / − to zoom." : ""}</p>
        {status === "ready" && <p>Exterior illustration. Depth and unseen shapes are estimated.</p>}
      </figcaption>
    </figure>
  );
}
