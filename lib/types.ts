import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export interface NavigationLink {
  id: SectionId;
  hash: `#${SectionId}`;
}

// Text for experiences and projects lives in lib/locales, keyed by id.
export interface Experience {
  id: "noktasal" | "basiskele" | "isu" | "premierturk";
  technologies: string[];
  type: "internship" | "full-time" | "part-time" | "freelance";
  current?: boolean;
}

export interface Project {
  id: "salah";
  technologies: string[];
  image: StaticImageData;
  liveUrl: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

// Smaller projects without a screenshot, listed under the featured stack.
export interface OtherProject {
  id: "twitterClone" | "mediumClone" | "geminiBlog" | "pollApp" | "s3Drop";
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export interface Skill {
  name: string;
  icon: IconType;
  category: SkillCategory;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
