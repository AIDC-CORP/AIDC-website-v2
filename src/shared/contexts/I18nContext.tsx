import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Language } from "../../config/i18n/languages";
import { translations } from "../../config/i18n/translations";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string) => translations[language][key] ?? key,
    [language]
  );

  const ctxValue = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return (
    <I18nContext.Provider value={ctxValue}>{children}</I18nContext.Provider>
  );
}
