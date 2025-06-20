"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX, FiEye } from "react-icons/fi";
import { useLanguage } from "@/context/language-context";

type ProjectProps = (typeof projectsData)[number];

// Simple technology colors
const techColors: { [key: string]: string } = {
  React: "bg-cyan-500",
  TypeScript: "bg-blue-600",
  "Next.js": "bg-gray-800",
  Tailwind: "bg-teal-500",
  "Node.js": "bg-green-500",
  "Express.js": "bg-gray-700",
  MongoDB: "bg-green-600",
  Prisma: "bg-indigo-500",
  JavaScript: "bg-yellow-500",
};

// Project key mapping
const getProjectKey = (title: string) => {
  if (title.toLowerCase().includes("medium")) return "mediumClone";
  if (title.toLowerCase().includes("twitter")) return "twitterClone";
  return "mediumClone"; // fallback
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const projectKey = getProjectKey(title);

  return (
    <>
      {/* Main Card - Simplified */}
      <div
        className="group cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-white borderBlack rounded-3xl overflow-hidden dark:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative will-change-transform">
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${t(`projects.${projectKey}.title`)} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
              className="object-cover transition-opacity duration-200 group-hover:opacity-90"
              priority={false}
            />

            {/* Simple Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl px-4 py-2 shadow-lg border border-white/20">
                <div className="flex items-center gap-2 text-gray-800 dark:text-white font-medium text-sm">
                  <FiEye className="w-4 h-4" />
                  <span>{t("projects.viewProject")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
              {t(`projects.${projectKey}.title`)}
            </h3>

            {/* Tech tags - visible by default */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {tags.slice(0, 3).map((tag, index) => {
                const bgColor = techColors[tag] || "bg-gray-500";
                return (
                  <span
                    key={index}
                    className={`${bgColor} text-white px-2 py-1 rounded-md text-xs font-medium`}
                  >
                    {tag}
                  </span>
                );
              })}
              {tags.length > 3 && (
                <span className="bg-gray-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="relative h-56 lg:h-64">
                  <Image
                    src={imageUrl}
                    alt={`${t(`projects.${projectKey}.title`)} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    quality={95}
                    className="object-cover rounded-t-3xl"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-3xl" />
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <FiX className="w-6 h-6 text-gray-700 dark:text-white" />
                </button>

                {/* Live Link Button */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  <FiExternalLink className="w-4 h-4" />
                  {t("projects.liveDemo")}
                </a>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {t(`projects.${projectKey}.title`)}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed mb-6">
                  {t(`projects.${projectKey}.longDescription`)}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></span>
                    {t("projects.technologiesUsed")}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag, index) => {
                      const bgColor = techColors[tag] || "bg-gray-500";
                      return (
                        <span
                          key={index}
                          className={`${bgColor} text-white px-4 py-2 rounded-xl text-sm font-medium`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    {t("projects.viewLiveProject")}
                  </a>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white px-6 py-3 rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {t("projects.close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
