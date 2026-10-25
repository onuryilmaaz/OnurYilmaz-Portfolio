"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const { t } = useLanguage();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.75", "end 0.6"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id="experience-title">{t("experience.title")}</SectionHeading>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-8">
          {/* Timeline rail: a faint track with an accent stroke drawn by scroll progress */}
          <svg
            aria-hidden
            className="absolute left-2.75 top-2 h-[calc(100%-1rem)] w-0.5 overflow-visible"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <path d="M1 0 V100" stroke="var(--line)" strokeWidth="2" />
            <motion.path
              d="M1 0 V100"
              stroke="var(--accent-fg)"
              strokeWidth="2"
             
              style={{ pathLength: drawn }}
            />
          </svg>

          {experiences.map((item) => {
            const locationKey = `experience.${item.id}.location`;
            const location = t(locationKey);
            return (
            <li key={item.id} className="relative pb-16 pl-12 last:pb-0 md:pl-16">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 grid size-6 place-items-center rounded-full border-2 border-line bg-bg"
              >
                <motion.span
                  className="absolute -inset-0.5 rounded-full border-2 border-accent-fg"
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ margin: "0px 0px -40% 0px", once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                />
                <motion.span
                  className="size-2 rounded-full bg-accent-fg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ margin: "0px 0px -40% 0px", once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.1 }}
                />
              </span>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                  <span>{t(`experience.${item.id}.date`)}</span>
                  {location !== locationKey && (
                    <>
                      <span aria-hidden className="h-px w-4 bg-line" />
                      <span>{location}</span>
                    </>
                  )}
                  {item.current ? (
                    <span className="rounded-full bg-accent px-2 py-0.5 font-medium text-accent-ink">
                      {t("experience.current")}
                    </span>
                  ) : (
                    <span className="rounded-full border border-line px-2 py-0.5">
                      {t(`experience.${item.type}`)}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  {t(`experience.${item.id}.title`)}
                </h3>
                <p className="mt-1 text-fg/80">{t(`experience.${item.id}.company`)}</p>
                <p className="mt-4 max-w-[60ch] leading-relaxed text-muted">
                  {t(`experience.${item.id}.description`)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-fg/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
