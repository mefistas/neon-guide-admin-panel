
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

type Translations = {
  [key: string]: {
    en: string;
    ru: string;
  };
};

const translations: Translations = {
  // Navigation items
  'firstSteps': {
    en: 'First Steps to Start',
    ru: 'Первые шаги',
  },
  'casinoSetup': {
    en: 'Casino Setup',
    ru: 'Настройка казино',
  },
  'cardsPayments': {
    en: 'Cards Payments',
    ru: 'Оплата картами',
  },
  'askQuestion': {
    en: 'Ask a Question',
    ru: 'Задать вопрос',
  },
  'howToAddCity': {
    en: 'How to Add City',
    ru: 'Как добавить город',
  },
  'howToAddDistrict': {
    en: 'How to Add District',
    ru: 'Как добавить район',
  },
  'howToAddCourier': {
    en: 'How to Add Courier',
    ru: 'Как добавить курьера',
  },
  'howToCreateProductGroup': {
    en: 'How to Create a Group of Product',
    ru: 'Как создать группу продуктов',
  },
  'howToCreateProductTypes': {
    en: 'How to Create Types of Product',
    ru: 'Как создать типы продуктов',
  },
  'howToAddAddress': {
    en: 'How to Add an Address',
    ru: 'Как добавить адрес',
  },
  'howToAddBots': {
    en: 'How to Add Bots',
    ru: 'Как добавить ботов',
  },
  // Common UI elements
  'languageSelector': {
    en: 'Language',
    ru: 'Язык',
  },
  'english': {
    en: 'English',
    ru: 'Английский',
  },
  'russian': {
    en: 'Russian',
    ru: 'Русский',
  },
  'adminPanelTutorial': {
    en: 'Admin Panel Tutorial',
    ru: 'Руководство по панели администратора',
  },
  'welcome': {
    en: 'Welcome to Admin Panel Tutorial',
    ru: 'Добро пожаловать в руководство по панели администратора',
  },
  'selectTopic': {
    en: 'Select a topic from the sidebar to get started',
    ru: 'Выберите тему из бокового меню, чтобы начать',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
