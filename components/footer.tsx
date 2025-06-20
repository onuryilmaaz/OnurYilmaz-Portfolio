"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Onur. {t("footer.copyright")}
      </small>
      <p className="text-xs text-gray-400">{t("footer.built")}</p>
    </footer>
  );
}
