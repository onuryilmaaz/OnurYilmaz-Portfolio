"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import trTranslations from "@/lib/locales/tr.json";
import enTranslations from "@/lib/locales/en.json";

type Language = "tr" | "en";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

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
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("tr");

  const toggleLanguage = () => {
    if (language === "tr") {
      setLanguage("en");
      window.localStorage.setItem("language", "en");
    } else {
      setLanguage("tr");
      window.localStorage.setItem("language", "tr");
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let result: any = translations[language];

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof result === "string" ? result : key;
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage && (localLanguage === "tr" || localLanguage === "en")) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
