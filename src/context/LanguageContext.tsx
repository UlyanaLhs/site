import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode } from '../data/currency';
import { TRANSLATIONS, AppTranslationDictionary } from '../data/translations';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: CurrencyCode;
  setCurrency: (curr: CurrencyCode) => void;
  t: (ruText: string, enText: string) => string;
  dict: AppTranslationDictionary;
  translations: AppTranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_language');
    if (saved === 'en' || saved === 'ru') {
      return saved;
    }
    return 'en';
  });

  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    const saved = localStorage.getItem('portfolio_currency');
    if (saved && (saved === 'USD' || saved === 'EUR' || saved === 'RUB' || saved === 'BYN')) {
      return saved as CurrencyCode;
    }
    return 'USD';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_language', lang);
    localStorage.setItem('app_language', lang);
    document.documentElement.lang = lang;
  };

  const setCurrency = (curr: CurrencyCode) => {
    setCurrencyState(curr);
    localStorage.setItem('portfolio_currency', curr);
    localStorage.setItem('app_currency', curr);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'en') {
      document.title = 'Ulyana | Portfolio: Web Development & UI/UX Design — Turnkey Websites & Telegram Mini Apps';
    } else {
      document.title = 'Ульяна | Портфолио: Разработка & Веб-дизайн — Сайты под ключ в Минске';
    }
  }, [language]);

  const dict = TRANSLATIONS[language] || TRANSLATIONS.en;

  const t = (ruText: string, enText: string) => {
    return language === 'en' ? enText : ruText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currency, setCurrency, t, dict, translations: dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
