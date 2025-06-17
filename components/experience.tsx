"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMapPin, FiCalendar } from "react-icons/fi";

// Experience type colors
const experienceColors: { [key: string]: string } = {
  internship: "bg-blue-500",
  "full-time": "bg-green-500",
  "part-time": "bg-yellow-500",
  contract: "bg-purple-500",
  freelance: "bg-pink-500",
};

// Technology colors
const techColors: { [key: string]: string } = {
  React: "bg-cyan-500",
  JavaScript: "bg-yellow-500",
  HTML: "bg-orange-500",
  CSS: "bg-blue-600",
  Git: "bg-red-500",
  "Cloud Computing": "bg-sky-500",
  "System Administration": "bg-gray-600",
  Security: "bg-red-600",
  Networking: "bg-indigo-500",
  ".NET Core": "bg-purple-600",
  Angular: "bg-red-500",
  Flutter: "bg-blue-400",
  "Full-Stack Development": "bg-green-600",
  "Team Collaboration": "bg-teal-500",
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.4);
  const { theme } = useTheme();
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          // Find the detailed experience data
          const detailedExp = experiences.find(
            (exp) =>
              exp.company === item.title ||
              exp.title === item.title.split(".")[0]
          );

          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  cursor: "pointer",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
                onTimelineElementClick={() => {
                  if (detailedExp) {
                    setSelectedExperience(detailedExp);
                  }
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-white/50 mt-2">
                  Click to view details
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>

      {/* Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-t-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl text-gray-600 dark:text-white/80">
                    {React.createElement(selectedExperience.icon)}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <FiX className="w-5 h-5 text-gray-700 dark:text-white" />
                  </button>
                </div>

                {/* Type Badge */}
                <span
                  className={`${
                    experienceColors[selectedExperience.type] || "bg-gray-500"
                  } text-white px-3 py-1 rounded-full text-sm font-medium capitalize inline-block mb-4`}
                >
                  {selectedExperience.type}
                </span>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Title & Company */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {selectedExperience.title}
                </h2>

                <h3 className="text-xl font-semibold text-gray-700 dark:text-white/80 mb-4">
                  {selectedExperience.company}
                </h3>

                {/* Location & Date */}
                <div className="flex flex-wrap gap-4 text-gray-500 dark:text-white/60 mb-6">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    <span>{selectedExperience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>{selectedExperience.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed mb-6">
                  {selectedExperience.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></span>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedExperience.technologies.map((tech, index) => {
                      const bgColor = techColors[tech] || "bg-gray-500";
                      return (
                        <span
                          key={index}
                          className={`${bgColor} text-white px-4 py-2 rounded-xl text-sm font-medium`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white px-6 py-3 rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
