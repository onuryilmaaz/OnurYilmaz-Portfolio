"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-40 max-w-[65rem]"
    >
      <SectionHeading>{t("projects.title")}</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 mb-10 text-lg text-center">
        {t("projects.subtitle")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
