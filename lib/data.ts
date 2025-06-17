import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bugBook from "@/public/bugBook.png";
import blog from "@/public/blog.png";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDocker,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFramer,
  SiDotnet,
  SiFlutter,
  SiAngular,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { Experience, Project, Skill, NavigationLink } from "./types";

export const navigationLinks: NavigationLink[] = [
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
];

// Legacy export for backward compatibility
export const links = navigationLinks;

export const experiences: Experience[] = [
  {
    id: "basiskele-municipality",
    title: "React Developer",
    company: "Başiskele Municipality - IT Department",
    location: "Kocaeli, Turkey",
    description:
      "I completed my internship at Başiskele Municipality's IT Department, focusing on web development using React. I developed various user interfaces and web components tailored to the municipality's needs, gaining hands-on experience with React throughout the process.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git"],
    icon: FaReact,
    date: "July 2024",
    type: "internship",
  },
  {
    id: "isu-general-directorate",
    title: "Systems and Cloud Intern",
    company: "İSU General Directorate - IT Department",
    location: "Kocaeli, Turkey",
    description:
      "During my internship at İSU General Directorate's IT Department, I gained practical experience in managing and optimizing cloud infrastructure. My responsibilities included configuring cloud services, ensuring system reliability and scalability, and contributing to the implementation of security protocols.",
    technologies: [
      "Cloud Computing",
      "System Administration",
      "Security",
      "Networking",
    ],
    icon: FaNodeJs,
    date: "August 2024",
    type: "internship",
  },
  {
    id: "premierturk-koceali-internship",
    title: "Software Development Intern",
    company: "PremierTürk Information Technologies Inc. - Kocaeli Technopark",
    location: "Kocaeli, Turkey",
    description:
      "Between February and July 2025, I completed a long-term software development internship at PremierTürk Information Technologies Inc. During this time, I developed full-stack web and mobile applications using .NET Core, Angular, and Flutter. I actively participated in team-based projects and contributed to the development lifecycle.",
    technologies: [
      ".NET Core",
      "Angular",
      "Flutter",
      "Full-Stack Development",
      "Team Collaboration",
    ],
    icon: FaCode,
    date: "February 2025 - July 2025",
    type: "internship",
  },
];

// Legacy export for backward compatibility
export const experiencesData = experiences.map((exp) => ({
  title: `${exp.company}`,
  location: exp.location,
  description: `${exp.title}. ${exp.description}`,
  icon: React.createElement(exp.icon),
  date: exp.date,
}));

export const projects: Project[] = [
  {
    id: "medium-clone",
    title: "Medium Clone",
    description:
      "My Medium Clone app allows users to publish articles and discover content from other writers.",
    longDescription:
      "A comprehensive Medium clone featuring user authentication, article publishing, reading functionality, and social interactions. Built with modern web technologies focusing on performance and user experience.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: blog,
    liveUrl:
      "https://66cc898facc87f05f0586bc7--benevolent-wisp-3bfdae.netlify.app/",
    githubUrl: "",
    featured: true,
    status: "completed",
    category: "web",
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description:
      "My Twitter Clone app lets users post tweets, follow others, and interact with posts.",
    longDescription:
      "A full-featured Twitter clone with real-time updates, user authentication, tweet posting, following system, and social interactions. Built using Next.js and modern React patterns.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: bugBook,
    liveUrl: "https://next-js-15-social-app.vercel.app/",
    githubUrl: "",
    featured: true,
    status: "completed",
    category: "web",
  },
];

// Legacy export for backward compatibility
export const projectsData = projects.map((project) => ({
  title: project.title,
  description: project.description,
  tags: project.technologies,
  imageUrl: project.imageUrl,
  link: project.liveUrl,
}));

export const skills: Skill[] = [
  // Frontend Skills
  {
    id: "react",
    name: "React",
    icon: FaReact,
    category: "frontend",
    level: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "angular",
    name: "Angular",
    icon: SiAngular,
    category: "frontend",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    category: "frontend",
    level: "intermediate",
    yearsOfExperience: 1,
  },

  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "frontend",
    level: "advanced",
    yearsOfExperience: 1,
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: SiFlutter,
    category: "frontend",
    level: "intermediate",
    yearsOfExperience: 1,
  },

  // Backend Skills
  {
    id: "nodejs",
    name: "Node.js",
    icon: FaNodeJs,
    category: "backend",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "express",
    name: "Express.js",
    icon: SiExpress,
    category: "backend",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "python",
    name: "Python",
    icon: FaPython,
    category: "backend",
    level: "beginner",
    yearsOfExperience: 1,
  },
  {
    id: "dotnet",
    name: ".NET Core",
    icon: SiDotnet,
    category: "backend",
    level: "intermediate",
    yearsOfExperience: 1,
  },

  // Database Skills
  {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    category: "database",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "database",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: SiPrisma,
    category: "database",
    level: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "mssql",
    name: "MS SQL Server",
    icon: SiMicrosoftsqlserver,
    category: "database",
    level: "intermediate",
    yearsOfExperience: 1,
  },

  // Tools
  {
    id: "git",
    name: "Git",
    icon: FaGitAlt,
    category: "tools",
    level: "intermediate",
    yearsOfExperience: 2,
  },
  {
    id: "docker",
    name: "Docker",
    icon: FaDocker,
    category: "tools",
    level: "intermediate",
    yearsOfExperience: 1,
  },
];

// Legacy export for backward compatibility
export const skillsData = skills.map((skill) => ({
  name: skill.name,
  icon: skill.icon,
}));

// Helper Functions for Data Filtering and Querying

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter((skill) => skill.category === category);
};

export const getSkillsByLevel = (level: Skill["level"]) => {
  return skills.filter((skill) => skill.level === level);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByStatus = (status: Project["status"]) => {
  return projects.filter((project) => project.status === status);
};

export const getExperiencesByType = (type: Experience["type"]) => {
  return experiences.filter((experience) => experience.type === type);
};

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};

export const getExperienceById = (id: string) => {
  return experiences.find((experience) => experience.id === id);
};

export const getSkillById = (id: string) => {
  return skills.find((skill) => skill.id === id);
};

// Search Functions
export const searchProjects = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowercaseQuery)
      )
  );
};

export const searchSkills = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(lowercaseQuery) ||
      skill.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Data Statistics
export const getDataStats = () => {
  return {
    totalProjects: projects.length,
    featuredProjects: projects.filter((p) => p.featured).length,
    completedProjects: projects.filter((p) => p.status === "completed").length,
    totalSkills: skills.length,
    skillsByCategory: {
      frontend: skills.filter((s) => s.category === "frontend").length,
      backend: skills.filter((s) => s.category === "backend").length,
      database: skills.filter((s) => s.category === "database").length,
      tools: skills.filter((s) => s.category === "tools").length,
    },
    totalExperiences: experiences.length,
    experiencesByType: {
      internship: experiences.filter((e) => e.type === "internship").length,
      fullTime: experiences.filter((e) => e.type === "full-time").length,
    },
  };
};
