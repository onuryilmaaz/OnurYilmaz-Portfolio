"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { getSkillsByCategory } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

// Gradient colors for each skill
const skillColors: { [key: string]: { bg: string; text: string } } = {
  React: { bg: "from-cyan-400 to-blue-500", text: "text-cyan-500" },
  "Next.js": { bg: "from-gray-800 to-gray-600", text: "text-gray-700" },
  Angular: { bg: "from-red-600 to-sky-500", text: "text-red-500" },
  TypeScript: { bg: "from-blue-600 to-indigo-600", text: "text-blue-600" },
  "Tailwind CSS": { bg: "from-teal-400 to-blue-500", text: "text-teal-500" },
  Flutter: { bg: "from-blue-400 to-cyan-400", text: "text-blue-400" },
  "Node.js": { bg: "from-green-500 to-emerald-600", text: "text-green-500" },
  "Express.js": { bg: "from-gray-700 to-gray-900", text: "text-gray-700" },
  Python: { bg: "from-blue-500 to-yellow-400", text: "text-yellow-500" },
  ".NET Core": { bg: "from-sky-600 to-cyan-600", text: "text-sky-600" },
  MongoDB: { bg: "from-green-600 to-green-800", text: "text-green-600" },
  PostgreSQL: { bg: "from-blue-700 to-indigo-800", text: "text-blue-700" },
  Prisma: { bg: "from-indigo-500 to-sky-600", text: "text-indigo-500" },
  "MS SQL Server": { bg: "from-red-600 to-orange-600", text: "text-red-600" },
  Git: { bg: "from-orange-600 to-red-600", text: "text-orange-600" },
  Docker: { bg: "from-blue-500 to-cyan-500", text: "text-blue-500" },
};

const categories = [
  {
    name: "Frontend",
    key: "frontend" as const,
  },
  {
    name: "Backend",
    key: "backend" as const,
  },
  {
    name: "Database",
    key: "database" as const,
  },
  {
    name: "Tools",
    key: "tools" as const,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-30 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t("skills.title")}</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 mb-8 text-lg">
        {t("skills.subtitle")}
      </p>

      {categories.map((category, categoryIndex) => {
        const skillsInCategory = getSkillsByCategory(category.key);

        return (
          <div key={category.key} className="mb-12">
            {/* Category Title */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + categoryIndex * 0.05 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t(`skills.${category.key}`)}
            </motion.h3>

            {/* Skills List */}
            <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
              {skillsInCategory.map((skill, index) => {
                const colors = skillColors[skill.name] || {
                  bg: "from-gray-500 to-gray-700",
                  text: "text-gray-600",
                };

                return (
                  <motion.li
                    className="skill-card bg-white borderBlack rounded-xl px-6 py-6 dark:bg-white/10 dark:text-white/80 shadow-lg overflow-hidden relative"
                    key={skill.id}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={categoryIndex * 10 + index}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-5 dark:opacity-10`}
                    />

                    <div className="flex flex-col items-center justify-center h-36 w-36 relative z-10">
                      <span className="text-center text-sm font-semibold mb-4 text-gray-700 dark:text-white/90 tracking-wide">
                        {skill.name}
                      </span>
                      <div className="skill-icon-wrapper relative">
                        {/* Gradient backdrop */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${colors.bg} blur-lg opacity-30 scale-125`}
                        />

                        {/* Icon with solid color */}
                        <div
                          className={`skill-icon text-7xl flex justify-center items-center ${colors.text} relative z-10 drop-shadow-md`}
                        >
                          {React.createElement(skill.icon)}
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
