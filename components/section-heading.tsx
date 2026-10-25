"use client";

import React from "react";
import { motion } from "motion/react";

// Section title with a hand-drawn accent stroke that draws itself when it scrolls into view.
export default function SectionHeading({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`relative inline-block pb-3 text-4xl font-semibold leading-[1.05] tracking-tighter md:text-6xl ${className}`}
    >
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 h-3 w-full overflow-visible"
      >
        <motion.path
          d="M2 11 C 60 3, 120 3, 170 8 S 260 14, 298 5"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </h2>
  );
}
