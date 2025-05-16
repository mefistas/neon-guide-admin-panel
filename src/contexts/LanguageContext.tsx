
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
  'english': {
    en: 'English',
    ru: 'Английский',
  },
  'russian': {
    en: 'Russian',
    ru: 'Русский',
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
  
  // Quick Start Points
  'quickStartPoint1': {
    en: 'System Access',
    ru: 'Доступ к системе',
  },
  'quickStartPoint1Note1': {
    en: 'Open the admin panel using the URL provided by your system administrator.',
    ru: 'Откройте панель администратора, используя URL, предоставленный вашим системным администратором.',
  },
  'quickStartPoint1Note2': {
    en: 'Enter your username and password in the login form.',
    ru: 'Введите ваше имя пользователя и пароль в форме входа.',
  },
  'quickStartPoint1Note3': {
    en: 'If this is your first login, use the temporary credentials provided and change your password immediately.',
    ru: 'Если это ваш первый вход, используйте временные учетные данные и немедленно измените пароль.',
  },
  'quickStartPoint1Note4': {
    en: 'Enable two-factor authentication for additional security.',
    ru: 'Активируйте двухфакторную аутентификацию для дополнительной безопасности.',
  },
  'quickStartPoint1Note5': {
    en: 'Navigate to the Profile section to update your personal information.',
    ru: 'Перейдите в раздел Профиль, чтобы обновить вашу личную информацию.',
  },
  'quickStartPoint1Note6': {
    en: 'Save your auth token securely for API access if needed.',
    ru: 'Сохраните ваш токен авторизации для доступа к API, если это необходимо.',
  },
  'quickStartPoint1Note7': {
    en: 'In case of login issues, use the password recovery option.',
    ru: 'В случае проблем со входом используйте опцию восстановления пароля.',
  },
  'quickStartPoint1Note8': {
    en: 'Contact technical support if your account becomes locked after multiple failed login attempts.',
    ru: 'Обратитесь в техническую поддержку, если ваша учетная запись заблокирована после нескольких неудачных попыток входа.',
  },
  
  'quickStartPoint2': {
    en: 'Basic Configuration',
    ru: 'Базовая настройка',
  },
  'quickStartPoint2Note1': {
    en: 'Navigate to the Settings section to configure global system parameters.',
    ru: 'Перейдите в раздел Настройки для конфигурации глобальных параметров системы.',
  },
  'quickStartPoint2Note2': {
    en: 'Set up your business name, logo, and contact information.',
    ru: 'Настройте название вашего бизнеса, логотип и контактную информацию.',
  },
  'quickStartPoint2Note3': {
    en: 'Configure system email templates for notifications.',
    ru: 'Настройте шаблоны электронных писем системы для уведомлений.',
  },
  'quickStartPoint2Note4': {
    en: 'Set default currency and timezone settings.',
    ru: 'Установите валюту по умолчанию и настройки часового пояса.',
  },
  'quickStartPoint2Note5': {
    en: 'Configure payment gateway integration if applicable.',
    ru: 'Настройте интеграцию платежного шлюза, если это применимо.',
  },
  'quickStartPoint2Note6': {
    en: 'Set up SMS notification services if needed.',
    ru: 'Настройте службы SMS-уведомлений при необходимости.',
  },
  'quickStartPoint2Note7': {
    en: 'Adjust security settings such as password complexity requirements.',
    ru: 'Настройте параметры безопасности, такие как требования к сложности пароля.',
  },
  'quickStartPoint2Note8': {
    en: 'Configure session timeout periods for inactive users.',
    ru: 'Настройте периоды тайм-аута сеанса для неактивных пользователей.',
  },
  
  'quickStartPoint3': {
    en: 'Adding a City',
    ru: 'Добавление города',
  },
  'quickStartPoint3Note1': {
    en: 'Navigate to the Locations section in the main menu.',
    ru: 'Перейдите в раздел Местоположения в главном меню.',
  },
  'quickStartPoint3Note2': {
    en: 'Click on the "Add City" button to create a new city.',
    ru: 'Нажмите кнопку "Добавить город" для создания нового города.',
  },
  'quickStartPoint3Note3': {
    en: 'Enter the city name, country, and region information.',
    ru: 'Введите название города, страну и информацию о регионе.',
  },
  'quickStartPoint3Note4': {
    en: 'Set the city status as active or inactive.',
    ru: 'Установите статус города как активный или неактивный.',
  },
  'quickStartPoint3Note5': {
    en: 'Add any special delivery rules for this city.',
    ru: 'Добавьте любые особые правила доставки для этого города.',
  },
  'quickStartPoint3Note6': {
    en: 'Configure tax rates specific to the city if applicable.',
    ru: 'Настройте налоговые ставки, специфичные для города, если это применимо.',
  },
  'quickStartPoint3Note7': {
    en: 'Define operational hours for this location.',
    ru: 'Определите рабочие часы для этого местоположения.',
  },
  'quickStartPoint3Note8': {
    en: 'Save the city settings and verify it appears in the city list.',
    ru: 'Сохраните настройки города и убедитесь, что он отображается в списке городов.',
  },
  
  'quickStartPoint4': {
    en: 'Adding a District',
    ru: 'Добавление района',
  },
  'quickStartPoint4Note1': {
    en: 'Select a city from the city list first.',
    ru: 'Сначала выберите город из списка городов.',
  },
  'quickStartPoint4Note2': {
    en: 'Click on "Add District" to create a new district within the selected city.',
    ru: 'Нажмите на "Добавить район" для создания нового района в выбранном городе.',
  },
  'quickStartPoint4Note3': {
    en: 'Enter the district name and description.',
    ru: 'Введите название района и описание.',
  },
  'quickStartPoint4Note4': {
    en: 'Define district boundaries using the map tool if available.',
    ru: 'Определите границы района с помощью инструмента карты, если он доступен.',
  },
  'quickStartPoint4Note5': {
    en: 'Set delivery fee specifics for this district.',
    ru: 'Установите особенности платы за доставку для этого района.',
  },
  'quickStartPoint4Note6': {
    en: 'Assign couriers who can work in this district.',
    ru: 'Назначьте курьеров, которые могут работать в этом районе.',
  },
  'quickStartPoint4Note7': {
    en: 'Configure district-specific working hours if they differ from city hours.',
    ru: 'Настройте рабочие часы, специфичные для района, если они отличаются от часов города.',
  },
  'quickStartPoint4Note8': {
    en: 'Save the district and verify it appears under the correct city.',
    ru: 'Сохраните район и убедитесь, что он отображается под правильным городом.',
  },
  
  'quickStartPoint5': {
    en: 'Adding a Courier',
    ru: 'Добавление курьера',
  },
  'quickStartPoint5Note1': {
    en: 'Navigate to the Personnel section and select "Couriers".',
    ru: 'Перейдите в раздел Персонал и выберите "Курьеры".',
  },
  'quickStartPoint5Note2': {
    en: 'Click on "Add New Courier" to create a courier account.',
    ru: 'Нажмите на "Добавить нового курьера" для создания учетной записи курьера.',
  },
  'quickStartPoint5Note3': {
    en: 'Enter personal information: name, contact details, and ID.',
    ru: 'Введите личную информацию: имя, контактные данные и ID.',
  },
  'quickStartPoint5Note4': {
    en: 'Upload required documents: ID proof, driving license, etc.',
    ru: 'Загрузите необходимые документы: удостоверение личности, водительские права и т.д.',
  },
  'quickStartPoint5Note5': {
    en: 'Assign cities and districts where the courier can operate.',
    ru: 'Назначьте города и районы, где курьер может работать.',
  },
  'quickStartPoint5Note6': {
    en: 'Set working hours and availability schedule.',
    ru: 'Установите рабочие часы и график доступности.',
  },
  'quickStartPoint5Note7': {
    en: 'Configure payment rates and commission structure.',
    ru: 'Настройте тарифы оплаты и структуру комиссий.',
  },
  'quickStartPoint5Note8': {
    en: 'Save the courier profile and assign login credentials.',
    ru: 'Сохраните профиль курьера и назначьте учетные данные для входа.',
  },
  
  'quickStartPoint6': {
    en: 'Product Groups',
    ru: 'Группы товаров',
  },
  'quickStartPoint6Note1': {
    en: 'Go to the Products section in the main menu.',
    ru: 'Перейдите в раздел Товары в главном меню.',
  },
  'quickStartPoint6Note2': {
    en: 'Select "Product Groups" and click "Add New Group".',
    ru: 'Выберите "Группы товаров" и нажмите "Добавить новую группу".',
  },
  'quickStartPoint6Note3': {
    en: 'Enter the group name and description.',
    ru: 'Введите название группы и описание.',
  },
  'quickStartPoint6Note4': {
    en: 'Upload a group image or icon if required.',
    ru: 'Загрузите изображение группы или иконку, если требуется.',
  },
  'quickStartPoint6Note5': {
    en: 'Set the group visibility status.',
    ru: 'Установите статус видимости группы.',
  },
  'quickStartPoint6Note6': {
    en: 'Define the display order in the product catalog.',
    ru: 'Определите порядок отображения в каталоге продуктов.',
  },
  'quickStartPoint6Note7': {
    en: 'Configure any special rules or discounts for this group.',
    ru: 'Настройте любые особые правила или скидки для этой группы.',
  },
  'quickStartPoint6Note8': {
    en: 'Save the group and prepare to add products to it.',
    ru: 'Сохраните группу и подготовьтесь к добавлению товаров в нее.',
  },
  
  'quickStartPoint7': {
    en: 'Product Types',
    ru: 'Типы товаров',
  },
  'quickStartPoint7Note1': {
    en: 'Go to the Products section and select "Product Types".',
    ru: 'Перейдите в раздел Товары и выберите "Типы товаров".',
  },
  'quickStartPoint7Note2': {
    en: 'Click on "Add New Type" to create a product type.',
    ru: 'Нажмите на "Добавить новый тип" для создания типа товара.',
  },
  'quickStartPoint7Note3': {
    en: 'Enter the type name and description.',
    ru: 'Введите название типа и описание.',
  },
  'quickStartPoint7Note4': {
    en: 'Assign the type to one or more product groups.',
    ru: 'Назначьте тип одной или нескольким группам товаров.',
  },
  'quickStartPoint7Note5': {
    en: 'Define attributes specific to this product type.',
    ru: 'Определите атрибуты, специфичные для этого типа товара.',
  },
  'quickStartPoint7Note6': {
    en: 'Set pricing rules and inventory tracking options.',
    ru: 'Установите правила ценообразования и параметры отслеживания запасов.',
  },
  'quickStartPoint7Note7': {
    en: 'Configure tax rules for this product type.',
    ru: 'Настройте налоговые правила для этого типа товара.',
  },
  'quickStartPoint7Note8': {
    en: 'Save the product type and verify it appears in the list.',
    ru: 'Сохраните тип товара и убедитесь, что он отображается в списке.',
  },
  
  'quickStartPoint8': {
    en: 'Adding Addresses',
    ru: 'Добавление адресов',
  },
  'quickStartPoint8Note1': {
    en: 'Navigate to the Locations section and select "Addresses".',
    ru: 'Перейдите в раздел Местоположения и выберите "Адреса".',
  },
  'quickStartPoint8Note2': {
    en: 'Click on "Add New Address" for a new delivery location.',
    ru: 'Нажмите на "Добавить новый адрес" для нового места доставки.',
  },
  'quickStartPoint8Note3': {
    en: 'Select the city and district for this address.',
    ru: 'Выберите город и район для этого адреса.',
  },
  'quickStartPoint8Note4': {
    en: 'Enter the street name, building number, and additional details.',
    ru: 'Введите название улицы, номер здания и дополнительные детали.',
  },
  'quickStartPoint8Note5': {
    en: 'Set precise coordinates using the map interface.',
    ru: 'Установите точные координаты с помощью интерфейса карты.',
  },
  'quickStartPoint8Note6': {
    en: 'Add any address-specific delivery instructions.',
    ru: 'Добавьте любые специфические для адреса инструкции по доставке.',
  },
  'quickStartPoint8Note7': {
    en: 'Tag the address with appropriate labels if needed.',
    ru: 'При необходимости пометьте адрес соответствующими метками.',
  },
  'quickStartPoint8Note8': {
    en: 'Save the address and verify it appears in the correct district.',
    ru: 'Сохраните адрес и убедитесь, что он отображается в правильном районе.',
  },
  
  'quickStartPoint9': {
    en: 'Setting Up Bots',
    ru: 'Настройка ботов',
  },
  'quickStartPoint9Note1': {
    en: 'Navigate to the Bot Management section.',
    ru: 'Перейдите в раздел Управление ботами.',
  },
  'quickStartPoint9Note2': {
    en: 'Click on "Add New Bot" to create a new bot.',
    ru: 'Нажмите на "Добавить нового бота" для создания нового бота.',
  },
  'quickStartPoint9Note3': {
    en: 'Select the platform for your bot (Telegram, WhatsApp, etc.).',
    ru: 'Выберите платформу для вашего бота (Telegram, WhatsApp и т.д.).',
  },
  'quickStartPoint9Note4': {
    en: 'Enter the bot API credentials provided by the platform.',
    ru: 'Введите учетные данные API бота, предоставленные платформой.',
  },
  'quickStartPoint9Note5': {
    en: 'Configure bot behavior and response patterns.',
    ru: 'Настройте поведение бота и шаблоны ответов.',
  },
  'quickStartPoint9Note6': {
    en: 'Set up integration with your product catalog.',
    ru: 'Настройте интеграцию с вашим каталогом продукции.',
  },
  'quickStartPoint9Note7': {
    en: 'Create automated workflows for customer interactions.',
    ru: 'Создайте автоматизированные рабочие процессы для взаимодействия с клиентами.',
  },
  'quickStartPoint9Note8': {
    en: 'Test the bot functionality before deploying it.',
    ru: 'Протестируйте функциональность бота перед его развертыванием.',
  },
  
  'quickStartPoint10': {
    en: 'Merchant Management',
    ru: 'Управление магазинами',
  },
  'quickStartPoint10Note1': {
    en: 'Access the Merchants section from the main menu.',
    ru: 'Доступ к разделу Магазины из главного меню.',
  },
  'quickStartPoint10Note2': {
    en: 'Click "Add New Merchant" to register a new store.',
    ru: 'Нажмите "Добавить новый магазин" для регистрации нового магазина.',
  },
  'quickStartPoint10Note3': {
    en: 'Enter merchant details including name, address, and contact information.',
    ru: 'Введите данные магазина, включая название, адрес и контактную информацию.',
  },
  'quickStartPoint10Note4': {
    en: 'Upload required documents and verification materials.',
    ru: 'Загрузите необходимые документы и материалы для проверки.',
  },
  'quickStartPoint10Note5': {
    en: 'Configure commission rates and payment terms.',
    ru: 'Настройте комиссионные ставки и условия оплаты.',
  },
  'quickStartPoint10Note6': {
    en: 'Set operational hours and service availability.',
    ru: 'Установите часы работы и доступность услуг.',
  },
  'quickStartPoint10Note7': {
    en: 'Assign product categories the merchant can sell.',
    ru: 'Назначьте категории товаров, которые может продавать магазин.',
  },
  'quickStartPoint10Note8': {
    en: 'Activate the merchant account when setup is complete.',
    ru: 'Активируйте учетную запись магазина после завершения настройки.',
  },
  
  'quickStartPoint11': {
    en: 'Customer Management',
    ru: 'Управление клиентами',
  },
  'quickStartPoint11Note1': {
    en: 'Go to the Clients section in the admin panel.',
    ru: 'Перейдите в раздел Клиенты в панели администратора.',
  },
  'quickStartPoint11Note2': {
    en: 'View the list of registered customers.',
    ru: 'Просмотрите список зарегистрированных клиентов.',
  },
  'quickStartPoint11Note3': {
    en: 'Search for specific customers using filters.',
    ru: 'Ищите конкретных клиентов с помощью фильтров.',
  },
  'quickStartPoint11Note4': {
    en: 'View customer profile details and order history.',
    ru: 'Просмотрите данные профиля клиента и историю заказов.',
  },
  'quickStartPoint11Note5': {
    en: 'Edit customer information if necessary.',
    ru: 'При необходимости отредактируйте информацию о клиенте.',
  },
  'quickStartPoint11Note6': {
    en: 'Manage customer account status (active, blocked, etc.).',
    ru: 'Управляйте статусом учетной записи клиента (активный, заблокированный и т.д.).',
  },
  'quickStartPoint11Note7': {
    en: 'Send notifications or special offers to customers.',
    ru: 'Отправляйте уведомления или специальные предложения клиентам.',
  },
  'quickStartPoint11Note8': {
    en: 'Review customer feedback and ratings.',
    ru: 'Просматривайте отзывы и оценки клиентов.',
  },
  
  'quickStartPoint12': {
    en: 'Order Processing',
    ru: 'Обработка заказов',
  },
  'quickStartPoint12Note1': {
    en: 'Access the Orders section to view all purchases.',
    ru: 'Доступ к разделу Заказы для просмотра всех покупок.',
  },
  'quickStartPoint12Note2': {
    en: 'Use filters to sort orders by status, date, or customer.',
    ru: 'Используйте фильтры для сортировки заказов по статусу, дате или клиенту.',
  },
  'quickStartPoint12Note3': {
    en: 'Click on an order to view its details.',
    ru: 'Нажмите на заказ, чтобы просмотреть его детали.',
  },
  'quickStartPoint12Note4': {
    en: 'Update order status as it progresses.',
    ru: 'Обновляйте статус заказа по мере его выполнения.',
  },
  'quickStartPoint12Note5': {
    en: 'Assign orders to couriers for delivery.',
    ru: 'Назначайте заказы курьерам для доставки.',
  },
  'quickStartPoint12Note6': {
    en: 'Process refunds or adjustments if needed.',
    ru: 'При необходимости обрабатывайте возвраты или корректировки.',
  },
  'quickStartPoint12Note7': {
    en: 'Track delivery progress in real-time.',
    ru: 'Отслеживайте прогресс доставки в реальном времени.',
  },
  'quickStartPoint12Note8': {
    en: 'Generate order invoices and receipts.',
    ru: 'Создавайте счета-фактуры и квитанции на заказы.',
  },
  
  'quickStartPoint13': {
    en: 'Reports and Analytics',
    ru: 'Отчеты и аналитика',
  },
  'quickStartPoint13Note1': {
    en: 'Navigate to the Analytics section in the admin panel.',
    ru: 'Перейдите в раздел Аналитика в панели администратора.',
  },
  'quickStartPoint13Note2': {
    en: 'Select from various report types: sales, inventory, courier performance, etc.',
    ru: 'Выберите из различных типов отчетов: продажи, инвентарь, эффективность курьеров и т.д.',
  },
  'quickStartPoint13Note3': {
    en: 'Set date ranges for report generation.',
    ru: 'Установите диапазоны дат для создания отчета.',
  },
  'quickStartPoint13Note4': {
    en: 'Apply filters to focus on specific data points.',
    ru: 'Примените фильтры для фокусировки на определенных точках данных.',
  },
  'quickStartPoint13Note5': {
    en: 'View graphical representations of key metrics.',
    ru: 'Просматривайте графические представления ключевых метрик.',
  },
  'quickStartPoint13Note6': {
    en: 'Export reports in various formats (PDF, CSV, Excel).',
    ru: 'Экспортируйте отчеты в различных форматах (PDF, CSV, Excel).',
  },
  'quickStartPoint13Note7': {
    en: 'Schedule regular report generation and distribution.',
    ru: 'Планируйте регулярное создание и распространение отчетов.',
  },
  'quickStartPoint13Note8': {
    en: 'Use insights to make data-driven business decisions.',
    ru: 'Используйте аналитические данные для принятия бизнес-решений на основе данных.',
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

