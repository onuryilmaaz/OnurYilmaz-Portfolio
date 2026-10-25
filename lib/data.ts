import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiBun,
  SiGit,
  SiJetpackcompose,
  SiSwift,
  SiLeaflet,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import salah from "@/public/salah.jpg";
import type {
  Experience,
  NavigationLink,
  OtherProject,
  Project,
  Skill,
  SkillCategory,
} from "./types";

export const profile = {
  name: "Onur Yılmaz",
  email: "onuryilm.41@gmail.com",
  linkedin: "https://www.linkedin.com/in/onur-yilmaz-7a8154238/",
  github: "https://github.com/onuryilmaaz",
  cv: "/CV.pdf",
};

export const navigationLinks: NavigationLink[] = [
  { id: "home", hash: "#home" },
  { id: "about", hash: "#about" },
  { id: "projects", hash: "#projects" },
  { id: "skills", hash: "#skills" },
  { id: "experience", hash: "#experience" },
  { id: "contact", hash: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "noktasal",
    technologies: ["React", "Node.js", "PostgreSQL", "GIS"],
    type: "full-time",
    current: true,
  },
  {
    id: "premierturk",
    technologies: [".NET Core", "Angular", "Flutter", "MS SQL", "MongoDB", "Docker", "Leaflet"],
    type: "internship",
  },
  {
    id: "isu",
    technologies: ["Cloud Computing", "System Administration", "Security", "Networking"],
    type: "internship",
  },
  {
    id: "basiskele",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git"],
    type: "internship",
  },
];

export const projects: Project[] = [
  {
    id: "salah",
    technologies: ["SwiftUI", "Kotlin", "Jetpack Compose", "Bun", "Express", "PostgreSQL"],
    image: salah,
    liveUrl: "https://salah-app.com/",
    appStoreUrl: "https://apps.apple.com/app/id6785200246",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.onur6541.salah",
  },
];

export const otherProjects: OtherProject[] = [
  {
    id: "twitterClone",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    liveUrl: "https://next-js-15-social-app.vercel.app/",
    githubUrl: "https://github.com/onuryilmaaz/NextJs-15-Social-App",
  },
  {
    id: "mediumClone",
    technologies: ["React", "Express.js", "MongoDB"],
    liveUrl:
      "https://66cc898facc87f05f0586bc7--benevolent-wisp-3bfdae.netlify.app/",
    githubUrl: "https://github.com/onuryilmaaz/Blog-App-Client",
  },
  {
    id: "geminiBlog",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Gemini AI"],
    githubUrl: "https://github.com/onuryilmaaz/BlogApp2025",
  },
  {
    id: "pollApp",
    technologies: ["Angular", ".NET Core", "Flutter", "MS SQL", "Docker"],
    githubUrl: "https://github.com/onuryilmaaz/polling-app",
  },
  {
    id: "s3Drop",
    technologies: ["Next.js", "AWS S3", "AWS Cognito", "Tailwind"],
    githubUrl: "https://github.com/onuryilmaaz/S3-Drop",
  },
];

export const skills: Skill[] = [
  { name: "React", icon: SiReact, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend" },
  { name: "Angular", icon: SiAngular, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "SwiftUI", icon: SiSwift, category: "frontend" },
  { name: "Jetpack Compose", icon: SiJetpackcompose, category: "frontend" },
  { name: "Flutter", icon: SiFlutter, category: "frontend" },
  { name: ".NET Core", icon: SiDotnet, category: "backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend" },
  { name: "Bun", icon: SiBun, category: "backend" },
  { name: "Express.js", icon: SiExpress, category: "backend" },
  { name: "Python", icon: SiPython, category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
  { name: "MongoDB", icon: SiMongodb, category: "database" },
  { name: "MS SQL Server", icon: DiMsqlServer, category: "database" },
  { name: "MySQL", icon: SiMysql, category: "database" },
  { name: "SQLite", icon: SiSqlite, category: "database" },
  { name: "Redis", icon: SiRedis, category: "database" },
  { name: "Prisma", icon: SiPrisma, category: "database" },
  { name: "Git", icon: SiGit, category: "tools" },
  { name: "Docker", icon: SiDocker, category: "tools" },
  { name: "AWS", icon: FaAws, category: "tools" },
  { name: "Leaflet", icon: SiLeaflet, category: "tools" },
];

export const getSkillsByCategory = (category: SkillCategory) =>
  skills.filter((skill) => skill.category === category);
