"use client";

import React from "react";
import { MotionConfig } from "motion/react";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        {/* "user" drops transform/layout animations when prefers-reduced-motion is set. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}
