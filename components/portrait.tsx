"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import pp from "@/public/pp.jpg";
import { useLanguage } from "@/context/language-context";

const C = 250;

// Closed Catmull-Rom spline through points at the given radii, emitted as cubic beziers.
// Every variant has the same command structure, so Motion can interpolate between them.
function blob(radii: number[], cx = C, cy = C) {
  const n = radii.length;
  const pts = radii.map((r, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });
  const f = (v: number) => v.toFixed(1);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + "Z";
}

const photoShapes = [
  blob([158, 150, 162, 148, 160, 152, 165, 149]),
  blob([150, 164, 148, 160, 150, 166, 150, 158]),
  blob([164, 152, 158, 166, 148, 156, 152, 162]),
];

const backShapes = [
  blob([170, 182, 166, 178, 172, 168, 184, 170], C + 16, C + 18),
  blob([182, 168, 180, 166, 184, 172, 166, 180], C + 16, C + 18),
  blob([168, 178, 172, 184, 166, 180, 174, 168], C + 16, C + 18),
];

const orbit = "M250 50 A200 200 0 1 1 249.9 50Z";

export default function Portrait() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const morph = (shapes: string[], duration: number) =>
    reduce
      ? {}
      : {
          animate: { d: [...shapes, shapes[0]] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <motion.svg
      viewBox="0 0 500 500"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="Onur Yılmaz"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <defs>
        <clipPath id="portrait-clip">
          <motion.path d={photoShapes[0]} {...morph(photoShapes, 14)} />
        </clipPath>
        <path id="portrait-text-path" d="M250 22 A228 228 0 1 1 249.9 22Z" />
      </defs>

      <motion.path d={backShapes[0]} fill="var(--accent)" {...morph(backShapes, 18)} />

      <image
        href={pp.src}
        x="85"
        y="85"
        width="330"
        height="330"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#portrait-clip)"
      />

      <motion.path
        d={orbit}
        fill="none"
        stroke="var(--muted)"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeDasharray="2 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
      />

      {!reduce && (
        <circle r="7" fill="var(--fg)">
          <animateMotion dur="12s" repeatCount="indefinite" path={orbit} />
        </circle>
      )}

      <g className="animate-spin-slow" style={{ transformBox: "view-box", transformOrigin: "250px 250px" }}>
        <text
          className="fill-muted font-mono"
          fontSize="13"
          fontWeight="500"
          letterSpacing="2"
        >
          <textPath href="#portrait-text-path" textLength="1410" lengthAdjust="spacing">
            {t("hero.orbit").repeat(2)}
          </textPath>
        </text>
      </g>
    </motion.svg>
  );
}
