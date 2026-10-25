"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { navigationLinks } from "@/lib/data";
import type { SectionId } from "@/lib/types";
import { useActiveSection } from "@/lib/use-active-section";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";

const sectionIds: SectionId[] = navigationLinks.map((link) => link.id);

const iconButton =
  "grid size-10 place-items-center rounded-full border border-line bg-surface/70 text-fg backdrop-blur-xl transition hover:bg-surface active:scale-96";

export default function Header() {
  const active = useActiveSection(sectionIds);
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {t("meta.skip")}
      </a>

      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex h-16 max-w-350 items-center justify-between gap-4 px-4 md:h-18 md:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-1.5 pr-4 backdrop-blur-xl"
        >
          <span className="grid size-7 place-items-center rounded-full bg-accent font-mono text-[11px] font-bold text-accent-ink transition-transform duration-500 group-hover:rotate-360">
            OY
          </span>
          <span className="text-sm font-medium tracking-tight">Onur Yılmaz</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden rounded-full border border-line bg-surface/70 p-1 backdrop-blur-xl lg:block"
        >
          <ul className="flex items-center">
            {navigationLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={link.hash}
                    aria-current={isActive ? "true" : undefined}
                    className={clsx(
                      "relative z-10 block whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors",
                      isActive ? "text-accent-ink" : "text-muted hover:text-fg"
                    )}
                  >
                    {t(`nav.${link.id}`)}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("nav.language")}
            className={clsx(iconButton, "font-mono text-xs font-semibold")}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={language}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {language === "tr" ? "EN" : "TR"}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("nav.theme")}
            className={iconButton}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("nav.menu")}
            aria-expanded={open}
            className={clsx(iconButton, "lg:hidden")}
          >
            <List size={18} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-bg px-4 pb-10 lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="flex h-16 items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("nav.closeMenu")}
                className={iconButton}
              >
                <X size={18} />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-auto">
              <ul className="space-y-1">
                {navigationLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.hash}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "block py-1 text-5xl font-semibold tracking-tighter",
                        active === link.id ? "text-accent-fg" : "text-fg"
                      )}
                    >
                      {t(`nav.${link.id}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
