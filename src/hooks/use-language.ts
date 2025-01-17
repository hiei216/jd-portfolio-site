import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextProps,
} from "../context/language-context";

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
