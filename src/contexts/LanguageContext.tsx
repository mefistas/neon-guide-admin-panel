
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

  // Merchants page translations
  'merchantsDescription': {
    en: 'Managing merchants in your admin panel:',
    ru: 'Управление магазинами в вашей админ панели:',
  },
  'merchantsStep1': {
    en: 'Access the Merchants section from the main navigation',
    ru: 'Перейдите в раздел Магазины в главной навигации',
  },
  'merchantsStep2': {
    en: 'View the list of all registered merchants',
    ru: 'Просмотрите список всех зарегистрированных магазинов',
  },
  'merchantsStep3': {
    en: 'Click "Add New Merchant" to register a new store',
    ru: 'Нажмите "Добавить новый магазин" для регистрации нового магазина',
  },
  'merchantsStep4': {
    en: 'Fill in the required merchant information',
    ru: 'Заполните необходимую информацию о магазине',
  },
  'merchantsStep5': {
    en: 'Configure merchant settings:',
    ru: 'Настройте параметры магазина:',
  },
  'merchantsField1': {
    en: 'Commission rates and payment terms',
    ru: 'Комиссионные ставки и условия оплаты',
  },
  'merchantsField2': {
    en: 'Operating hours and service availability',
    ru: 'Часы работы и доступность услуг',
  },
  'merchantsField3': {
    en: 'Product categories the merchant can sell',
    ru: 'Категории товаров, которые может продавать магазин',
  },
  'merchantsField4': {
    en: 'Delivery zones and restrictions',
    ru: 'Зоны доставки и ограничения',
  },
  'merchantsStep6': {
    en: 'Save changes and activate the merchant account',
    ru: 'Сохраните изменения и активируйте учетную запись магазина',
  },
  'merchantsNote': {
    en: 'Important Note',
    ru: 'Важное примечание',
  },
  'merchantsNoteText': {
    en: 'Always verify merchant documentation before activation to ensure compliance with platform policies and local regulations.',
    ru: 'Всегда проверяйте документацию магазина перед активацией, чтобы обеспечить соответствие политикам платформы и местным нормативам.',
  },
  'merchantsImage1': {
    en: 'Merchant management dashboard',
    ru: 'Панель управления магазинами',
  },
  'merchantsImage2': {
    en: 'Adding a new merchant',
    ru: 'Добавление нового магазина',
  },
  'merchantsImage3': {
    en: 'Merchant profile settings',
    ru: 'Настройки профиля магазина',
  },
  'merchantsImage4': {
    en: 'Merchant analytics view',
    ru: 'Просмотр аналитики магазина',
  },

  // Master Klad page translations
  'masterKladDescription': {
    en: 'Managing the Master Klad system:',
    ru: 'Управление системой Мастер Клад:',
  },
  'masterKladStep1': {
    en: 'Navigate to the Master Klad section in the admin panel',
    ru: 'Перейдите в раздел Мастер Клад в панели администратора',
  },
  'masterKladStep2': {
    en: 'View current Master Klad entries and statuses',
    ru: 'Просмотрите текущие записи и статусы Мастер Клада',
  },
  'masterKladStep3': {
    en: 'Create a new Master Klad entry when needed',
    ru: 'Создайте новую запись Мастер Клада при необходимости',
  },
  'masterKladStep4': {
    en: 'Assign appropriate staff to manage the entry',
    ru: 'Назначьте соответствующий персонал для управления записью',
  },
  'masterKladStep5': {
    en: 'Configure Master Klad settings:',
    ru: 'Настройте параметры Мастер Клада:',
  },
  'masterKladField1': {
    en: 'Location coordinates and description',
    ru: 'Координаты местоположения и описание',
  },
  'masterKladField2': {
    en: 'Access permissions and security levels',
    ru: 'Разрешения доступа и уровни безопасности',
  },
  'masterKladField3': {
    en: 'Inventory tracking and alerts',
    ru: 'Отслеживание инвентаря и оповещения',
  },
  'masterKladField4': {
    en: 'Schedule and rotation settings',
    ru: 'Настройки расписания и ротации',
  },
  'masterKladStep6': {
    en: 'Save changes and activate the Master Klad entry',
    ru: 'Сохраните изменения и активируйте запись Мастер Клада',
  },
  'masterKladNote': {
    en: 'Security Note',
    ru: 'Примечание по безопасности',
  },
  'masterKladNoteText': {
    en: 'Ensure that Master Klad information is shared only with authorized personnel and through secure channels.',
    ru: 'Убедитесь, что информация о Мастер Кладе передается только авторизованному персоналу и по защищенным каналам.',
  },
  'masterKladImage1': {
    en: 'Master Klad management interface',
    ru: 'Интерфейс управления Мастер Кладом',
  },
  'masterKladImage2': {
    en: 'Creating a new Master Klad entry',
    ru: 'Создание новой записи Мастер Клада',
  },
  'masterKladImage3': {
    en: 'Master Klad location management',
    ru: 'Управление местоположением Мастер Клада',
  },
  'masterKladImage4': {
    en: 'Master Klad security settings',
    ru: 'Настройки безопасности Мастер Клада',
  },

  // Custom Bot page translations
  'customBotDescription': {
    en: 'Customizing and configuring your bot:',
    ru: 'Настройка и конфигурация вашего бота:',
  },
  'customBotStep1': {
    en: 'Navigate to the Custom Bot section in the admin panel',
    ru: 'Перейдите в раздел Кастомизация бота в панели администратора',
  },
  'customBotStep2': {
    en: 'View your current bot configuration and settings',
    ru: 'Просмотрите текущую конфигурацию и настройки вашего бота',
  },
  'customBotStep3': {
    en: 'Choose which platform to customize your bot for',
    ru: 'Выберите, для какой платформы настроить вашего бота',
  },
  'customBotStep4': {
    en: 'Select the bot features you want to enable',
    ru: 'Выберите функции бота, которые вы хотите включить',
  },
  'customBotStep5': {
    en: 'Configure bot behavior:',
    ru: 'Настройте поведение бота:',
  },
  'customBotField1': {
    en: 'Welcome messages and greetings',
    ru: 'Приветственные сообщения и приветствия',
  },
  'customBotField2': {
    en: 'Menu structure and command responses',
    ru: 'Структура меню и ответы на команды',
  },
  'customBotField3': {
    en: 'Automated workflows and actions',
    ru: 'Автоматизированные рабочие процессы и действия',
  },
  'customBotField4': {
    en: 'Integration with product catalog and orders',
    ru: 'Интеграция с каталогом продукции и заказами',
  },
  'customBotStep6': {
    en: 'Test the customized bot before deploying to production',
    ru: 'Протестируйте настроенного бота перед развертыванием в рабочей среде',
  },
  'customBotNote': {
    en: 'Performance Tip',
    ru: 'Совет по производительности',
  },
  'customBotNoteText': {
    en: 'Complex bot configurations may impact response times. Start with essential features and expand gradually as needed.',
    ru: 'Сложные конфигурации бота могут повлиять на время отклика. Начните с основных функций и постепенно расширяйте по мере необходимости.',
  },
  'customBotImage1': {
    en: 'Bot customization dashboard',
    ru: 'Панель настройки бота',
  },
  'customBotImage2': {
    en: 'Bot menu configuration',
    ru: 'Конфигурация меню бота',
  },
  'customBotImage3': {
    en: 'Bot response templates',
    ru: 'Шаблоны ответов бота',
  },
  'customBotImage4': {
    en: 'Bot testing interface',
    ru: 'Интерфейс тестирования бота',
  },

  // Workers page translations
  'workersDescription': {
    en: 'Managing workers in your admin panel:',
    ru: 'Управление сотрудниками в вашей админ панели:',
  },
  'workersStep1': {
    en: 'Access the Workers section from the main navigation',
    ru: 'Перейдите в раздел Сотрудники в главной навигации',
  },
  'workersStep2': {
    en: 'View the list of all registered workers',
    ru: 'Просмотрите список всех зарегистрированных сотрудников',
  },
  'workersStep3': {
    en: 'Click "Add New Worker" to register a new employee',
    ru: 'Нажмите "Добавить нового сотрудника" для регистрации нового работника',
  },
  'workersStep4': {
    en: 'Fill in the required worker information',
    ru: 'Заполните необходимую информацию о сотруднике',
  },
  'workersStep5': {
    en: 'Configure worker settings:',
    ru: 'Настройте параметры сотрудника:',
  },
  'workersField1': {
    en: 'Role and access permissions',
    ru: 'Роль и разрешения доступа',
  },
  'workersField2': {
    en: 'Working hours and availability',
    ru: 'Рабочие часы и доступность',
  },
  'workersField3': {
    en: 'Salary and commission structure',
    ru: 'Структура зарплаты и комиссий',
  },
  'workersField4': {
    en: 'Task assignments and responsibilities',
    ru: 'Назначение задач и обязанности',
  },
  'workersStep6': {
    en: 'Save changes and activate the worker account',
    ru: 'Сохраните изменения и активируйте учетную запись сотрудника',
  },
  'workersNote': {
    en: 'Security Reminder',
    ru: 'Напоминание о безопасности',
  },
  'workersNoteText': {
    en: 'Regularly review worker access permissions and update them based on current roles and responsibilities.',
    ru: 'Регулярно проверяйте разрешения доступа сотрудников и обновляйте их в соответствии с текущими ролями и обязанностями.',
  },
  'workersImage1': {
    en: 'Workers management dashboard',
    ru: 'Панель управления сотрудниками',
  },
  'workersImage2': {
    en: 'Adding a new worker',
    ru: 'Добавление нового сотрудника',
  },
  'workersImage3': {
    en: 'Worker profile settings',
    ru: 'Настройки профиля сотрудника',
  },
  'workersImage4': {
    en: 'Worker performance analytics',
    ru: 'Аналитика производительности сотрудников',
  },

  // Clients page translations
  'clientsDescription': {
    en: 'Managing clients in your admin panel:',
    ru: 'Управление клиентами в вашей админ панели:',
  },
  'clientsStep1': {
    en: 'Access the Clients section from the main navigation',
    ru: 'Перейдите в раздел Клиенты в главной навигации',
  },
  'clientsStep2': {
    en: 'View the list of all registered clients',
    ru: 'Просмотрите список всех зарегистрированных клиентов',
  },
  'clientsStep3': {
    en: 'Use filters to find specific clients by name, email, or other criteria',
    ru: 'Используйте фильтры для поиска определенных клиентов по имени, электронной почте или другим критериям',
  },
  'clientsStep4': {
    en: 'Click on a client to view their detailed profile',
    ru: 'Нажмите на клиента, чтобы просмотреть их подробный профиль',
  },
  'clientsStep5': {
    en: 'Manage client information:',
    ru: 'Управление информацией о клиенте:',
  },
  'clientsField1': {
    en: 'Contact details and preferences',
    ru: 'Контактные данные и предпочтения',
  },
  'clientsField2': {
    en: 'Order history and payment records',
    ru: 'История заказов и записи платежей',
  },
  'clientsField3': {
    en: 'Loyalty status and rewards',
    ru: 'Статус лояльности и вознаграждения',
  },
  'clientsField4': {
    en: 'Account status (active, blocked, etc.)',
    ru: 'Статус учетной записи (активный, заблокированный и т.д.)',
  },
  'clientsStep6': {
    en: 'Save changes made to client profiles',
    ru: 'Сохраните изменения, внесенные в профили клиентов',
  },
  'clientsNote': {
    en: 'Data Protection',
    ru: 'Защита данных',
  },
  'clientsNoteText': {
    en: 'Ensure all client data handling complies with applicable data protection regulations such as GDPR or local privacy laws.',
    ru: 'Убедитесь, что обработка всех данных клиентов соответствует применимым нормам защиты данных, таким как GDPR или местные законы о конфиденциальности.',
  },
  'clientsImage1': {
    en: 'Clients management dashboard',
    ru: 'Панель управления клиентами',
  },
  'clientsImage2': {
    en: 'Client profile view',
    ru: 'Просмотр профиля клиента',
  },
  'clientsImage3': {
    en: 'Client order history',
    ru: 'История заказов клиента',
  },
  'clientsImage4': {
    en: 'Client loyalty program settings',
    ru: 'Настройки программы лояльности клиента',
  },

  // Add translations for Purchases page
  'purchasesDescription': {
    en: 'Managing purchases in your admin panel:',
    ru: 'Управление покупками в вашей админ панели:',
  },
  'purchasesStep1': {
    en: 'Access the Purchases section from the main navigation',
    ru: 'Перейдите в раздел Покупки в главной навигации',
  },
  'purchasesStep2': {
    en: 'View the list of all purchases made in the system',
    ru: 'Просмотрите список всех покупок, сделанных в системе',
  },
  'purchasesStep3': {
    en: 'Use filters to find specific purchases by date, client, or status',
    ru: 'Используйте фильтры для поиска конкретных покупок по дате, клиенту или статусу',
  },
  'purchasesStep4': {
    en: 'Click on a purchase to view detailed information',
    ru: 'Нажмите на покупку для просмотра подробной информации',
  },
  'purchasesStep5': {
    en: 'Manage purchase details:',
    ru: 'Управление деталями покупки:',
  },
  'purchasesField1': {
    en: 'Order items and quantities',
    ru: 'Позиции заказа и количество',
  },
  'purchasesField2': {
    en: 'Payment status and method',
    ru: 'Статус оплаты и способ оплаты',
  },
  'purchasesField3': {
    en: 'Shipping details and tracking',
    ru: 'Детали доставки и отслеживание',
  },
  'purchasesField4': {
    en: 'Customer information and notes',
    ru: 'Информация о клиенте и примечания',
  },
  'purchasesStep6': {
    en: 'Update purchase status or process refunds when necessary',
    ru: 'Обновите статус покупки или обработайте возвраты при необходимости',
  },
  'purchasesNote': {
    en: 'Order Tracking',
    ru: 'Отслеживание заказов',
  },
  'purchasesNoteText': {
    en: 'Keep customers informed about their purchase status by ensuring that tracking updates are promptly reflected in the system.',
    ru: 'Информируйте клиентов о статусе их покупки, гарантируя, что обновления отслеживания оперативно отображаются в системе.',
  },

  // Add translations for Balance Top Ups page
  'balanceTopUpsDescription': {
    en: 'Managing balance top-ups in your admin panel:',
    ru: 'Управление пополнениями баланса в вашей админ панели:',
  },
  'balanceTopUpsStep1': {
    en: 'Access the Balance Top Ups section from the main navigation',
    ru: 'Перейдите в раздел Пополнения балансов в главной навигации',
  },
  'balanceTopUpsStep2': {
    en: 'View the list of all balance top-up transactions',
    ru: 'Просмотрите список всех транзакций пополнения баланса',
  },
  'balanceTopUpsStep3': {
    en: 'Use filters to find specific transactions by date, client, or amount',
    ru: 'Используйте фильтры для поиска конкретных транзакций по дате, клиенту или сумме',
  },
  'balanceTopUpsStep4': {
    en: 'Click on a transaction to view detailed information',
    ru: 'Нажмите на транзакцию для просмотра подробной информации',
  },
  'balanceTopUpsStep5': {
    en: 'Manage top-up details:',
    ru: 'Управление деталями пополнения:',
  },
  'balanceTopUpsField1': {
    en: 'Transaction amount and currency',
    ru: 'Сумма транзакции и валюта',
  },
  'balanceTopUpsField2': {
    en: 'Payment method and status',
    ru: 'Способ оплаты и статус',
  },
  'balanceTopUpsField3': {
    en: 'Client account information',
    ru: 'Информация об учетной записи клиента',
  },
  'balanceTopUpsField4': {
    en: 'Bonus or promotional credits applied',
    ru: 'Примененные бонусы или промо-кредиты',
  },
  'balanceTopUpsStep6': {
    en: 'Approve pending top-ups or process refunds when necessary',
    ru: 'Одобряйте ожидающие пополнения или обрабатывайте возвраты при необходимости',
  },
  'balanceTopUpsNote': {
    en: 'Transaction Security',
    ru: 'Безопасность транзакций',
  },
  'balanceTopUpsNoteText': {
    en: 'Review unusual or high-value transactions carefully to prevent fraud and ensure compliance with anti-money laundering regulations.',
    ru: 'Тщательно проверяйте необычные или крупные транзакции для предотвращения мошенничества и обеспечения соблюдения правил борьбы с отмыванием денег.',
  },

  // Add translations for Marketing page
  'marketingDescription': {
    en: 'Managing marketing campaigns in your admin panel:',
    ru: 'Управление маркетинговыми кампаниями в вашей админ панели:',
  },
  'marketingStep1': {
    en: 'Access the Marketing section from the main navigation',
    ru: 'Перейдите в раздел Рассылки в главной навигации',
  },
  'marketingStep2': {
    en: 'View existing marketing campaigns and their performance metrics',
    ru: 'Просмотрите существующие маркетинговые кампании и их показатели эффективности',
  },
  'marketingStep3': {
    en: 'Click "Create New Campaign" to start a new marketing effort',
    ru: 'Нажмите "Создать новую кампанию" для начала новой маркетинговой кампании',
  },
  'marketingStep4': {
    en: 'Select campaign type: email, push notification, SMS, or in-app message',
    ru: 'Выберите тип кампании: email, push-уведомление, SMS или сообщение в приложении',
  },
  'marketingStep5': {
    en: 'Configure campaign settings:',
    ru: 'Настройте параметры кампании:',
  },
  'marketingField1': {
    en: 'Target audience and segmentation',
    ru: 'Целевая аудитория и сегментация',
  },
  'marketingField2': {
    en: 'Message content and design',
    ru: 'Содержание и дизайн сообщения',
  },
  'marketingField3': {
    en: 'Scheduling and frequency',
    ru: 'Планирование и частота',
  },
  'marketingField4': {
    en: 'A/B testing options',
    ru: 'Варианты A/B тестирования',
  },
  'marketingStep6': {
    en: 'Review, test, and launch your marketing campaign',
    ru: 'Проверьте, протестируйте и запустите свою маркетинговую кампанию',
  },
  'marketingNote': {
    en: 'Best Practice',
    ru: 'Лучшая практика',
  },
  'marketingNoteText': {
    en: 'Always obtain proper consent from recipients before sending marketing communications and include clear unsubscribe options in all messages.',
    ru: 'Всегда получайте надлежащее согласие от получателей перед отправкой маркетинговых сообщений и включайте четкие варианты отписки во все сообщения.',
  },

  // Add translations for Messages page
  'messagesDescription': {
    en: 'Managing messages in your admin panel:',
    ru: 'Управление сообщениями в вашей админ панели:',
  },
  'messagesStep1': {
    en: 'Access the Messages section from the main navigation',
    ru: 'Перейдите в раздел Сообщения в главной навигации',
  },
  'messagesStep2': {
    en: 'View all messages organized by conversation or contact',
    ru: 'Просмотрите все сообщения, организованные по беседам или контактам',
  },
  'messagesStep3': {
    en: 'Use filters to find specific messages by date, sender, or content',
    ru: 'Используйте фильтры для поиска конкретных сообщений по дате, отправителю или содержанию',
  },
  'messagesStep4': {
    en: 'Click on a conversation to view message history',
    ru: 'Нажмите на беседу для просмотра истории сообщений',
  },
  'messagesStep5': {
    en: 'Message management features:',
    ru: 'Функции управления сообщениями:',
  },
  'messagesField1': {
    en: 'Send and receive messages in real-time',
    ru: 'Отправляйте и получайте сообщения в реальном времени',
  },
  'messagesField2': {
    en: 'Set up automated responses for common queries',
    ru: 'Настройте автоматические ответы на часто задаваемые вопросы',
  },
  'messagesField3': {
    en: 'Forward messages to appropriate departments',
    ru: 'Перенаправляйте сообщения в соответствующие отделы',
  },
  'messagesField4': {
    en: 'Archive or flag messages for follow-up',
    ru: 'Архивируйте или отмечайте сообщения для последующего рассмотрения',
  },
  'messagesStep6': {
    en: 'Ensure timely responses to all customer inquiries',
    ru: 'Обеспечьте своевременные ответы на все запросы клиентов',
  },
  'messagesNote': {
    en: 'Communication Tip',
    ru: 'Совет по коммуникации',
  },
  'messagesNoteText': {
    en: 'Maintain a professional tone in all customer communications and establish standard response times for different types of inquiries.',
    ru: 'Поддерживайте профессиональный тон во всех коммуникациях с клиентами и устанавливайте стандартные время ответа для разных типов запросов.',
  },

  // Add translations for Web page
  'webDescription': {
    en: 'Managing web settings in your admin panel:',
    ru: 'Управление настройками веб-сайта в вашей админ панели:',
  },
  'webStep1': {
    en: 'Access the Web section from the main navigation',
    ru: 'Перейдите в раздел Веб-сайты в главной навигации',
  },
  'webStep2': {
    en: 'View your website settings and configurations',
    ru: 'Просмотрите настройки и конфигурации вашего веб-сайта',
  },
  'webStep3': {
    en: 'Click on different sections to manage specific web features',
    ru: 'Нажимайте на разные разделы для управления конкретными веб-функциями',
  },
  'webStep4': {
    en: 'Preview changes before publishing them to the live site',
    ru: 'Предварительно просматривайте изменения перед публикацией на рабочем сайте',
  },
  'webStep5': {
    en: 'Web management features:',
    ru: 'Функции управления веб-сайтом:',
  },
  'webField1': {
    en: 'Content management and page editing',
    ru: 'Управление контентом и редактирование страниц',
  },
  'webField2': {
    en: 'Theme and appearance settings',
    ru: 'Настройки темы и внешнего вида',
  },
  'webField3': {
    en: 'SEO optimization tools',
    ru: 'Инструменты оптимизации SEO',
  },
  'webField4': {
    en: 'Integration with other platform features',
    ru: 'Интеграция с другими функциями платформы',
  },
  'webStep6': {
    en: 'Publish changes to make them visible to users',
    ru: 'Опубликуйте изменения, чтобы они стали видимыми для пользователей',
  },
  'webNote': {
    en: 'Performance Consideration',
    ru: 'Рекомендация по производительности',
  },
  'webNoteText': {
    en: 'Regularly monitor your website loading speed and mobile responsiveness to ensure optimal user experience across all devices.',
    ru: 'Регулярно контролируйте скорость загрузки вашего веб-сайта и адаптивность для мобильных устройств, чтобы обеспечить оптимальный пользовательский опыт на всех устройствах.',
  },

  // Add translations for Couriers Salary page
  'couriersSalaryDescription': {
    en: 'Managing courier salaries in your admin panel:',
    ru: 'Управление зарплатами курьеров в вашей админ панели:',
  },
  'couriersSalaryStep1': {
    en: 'Access the Couriers Salary section from the main navigation',
    ru: 'Перейдите в раздел Начисления курьерам в главной навигации',
  },
  'couriersSalaryStep2': {
    en: 'View salary records for all couriers in the system',
    ru: 'Просмотрите записи о зарплате для всех курьеров в системе',
  },
  'couriersSalaryStep3': {
    en: 'Filter salary data by courier, date range, or payment status',
    ru: 'Фильтруйте данные о зарплате по курьеру, диапазону дат или статусу оплаты',
  },
  'couriersSalaryStep4': {
    en: 'Generate detailed salary reports for accounting purposes',
    ru: 'Создавайте подробные отчеты о зарплате для бухгалтерских целей',
  },
  'couriersSalaryStep5': {
    en: 'Salary management features:',
    ru: 'Функции управления зарплатой:',
  },
  'couriersSalaryField1': {
    en: 'Base pay and commission calculations',
    ru: 'Расчеты базовой оплаты и комиссий',
  },
  'couriersSalaryField2': {
    en: 'Bonus and incentive tracking',
    ru: 'Отслеживание бонусов и стимулов',
  },
  'couriersSalaryField3': {
    en: 'Payment scheduling and processing',
    ru: 'Планирование и обработка платежей',
  },
  'couriersSalaryField4': {
    en: 'Tax withholding and deductions',
    ru: 'Удержание налогов и вычеты',
  },
  'couriersSalaryStep6': {
    en: 'Approve and mark payments as processed once completed',
    ru: 'Одобряйте и отмечайте платежи как обработанные после завершения',
  },
  'couriersSalaryNote': {
    en: 'Legal Compliance',
    ru: 'Правовое соответствие',
  },
  'couriersSalaryNoteText': {
    en: 'Ensure that all salary processing complies with local labor laws and tax regulations for independent contractors or employees.',
    ru: 'Убедитесь, что вся обработка зарплаты соответствует местным трудовым законам и налоговым нормам для независимых подрядчиков или сотрудников.',
  },

  // Add translations for USDT page
  'usdtDescription': {
    en: 'Managing USDT transactions in your admin panel:',
    ru: 'Управление транзакциями USDT в вашей админ панели:',
  },
  'usdtStep1': {
    en: 'Access the USDT section from the main navigation',
    ru: 'Перейдите в раздел USDT в главной навигации',
  },
  'usdtStep2': {
    en: 'View all USDT transactions in the system',
    ru: 'Просмотрите все транзакции USDT в системе',
  },
  'usdtStep3': {
    en: 'Filter transactions by date, amount, or wallet address',
    ru: 'Фильтруйте транзакции по дате, сумме или адресу кошелька',
  },
  'usdtStep4': {
    en: 'Click on a transaction to view detailed information',
    ru: 'Нажмите на транзакцию для просмотра подробной информации',
  },
  'usdtStep5': {
    en: 'USDT management features:',
    ru: 'Функции управления USDT:',
  },
  'usdtField1': {
    en: 'Wallet balance monitoring',
    ru: 'Мониторинг баланса кошелька',
  },
  'usdtField2': {
    en: 'Transaction verification and confirmation',
    ru: 'Проверка и подтверждение транзакций',
  },
  'usdtField3': {
    en: 'Exchange rate settings and conversions',
    ru: 'Настройки обменного курса и конверсии',
  },
  'usdtField4': {
    en: 'Security controls and multi-signature options',
    ru: 'Элементы управления безопасностью и варианты мульти-подписи',
  },
  'usdtStep6': {
    en: 'Generate reports of USDT transaction activity',
    ru: 'Создавайте отчеты о активности транзакций USDT',
  },
  'usdtNote': {
    en: 'Security Alert',
    ru: 'Предупреждение безопасности',
  },
  'usdtNoteText': {
    en: 'Never share wallet private keys or seed phrases through the admin panel or any digital communication. Store backup information securely offline.',
    ru: 'Никогда не делитесь приватными ключами кошелька или фразами-паролями через панель администратора или любую цифровую коммуникацию. Храните резервную информацию безопасно в автономном режиме.',
  },

  // Add translations for Partners Exchangers page
  'partnersExchangersDescription': {
    en: 'Managing partner exchangers in your admin panel:',
    ru: 'Управление партнерами обменниками в вашей админ панели:',
  },
  'partnersExchangersStep1': {
    en: 'Access the Partners Exchangers section from the main navigation',
    ru: 'Перейдите в раздел Партнеры обменники в главной навигации',
  },
  'partnersExchangersStep2': {
    en: 'View all registered exchange partners in the system',
    ru: 'Просмотрите всех зарегистрированных партнеров-обменников в системе',
  },
  'partnersExchangersStep3': {
    en: 'Click "Add New Partner" to register a new exchange service',
    ru: 'Нажмите "Добавить нового партнера" для регистрации новой обменной службы',
  },
  'partnersExchangersStep4': {
    en: 'Enter partner details and integration parameters',
    ru: 'Введите данные партнера и параметры интеграции',
  },
  'partnersExchangersStep5': {
    en: 'Configure partner exchanger settings:',
    ru: 'Настройте параметры партнера-обменника:',
  },
  'partnersExchangersField1': {
    en: 'Exchange rates and fee structure',
    ru: 'Обменные курсы и структура комиссий',
  },
  'partnersExchangersField2': {
    en: 'API integration credentials',
    ru: 'Учетные данные интеграции API',
  },
  'partnersExchangersField3': {
    en: 'Supported currencies and payment methods',
    ru: 'Поддерживаемые валюты и способы оплаты',
  },
  'partnersExchangersField4': {
    en: 'Transaction limits and restrictions',
    ru: 'Лимиты транзакций и ограничения',
  },
  'partnersExchangersStep6': {
    en: 'Test the integration before activating it for users',
    ru: 'Протестируйте интеграцию перед активацией для пользователей',
  },
  'partnersExchangersNote': {
    en: 'Verification Requirement',
    ru: 'Требование верификации',
  },
  'partnersExchangersNoteText': {
    en: 'Verify that all exchange partners comply with relevant financial regulations and KYC/AML requirements in their operating jurisdictions.',
    ru: 'Убедитесь, что все партнеры-обменники соответствуют соответствующим финансовым нормам и требованиям KYC/AML в юрисдикциях, где они работают.',
  },

  // Image alt texts for all pages
  'webImage1': {
    en: 'Website management dashboard',
    ru: 'Панель управления веб-сайтом',
  },
  'webImage2': {
    en: 'Content editing interface',
    ru: 'Интерфейс редактирования контента',
  },
  'webImage3': {
    en: 'Website analytics view',
    ru: 'Просмотр аналитики веб-сайта',
  },
  'webImage4': {
    en: 'SEO settings interface',
    ru: 'Интерфейс настроек SEO',
  },
  'couriersSalaryImage1': {
    en: 'Courier salary dashboard',
    ru: 'Панель зарплаты курьеров',
  },
  'couriersSalaryImage2': {
    en: 'Payment processing interface',
    ru: 'Интерфейс обработки платежей',
  },
  'couriersSalaryImage3': {
    en: 'Salary report generation',
    ru: 'Создание отчета о зарплате',
  },
  'couriersSalaryImage4': {
    en: 'Courier performance metrics',
    ru: 'Метрики производительности курьеров',
  },
  'usdtImage1': {
    en: 'USDT transaction dashboard',
    ru: 'Панель транзакций USDT',
  },
  'usdtImage2': {
    en: 'Wallet management interface',
    ru: 'Интерфейс управления кошельком',
  },
  'usdtImage3': {
    en: 'Transaction verification process',
    ru: 'Процесс проверки транзакций',
  },
  'usdtImage4': {
    en: 'USDT exchange rate settings',
    ru: 'Настройки обменного курса USDT',
  },
  'partnersExchangersImage1': {
    en: 'Partners exchangers dashboard',
    ru: 'Панель партнеров обменников',
  },
  'partnersExchangersImage2': {
    en: 'Partner registration form',
    ru: 'Форма регистрации партнера',
  },
  'partnersExchangersImage3': {
    en: 'API integration settings',
    ru: 'Настройки интеграции API',
  },
  'partnersExchangersImage4': {
    en: 'Exchange rate configuration',
    ru: 'Настройка обменного курса',
  },
  'purchasesImage1': {
    en: 'Purchases management dashboard',
    ru: 'Панель управления покупками',
  },
  'purchasesImage2': {
    en: 'Order details view',
    ru: 'Просмотр деталей заказа',
  },
  'purchasesImage3': {
    en: 'Payment processing interface',
    ru: 'Интерфейс обработки платежей',
  },
  'purchasesImage4': {
    en: 'Shipping tracking system',
    ru: 'Система отслеживания доставки',
  },
  'balanceTopUpsImage1': {
    en: 'Balance top-ups dashboard',
    ru: 'Панель пополнений баланса',
  },
  'balanceTopUpsImage2': {
    en: 'Transaction details view',
    ru: 'Просмотр деталей транзакции',
  },
  'balanceTopUpsImage3': {
    en: 'Payment method selection',
    ru: 'Выбор способа оплаты',
  },
  'balanceTopUpsImage4': {
    en: 'Bonus application interface',
    ru: 'Интерфейс применения бонусов',
  },
  'marketingImage1': {
    en: 'Marketing campaigns dashboard',
    ru: 'Панель маркетинговых кампаний',
  },
  'marketingImage2': {
    en: 'Campaign creation interface',
    ru: 'Интерфейс создания кампании',
  },
  'marketingImage3': {
    en: 'Audience segmentation tool',
    ru: 'Инструмент сегментации аудитории',
  },
  'marketingImage4': {
    en: 'Campaign performance analytics',
    ru: 'Аналитика эффективности кампании',
  },
  'messagesImage1': {
    en: 'Messages management dashboard',
    ru: 'Панель управления сообщениями',
  },
  'messagesImage2': {
    en: 'Conversation thread view',
    ru: 'Просмотр цепочки беседы',
  },
  'messagesImage3': {
    en: 'Message composition interface',
    ru: 'Интерфейс составления сообщения',
  },
  'messagesImage4': {
    en: 'Automated responses configuration',
    ru: 'Настройка автоматических ответов',
  }
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
