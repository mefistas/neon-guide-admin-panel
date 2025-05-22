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

// Make sure to export the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    oneTimeDiscounts: 'Referals/Follow/1 time discounts',
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
    welcome: 'Welcome to Admin Panel Tutorial',
    selectTopic: 'Select a topic to get started:',
    quickStartShortDesc: 'Get up and running quickly with essential setup steps',
    detailedGuideShortDesc: 'Comprehensive guides for all admin panel features',
    casinoSetupShortDesc: 'Set up and configure the casino module',
    cardsPaymentsShortDesc: 'Configure and manage payment card systems',
    english: 'English',
    russian: 'Russian',
    languageSelector: 'Language',
    
    // Quick Start page content
    quickStartDescription: 'This quick start guide will help you set up and configure your admin panel in just a few steps. Follow these instructions to get your system up and running quickly.',
    
    quickStartPoint1: 'Add City',
    quickStartPoint1Note1: 'To create cities, go to the STOCK/СКЛАД section → Cities',
    quickStartPoint1Note2: 'Click the + ADD CITY button in the top right corner',
    quickStartPoint1Note3: 'In the City Name field, enter the name of the city. In the merchant select your store.',
    quickStartPoint1Note4: 'Click SAVE if you\'re adding only one city.',
    quickStartPoint1Note5: 'If you have multiple cities to add, use the SAVE AND ADD ANOTHER button.',
    quickStartPoint1Note6: '',
    quickStartPoint1Note7: '',
    quickStartPoint1Note8: '',
    
    quickStartPoint2: 'Add Districts',
    quickStartPoint2Note1: 'To create districts, go to the Districts section',
    quickStartPoint2Note2: 'Click the + ADD DISTRICT button in the top right corner',
    quickStartPoint2Note3: 'Fill in the district name',
    quickStartPoint2Note4: 'Select the city that this district belongs to from the dropdown',
    quickStartPoint2Note5: 'The sorting number controls whether the district appears higher or lower than others. By default, it\'s set to 300. To make the district appear higher, INCREASE this number (301). To make it appear lower, DECREASE this number (299).',
    quickStartPoint2Note6: 'If you need the district to be available for pre-orders, check the corresponding box',
    quickStartPoint2Note7: 'Click SAVE if you\'re adding only one district. Click SAVE AND ADD ANOTHER if you have multiple districts to add, or SAVE AND CONTINUE EDITING to stay on this page.',
    quickStartPoint2Note8: '',
    
    quickStartPoint3: 'Create Product Groups',
    quickStartPoint3Note1: 'Go to STOCK/СКЛАД → PRODUCT GROUPS, click ADD PRODUCT GROUP in the top right',
    quickStartPoint3Note2: 'The Slug is auto-generated, you can ignore this field',
    quickStartPoint3Note3: 'We recommend uploading a product image right away to avoid coming back to this section multiple times',
    quickStartPoint3Note4: 'The product group name is your product, for example COCAINE/mephedrone',
    quickStartPoint3Note5: 'This name will be displayed in the bot for customers, so write it in the desired style and language',
    quickStartPoint3Note6: 'The product description will also be visible in the bot, so write a few words about your VHQ mephedrone',
    quickStartPoint3Note7: 'Below there\'s a PRODUCT TYPES section that should also be filled out right away',
    quickStartPoint3Note8: 'PRODUCT TYPE is usually your gram measurements - in the names, write 0.5G, 1pc, 1 gram, etc. This name will be shown to the client in the bot after selecting the product, so use your preferred style and language. Here we also set the price and add as many product types as we need. Save and continue.',
    
    quickStartPoint4: 'Product Types',
    quickStartPoint4Note1: 'Go back to STOCK/СКЛАД → PRODUCT TYPES',
    quickStartPoint4Note2: 'As we can see, some product types have already been created. Let\'s click on one and see what\'s there',
    quickStartPoint4Note3: 'You don\'t need to edit anything in the main information',
    quickStartPoint4Note4: 'If your product price differs depending on the city, I recommend setting the right price for the right city in the PRODUCT PRICES BY CITY section - click on the magnifying glass, select the city and specify the price for it',
    quickStartPoint4Note5: 'Go to the COURIER/PROFIT section - it\'s worth filling everything in advance to avoid headaches later',
    quickStartPoint4Note6: 'Courier salary per unit is not per 1g but per the amount specified in this product type. If your product type is called 2g, then set the courier\'s salary for 2g. The same applies to all other items.',
    quickStartPoint4Note7: 'Set salary, penalty, purchase price, weight, or you\'ll be without accurate stats',
    quickStartPoint4Note8: 'Everything else in the PRODUCT TYPES section can be skipped for now. If something is unclear, check the more detailed guide',
    
    quickStartPoint5: 'Add Courier',
    quickStartPoint5Note1: 'To create couriers, go to Stock/СКЛАД → Couriers, click the ADD COURIER button in the top right corner. This is a mandatory step, even if you don\'t have employees, you must add one to upload addresses',
    quickStartPoint5Note2: 'Give the courier a name, select the store they belong to, you can trash talk them in the comments - they won\'t see it',
    quickStartPoint5Note3: 'Next, you see Available kinds and a menu with your product types that we\'ve already created',
    quickStartPoint5Note4: 'Select what this courier should work with (if you\'ll be adding addresses yourself, move all product types to the right for easy work)',
    quickStartPoint5Note5: 'Select everything by holding down command (or whatever your hardware uses) and click the right arrow',
    quickStartPoint5Note6: 'Save everything. We don\'t need anything else here for now',
    quickStartPoint5Note7: 'For more detailed settings, see the complete guide',
    quickStartPoint5Note8: '',
    
    quickStartPoint6: 'Add Workers',
    quickStartPoint6Note1: 'Skip this step and go to step 7 if you\'re not registering your team in the panel today',
    quickStartPoint6Note2: 'If you want to add a team, go to the WORKERS section and click the button on the right - ADD WORKER',
    quickStartPoint6Note3: 'Select the type of employee, for example courier, and save their login and password which you generate by clicking the corresponding button',
    quickStartPoint6Note4: 'Give them access to necessary cities the same way we did earlier',
    quickStartPoint6Note5: 'Check the boxes depending on the level of trust',
    quickStartPoint6Note6: 'IMPORTANT: In the worker section - either select a courier who has already been created and they will be associated with this employee\'s account, or click the plus sign and create another one specifically for them',
    quickStartPoint6Note7: 'Clicking the plus will take you to the ADD COURIER section. Repeat the entire process with settings for your employee',
    quickStartPoint6Note8: 'Everything else can be left unchanged for now. Save and pass the login/password and panel link to the employee',
    
    quickStartPoint7: 'Add MK',
    quickStartPoint7Note1: 'You can skip this step and go to step 8 if you don\'t know exactly how much weight your couriers have on hand or in storage. This step is for perfectionists',
    quickStartPoint7Note2: 'Go to the STOCK/СКЛАД - MK section',
    quickStartPoint7Note3: 'Select your store name',
    quickStartPoint7Note4: 'Select the courier who has this MK on hand',
    quickStartPoint7Note5: 'In the title, write the weight and product name for convenience (comments as desired, for example when it was given)',
    quickStartPoint7Note6: 'Save it, and now when you add addresses with a specific MK, you\'ll have clear stats on how many stashes the courier made from this MK, how many were sold, how many were not found, and so on',
    quickStartPoint7Note7: 'We\'re almost at the finish line',
    quickStartPoint7Note8: '',
    
    quickStartPoint8: 'Add Bot',
    quickStartPoint8Note1: 'It\'s time to create a bot and see what we\'ve accomplished',
    quickStartPoint8Note2: 'In Telegram, write to @BotFather with the command /newbot',
    quickStartPoint8Note3: 'Write the name you want to give the bot, example (KRAKEN)',
    quickStartPoint8Note4: 'Write the username you want to give our bot. IMPORTANT: The username must be strictly in English and end with "bot"',
    quickStartPoint8Note5: 'After this, BotFather will send you a long message with your token. This token can be copied by clicking on it, it looks something like this: 8102468:AAG1CBNxxxxxoXjeTpT5CkCdKDN4OgG4xw',
    quickStartPoint8Note6: 'After that, go to the admin panel BOTS/CHANNELS',
    quickStartPoint8Note7: 'Select WORKING BOTS, click ADD BOT in the top right',
    quickStartPoint8Note8: 'Check the box next to our store, paste the token that BotFather gave us, select the bot type (SELLER BOT). I recommend protecting with captcha by simply checking the box next to this item. Click save. Now in the bots section we can see our new bot. MAKE SURE TO CLICK THE GREEN START BUTTON at the end of all the information about your bot on the right, otherwise the bot won\'t start working. Great, go to the bot and see how it looks. To customize the bot, explore the CUSTOM BOT section, but for now all that\'s left is to add addresses and connect the necessary payment methods.',
    
    quickStartPoint9: 'Add Addresses',
    quickStartPoint9Note1: 'Go to the ADD ADDRESSES section',
    quickStartPoint9Note2: 'Here we see lists of districts that exist. Use the search if there are many. Find the right district to upload addresses and click ADD ADDRESSES',
    quickStartPoint9Note3: 'Select the courier you need - this is why we added one',
    quickStartPoint9Note4: 'Select the MK if you set them up, if not leave as is',
    quickStartPoint9Note5: 'Select the product type (name and gram size), for example if we have 5 stashes of meph singles in this district',
    quickStartPoint9Note6: 'Ignore the images section, that\'s for advanced users',
    quickStartPoint9Note7: 'Go straight to the text section, and here\'s where the bulk upload magic happens. Imagine if you have 100 singles in this district, it would be terrible to load each stash separately. Instead, upload all your stash photos to a host like https://imgbb.com, write descriptions for them and use double spaces between lines so the panel understands you\'re not loading one address but many',
    quickStartPoint9Note8: 'Example: https://imgbb.com at the specified point by coordinates [blank line] https://imgbb.com at the specified point by coordinates [blank line] https://imgbb.com at the specified point by coordinates. Now the bot sees that you\'ve uploaded three addresses for this district. Click save if there are no other gram sizes in this district, or click save and add more if there are other addresses in this district. Congratulations, you\'re excellent! What about payment options?',
    
    quickStartPoint10: 'Payment Methods',
    quickStartPoint10Note1: 'Go to STORES → ALL STORES',
    quickStartPoint10Note2: 'Click on your store name',
    quickStartPoint10Note3: 'Here you can set a cool avatar. Don\'t change anything else in this menu for now',
    quickStartPoint10Note4: 'Select EXCHANGER SETTINGS',
    quickStartPoint10Note5: 'Make sure checks are at least next to LTC and BTC. We also recommend checking USDT',
    quickStartPoint10Note6: 'Generally, check all payment methods you need',
    quickStartPoint10Note7: 'You can also choose commission at the store\'s expense at the bottom, but do we need that? Don\'t forget to save',
    quickStartPoint10Note8: 'IMPORTANT: If you selected USDT payment, for it to appear in the bot, go to ADDITIONAL - USDT TRC20 ADDRESSES - ADD USDT-TRC-20 ADDRESS - select your store and specify your usdt trc20 wallet. All orders paid this way will go directly to your wallet',
    
    quickStartPoint11: 'Next Steps',
    quickStartPoint11Note1: 'Your store is now fully automated and ready to work',
    quickStartPoint11Note2: 'All subsequent steps for more precise work and answers to all your questions are in the menu on the left',
    quickStartPoint11Note3: 'We recommend starting with CUSTOM BOT to tailor the bot to your needs and set up a menu that suits you',
    quickStartPoint11Note4: 'Great sales!',
  
    
    quickStartPoint12: 'Security Configuration',
    quickStartPoint12Note1: 'Review and strengthen all default security settings.',
    quickStartPoint12Note2: 'Configure IP blocking and access restrictions.',
    quickStartPoint12Note3: 'Set up activity logging and security alerts.',
    quickStartPoint12Note4: 'Configure data encryption settings for sensitive information.',
    quickStartPoint12Note5: 'Set up regular security scan schedules.',
    quickStartPoint12Note6: 'Create incident response procedures and documentation.',
    quickStartPoint12Note7: 'Configure data retention and protection policies.',
    quickStartPoint12Note8: 'Schedule regular security audits and compliance checks.',
    
    quickStartPoint13: 'System Testing',
    quickStartPoint13Note1: 'Conduct end-to-end testing of all major system flows.',
    quickStartPoint13Note2: 'Test all integration points with external systems.',
    quickStartPoint13Note3: 'Conduct load testing to ensure system stability.',
    quickStartPoint13Note4: 'Perform security testing and vulnerability assessment.',
    quickStartPoint13Note5: 'Test backup and recovery procedures.',
    quickStartPoint13Note6: 'Conduct user acceptance testing with key stakeholders.',
    quickStartPoint13Note7: 'Document any issues found and their resolutions.',
    quickStartPoint13Note8: 'Create a system monitoring plan for ongoing operations.',
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
    howToAddBots: 'БОТЫ',
    oneTimeDiscounts: 'Реферальная система, обязательные подписки, Разовые скидки ',
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
    welcome: 'Добро пожаловать в руководство по админ-панели',
    selectTopic: 'Выберите тему для начала:',
    quickStartShortDesc: 'Быстрое начало работы с основными шагами настройки',
    detailedGuideShortDesc: 'Подробные руководства по всем функциям админ-панели',
    casinoSetupShortDesc: 'Настройка и конфигурация модуля казино',
    cardsPaymentsShortDesc: 'Настройка и управление системами платежных карт',
    english: 'Английский',
    russian: 'Русский',
    languageSelector: 'Язык',
    
    // Quick Start page content
    quickStartDescription: 'Это руководство по быстрому старту поможет тебе настроить и сконфигурировать админ-панель всего за 11 шагов. Следуйте этим инструкциям, чтобы быстро запустить свои продажи.',
    
    quickStartPoint1: 'Создай город',
    quickStartPoint1Note1: 'Для создания городов необходимо зайти в раздел Склад -> Города',
    quickStartPoint1Note2: 'Нажимаем кнопку +ДОБАВИТЬ ГОРОД ПОСТАВКИ в верхнем правом углу',
    quickStartPoint1Note3: 'В поле Название города пишем город, в окне Магазин выбираем свой магазин.',
    quickStartPoint1Note4: 'Нажмите кнопку СОХРАНИТЬ если у вас только один город.',
    quickStartPoint1Note5: 'Если городов много то используйте кнопку СОХРАНИТЬ И ДОБАВИТЬ ДРУГОЙ ОБЪЕКТ.',
    quickStartPoint1Note6: '',
    quickStartPoint1Note7: '',
    quickStartPoint1Note8: '',
    
    quickStartPoint2: 'Создай район',
    quickStartPoint2Note1: 'Для создания районов необходимо зайти в раздел с Район',
    quickStartPoint2Note2: 'В правом верхнем углу жмем кнопку +ДОБАВИТЬ РАЙОН',
    quickStartPoint2Note3: 'Заполняем название района',
    quickStartPoint2Note4: 'В окне Город выбираем город, которому принадлежит этот район',
    quickStartPoint2Note5: 'Номер сортировки отвечает за то будет ли район показываться выше или ниже остальных, по дефолту везде указано 300 если хочешь что бы редактируемый район был выше остальных в боте УВЕЛИЧИВАЙ это число -(301)- если хочешь что бы его последовательность была ниже остальных УМЕНЬШАЙ -(299)- это правило работает везде',
    quickStartPoint2Note6: 'Так же если нужно что бы район был доступен для предзаказа ставим галочку в соответствующее поле',
    quickStartPoint2Note7: 'Нажимаем кнопку СОХРАНИТЬ если у вас только один район. СОХРАНИТЬ И ДОБАВИТЬ ДРУГОЙ ОБЪЕКТ если районов много и СОХРАНИТЬ И ПРОДОЛЖИТЬ РЕДАКТИРОВАНИЕ что бы остаться на этой же странице.',
    quickStartPoint2Note8: '',
    
    quickStartPoint3: 'Создаем группы товаров',
    quickStartPoint3Note1: 'Идем в раздел СКЛАД->ГРУППЫ ТОВАРОВ, кликаем справа сверху ДОБАВИТЬ ГРУППА ТОВАРОВ',
    quickStartPoint3Note2: 'Slug автогенерируем можем игнорировать этот пункт',
    quickStartPoint3Note3: 'Рекомендуем сразу поставить фото товара что бы не возвращаться в этот раздел по 10 раз',
    quickStartPoint3Note4: 'Название группы это и есть ваш продукт например картины/книги',
    quickStartPoint3Note5: 'Это название будет отображаться в боте для клиентов поэтому прописывайте сразу в нужном стиле и на нужном языке',
    quickStartPoint3Note6: 'Описание товара так же будет видно в боте поэтому напишите пару слов о своем продукте',
    quickStartPoint3Note7: 'Снизу сразу есть раздел ВИДЫ ТОВАРОВ его тоже стоит заполнить',
    quickStartPoint3Note8: 'ВИД ТОВАРА это чаще всего и есть ваши грамовки. Пишем в названиях 0.5ГР или 1шт или 1 грамм или 1 и так далее, это название будет показываться клиенту в боте после выбора продукта так что используйте нужный вам стиль и язык. Тут же мы устанавливаем цену и добавляем столько видов товаров сколько нам нужно. Сохраняемся идем дальше',
    
    quickStartPoint4: 'Создаем виды товаров',
    quickStartPoint4Note1: 'Идем снова в СКЛАД - ВИДЫ ТОВАРОВ',
    quickStartPoint4Note2: 'Как мы можем видеть у нас уже сформировались некоторые виды товаров, давайте нажмем на один и посмотрим что там',
    quickStartPoint4Note3: 'В основной информации можно ничего не редактировать',
    quickStartPoint4Note4: 'Если ваша цена на товар различается в зависимости от города рекомендую сразу поставить нужную цену для нужного города в пункте ЦЕНЫ НА ТОВАРЫ ПО ГОРОДАМ - нажимаем на лупу выбираем нужный город и указываем для него цену',
    quickStartPoint4Note5: 'Идем в раздел КУРЬЕР/ПРИБЫЛЬ - в этом меню тоже стоит прописать все заранее что бы не возвращаться потом',
    quickStartPoint4Note6: 'Зарплата курьера за единицу это не за 1гр, а за столько сколько указано в виде товара которй мы редактируем, если ваш вид товара называется 2гр то и зарплату курьеру мы ставим как за 2гр, тоже самое относится ко всем остальным пунктам.',
    quickStartPoint4Note7: 'Проставьте зп, штраф, цену закупки, вес, что бы вести точную статистику в магазине',
    quickStartPoint4Note8: 'Все остальное в разделе ВИДЫ ТОВАРОВ пока можно пропустить, есмотрите детальный гайд для полноценных настроек магазина',
    
    quickStartPoint5: 'Создаем курьера',
    quickStartPoint5Note1: 'Для создания курьеров необходимо зайти в раздел Склад -> Курьеры, нажать кнопку ДОБАВИТЬ КУРЬЕРА в правом верхнем углу и да это обязательный пункт, даже если у вас пока нет сотрудников вы должны добавить одного курьера для того что бы выгружать адреса',
    quickStartPoint5Note2: 'Даем курьеру имя, выбираем магазин к которому он относится, пишем коментарий если он нужен, курьер его не увидит',
    quickStartPoint5Note3: 'Дальше вы видите Available kinds и меню с видами товаров которые мы уже создали',
    quickStartPoint5Note4: 'Выделяем то с чем должен работать данный курьер (если вы сами будете добавлять адреса естественно переносите все виды товаров вправо для легкой работы)',
    quickStartPoint5Note5: 'Выделяем все с помощью зажатого command или cotrol в зависимости от вашей системы и нажимаем стрелку вправо',
    quickStartPoint5Note6: 'Сохраняем, больше нам тут пока ничего не нужно',
    quickStartPoint5Note7: 'Для более детальной настройки смотрите полное руководство',
    quickStartPoint5Note8: '',
    
    quickStartPoint6: 'Добавление сотрудников',
    quickStartPoint6Note1: 'Пропустите этот пункт и перреходите в 7 если вы не будете регестрировать сегодня свою команду в панели',
    quickStartPoint6Note2: 'Если же вы хотите добавть команду то переходите в раздел СОТРУДНИКИ и жмите на кнопку справа - добавить сотрудник',
    quickStartPoint6Note3: 'Выбираем тип сотрудника например курьер и сохраняем себе его логин и пароль который генерируем нажатием на соответствующую кнопку',
    quickStartPoint6Note4: 'Даем ему доступ к нужным городам таким же образом как делали ранее',
    quickStartPoint6Note5: 'Проставляем галочки в зависимости от уровня доверия',
    quickStartPoint6Note6: 'ВАЖНО пункт worker - тут мы либо выбираем курьера которого уже создали и тогда он будет относиться к учетной записи данного сотрудника либо нажимаем на плюсик и создаем еще одного лично для него',
    quickStartPoint6Note7: 'Нажатие на плюс переведет вас в раздел ДОБАВИТЬ КУРЬЕРА повторяем весь процесс с настройками под вашего сотрудника',
    quickStartPoint6Note8: 'Остальное пока все можно оставить без изменений. Сохраняемся и передаем сотруднику логин/пароль и ссылку на панель',
    
    quickStartPoint7: 'Добавление МК',
    quickStartPoint7Note1: 'Этот пункт тоже можете пропустить и пойти на 8 если не знаете точно сколько у веса у курьеров на руках или в шкафу этот пункт для настоящих акул которым нужна вся мощность данной панели',
    quickStartPoint7Note2: 'Идем в раздел СКЛАД- МК',
    quickStartPoint7Note3: 'Выбираем название своего магазина',
    quickStartPoint7Note4: 'Выбираем курьера у которого на руках этот мк',
    quickStartPoint7Note5: 'В названии пишем вес и название продукта для удобства (комментарии пожеланию например когда был выдан на руки)',
    quickStartPoint7Note6: 'Сохраняемся и теперь когда вы будете добавлять адреса при указывании определенного МК у вас будет наглядная статистика о том сколько кладов с данного МК курьер сделал, сколько было продано, сколько было не найдено и так далее',
    quickStartPoint7Note7: 'Мы почти на финише',
    quickStartPoint7Note8: '',
    
    quickStartPoint8: 'Добавление бота',
    quickStartPoint8Note1: 'Пришло время создать бота и посмотреть что у нас получилось',
    quickStartPoint8Note2: 'В тг пишем в @BotFather команду /newbot',
    quickStartPoint8Note3: 'Пишем название которое хотим дать боту например (КРАКЕН)',
    quickStartPoint8Note4: 'Пишем боту юзернейм который хотим дать нашему боту ВАЖНО: юзернейм должен быть строго на английском и заканчиваться тремя буквами bot',
    quickStartPoint8Note5: 'После этого BotFather пришлет вам длинное сообщение с вашим токеном, этот токен можно скопировать нажав на него, выглядит он примерно так 8102468:AAG1CBNxxxxxoXjeTpT5CkCdKDN4OgG4xw',
    quickStartPoint8Note6: 'После этого заходим в админ панель раздел БОТЫ/КАНАЛЫ',
    quickStartPoint8Note7: 'Выбираем пункт РАБОЧИЕ БОТЫ, справа сверху нажимаем ДОБАВИТЬ БОТ',
    quickStartPoint8Note8: 'Ставим галочку напротив нашего магазина, вставляем токен который нам дал BotFather, выбираем тип бота (БОТ-ПРОДАВЕЦ), так же здесь вы можете выбрать бонус для новых клиентов в валюте магазина что бы его получал клиент при первом взаимодействии с вашим магазином. Рекомендуем защитить капчей просто поставив галочку напротив этого пункта. Нажимаем сохранить. Теперь в разделе ботов мы можем видеть наш новый бот и ОБЯЗАТЕЛЬНО НАЖИМАЕМ ЗЕЛЕНУЮ КНОПКУ ЗАПУСКА которая находится в конце всей информации о вашем боте справа, иначе бот не начнет свою работу. Переходим в тг открываем бот и смотрим как он выглядит, для Кастомизации бота изучи раздел Кастомизация бота, а пока все что осталось это добавить адреса и подключить нужные способы оплаты',
    
    quickStartPoint9: 'Добавление адресов',
    quickStartPoint9Note1: 'Идем в раздел ДОБАВИТЬ АДРЕСА',
    quickStartPoint9Note2: 'Тут мы видим уже списки районов которые есть воспользуйтесь поисковом если их много, находим нужный район для загрузки адресов и нажимаем ДОБАВИТЬ АДРЕСА',
    quickStartPoint9Note3: 'Выбираем нужного курьера обязательно поэтому мы его и добавляли',
    quickStartPoint9Note4: 'Выбираем нужный МК если он есть, если нет оставляем как есть',
    quickStartPoint9Note5: 'Выбираем тип продукта (название и грамовка) например у нас готово 5 кладов мефа по 1г на данном районе',
    quickStartPoint9Note6: 'Игнорируем пункт изображения с ним лучше ознакомиться более детально в разделе АДРЕСА',
    quickStartPoint9Note7: 'Идем сразу в пункт text и вот тут начинается магия большой загрузки. Представьте если у вас 100 едиков в данном районе, это будет ужасно грузить каждый клад отдельно, вместо этого загрузите все свои адреса на какой нибудь хост по типу https://imgbb.com напишите к ним описание и используйте двойной пробел между строками что бы панель поняла что вы грузите не один адрес, а много',
    quickStartPoint9Note8: 'Пример: https://imgbb.com в указанной точке по кордам [пустая строка] https://imgbb.com в указанной точке по кордам [пустая строка] https://imgbb.com в указанной точке по кордам. Итого теперь бот видит что вы загрузили три адреса для данного района. Нажимаем сохранить если на этом районе больше нет других грамовок, либо нажимаем сохранить и добавить еще если в этом районе есть еще какие то другие адреса. ',
    
    quickStartPoint10: 'Способы оплат',
    quickStartPoint10Note1: 'Идем в меню МАГАЗИНЫ -> ВСЕ МАГАЗИНЫ',
    quickStartPoint10Note2: 'Нажимаем на название своего магазина',
    quickStartPoint10Note3: 'Тут кстати можно поставить аватарку для вашего магазина, в этом меню больше ничего не меняйте пока не ознакомитесь со всеми разделами',
    quickStartPoint10Note4: 'Выберите пункт НАСТРОЙКА ОБМЕННИКА',
    quickStartPoint10Note5: 'Убедитесь что галочки стоят как минимум около LTC BTC так же советуем поставить галочку напротив USDT',
    quickStartPoint10Note6: 'Ставим галочки напротив всех способов оплат которые нам нужны',
    quickStartPoint10Note7: 'Так же вы можете выбрать комиссию за счет магазина внизу но надо ли оно нам? Не забудьте сохраниться',
    quickStartPoint10Note8: 'ВАЖНО: если вы выбрали оплату в USDT то что бы она отображалась в боте пройдите в меню ДОПОЛНИТЕЛЬНО - USDT TRC20 АДРЕСА - ДОБАВИТЬ USDT-TRC-20 АДРЕС - выберите свой магазин, а так же укажите свой usdt trc20 кошелек, все заказы оплаченные таким образом будут приходить непосредственно на ваш кошелек',
    
    quickStartPoint11: 'Следующие шаги',
    quickStartPoint11Note1: 'Ваш магазин уже полностью автоматизирован и готов к работе ',
    quickStartPoint11Note2: 'Все следующие шаги для более точечной работы и ответов на все ваши вопросы есть в меню слева',
    quickStartPoint11Note3: 'Рекомендуем начать с пункта КАСТОМИЗАЦИЯ БОТА что бы подогнать бот под свои нужды и настроить меню которое подходит именно вам',
    quickStartPoint11Note4: 'Отличных продаж!',
   
   
  },
};

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
