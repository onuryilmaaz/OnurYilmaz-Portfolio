"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import Portrait from "./portrait";
import Magnetic from "./magnetic";
import { profile } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

const ease = [0.16, 1, 0.3, 1] as const;

function Letters({ text, delay }: { text: string; delay: number }) {
  return (
    <span aria-hidden className="block overflow-hidden pb-[0.1em]">
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: delay + i * 0.045, ease }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-350 grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t("hero.status")}
          </motion.p>

          <h1
            aria-label={profile.name}
            className="text-[clamp(4rem,12vw,9.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
          >
            <Letters text="Onur" delay={0.2} />
            <span className="flex items-end">
              <Letters text="Yılmaz" delay={0.38} />
              <motion.span
                aria-hidden
                className="mb-[0.2em] ml-[0.04em] inline-block size-[0.16em] rounded-full bg-accent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.95 }}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-8 max-w-[46ch] text-lg leading-relaxed text-muted md:text-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-accent py-2 pl-6 pr-2 font-medium text-accent-ink transition active:scale-98"
              >
                {t("hero.contact")}
                <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-accent-ink text-accent">
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.18}>
              <a
                href={profile.cv}
                download
                className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-surface/60 px-6 py-[0.85rem] font-medium text-fg transition hover:bg-surface active:scale-98"
              >
                {t("hero.cv")}
                <DownloadSimple
                  size={18}
                  className="text-muted transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: portraitY }}
          className="mx-auto w-full max-w-85 sm:max-w-105 lg:col-span-5 lg:max-w-130"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
