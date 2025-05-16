
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
    en: 'Take a deep breath — in front of you is a guide to operating this vehicle. All you need is one hour of your time and a bit of focus. On your left is a menu that contains the answer to every question you might have, complete with pictures and explanations. Remember the main rule: First, create city then districts then courier. After that, go to the address section try to upload anything — once you’re comfortable, you can connect the bot. I promise, it won’t be difficult.',
    ru: 'Выдохни, перед тобой путиводитель по управлению данным автомобилем. Все что тебе нужно это час времени и внимательность, слева от тебя меню в котором есть ответ на каждый твой вопрос с картиночками и пояснениями. Запомни главное правило - создаем сначла город, потом районы, потом курьера, потом идем в раздел адреса пробуем что то выложить и уже как освоились подключаем бота. Отвечаю сложно не будет.',
  },
  // Image alt texts
  'Laptop computer showing admin interface': {
    en: 'Laptop computer showing admin interface',
    ru: 'Ноутбук с интерфейсом админ-панели',
  },
  'Monitor showing programming code': {
    en: 'Monitor showing programming code',
    ru: 'Монитор с программным кодом',
  },
  'Person using laptop computer': {
    en: 'Person using laptop computer',
    ru: 'Человек использует ноутбук',
  },
  'Code on computer screen': {
    en: 'Code on computer screen',
    ru: 'Код на экране компьютера',
  },
  // How to Add City page
  'cityAddDescription': {
    en: 'To add a new city to the admin panel, follow these steps:',
    ru: 'Чтобы добавить новый город в панель администратора, выполните следующие действия:',
  },
  'cityStep1': {
    en: 'Navigate to the "STOCK (СКЛАД-if its in russian)" section in the top navigation bar',
    ru: 'Перейдите в раздел "СКЛАД" в верхней панели навигации',
  },
  'cityStep2': {
    en: 'Click on "CITIES" from dropdown menu',
    ru: 'Нажмите на выпадающее меню "ГОРОДА"',
  },
  'cityStep3': {
    en: 'Press "Add city" on the top right of the page',
    ru: 'Нажимай "Добавить город" справа сверху есть кнопка',
  },
  'cityStep4': {
    en: 'Here you need to fill out all info about your city',
    ru: 'Теперь нужно заполнить инфу о городе',
  },
  'cityStep5': {
    en: 'Enter the city name',
    ru: 'Введи имя города',
  },
  'cityField1': {
    en: 'tick (доступен для продаж) this will make city available for purchases we just didnt translate this button to english',
    ru: 'поставь галочку у -ДОСТУПЕН ДЛЯ ПРОДАЖ что бы клиенты видели твой город при покупках',
  },
  'cityField2': {
    en: 'tick (is active for pre-orders) if you need it to be ready for preorders',
    ru: 'поставь галочку у -ДОСТУПЕН ДЛЯ ПРЕДЗАКАЗОВ если тебе вообще нужно такое',
  },
  'cityField3': {
    en: 'In merchant section select your store name that you would like to add this city to',
    ru: 'выбери магаз к которому хочешь что бы относился твой город',
  },
  'cityField4': {
    en: 'sort order 300 - man remember if you make it 301 your city goes up in your bot if 299 it goes down in order, that works for all sort orders where possible',
    ru: 'порядок сортировки по дефолту 300 если поставишь 301 этот город будет выше остальных в боте если 299 то ниже, запомни это правило работает для всего порядка сортировки',
  },
  'cityStep6': {
    en: 'Save and add another - you will save this city and have an option to add another without returning to the main menu. Save and continue editing - you will just stay on same page. Save - info will be saved and you will go to the cities menu. (works everywhere - remember this buttons) ',
    ru: 'Сохранить и добавть еще - останешься на этой же странице сможешь добавить еще город, сохранить и продолжить редактирование - сохранишься и останешся на этом же городе. Сохранить - перейдешь в меню в котором был до этого и сохранишь инфу, запомни эти кнопки они везде работают одинаково и помогают тебе не сойти с ума.',
  },
  'importantNote': {
    en: 'Important Note',
    ru: 'Важное примечание',
  },
  'cityImportantNote': {
    en: 'Make sure that each city has a unique name to avoid conflicts in the system.',
    ru: 'Убедитесь, что каждый город имеет уникальное название, чтобы избежать конфликтов в системе.',
  },
  // District page translations
  'districtDescription': {
    en: 'To add a new district to a city in the admin panel, follow these steps:',
    ru: 'Для добавления нового района в город выполните следующие шаги:',
  },
  'districtStep1': {
    en: 'Navigate to the "MAIN" section in the top navigation bar',
    ru: 'Перейдите в раздел "ГЛАВНАЯ" в верхней панели навигации',
  },
  'districtStep2': {
    en: 'Click on "MERCHANTS" dropdown menu',
    ru: 'Нажмите на выпадающее меню "ТОРГОВЦЫ"',
  },
  'districtStep3': {
    en: 'Select "Districts" from the dropdown options',
    ru: 'Выберите "Районы" из выпадающего меню',
  },
  'districtStep4': {
    en: 'Click the "Add New District" button in the top right corner',
    ru: 'Нажмите кнопку "Добавить новый район" в правом верхнем углу',
  },
  'districtStep5': {
    en: 'Fill in the required fields:',
    ru: 'Заполните необходимые поля:',
  },
  'districtField1': {
    en: 'District Name',
    ru: 'Название района',
  },
  'districtField2': {
    en: 'Select the City (this district belongs to)',
    ru: 'Выберите город (к которому принадлежит этот район)',
  },
  'districtField3': {
    en: 'Set boundaries (optional)',
    ru: 'Установить границы (необязательно)',
  },
  'districtField4': {
    en: 'Status (Active/Inactive)',
    ru: 'Статус (Активен/Неактивен)',
  },
  'districtStep6': {
    en: 'Click "Save" to add the new district to the system',
    ru: 'Нажмите "Сохранить" чтобы добавить новый район в систему',
  },
  'districtProTip': {
    en: 'Pro Tip',
    ru: 'Совет профессионала',
  },
  'districtProTipText': {
    en: 'You can import district boundaries from a GeoJSON file by clicking the "Import Boundaries" button on the district creation form.',
    ru: 'Вы можете импортировать границы района из файла GeoJSON, нажав кнопку "Импортировать границы" в форме создания района.',
  },
  // Courier page translations
  'courierDescription': {
    en: 'Adding a new courier to the system is essential for delivery operations. Follow these steps:',
    ru: 'Добавление нового курьера в систему необходимо для осуществления доставки. Следуйте этим шагам:',
  },
  'courierStep1': {
    en: 'Navigate to the "STAFF" section in the main navigation bar',
    ru: 'Перейдите в раздел "ПЕРСОНАЛ" в главной панели навигации',
  },
  'courierStep2': {
    en: 'Click on the "Couriers" tab',
    ru: 'Нажмите на вкладку "Курьеры"',
  },
  'courierStep3': {
    en: 'Click the "Add New Courier" button',
    ru: 'Нажмите кнопку "Добавить нового курьера"',
  },
  'courierStep4': {
    en: 'Fill in the required courier information:',
    ru: 'Заполните необходимую информацию о курьере:',
  },
  'courierField1': {
    en: 'Full Name',
    ru: 'Полное имя',
  },
  'courierField2': {
    en: 'Contact Number',
    ru: 'Контактный номер',
  },
  'courierField3': {
    en: 'Email Address',
    ru: 'Адрес электронной почты',
  },
  'courierField4': {
    en: 'Assigned City/District',
    ru: 'Назначенный город/район',
  },
  'courierField5': {
    en: 'Working Hours',
    ru: 'Рабочие часы',
  },
  'courierField6': {
    en: 'Transportation Type',
    ru: 'Тип транспорта',
  },
  'courierField7': {
    en: 'Upload ID Document (passport/driver\'s license)',
    ru: 'Загрузить документ, удостоверяющий личность (паспорт/водительские права)',
  },
  'courierStep5': {
    en: 'Set courier status (Active/Inactive)',
    ru: 'Установите статус курьера (Активен/Неактивен)',
  },
  'courierStep6': {
    en: 'Generate login credentials for the courier app',
    ru: 'Создайте учетные данные для входа в приложение курьера',
  },
  'courierStep7': {
    en: 'Click "Save" to add the new courier',
    ru: 'Нажмите "Сохранить", чтобы добавить нового курьера',
  },
  'courierNote': {
    en: 'Important Security Note',
    ru: 'Важное примечание по безопасности',
  },
  'courierNoteText': {
    en: 'Always verify the identity documents of each courier before activating their account. All document uploads are encrypted and stored securely.',
    ru: 'Всегда проверяйте документы, удостоверяющие личность каждого курьера, прежде чем активировать его учетную запись. Все загруженные документы шифруются и хранятся в безопасности.',
  },
  // Product Group translations
  'productGroupDescription': {
    en: 'Product groups help you organize your catalog efficiently. Here\'s how to create a new product group:',
    ru: 'Группы продуктов помогают вам эффективно организовать ваш каталог. Вот как создать новую группу продуктов:',
  },
  'productGroupStep1': {
    en: 'Navigate to the "СКЛАД" (Inventory) section in the main navigation',
    ru: 'Перейдите в раздел "СКЛАД" в главной навигации',
  },
  'productGroupStep2': {
    en: 'Select "Product Groups" from the submenu',
    ru: 'Выберите "Группы продуктов" из подменю',
  },
  'productGroupStep3': {
    en: 'Click on the "Create New Group" button',
    ru: 'Нажмите на кнопку "Создать новую группу"',
  },
  'productGroupStep4': {
    en: 'Fill in the group details:',
    ru: 'Заполните детали группы:',
  },
  'productGroupField1': {
    en: 'Group Name (will be visible to customers)',
    ru: 'Название группы (будет видно клиентам)',
  },
  'productGroupField2': {
    en: 'Group Description',
    ru: 'Описание группы',
  },
  'productGroupField3': {
    en: 'Select Parent Group (if it\'s a subgroup)',
    ru: 'Выберите родительскую группу (если это подгруппа)',
  },
  'productGroupField4': {
    en: 'Upload Group Image (optional)',
    ru: 'Загрузите изображение группы (необязательно)',
  },
  'productGroupField5': {
    en: 'Set Group Priority (for display order)',
    ru: 'Установите приоритет группы (для порядка отображения)',
  },
  'productGroupStep5': {
    en: 'Configure visibility settings:',
    ru: 'Настройте параметры видимости:',
  },
  'productGroupVisibility1': {
    en: 'Visible in store (yes/no)',
    ru: 'Видимость в магазине (да/нет)',
  },
  'productGroupVisibility2': {
    en: 'Visible in app (yes/no)',
    ru: 'Видимость в приложении (да/нет)',
  },
  'productGroupVisibility3': {
    en: 'Visible in website (yes/no)',
    ru: 'Видимость на веб-сайте (да/нет)',
  },
  'productGroupStep6': {
    en: 'Click "Save" to create the product group',
    ru: 'Нажмите "Сохранить", чтобы создать группу продуктов',
  },
  'productGroupTip': {
    en: 'Organization Tip',
    ru: 'Совет по организации',
  },
  'productGroupTipText': {
    en: 'Create a logical hierarchical structure for your product groups. This helps both in inventory management and improves customer navigation experience.',
    ru: 'Создавайте логическую иерархическую структуру для ваших групп продуктов. Это помогает как в управлении запасами, так и улучшает опыт навигации клиентов.',
  },
  // Product Types translations
  'productTypeDescription': {
    en: 'Product types define the attributes and behavior of products. Here\'s how to create them:',
    ru: 'Типы продуктов определяют атрибуты и поведение продуктов. Вот как их создавать:',
  },
  'productTypeStep1': {
    en: 'Navigate to the "СКЛАД" (Inventory) section in the main navigation',
    ru: 'Перейдите в раздел "СКЛАД" в главной навигации',
  },
  'productTypeStep2': {
    en: 'Select "Product Types" from the submenu',
    ru: 'Выберите "Типы продуктов" из подменю',
  },
  'productTypeStep3': {
    en: 'Click the "Create New Product Type" button',
    ru: 'Нажмите кнопку "Создать новый тип продукта"',
  },
  'productTypeStep4': {
    en: 'Enter the basic information:',
    ru: 'Введите основную информацию:',
  },
  'productTypeField1': {
    en: 'Type Name (e.g., Digital, Physical, Service)',
    ru: 'Название типа (например, Цифровой, Физический, Услуга)',
  },
  'productTypeField2': {
    en: 'Type Description',
    ru: 'Описание типа',
  },
  'productTypeStep5': {
    en: 'Configure the attributes for this product type:',
    ru: 'Настройте атрибуты для этого типа продукта:',
  },
  'productTypeAttr1': {
    en: 'Add custom fields (size, color, weight, etc.)',
    ru: 'Добавьте настраиваемые поля (размер, цвет, вес и т.д.)',
  },
  'productTypeAttr2': {
    en: 'Specify which fields are required',
    ru: 'Укажите, какие поля являются обязательными',
  },
  'productTypeAttr3': {
    en: 'Set field validation rules',
    ru: 'Установите правила проверки полей',
  },
  'productTypeStep6': {
    en: 'Configure inventory tracking settings:',
    ru: 'Настройте параметры отслеживания запасов:',
  },
  'productTypeInv1': {
    en: 'Track inventory (yes/no)',
    ru: 'Отслеживать запасы (да/нет)',
  },
  'productTypeInv2': {
    en: 'Allow backorders (yes/no)',
    ru: 'Разрешить отложенные заказы (да/нет)',
  },
  'productTypeInv3': {
    en: 'Low stock threshold',
    ru: 'Порог низкого запаса',
  },
  'productTypeStep7': {
    en: 'Set shipping and tax properties:',
    ru: 'Установите свойства доставки и налогов:',
  },
  'productTypeShip1': {
    en: 'Requires shipping (yes/no)',
    ru: 'Требует доставки (да/нет)',
  },
  'productTypeShip2': {
    en: 'Tax category',
    ru: 'Налоговая категория',
  },
  'productTypeStep8': {
    en: 'Click "Save" to create the product type',
    ru: 'Нажмите "Сохранить" для создания типа продукта',
  },
  'productTypeTip': {
    en: 'Advanced Tip',
    ru: 'Расширенный совет',
  },
  'productTypeTipText': {
    en: 'Product types can inherit attributes from other types. Use this feature to create specialized subtypes without duplicating configuration work.',
    ru: 'Типы продуктов могут наследовать атрибуты от других типов. Используйте эту функцию для создания специализированных подтипов без дублирования работы по настройке.',
  },
  // Address translations
  'addressDescription': {
    en: 'Adding addresses is essential for delivery operations. Follow these steps to add a new address:',
    ru: 'Добавление адресов необходимо для операций доставки. Следуйте этим шагам, чтобы добавить новый адрес:',
  },
  'addressStep1': {
    en: 'Click on "ДОБАВИТЬ АДРЕСА" in the main navigation bar',
    ru: 'Нажмите на "ДОБАВИТЬ АДРЕСА" в главной панели навигации',
  },
  'addressStep2': {
    en: 'In the address management screen, click "Add New Address"',
    ru: 'На экране управления адресами нажмите "Добавить новый адрес"',
  },
  'addressStep3': {
    en: 'Enter the address details:',
    ru: 'Введите данные адреса:',
  },
  'addressField1': {
    en: 'Building Number and Street Name',
    ru: 'Номер здания и название улицы',
  },
  'addressField2': {
    en: 'Apartment/Suite/Unit (if applicable)',
    ru: 'Квартира/Офис (если применимо)',
  },
  'addressField3': {
    en: 'Select City (from previously added cities)',
    ru: 'Выберите город (из ранее добавленных городов)',
  },
  'addressField4': {
    en: 'Select District (from previously added districts)',
    ru: 'Выберите район (из ранее добавленных районов)',
  },
  'addressField5': {
    en: 'Postal/ZIP Code',
    ru: 'Почтовый индекс',
  },
  'addressField6': {
    en: 'Additional Instructions (entry codes, landmarks, etc.)',
    ru: 'Дополнительные инструкции (коды входа, ориентиры и т.д.)',
  },
  'addressStep4': {
    en: 'Verify the address on the map:',
    ru: 'Проверьте адрес на карте:',
  },
  'addressMap1': {
    en: 'The system will automatically geocode the address',
    ru: 'Система автоматически геокодирует адрес',
  },
  'addressMap2': {
    en: 'Adjust the pin location manually if needed',
    ru: 'При необходимости отрегулируйте местоположение метки вручную',
  },
  'addressMap3': {
    en: 'Confirm the location is accurate',
    ru: 'Подтвердите, что местоположение точное',
  },
  'addressStep5': {
    en: 'Assign the address (optional):',
    ru: 'Назначьте адрес (необязательно):',
  },
  'addressAssign1': {
    en: 'Associate with a customer',
    ru: 'Связать с клиентом',
  },
  'addressAssign2': {
    en: 'Associate with a merchant',
    ru: 'Связать с продавцом',
  },
  'addressAssign3': {
    en: 'Mark as warehouse/distribution point',
    ru: 'Отметить как склад/пункт распределения',
  },
  'addressStep6': {
    en: 'Set address status (Active/Inactive)',
    ru: 'Установите статус адреса (Активен/Неактивен)',
  },
  'addressStep7': {
    en: 'Click "Save" to add the address to the system',
    ru: 'Нажмите "Сохранить", чтобы добавить адрес в систему',
  },
  'addressBulk': {
    en: 'Bulk Import',
    ru: 'Массовый импорт',
  },
  'addressBulkText': {
    en: 'Need to add multiple addresses? Use the "Bulk Import" feature with a CSV file containing all address details in the specified format.',
    ru: 'Нужно добавить несколько адресов? Используйте функцию "Массовый импорт" с файлом CSV, содержащим все данные адресов в указанном формате.',
  },
  // Bot translations
  'botDescription': {
    en: 'Messaging bots can automate customer interactions. Here\'s how to set up a new bot:',
    ru: 'Боты для обмена сообщениями могут автоматизировать взаимодействие с клиентами. Вот как настроить нового бота:',
  },
  'botStep1': {
    en: 'Navigate to the "БОТЫ/КАНАЛЫ" section in the main navigation',
    ru: 'Перейдите в раздел "БОТЫ/КАНАЛЫ" в главной навигации',
  },
  'botStep2': {
    en: 'Click on "Add New Bot"',
    ru: 'Нажмите на "Добавить нового бота"',
  },
  'botStep3': {
    en: 'Select the bot platform:',
    ru: 'Выберите платформу бота:',
  },
  'botPlatform1': {
    en: 'Telegram',
    ru: 'Telegram',
  },
  'botPlatform2': {
    en: 'WhatsApp',
    ru: 'WhatsApp',
  },
  'botPlatform3': {
    en: 'Facebook Messenger',
    ru: 'Facebook Messenger',
  },
  'botPlatform4': {
    en: 'Custom API',
    ru: 'Пользовательский API',
  },
  'botStep4': {
    en: 'Configure bot credentials:',
    ru: 'Настройте учетные данные бота:',
  },
  'botCred1': {
    en: 'Bot Name',
    ru: 'Имя бота',
  },
  'botCred2': {
    en: 'API Token/Key',
    ru: 'API Токен/Ключ',
  },
  'botCred3': {
    en: 'Bot Username (if applicable)',
    ru: 'Имя пользователя бота (если применимо)',
  },
  'botCred4': {
    en: 'Webhook URL (system will generate this)',
    ru: 'URL вебхука (система сгенерирует его)',
  },
  'botStep5': {
    en: 'Configure bot behavior:',
    ru: 'Настройте поведение бота:',
  },
  'botBehavior1': {
    en: 'Welcome Message',
    ru: 'Приветственное сообщение',
  },
  'botBehavior2': {
    en: 'Menu Structure',
    ru: 'Структура меню',
  },
  'botBehavior3': {
    en: 'Response Templates',
    ru: 'Шаблоны ответов',
  },
  'botBehavior4': {
    en: 'Error Messages',
    ru: 'Сообщения об ошибках',
  },
  'botStep6': {
    en: 'Set up integrations:',
    ru: 'Настройте интеграции:',
  },
  'botInt1': {
    en: 'Connect to product catalog',
    ru: 'Подключение к каталогу продуктов',
  },
  'botInt2': {
    en: 'Connect to order system',
    ru: 'Подключение к системе заказов',
  },
  'botInt3': {
    en: 'Set up payment methods',
    ru: 'Настройка способов оплаты',
  },
  'botStep7': {
    en: 'Create conversation flows:',
    ru: 'Создайте потоки разговоров:',
  },
  'botFlow1': {
    en: 'Define chat scenarios',
    ru: 'Определите сценарии чата',
  },
  'botFlow2': {
    en: 'Set up automated responses',
    ru: 'Настройте автоматические ответы',
  },
  'botFlow3': {
    en: 'Configure when to transfer to human support',
    ru: 'Настройте, когда передавать на поддержку человеком',
  },
  'botStep8': {
    en: 'Test the bot in sandbox mode',
    ru: 'Протестируйте бота в режиме песочницы',
  },
  'botStep9': {
    en: 'Activate the bot when ready',
    ru: 'Активируйте бота, когда он будет готов',
  },
  'botNote': {
    en: 'Monitoring Note',
    ru: 'Примечание по мониторингу',
  },
  'botNoteText': {
    en: 'After activating a bot, monitor its performance in the "Bot Analytics" section to track user engagement, common queries, and success rates.',
    ru: 'После активации бота следите за его производительностью в разделе "Аналитика бота", чтобы отслеживать вовлеченность пользователей, распространенные запросы и показатели успеха.',
  },
  // Add more translation keys for other pages here
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
