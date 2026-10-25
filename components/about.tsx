"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { useLanguage } from "@/context/language-context";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

// The lead paragraph lights up word by word as it scrolls through the viewport.
function ScrubText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl md:leading-[1.12]"
    >
      {reduce
        ? text
        : words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </Word>
          ))}
    </p>
  );
}

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { label: t("about.educationLabel"), value: t("about.education"), sub: t("about.educationSub") },
    { label: t("about.experienceLabel"), value: t("about.experience"), sub: t("about.experienceSub") },
    { label: t("about.locationLabel"), value: t("about.location") },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-24 md:pt-40 md:pb-16">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id="about-title">{t("about.title")}</SectionHeading>
          </div>
        </div>

        <div className="lg:col-span-9">
          <ScrubText text={t("about.lead")} />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <Reveal>
              <p className="max-w-[52ch] text-lg leading-relaxed text-muted">{t("about.stack")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[52ch] text-lg leading-relaxed text-muted">{t("about.career")}</p>
            </Reveal>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.08}>
                <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                <dd className="mt-2 text-lg font-medium tracking-tight">{fact.value}</dd>
                {fact.sub && <dd className="mt-1 text-sm text-muted">{fact.sub}</dd>}
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
