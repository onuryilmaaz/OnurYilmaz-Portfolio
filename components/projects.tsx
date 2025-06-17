"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-40 max-w-[65rem]"
    >
      <SectionHeading>My projects</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 mb-10 text-lg text-center">
        A showcase of my creative development journey
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            custom={index}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
