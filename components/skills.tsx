"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import { getSkillsByCategory } from "@/lib/data";
import type { Skill } from "@/lib/types";
import { useLanguage } from "@/context/language-context";

const ease = [0.65, 0, 0.35, 1] as const;
const inView = { once: true, amount: 0.4 } as const;

function SkillList({ items, tone = "default" }: { items: Skill[]; tone?: "default" | "accent" }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
      {items.map((skill, i) => (
        <motion.li
          key={skill.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className={clsx(
            "flex items-center gap-2.5 text-sm font-medium",
            tone === "accent" ? "text-accent-ink" : "text-fg"
          )}
        >
          <skill.icon aria-hidden className="size-4.5 shrink-0 opacity-80" />
          {skill.name}
        </motion.li>
      ))}
    </ul>
  );
}

// Three stacked disks that draw themselves, a plain nod to the database glyph.
function DatabaseArt() {
  const rings = [30, 62, 94];
  return (
    <svg aria-hidden viewBox="0 0 160 130" className="h-28 w-auto text-fg">
      <motion.path
        d="M20 30 V94 M140 30 V94"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={inView}
        transition={{ duration: 1, ease }}
      />
      {rings.map((cy, i) => (
        <motion.ellipse
          key={cy}
          cx="80"
          cy={cy}
          rx="60"
          ry="16"
          fill={i === 0 ? "var(--accent)" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={inView}
          transition={{ duration: 0.9, delay: 0.25 + i * 0.18, ease }}
        />
      ))}
    </svg>
  );
}

// A feature branch splitting off main and merging back.
function GitArt() {
  const nodes = [
    { cx: 20, cy: 60, d: 0.1 },
    { cx: 90, cy: 60, d: 0.35 },
    { cx: 150, cy: 22, d: 0.75 },
    { cx: 215, cy: 22, d: 0.95 },
    { cx: 280, cy: 60, d: 1.25 },
    { cx: 340, cy: 60, d: 1.45 },
  ];
  return (
    <svg aria-hidden viewBox="0 0 360 80" className="h-16 w-full max-w-105 text-muted">
      <motion.path
        d="M20 60 H340"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={inView}
        transition={{ duration: 1.4, ease }}
      />
      <motion.path
        d="M90 60 C 115 60, 120 22, 150 22 H215 C 245 22, 250 60, 280 60"
        stroke="var(--accent-fg)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={inView}
        transition={{ duration: 1.2, delay: 0.35, ease }}
      />
      {nodes.map((n) => (
        <motion.circle
          key={`${n.cx}-${n.cy}`}
          cx={n.cx}
          cy={n.cy}
          r="6"
          fill="var(--surface)"
          stroke={n.cy === 22 ? "var(--accent-fg)" : "currentColor"}
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={inView}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: n.d }}
        />
      ))}
    </svg>
  );
}

const cell = "relative overflow-hidden rounded-[20px] border border-line p-6 md:p-8";

export default function Skills() {
  const { t } = useLanguage();
  const frontend = getSkillsByCategory("frontend");

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-350 px-4 md:px-8">
        <SectionHeading id="skills-title">{t("skills.title")}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-6 md:gap-4">
          {/* Frontend: the widest cell, logo tiles over a faded dot field */}
          <div className={clsx(cell, "bg-surface md:col-span-4 md:row-span-2")}>
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 size-full text-fg/15 mask-[radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            >
              <defs>
                <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{t("skills.frontend")}</h3>
                <p className="mt-2 max-w-[40ch] text-muted">{t("skills.frontendNote")}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {frontend.map((skill, i) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={inView}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                    className="group/tile flex flex-col gap-6 rounded-[14px] border border-line bg-bg/70 p-4 backdrop-blur-sm"
                  >
                    <skill.icon
                      aria-hidden
                      className="size-8 text-muted transition-colors duration-300 group-hover/tile:text-accent-fg"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Backend: accent fill */}
          <div className={clsx(cell, "border-transparent bg-accent text-accent-ink md:col-span-2")}>
            <h3 className="text-2xl font-semibold tracking-tight">{t("skills.backend")}</h3>
            <p className="mb-8 mt-2 text-accent-ink/75">{t("skills.backendNote")}</p>
            <SkillList items={getSkillsByCategory("backend")} tone="accent" />
          </div>

          {/* Database: tinted surface with drawn cylinder */}
          <div className={clsx(cell, "bg-surface-2 md:col-span-2")}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{t("skills.database")}</h3>
                <p className="mt-2 text-muted">{t("skills.databaseNote")}</p>
              </div>
              <DatabaseArt />
            </div>
            <div className="mt-6">
              <SkillList items={getSkillsByCategory("database")} />
            </div>
          </div>

          {/* Tools: full-width strip with the git graph */}
          <div
            className={clsx(
              cell,
              "flex flex-col gap-6 bg-surface md:col-span-6 md:flex-row md:items-center md:justify-between"
            )}
          >
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">{t("skills.tools")}</h3>
              <ul className="flex items-center gap-6">
                {getSkillsByCategory("tools").map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2.5 text-sm font-medium">
                    <skill.icon aria-hidden className="size-4.5 opacity-80" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            <GitArt />
          </div>
        </div>
      </div>
    </section>
  );
}
