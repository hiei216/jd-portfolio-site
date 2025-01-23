import React, { createContext, useState, ReactNode } from 'react';

export interface LanguageContextProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'en';
  });

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
