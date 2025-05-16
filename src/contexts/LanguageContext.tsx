import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  en: {
    adminPanelTutorial: 'Admin Panel Tutorial',
    quickStart: 'Quick Start',
    detailedGuide: 'Detailed Guide',
    casinoSetup: 'Casino Setup',
    cardsPayments: 'Cards Payments',
    askQuestion: 'Ask a Question',
    howToAddCity: 'How to add City',
    howToAddDistrict: 'How to add District',
    howToAddCourier: 'How to add Courier',
    howToCreateProductGroup: 'How to create Product Group',
    howToCreateProductTypes: 'How to create Product Types',
    howToAddAddress: 'How to add Address',
    howToAddBots: 'How to add Bots',
    oneTimeDiscounts: 'One-time Discounts',
    btcCashout: 'BTC Cashout',
    balanceHistory: 'Balance History',
    internalChats: 'Internal Chats',
    reviews: 'Reviews',
    marketing: 'Marketing',
    merchants: 'Merchants',
    masterKlad: 'Master Klad',
    customBot: 'Custom Bot',
    workers: 'Workers',
    clients: 'Clients',
    purchases: 'Purchases',
    balanceTopUps: 'Balance Top Ups',
    messages: 'Messages',
    web: 'Web',
    couriersSalary: 'Couriers Salary',
    usdt: 'USDT',
    partnersExchangers: 'Partners Exchangers',
  },
  ru: {
    adminPanelTutorial: 'Руководство по админ-панели',
    quickStart: 'Быстрый Старт',
    detailedGuide: 'Подробное руководство',
    casinoSetup: 'Настройка Казино',
    cardsPayments: 'Оплата картами',
    askQuestion: 'Задать вопрос',
    howToAddCity: 'Как добавить город',
    howToAddDistrict: 'Как добавить район',
    howToAddCourier: 'Как добавить курьера',
    howToCreateProductGroup: 'Как создать группу товаров',
    howToCreateProductTypes: 'Как создать типы товаров',
    howToAddAddress: 'Как добавить адрес',
    howToAddBots: 'Как добавить ботов',
    oneTimeDiscounts: 'Разовые скидки на товары',
    btcCashout: 'Обнал BTC',
    balanceHistory: 'История изменения балансов',
    internalChats: 'Внутренние чаты',
    reviews: 'Отзывы',
    marketing: 'Маркетинг',
    merchants: 'Мерчанты',
    masterKlad: 'Мастер Клад',
    customBot: 'Кастомный бот',
    workers: 'Работники',
    clients: 'Клиенты',
    purchases: 'Покупки',
    balanceTopUps: 'Пополнения баланса',
    messages: 'Сообщения',
    web: 'Веб',
    couriersSalary: 'Зарплата курьеров',
    usdt: 'USDT',
    partnersExchangers: 'Партнеры обменники',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
