"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-30 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-8 py-5 dark:bg-white/10 dark:text-white/80 shadow-lg"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col items-center justify-center h-32 w-32">
              <span className="text-center text-xl mb-2">{skill.name}</span>
              <span className="text-5xl flex justify-center items-center transition-transform duration-300">
                {React.createElement(skill.icon)}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
