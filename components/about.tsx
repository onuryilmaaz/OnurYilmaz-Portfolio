"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FiCode,
  FiHeart,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Problem Solving",
    description:
      "I love tackling challenging problems and finding elegant solutions",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: FiHeart,
    title: "Passionate Developer",
    description: "Programming is not just my career, it's my passion",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: FiTrendingUp,
    title: "Always Learning",
    description:
      "Constantly exploring new technologies and improving my skills",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: FiTarget,
    title: "Career Focused",
    description: "Seeking full-time software developer opportunities",
    color: "from-purple-500 to-indigo-600",
  },
];

const techStack = [
  { name: "React", color: "bg-cyan-500" },
  { name: "Next.js", color: "bg-gray-800" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "MongoDB", color: "bg-green-600" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Tailwind CSS", color: "bg-teal-500" },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="max-w-6xl mx-auto">
        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-white/10 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 shadow-lg">
              <FiUsers className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hello, I'm Onur! 👋
            </h3>
          </div>

          <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
            I am passionate about programming and building a career in this
            field. I especially enjoy the{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              problem-solving
            </span>{" "}
            process, which is the core of my enthusiasm for coding. The
            satisfaction of solving challenging problems keeps me motivated. I
            am always open to{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              learning new technologies
            </span>{" "}
            and improving my skills. Currently, I am seeking a{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              full-time software developer position
            </span>
            .
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-white/10 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-white/10 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg">
              <FiAward className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              My Core Tech Stack
            </h3>
            <p className="text-gray-600 dark:text-white/70">
              Technologies I work with on a daily basis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className={`${tech.color} text-white px-6 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together! 🚀
            </h3>
            <p className="text-cyan-100 text-lg mb-6">
              I'm always excited to work on new projects and collaborate with
              fellow developers
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
              <FiTarget className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
