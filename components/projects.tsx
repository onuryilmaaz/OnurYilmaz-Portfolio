"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AppleLogo, ArrowUpRight, GithubLogo, GooglePlayLogo } from "@phosphor-icons/react";
import SectionHeading from "./section-heading";
import { otherProjects, projects } from "@/lib/data";
import type { OtherProject, Project } from "@/lib/types";
import { useLanguage } from "@/context/language-context";

const ease = [0.16, 1, 0.3, 1] as const;

const outlineButton =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-5 py-3 text-sm font-medium transition hover:bg-surface-2 active:scale-98";

function FeaturedProject({ project }: { project: Project }) {
  const { t } = useLanguage();
  const title = t(`projects.${project.id}.title`);
  const liveLabel = t(project.appStoreUrl ? "projects.website" : "projects.liveDemo");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease }}
      className="group w-full rounded-[20px] border border-line bg-surface p-3 shadow-[0_30px_80px_-40px_hsl(var(--shadow)/0.45)] md:p-4"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title}, ${liveLabel}`}
          className="relative block aspect-video overflow-hidden rounded-[14px] bg-surface-2 md:col-span-8 md:aspect-16/10"
        >
          <Image
            src={project.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            placeholder="blur"
            className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-104"
          />
        </a>

        <div className="flex flex-col justify-between gap-8 px-2 pb-3 md:col-span-4 md:px-2 md:py-4">
          <div>
            <h3 className="text-3xl font-semibold tracking-tighter md:text-4xl">{title}</h3>
            <p className="mt-4 max-w-[42ch] leading-relaxed text-muted">
              {t(`projects.${project.id}.description`)}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition active:scale-98"
            >
              {liveLabel}
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
            {project.appStoreUrl && (
              <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                <AppleLogo size={16} weight="fill" />
                App Store
              </a>
            )}
            {project.playStoreUrl && (
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                <GooglePlayLogo size={16} weight="fill" />
                Google Play
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                <GithubLogo size={16} />
                {t("projects.source")}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectRow({ project, index }: { project: OtherProject; index: number }) {
  const { t } = useLanguage();
  const title = t(`projects.${project.id}.title`);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
    >
      <div className="group relative isolate grid grid-cols-1 gap-4 overflow-hidden border-b border-line py-8 md:grid-cols-12 md:items-center md:gap-8">
        {/* Surface wash that sweeps in from the left on hover */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 origin-left scale-x-0 bg-surface transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
        />
        {/* The title link stretches over the whole row; the GitHub button sits above it */}
        <a
          href={project.liveUrl ?? project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold tracking-tight transition-transform duration-500 ease-out-expo after:absolute after:inset-0 group-hover:translate-x-3 md:col-span-4"
        >
          {title}
        </a>
        <p className="max-w-[56ch] leading-relaxed text-muted md:col-span-5">
          {t(`projects.${project.id}.description`)}
        </p>
        <div className="flex items-center justify-between gap-4 md:col-span-3">
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <li key={tech} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}, ${t("projects.source")}`}
                className="relative z-10 grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-fg hover:text-bg"
              >
                <GithubLogo size={16} />
              </a>
            )}
            <span
              aria-hidden
              className="grid size-10 place-items-center rounded-full border border-line transition-colors duration-300 group-hover:border-transparent group-hover:bg-accent group-hover:text-accent-ink"
            >
              <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-350 px-4 md:px-8">
        <SectionHeading id="projects-title">{t("projects.title")}</SectionHeading>

        <div className="mt-12 flex flex-col gap-6 md:mt-16">
          {projects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{t("projects.otherTitle")}</h3>
          <ul className="mt-8 border-t border-line">
            {otherProjects.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
