"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiExternalLink, FiX, FiEye } from "react-icons/fi";

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

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <>
      {/* Main Card - Beautiful */}
      <motion.div
        ref={ref}
        style={
          {
            scale: scaleProgess,
            opacity: opacityProgess,
          } as any
        }
        className="group cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-white borderBlack rounded-3xl overflow-hidden dark:bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative will-change-transform">
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-2xl border border-white/20">
                <div className="flex items-center gap-2 text-gray-800 dark:text-white font-semibold">
                  <FiEye className="w-5 h-5" />
                  <span>View Project</span>
                </div>
              </div>
            </div>

            {/* Tech Badge */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">
              <div className="flex gap-2">
                {tags.slice(0, 2).map((tag, index) => {
                  const bgColor = techColors[tag] || "bg-gray-500";
                  return (
                    <span
                      key={index}
                      className={`${bgColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm`}
                    >
                      {tag}
                    </span>
                  );
                })}
                {tags.length > 2 && (
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
                    +{tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>

            {/* Subtle description preview */}
            <p className="text-gray-500 dark:text-white/60 text-sm text-center mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description.slice(0, 80)}...
            </p>
          </div>
        </div>
      </motion.div>

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
                    alt={`${title} preview`}
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
                  Live Demo
                </a>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></span>
                    Technologies Used
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
                    View Live Project
                  </a>

                  <button
                    onClick={() => setIsModalOpen(false)}
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
    </>
  );
}
