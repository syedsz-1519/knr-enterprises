"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  r: number;
  s: number;
  ph: number;
}

interface Fog {
  x: number;
  y: number;
  r: number;
  vx: number;
  ph: number;
}

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0,
      H = 0,
      bubbles: Bubble[] = [],
      fog: Fog[] = [];
    let visible = true;
    let rafId = 0;

    function makeBubble(anywhere: boolean): Bubble {
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : H + 30,
        r: 3 + Math.random() * 14,
        s: 0.25 + Math.random() * 0.7,
        ph: Math.random() * 6.28,
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = c!.clientWidth;
      H = c!.clientHeight;
      c!.width = W * dpr;
      c!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = W < 700 ? 26 : 55;
      bubbles = Array.from({ length: n }, () => makeBubble(true));
      fog = Array.from({ length: 6 }, (_, i) => ({
        x: Math.random() * W,
        y: H * (0.2 + Math.random() * 0.7),
        r: 180 + Math.random() * 220,
        vx: (Math.random() - 0.5) * 0.25,
        ph: i * 1.7,
      }));
    }

    function frame(t: number) {
      if (!ctx || !visible) return;
      ctx.clearRect(0, 0, W, H);

      // Drifting fog clouds
      ctx.globalCompositeOperation = "lighter";
      for (const f of fog) {
        f.x += f.vx;
        if (f.x < -f.r) f.x = W + f.r;
        if (f.x > W + f.r) f.x = -f.r;
        const a = 0.07 + 0.03 * Math.sin(t * 0.0004 + f.ph);
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
        g.addColorStop(0, `rgba(34,211,238,${a})`);
        g.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = g;
        ctx.fillRect(f.x - f.r, f.y - f.r, f.r * 2, f.r * 2);
      }

      // Rising sanitizer bubbles
      ctx.globalCompositeOperation = "source-over";
      for (const b of bubbles) {
        if (!reduce) {
          b.y -= b.s;
          b.x += Math.sin(t * 0.001 + b.ph) * 0.35;
        }
        if (b.y < -b.r * 2) Object.assign(b, makeBubble(false));
        const g = ctx.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.3,
          b.r * 0.1,
          b.x,
          b.y,
          b.r
        );
        g.addColorStop(0, "rgba(255,255,255,.35)");
        g.addColorStop(1, "rgba(34,211,238,.06)");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 6.283);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.28)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (!reduce && visible) rafId = requestAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting;
      if (visible && !was && !reduce) rafId = requestAnimationFrame(frame);
    });
    observer.observe(c);

    window.addEventListener("resize", resize);
    resize();
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
