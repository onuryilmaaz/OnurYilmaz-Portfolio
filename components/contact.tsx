"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Asterisk,
  Check,
  Copy,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  WarningCircle,
} from "@phosphor-icons/react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { profile } from "@/lib/data";
import type { ContactFormData } from "@/lib/types";
import { sendEmail } from "@/utils/send-email";
import { useLanguage } from "@/context/language-context";

const ease = [0.16, 1, 0.3, 1] as const;

function Marquee({ text }: { text: string }) {
  const item = (
    <span className="flex shrink-0 items-center gap-8 pr-8">
      {text}
      <Asterisk weight="bold" className="size-[0.6em] text-accent-fg" />
    </span>
  );
  return (
    <div aria-hidden className="overflow-hidden border-y border-line py-6 md:py-8">
      <div className="animate-marquee flex w-max whitespace-nowrap text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-none tracking-[-0.045em]">
        {item}
        {item}
        {item}
        {item}
      </div>
    </div>
  );
}

function SuccessMark() {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="size-16">
      <motion.circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="var(--accent-fg)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.path
        d="M20 33 L28 41 L45 24"
        fill="none"
        stroke="var(--accent-fg)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.55, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

const fieldBase =
  "w-full rounded-xl border bg-bg px-4 py-3.5 text-fg outline-none transition-colors focus:border-accent-fg focus-visible:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-1.5 text-sm text-red-700 dark:text-red-400"
        >
          <WarningCircle size={16} weight="fill" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = handleSubmit(async (data) => {
    setStatus("idle");
    try {
      await sendEmail(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const links = [
    { href: profile.linkedin, label: "LinkedIn", icon: LinkedinLogo, external: true },
    { href: profile.github, label: "GitHub", icon: GithubLogo, external: true },
    { href: profile.cv, label: t("hero.cv"), icon: DownloadSimple, external: false },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 pt-16 pb-24 md:pb-32">
      <Marquee text={t("contact.marquee")} />

      <div className="mx-auto mt-20 grid max-w-350 grid-cols-1 gap-12 px-4 md:mt-28 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title">{t("contact.title")}</SectionHeading>
          <Reveal>
            <p className="mt-8 max-w-[40ch] text-lg leading-relaxed text-muted">{t("contact.intro")}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-2xl font-medium tracking-tight underline decoration-line decoration-2 underline-offset-[6px] transition hover:decoration-accent-fg md:text-3xl"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={t("contact.copy")}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:bg-surface hover:text-fg active:scale-96"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "y" : "n"}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {copied ? <Check size={16} weight="bold" className="text-accent-fg" /> : <Copy size={16} />}
                  </motion.span>
                </AnimatePresence>
              </button>
              <span aria-live="polite" className="sr-only">
                {copied ? t("contact.copied") : ""}
              </span>
            </div>

            <ul className="mt-12 border-t border-line">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { download: true })}
                    className="group flex items-center justify-between border-b border-line py-4 transition-colors hover:text-accent-fg"
                  >
                    <span className="flex items-center gap-3 font-medium">
                      <link.icon size={20} />
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-fg"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="relative rounded-[20px] border border-line bg-surface p-6 md:p-10">
            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex min-h-105 flex-col items-start justify-center gap-5"
                >
                  <SuccessMark />
                  <div>
                    <p className="text-3xl font-semibold tracking-tight">{t("contact.successTitle")}</p>
                    <p className="mt-2 text-muted">{t("contact.successBody")}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:bg-surface-2 active:scale-98"
                  >
                    {t("contact.again")}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t("contact.name")}
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        maxLength={500}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={clsx(fieldBase, errors.name ? "border-red-600" : "border-line")}
                        {...register("name", { required: t("contact.required") })}
                      />
                      <FieldError id="name-error" message={errors.name?.message} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t("contact.email")}
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        maxLength={500}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={clsx(fieldBase, errors.email ? "border-red-600" : "border-line")}
                        {...register("email", {
                          required: t("contact.required"),
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("contact.invalidEmail") },
                        })}
                      />
                      <FieldError id="email-error" message={errors.email?.message} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={7}
                      maxLength={5000}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={clsx(fieldBase, "resize-none", errors.message ? "border-red-600" : "border-line")}
                      {...register("message", { required: t("contact.required") })}
                    />
                    <FieldError id="message-error" message={errors.message?.message} />
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-red-600/30 bg-red-600/5 px-4 py-3 text-sm text-red-700 dark:text-red-400"
                    >
                      <WarningCircle size={18} weight="fill" className="mt-px shrink-0" />
                      {t("contact.error")}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2.5 self-start whitespace-nowrap rounded-full bg-accent px-7 py-3.5 font-medium text-accent-ink transition active:scale-98 disabled:cursor-wait disabled:opacity-80"
                  >
                    {isSubmitting ? (
                      <>
                        {t("contact.sending")}
                        <span className="flex gap-1" aria-hidden>
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="size-1.5 rounded-full bg-accent-ink"
                              animate={{ opacity: [0.25, 1, 0.25] }}
                              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                            />
                          ))}
                        </span>
                      </>
                    ) : (
                      <>
                        {t("contact.submit")}
                        <PaperPlaneTilt
                          size={18}
                          weight="bold"
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
