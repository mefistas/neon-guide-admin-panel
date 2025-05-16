import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

const translations: Translations = {
  // General
  'adminPanelTutorial': {
    en: 'Admin Panel Tutorial',
    ru: 'Руководство по Админ Панели',
  },
  'welcome': {
    en: 'Welcome',
    ru: 'Добро пожаловать',
  },
  'selectTopic': {
    en: 'Select a topic to start',
    ru: 'Выберите тему для начала',
  },
  'learnMoreButton': {
    en: 'Learn More',
    ru: 'Узнать больше',
  },

  // Quick Start Section
  'quickStart': {
    en: 'Quick Start',
    ru: 'Быстрый Старт',
  },
  'quickStartShortDesc': {
    en: 'Get started with the basics of the admin panel.',
    ru: 'Начните с основ админ панели.',
  },
  'quickStartDescription': {
    en: 'Follow these steps to quickly set up your admin panel.',
    ru: 'Следуйте этим шагам, чтобы быстро настроить вашу админ панель.',
  },

  // Detailed Guide Section
  'detailedGuide': {
    en: 'Detailed Guide',
    ru: 'Подробное Руководство',
  },
  'detailedGuideShortDesc': {
    en: 'Learn how to configure each section of the admin panel.',
    ru: 'Узнайте, как настроить каждый раздел админ панели.',
  },

  // Casino Setup Section
  'casinoSetup': {
    en: 'Casino Setup',
    ru: 'Настройка Казино',
  },
  'casinoSetupShortDesc': {
    en: 'Configure the casino settings and manage games.',
    ru: 'Настройте параметры казино и управляйте играми.',
  },

  // Cards Payments Section
  'cardsPayments': {
    en: 'Cards Payments',
    ru: 'Оплата Картами',
  },
  'cardsPaymentsShortDesc': {
    en: 'Set up and manage card payment options.',
    ru: 'Настройте и управляйте способами оплаты картами.',
  },

  // How to add sections
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
    en: 'How to Create Product Group',
    ru: 'Как создать группу товаров',
  },
  'howToCreateProductTypes': {
    en: 'How to Create Product Types',
    ru: 'Как создать типы товаров',
  },
  'howToAddAddress': {
    en: 'How to Add Address',
    ru: 'Как добавить адрес',
  },
  'howToAddBots': {
    en: 'How to Add Bots',
    ru: 'Как добавить ботов',
  },

  // Ask a Question Section
  'askQuestion': {
    en: 'Ask a Question',
    ru: 'Задать вопрос',
  },

  // Main Page Titles
  'quickStartTitle': {
    en: 'Quick Start Guide',
    ru: 'Руководство по быстрому старту',
  },

  // Common UI elements
  'languageSelector': {
    en: 'Language',
    ru: 'Язык',
  },
  'selectLanguage': {
    en: 'Select Language',
    ru: 'Выбрать язык',
  },
  // New menu items translations
  'merchants': {
    en: 'Merchants',
    ru: 'Магазины',
  },
  'masterKlad': {
    en: 'Master Klad',
    ru: 'МК',
  },
  'customBot': {
    en: 'Custom Bot',
    ru: 'Кастомизация бота',
  },
  'workers': {
    en: 'Workers',
    ru: 'Сотрудники',
  },
  'clients': {
    en: 'Clients',
    ru: 'Клиенты',
  },
  'purchases': {
    en: 'Purchases',
    ru: 'Покупки',
  },
  'balanceTopUps': {
    en: 'Balance Top Ups',
    ru: 'Пополнения балансов',
  },
  'marketing': {
    en: 'Marketing',
    ru: 'Рассылки',
  },
  'messages': {
    en: 'Messages',
    ru: 'Сообщения',
  },
  'web': {
    en: 'Web',
    ru: 'Веб-сайты',
  },
  'couriersSalary': {
    en: 'Couriers Salary',
    ru: 'Начисления курьерам',
  },
  'usdt': {
    en: 'USDT',
    ru: 'USDT',
  },
  'partnersExchangers': {
    en: 'Partners Exchangers',
    ru: 'Партнеры обменники',
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>((localStorage.getItem('language') as Language) || 'en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value: LanguageContextProps = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
