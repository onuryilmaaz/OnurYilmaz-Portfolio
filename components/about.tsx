"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-3 text-lg text-gray-700 dark:text-white/80"
      >
        <p className="mb-4">{t("about.description")}</p>

        <p className="mb-4">{t("about.frontend")}</p>

        <p>{t("about.career")}</p>
      </motion.div>
    </motion.section>
  );
}
