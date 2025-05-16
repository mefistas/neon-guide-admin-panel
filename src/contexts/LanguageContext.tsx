
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
  'adminPanelTutorial': {
    en: 'Admin Panel Tutorial',
    ru: 'Руководство по админ-панели',
  },
  'quickStart': {
    en: 'Quick Start',
    ru: 'Быстрый старт',
  },
  'detailedGuide': {
    en: 'Close look to each part',
    ru: 'Детальный гайд по админке',
  },
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
  'howToAddCity': {
    en: 'How to add city',
    ru: 'Как добавить город',
  },
  'howToAddDistrict': {
    en: 'How to add district',
    ru: 'Как добавить район',
  },
  'howToAddCourier': {
    en: 'How to add courier',
    ru: 'Как добавить курьера',
  },
  'howToCreateProductGroup': {
    en: 'How to create product group',
    ru: 'Как создать группу товаров',
  },
  'howToCreateProductTypes': {
    en: 'How to create product types',
    ru: 'Как создать типы товаров',
  },
  'howToAddAddress': {
    en: 'How to add address',
    ru: 'Как добавить адрес',
  },
  'howToAddBots': {
    en: 'How to add bots',
    ru: 'Как добавить ботов',
  },
  // Quick Start translations
  'quickStartDescription': {
    en: 'Welcome to the Quick Start guide! Here are the 13 main points you need to know, each with important notes:',
    ru: 'Добро пожаловать в руководство по быстрому старту! Вот 13 основных пунктов, которые вам нужно знать, каждый с важными примечаниями:',
  },
  'quickStartPoint1': {
    en: 'Getting Started with Admin Panel',
    ru: 'Начало работы с панелью администратора',
  },
  'quickStartPoint1Note1': {
    en: 'Log in with your administrator credentials',
    ru: 'Войдите, используя учетные данные администратора',
  },
  'quickStartPoint1Note2': {
    en: 'Familiarize yourself with the dashboard layout',
    ru: 'Ознакомьтесь с макетом панели управления',
  },
  'quickStartPoint1Note3': {
    en: 'Check system notifications for any important updates',
    ru: 'Проверьте системные уведомления на наличие важных обновлений',
  },
  'quickStartPoint1Note4': {
    en: 'Set your language preference in the top-right corner',
    ru: 'Установите предпочтительный язык в правом верхнем углу',
  },
  'quickStartPoint1Note5': {
    en: 'Review any pending tasks or alerts',
    ru: 'Просмотрите все ожидающие задачи или предупреждения',
  },
  'quickStartPoint1Note6': {
    en: 'Check the system status indicators',
    ru: 'Проверьте индикаторы состояния системы',
  },
  'quickStartPoint1Note7': {
    en: 'Verify your account settings and permissions',
    ru: 'Проверьте настройки учетной записи и разрешения',
  },
  'quickStartPoint1Note8': {
    en: 'Bookmark the admin panel URL for easy access',
    ru: 'Добавьте URL панели администратора в закладки для удобного доступа',
  },
  'quickStartPoint2': {
    en: 'City Management',
    ru: 'Управление городами',
  },
  'quickStartPoint2Note1': {
    en: 'Add new cities through the STOCK > CITIES menu',
    ru: 'Добавляйте новые города через меню СКЛАД > ГОРОДА',
  },
  'quickStartPoint2Note2': {
    en: 'Ensure each city has a unique name',
    ru: 'Убедитесь, что каждый город имеет уникальное название',
  },
  'quickStartPoint2Note3': {
    en: 'Set availability for sales by checking "доступен для продаж"',
    ru: 'Установите доступность для продаж, поставив галочку "доступен для продаж"',
  },
  'quickStartPoint2Note4': {
    en: 'Configure pre-order availability if needed',
    ru: 'При необходимости настройте доступность для предзаказов',
  },
  'quickStartPoint2Note5': {
    en: 'Associate cities with appropriate merchant stores',
    ru: 'Свяжите города с соответствующими магазинами',
  },
  'quickStartPoint2Note6': {
    en: 'Use sort order to control display position (higher numbers appear first)',
    ru: 'Используйте порядок сортировки для управления позицией отображения (большие числа отображаются первыми)',
  },
  'quickStartPoint2Note7': {
    en: 'Save changes using appropriate save button options',
    ru: 'Сохраняйте изменения, используя соответствующие варианты кнопки сохранения',
  },
  'quickStartPoint2Note8': {
    en: 'Verify newly added cities appear correctly in customer-facing interfaces',
    ru: 'Проверьте, что вновь добавленные города правильно отображаются в интерфейсах для клиентов',
  },
  'quickStartPoint3': {
    en: 'District Configuration',
    ru: 'Настройка районов',
  },
  'quickStartPoint3Note1': {
    en: 'Navigate to MAIN > MERCHANTS > Districts to manage districts',
    ru: 'Перейдите в ГЛАВНАЯ > ТОРГОВЦЫ > Районы для управления районами',
  },
  'quickStartPoint3Note2': {
    en: 'Create districts only after adding their corresponding cities',
    ru: 'Создавайте районы только после добавления соответствующих городов',
  },
  'quickStartPoint3Note3': {
    en: 'Provide clear, recognizable district names',
    ru: 'Предоставьте четкие, узнаваемые названия районов',
  },
  'quickStartPoint3Note4': {
    en: 'Associate each district with the correct city',
    ru: 'Свяжите каждый район с правильным городом',
  },
  'quickStartPoint3Note5': {
    en: 'Define district boundaries when applicable',
    ru: 'Определите границы района, когда это применимо',
  },
  'quickStartPoint3Note6': {
    en: 'Set appropriate active/inactive status',
    ru: 'Установите соответствующий статус активен/неактивен',
  },
  'quickStartPoint3Note7': {
    en: 'Consider using GeoJSON for complex boundaries',
    ru: 'Рассмотрите возможность использования GeoJSON для сложных границ',
  },
  'quickStartPoint3Note8': {
    en: 'Verify district appears in the correct city group',
    ru: 'Убедитесь, что район отображается в правильной группе городов',
  },
  'quickStartPoint4': {
    en: 'Courier Management',
    ru: 'Управление курьерами',
  },
  'quickStartPoint4Note1': {
    en: 'Access courier management via the STAFF section',
    ru: 'Доступ к управлению курьерами через раздел ПЕРСОНАЛ',
  },
  'quickStartPoint4Note2': {
    en: 'Add complete courier personal information',
    ru: 'Добавьте полную личную информацию о курьере',
  },
  'quickStartPoint4Note3': {
    en: 'Verify identity documents before activation',
    ru: 'Проверяйте документы, удостоверяющие личность, перед активацией',
  },
  'quickStartPoint4Note4': {
    en: 'Assign couriers to specific cities and districts',
    ru: 'Назначайте курьеров в определенные города и районы',
  },
  'quickStartPoint4Note5': {
    en: 'Define working hours and transportation type',
    ru: 'Определите рабочие часы и тип транспорта',
  },
  'quickStartPoint4Note6': {
    en: 'Create secure login credentials for courier app',
    ru: 'Создайте безопасные учетные данные для входа в приложение курьера',
  },
  'quickStartPoint4Note7': {
    en: 'Provide necessary training resources',
    ru: 'Предоставьте необходимые обучающие ресурсы',
  },
  'quickStartPoint4Note8': {
    en: 'Monitor courier performance after activation',
    ru: 'Отслеживайте работу курьера после активации',
  },
  'quickStartPoint5': {
    en: 'Product Group Creation',
    ru: 'Создание групп продуктов',
  },
  'quickStartPoint5Note1': {
    en: 'Access Product Groups through the СКЛАД (Inventory) section',
    ru: 'Доступ к группам продуктов через раздел СКЛАД',
  },
  'quickStartPoint5Note2': {
    en: 'Create a logical hierarchy for product organization',
    ru: 'Создайте логическую иерархию для организации продуктов',
  },
  'quickStartPoint5Note3': {
    en: 'Use clear, descriptive group names',
    ru: 'Используйте четкие, описательные названия групп',
  },
  'quickStartPoint5Note4': {
    en: 'Add helpful descriptions for each group',
    ru: 'Добавьте полезные описания для каждой группы',
  },
  'quickStartPoint5Note5': {
    en: 'Upload appropriate group images when applicable',
    ru: 'Загружайте подходящие изображения групп, когда это применимо',
  },
  'quickStartPoint5Note6': {
    en: 'Set visibility options for store, app, and website',
    ru: 'Настройте параметры видимости для магазина, приложения и веб-сайта',
  },
  'quickStartPoint5Note7': {
    en: 'Use group priority to control display order',
    ru: 'Используйте приоритет группы для управления порядком отображения',
  },
  'quickStartPoint5Note8': {
    en: 'Verify groups appear correctly in customer interfaces',
    ru: 'Проверьте, что группы правильно отображаются в интерфейсах для клиентов',
  },
  'quickStartPoint6': {
    en: 'Product Type Setup',
    ru: 'Настройка типов продуктов',
  },
  'quickStartPoint6Note1': {
    en: 'Access Product Types through the СКЛАД (Inventory) section',
    ru: 'Доступ к типам продуктов через раздел СКЛАД',
  },
  'quickStartPoint6Note2': {
    en: 'Define clear type names (Digital, Physical, Service, etc.)',
    ru: 'Определите четкие названия типов (Цифровой, Физический, Услуга и т.д.)',
  },
  'quickStartPoint6Note3': {
    en: 'Configure custom attribute fields for each type',
    ru: 'Настройте пользовательские поля атрибутов для каждого типа',
  },
  'quickStartPoint6Note4': {
    en: 'Specify required fields and validation rules',
    ru: 'Укажите обязательные поля и правила проверки',
  },
  'quickStartPoint6Note5': {
    en: 'Configure inventory tracking settings',
    ru: 'Настройте параметры отслеживания запасов',
  },
  'quickStartPoint6Note6': {
    en: 'Set appropriate shipping and tax properties',
    ru: 'Установите соответствующие свойства доставки и налогов',
  },
  'quickStartPoint6Note7': {
    en: 'Consider using attribute inheritance for related types',
    ru: 'Рассмотрите возможность использования наследования атрибутов для связанных типов',
  },
  'quickStartPoint6Note8': {
    en: 'Test product creation with new types before full deployment',
    ru: 'Протестируйте создание продукта с новыми типами перед полным внедрением',
  },
  'quickStartPoint7': {
    en: 'Address Management',
    ru: 'Управление адресами',
  },
  'quickStartPoint7Note1': {
    en: 'Access address management via ДОБАВИТЬ АДРЕСА',
    ru: 'Доступ к управлению адресами через ДОБАВИТЬ АДРЕСА',
  },
  'quickStartPoint7Note2': {
    en: 'Provide complete address details including building and street',
    ru: 'Предоставьте полные данные адреса, включая номер здания и название улицы',
  },
  'quickStartPoint7Note3': {
    en: 'Select the correct city and district for each address',
    ru: 'Выберите правильный город и район для каждого адреса',
  },
  'quickStartPoint7Note4': {
    en: 'Include apartment/suite numbers when applicable',
    ru: 'Включайте номера квартир/офисов, когда это применимо',
  },
  'quickStartPoint7Note5': {
    en: 'Verify address location on the map interface',
    ru: 'Проверяйте местоположение адреса на интерфейсе карты',
  },
  'quickStartPoint7Note6': {
    en: 'Add helpful additional instructions when needed',
    ru: 'При необходимости добавляйте полезные дополнительные инструкции',
  },
  'quickStartPoint7Note7': {
    en: 'Associate addresses with customers or merchants as needed',
    ru: 'При необходимости связывайте адреса с клиентами или продавцами',
  },
  'quickStartPoint7Note8': {
    en: 'Use bulk import for adding multiple addresses efficiently',
    ru: 'Используйте массовый импорт для эффективного добавления нескольких адресов',
  },
  'quickStartPoint8': {
    en: 'Bot Configuration',
    ru: 'Настройка ботов',
  },
  'quickStartPoint8Note1': {
    en: 'Access bot management through the БОТЫ/КАНАЛЫ section',
    ru: 'Доступ к управлению ботами через раздел БОТЫ/КАНАЛЫ',
  },
  'quickStartPoint8Note2': {
    en: 'Select appropriate bot platform (Telegram, WhatsApp, etc.)',
    ru: 'Выберите подходящую платформу для бота (Telegram, WhatsApp и т.д.)',
  },
  'quickStartPoint8Note3': {
    en: 'Configure secure API tokens and credentials',
    ru: 'Настройте безопасные API токены и учетные данные',
  },
  'quickStartPoint8Note4': {
    en: 'Create welcoming and informative messages',
    ru: 'Создавайте приветливые и информативные сообщения',
  },
  'quickStartPoint8Note5': {
    en: 'Design intuitive menu structures',
    ru: 'Разработайте интуитивно понятные структуры меню',
  },
  'quickStartPoint8Note6': {
    en: 'Connect bots to your product catalog and order system',
    ru: 'Подключите ботов к каталогу продуктов и системе заказов',
  },
  'quickStartPoint8Note7': {
    en: 'Set up appropriate payment methods',
    ru: 'Настройте соответствующие способы оплаты',
  },
  'quickStartPoint8Note8': {
    en: 'Test thoroughly in sandbox mode before activation',
    ru: 'Тщательно тестируйте в режиме песочницы перед активацией',
  },
  'quickStartPoint9': {
    en: 'Payment Processing',
    ru: 'Обработка платежей',
  },
  'quickStartPoint9Note1': {
    en: 'Configure payment gateways under the Payments section',
    ru: 'Настройте платежные шлюзы в разделе Платежи',
  },
  'quickStartPoint9Note2': {
    en: 'Set up secure API credentials for each gateway',
    ru: 'Настройте безопасные учетные данные API для каждого шлюза',
  },
  'quickStartPoint9Note3': {
    en: 'Configure transaction fee settings',
    ru: 'Настройте параметры комиссии за транзакции',
  },
  'quickStartPoint9Note4': {
    en: 'Test payment flows in sandbox mode',
    ru: 'Тестируйте процессы оплаты в режиме песочницы',
  },
  'quickStartPoint9Note5': {
    en: 'Set up payment notification systems',
    ru: 'Настройте системы уведомлений о платежах',
  },
  'quickStartPoint9Note6': {
    en: 'Configure automatic receipt generation',
    ru: 'Настройте автоматическое создание квитанций',
  },
  'quickStartPoint9Note7': {
    en: 'Implement fraud detection measures',
    ru: 'Внедрите меры обнаружения мошенничества',
  },
  'quickStartPoint9Note8': {
    en: 'Set up reconciliation processes',
    ru: 'Настройте процессы сверки',
  },
  'quickStartPoint10': {
    en: 'Inventory Management',
    ru: 'Управление запасами',
  },
  'quickStartPoint10Note1': {
    en: 'Configure inventory tracking settings for products',
    ru: 'Настройте параметры отслеживания запасов для продуктов',
  },
  'quickStartPoint10Note2': {
    en: 'Set low stock threshold alerts',
    ru: 'Установите оповещения о пороге низкого запаса',
  },
  'quickStartPoint10Note3': {
    en: 'Set up automatic reorder processes',
    ru: 'Настройте процессы автоматического повторного заказа',
  },
  'quickStartPoint10Note4': {
    en: 'Configure inventory adjustment permissions',
    ru: 'Настройте разрешения на корректировку запасов',
  },
  'quickStartPoint10Note5': {
    en: 'Implement batch/lot tracking for applicable products',
    ru: 'Внедрите отслеживание партий/лотов для применимых продуктов',
  },
  'quickStartPoint10Note6': {
    en: 'Set up inventory reporting schedules',
    ru: 'Настройте графики отчетности по запасам',
  },
  'quickStartPoint10Note7': {
    en: 'Configure warehouse location management',
    ru: 'Настройте управление местоположением склада',
  },
  'quickStartPoint10Note8': {
    en: 'Set up inventory audit procedures',
    ru: 'Настройте процедуры аудита запасов',
  },
  'quickStartPoint11': {
    en: 'User Management',
    ru: 'Управление пользователями',
  },
  'quickStartPoint11Note1': {
    en: 'Access user management through the Users section',
    ru: 'Доступ к управлению пользователями через раздел Пользователи',
  },
  'quickStartPoint11Note2': {
    en: 'Create different user roles with appropriate permissions',
    ru: 'Создайте разные роли пользователей с соответствующими разрешениями',
  },
  'quickStartPoint11Note3': {
    en: 'Implement secure password policies',
    ru: 'Внедрите политики безопасных паролей',
  },
  'quickStartPoint11Note4': {
    en: 'Set up two-factor authentication for sensitive roles',
    ru: 'Настройте двухфакторную аутентификацию для чувствительных ролей',
  },
  'quickStartPoint11Note5': {
    en: 'Configure user session timeout settings',
    ru: 'Настройте параметры тайм-аута пользовательской сессии',
  },
  'quickStartPoint11Note6': {
    en: 'Set up user activity logging',
    ru: 'Настройте ведение журнала активности пользователей',
  },
  'quickStartPoint11Note7': {
    en: 'Create onboarding procedures for new staff',
    ru: 'Создайте процедуры адаптации для новых сотрудников',
  },
  'quickStartPoint11Note8': {
    en: 'Implement regular access review procedures',
    ru: 'Внедрите регулярные процедуры проверки доступа',
  },
  'quickStartPoint12': {
    en: 'Reports and Analytics',
    ru: 'Отчеты и аналитика',
  },
  'quickStartPoint12Note1': {
    en: 'Access reporting tools through the Reports section',
    ru: 'Доступ к инструментам отчетности через раздел Отчеты',
  },
  'quickStartPoint12Note2': {
    en: 'Configure daily, weekly, and monthly sales reports',
    ru: 'Настройте ежедневные, еженедельные и ежемесячные отчеты о продажах',
  },
  'quickStartPoint12Note3': {
    en: 'Set up inventory movement analytics',
    ru: 'Настройте аналитику движения запасов',
  },
  'quickStartPoint12Note4': {
    en: 'Create customer behavior tracking reports',
    ru: 'Создайте отчеты по отслеживанию поведения клиентов',
  },
  'quickStartPoint12Note5': {
    en: 'Configure performance dashboards for key metrics',
    ru: 'Настройте панели производительности для ключевых показателей',
  },
  'quickStartPoint12Note6': {
    en: 'Set up automated report delivery to stakeholders',
    ru: 'Настройте автоматическую доставку отчетов заинтересованным сторонам',
  },
  'quickStartPoint12Note7': {
    en: 'Configure custom report templates',
    ru: 'Настройте шаблоны пользовательских отчетов',
  },
  'quickStartPoint12Note8': {
    en: 'Implement data export functionality for external analysis',
    ru: 'Внедрите функцию экспорта данных для внешнего анализа',
  },
  'quickStartPoint13': {
    en: 'System Maintenance',
    ru: 'Обслуживание системы',
  },
  'quickStartPoint13Note1': {
    en: 'Schedule regular database backups',
    ru: 'Запланируйте регулярное резервное копирование базы данных',
  },
  'quickStartPoint13Note2': {
    en: 'Configure system update notifications',
    ru: 'Настройте уведомления об обновлениях системы',
  },
  'quickStartPoint13Note3': {
    en: 'Implement regular data cleanup procedures',
    ru: 'Внедрите регулярные процедуры очистки данных',
  },
  'quickStartPoint13Note4': {
    en: 'Set up performance monitoring alerts',
    ru: 'Настройте оповещения мониторинга производительности',
  },
  'quickStartPoint13Note5': {
    en: 'Schedule system maintenance windows',
    ru: 'Запланируйте окна для технического обслуживания системы',
  },
  'quickStartPoint13Note6': {
    en: 'Configure error logging and notification',
    ru: 'Настройте ведение журнала ошибок и уведомления',
  },
  'quickStartPoint13Note7': {
    en: 'Implement disaster recovery procedures',
    ru: 'Внедрите процедуры аварийного восстановления',
  },
  'quickStartPoint13Note8': {
    en: 'Set up regular security audit processes',
    ru: 'Настройте регулярные процессы аудита безопасности',
  },
  // First Steps translations (keeping existing ones)
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
  // Menu short descriptions for Index page
  'quickStartShortDesc': {
    en: 'Get a quick overview of the essential steps to set up and manage your admin panel',
    ru: 'Получите краткий обзор основных шагов по настройке и управлению панелью администратора',
  },
  'detailedGuideShortDesc': {
    en: 'Learn the detailed process of setting up each section of the admin panel',
    ru: 'Изучите подробный процесс настройки каждого раздела панели администратора',
  },
  'casinoSetupShortDesc': {
    en: 'Configure and manage casino-related settings and operations',
    ru: 'Настройка и управление параметрами и операциями, связанными с казино',
  },
  'cardsPaymentsShortDesc': {
    en: 'Set up and manage card payment processing and related functions',
    ru: 'Настройка и управление обработкой платежей по картам и связанными функциями',
  },
};

// Language Provider and useLanguage hook definitions
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
