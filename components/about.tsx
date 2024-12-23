"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am passionate about programming and building a career in this field. I
        especially enjoy the{" "}
        <span className="font-medium">problem-solving</span> process, which is
        the core of my enthusiasm for coding. The satisfaction of solving
        challenging problems keeps me motivated. My core tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I also work with <span className="font-medium">TypeScript</span> and{" "}
        <span className="font-medium">Tailwind CSS</span>. I am always open to{" "}
        <span className="italic">learning new technologies</span> and improving
        my skills. Currently, I am seeking a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>
        .
      </p>
    </motion.section>
  );
}
