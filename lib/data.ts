import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bugBook from "@/public/bugBook.png";
import blog from "@/public/blog.png";
import { FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Başiskele Municipality - IT Department",
    location: "Kocaeli, Turkey",
    description:
      "React Developer (Intern). I completed my internship at Başiskele Municipality's IT Department, focusing on web development using React. I developed various user interfaces and web components tailored to the municipality's needs, gaining hands-on experience with React throughout the process.",
    icon: React.createElement(FaReact),
    date: "July 2024",
  },
  {
    title: "İSU General Directorate - IT Department",
    location: "Kocaeli, Turkey",
    description:
      "Systems and Cloud Intern. During my internship at İSU General Directorate's IT Department, I gained practical experience in managing and optimizing cloud infrastructure. My responsibilities included configuring cloud services, ensuring system reliability and scalability, and contributing to the implementation of security protocols.",
    icon: React.createElement(FaNodeJs),
    date: "August 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Medium Clone",
    description:
      "My Medium Clone app allows users to publish articles and discover content from other writers.",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: blog,
    link: "https://66cc898facc87f05f0586bc7--benevolent-wisp-3bfdae.netlify.app/",
  },
  {
    title: "Twitter Clone",
    description:
      "My Twitter Clone app lets users post tweets, follow others, and interact with posts.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: bugBook,
    link: "https://next-js-15-social-app.vercel.app/",
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Framer Motion",
// ] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
] as const;
