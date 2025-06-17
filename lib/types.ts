import { links } from "./data";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];

// Experience Types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  icon: IconType;
  date: string;
  type: "internship" | "full-time" | "part-time" | "freelance";
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: StaticImageData;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "desktop" | "api" | "other";
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  yearsOfExperience?: number;
}

// Navigation Link Types
export interface NavigationLink {
  name: string;
  hash: string;
}
