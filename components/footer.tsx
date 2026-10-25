"use client";

import React from "react";
import { ArrowUp, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-350 flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:text-fg"
          >
            <GithubLogo size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:text-fg"
          >
            <LinkedinLogo size={18} />
          </a>
          <a
            href="#home"
            className="group ml-2 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium transition hover:bg-surface"
          >
            {t("footer.top")}
            <ArrowUp size={14} weight="bold" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
