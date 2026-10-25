"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import trTranslations from "@/lib/locales/tr.json";
import enTranslations from "@/lib/locales/en.json";

export type Language = "tr" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations = {
  tr: trTranslations,
  en: enTranslations,
};

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("language");
      if (stored === "tr" || stored === "en") setLanguage(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const next: Language = language === "tr" ? "en" : "tr";
    setLanguage(next);
    try {
      window.localStorage.setItem("language", next);
    } catch {}
  };

  const t = (key: string): string => {
    let result: unknown = translations[language];

    for (const k of key.split(".")) {
      if (result && typeof result === "object" && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof result === "string" ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
