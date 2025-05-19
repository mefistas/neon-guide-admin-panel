/**
 * Custom translations system that works alongside the original
 * translations from LanguageContext.
 * 
 * This system allows adding new translations without modifying
 * the protected LanguageContext.tsx file.
 */

// Types from the original system
export type Language = 'en' | 'ru';

type TranslationRecord = {
  [key: string]: {
    en: string;
    ru: string;
  }
};

type TranslationsStore = TranslationRecord;

// Add new translations here
const additionalTranslations: TranslationsStore = {
  // Custom Bot translations
  customBotTitle: {
    en: 'Bot Customization',
    ru: 'Кастомизация Бота'
  },
  operatorWorkTitle: {
    en: 'Operator Work',
    ru: 'Работа Оператора'
  },
  operatorWorkShortDesc: {
    en: 'Learn how to effectively manage operator work and support in your store',
    ru: 'Узнайте, как эффективно управлять работой операторов и поддержкой в вашем магазине'
  },
  financeTitle: {
    en: 'Finance',
    ru: 'Финансы'
  },
  financeShortDesc: {
    en: 'Manage all financial aspects of your store',
    ru: 'Управление всеми финансовыми аспектами вашего магазина'
  },
  customBotShortDesc: {
    en: 'In this section, you can fully adapt the bot to your needs and customize all necessary menu items for yourself',
    ru: 'В этом разделе ты сможешь полностью адаптировать бот под свои нужды настроить все необходимые пункты меню под себя'
  },
  // New translations for the home page Custom Bot section
  customBotHomeTitle: {
    en: 'Bot Customization',
    ru: 'Кастомизация Бота'
  },
  customBotHomeDesc: {
    en: 'Complete guide to setting up the bot\'s menu and languages for your store',
    ru: 'Полный гайд по настройке меню и языков бота под свой магазин'
  },
  // Section titles
  sectionCity: {
    en: 'Adding a City',
    ru: 'Добавление города'
  },
  sectionDistrict: {
    en: 'Adding a District',
    ru: 'Добавление района'
  },
  sectionCourier: {
    en: 'Adding a Courier',
    ru: 'Добавление курьера'
  },
  sectionProductGroup: {
    en: 'Creating Product Groups',
    ru: 'Создание групп товаров'
  },
  sectionProductType: {
    en: 'Creating Product Types',
    ru: 'Создание типов продуктов'
  },
  sectionAddress: {
    en: 'Adding Addresses',
    ru: 'Добавление адресов'
  },
  sectionBot: {
    en: 'Setting Up Bots',
    ru: 'Настройка ботов'
  },
  // Common UI elements
  tip: {
    en: 'Tip',
    ru: 'Совет'
  },
  important: {
    en: 'Important',
    ru: 'Важно'
  },
  note: {
    en: 'Note',
    ru: 'Примечание'
  },
  save: {
    en: 'Save',
    ru: 'Сохранить'
  },
  bulkUploadFormat: {
    en: 'Bulk Upload Format',
    ru: 'Формат массовой загрузки'
  },
  // Custom Bot Page Content
  customBotPageTitle: {
    en: 'Bot Customization',
    ru: 'Кастомизация вашего бота'
  },
  customBotIntro: {
    en: 'Our service provides a very flexible system for customizing the main menu and messages of your bot. You can even completely translate the bot into any other language.',
    ru: 'В нашем сервисе предусмотрена очень гибкая система настройки главного меню и сообщений вашего бота. Вы даже можете полностью перевести бота на любой другой язык.'
  },
  customBotTypes: {
    en: 'There are two types of Bot Customization',
    ru: 'Есть два типа Кастомизации бота'
  },
  customBotType1: {
    en: '1. Customization of the appearance of menu buttons, languages, and content',
    ru: '1. Кастомизация внешнего вида кнопок меню языков и наполнений'
  },
  customBotType2: {
    en: '2. Customization of your bot messages',
    ru: '2. Кастомизация сообщений вашего бота'
  },
  customBotAppearance: {
    en: '1.Customization of the appearance of menu buttons, languages, and content',
    ru: '1.Кастомизация внешнего вида кнопок меню языков и наполнений'
  },
  gotoStores: {
    en: ' -Go to STORES -> ALL STORES',
    ru: ' -Переходим в раздел МАГАЗИНЫ -> ВСЕ МАГАЗИНЫ'
  },
  clickStoreName: {
    en: ' -Click on your store name',
    ru: ' -Нажимаем на название своего магазина'
  },
  twoMainMenus: {
    en: ' -There are two main menus to edit: Language/Menu and Bot Customization. Let\'s start with the Language/Menu section',
    ru: ' -Тут есть два основных меню что бы редачить это Язык/Меню и Кастомизацию бота   Начнем с раздела Язык/меню'
  },
  addNewLanguage: {
    en: ' If we want to customize the menu completely, click on the ADD ANOTHER LANGUAGE item in the menu and give this language the name of our new menu, then click save',
    ru: ' если мы хотим сделать меню полностью под себя нажимаем на пункт в меню ДОБАВИТЬ ЕШЕ ОДИН ЯЗЫК и даем этому языку название нашего нового меню, нажимаем сохранить'
  },
  deleteMenuItems: {
    en: ' -If we have menu items below, it\'s easier to delete them and fill them again by clicking the button (add another main menu item)',
    ru: ' -Если снизу у нас есть пункты меню проще всего их удалить и заполнить заново нажимая на кнопку (добавить еще пункт главного меню)'
  },
  sortingNote: {
    en: ' -The sorting number in this case can be repeated',
    ru: ' -номер сортировки в данном случае может повторяться'
  },
  addTwoItems: {
    en:  '-Add two main menu items with sorting 1 for both, now you will have two buttons in a row, not one',
    ru: ' -добавляем два пункта главного меню с сортировкой 1 у обоих, теперь у вас будет две кнопки вряд, а не одна'
  },
  chooseLanguage: {
    en: ' -In the language, choose the name of our menu',
    ru: ' -В языке выбираем название нашего меню'
  },
  writeButton: {
    en: ' -Write the button text, for example (Buy) and choose from the actions what this button should do based on logic',
    ru: ' -Пишем текст кнопки например (Купить) и выбираем из действий что должна делать эта кнопка исходя из логики'
  },
  externalSite: {
    en: ' -When using the button (external site) - you must specify a link to it, otherwise you will get an error',
    ru: ' -При использовании кнопки (сторонний сайт) - вы обязательно должны указать ссылку на него иначе вам вернется ошибка'
  },
  saveAndContinue: {
    en: ' We recommend using the save and continue editing button to see the changes happening in your bot',
    ru: ' Рекомендуем использовать кнопку сохранить и продолжить редактирование что бы видеть наглядно и��менения кото��ые происходят в вашем боте'
  },
  activateCasino: {
    en: ' To activate the casino button, go to the casino menu and check at least one game, otherwise the casino WILL NOT be displayed in your menu, don\'t forget to save',
    ru: ' Для активации кнопки казино пройдите в меню казино и поставьте галочку хотя бы около одной игры иначе казино НЕ БУДЕТ отображаться в вашем меню, не забывайте сохранять'
  },
  exampleSettings: {
    en: ' Example menu settings and results in the bot can be seen below:',
    ru: ' Пример настроек меню и результат в боте можно увидеть ниже:'
  },
  supportItem: {
    en: ' Important item Support, submit a request - if your client interacts with this menu item, you will be able to communicate with them directly through the bot in the FEEDBACK section. If you don\'t want to communicate with clients through your Telegram account, we recommend adding this section to your menu.',
    ru: ' Важный пункт Поддержка, оставить заявку - в случае если ваш клиент будет взаимодействовать с пунктом этого меню вы сможете связываться с ним напрямую через бот в разделе ОБРАТНАЯ СВЯЗЬ если вы не хотите общаться с клиентами через свой телеграмм аккаунт рекомендуем добавить этот раздел в ваше меню.'
  },
  citySelection: {
    en: ' It\'s best to name the button (city selection = buy) in this case your clients will immediately go to the menu of choosing their city and then to the available products in it, much more convenient than using the showcase button.',
    ru: ' Лучше всего назвать кнопку (выбор города = купить) в этом случае ваши клиенты сразу будут переходить в меню выбора своего города и после к доступным товарам в нем, намного удобней чем использовать кнопку витрина.'
  },
  personalBots: {
    en: 'The button for connecting your bot is edited in the (Personal Bots) section - check the enable box, and also specify the number of bots that each client can create for themselves (minimum 1). Also specify the minimum number of purchases needed to create a personal bot - if you set the number 1, then this menu item will not be shown to clients who do not have at least one purchase',
    ru: 'Кнопка подключение своего бота редактируется в разделе (Личные боты) - поставьте галочку у пункта включить, а так же укажите количество ботов которые может создавать каждый клиент для себя (минимум 1). Так же укажите минимальное количество покупок нужное для создания личного бота - если вы установите число 1, то этот пункт меню не будет показываться клиентам у которых нет хотя бы одной покупки'
  },
  preorderButton: {
    en: ' If you add a pre-order button, familiarize yourself with its settings in the (Pre-orders) section',
    ru: ' Если вы добавляете кнопку предзаказ ознакомьтесь с ее настройками в разделе (Предзаказы)'
  },
  bonusButton: {
    en: ' In the Bonuses button section, you can see the conditions regarding the referral system in your store, to change the referral % use the Channel/Referral menu',
    ru: ' В разделе кнопки Бонусы вы можете видеть условия касательно рефератной системы в вашем магазине, что бы изменить рефератный % используйте меню Канал/Рефералка'
  },
  customizationSection: {
    en: 'Bot Customization Section',
    ru: 'Раздел Кастомизация бота'
  },
  buttonOptions: {
    en: 'Here at the bottom there are all the buttons that the bot will send to clients to choose actions, you can leave them unchanged or edit them for yourself',
    ru: 'Тут внизу есть все кнопки которые бот будет присылать клиентам для выбора действия их можно оставить без изменений либо редактировать под себя'
  },
  oneColumnMenu: {
    en: ' If you check "All menu in one column", then the entire main menu in the bot will be in 1 column. This is useful if you have long button names, then the client will be able to fully read the text on the buttons.',
    ru: ' Если вы установите галочку "Все меню в одну колонку", тогда все главное меню в боте будет в 1 колонку. Это полезно, если у вас длинные названия кнопок, тогда клиент сможет полностью прочитать текст на кнопках.'
  },
  supportLink: {
    en: ' If you fill in the "Support operator link" field in the format "https://t.me/OperatorSupport", then instead of the "Support" button - there will be a link to your operator. You can also change the text of the button itself, put the name of the operator as shown in the photo below, however, we recommend simply adding a button (external site) with a link to the Telegram account of your operator and the corresponding name.',
    ru: ' Если вы заполните поле "Ссылка на оператора поддержки" в формате "https://t.me/OperatorSupport", тогда вместо кнопки "Поддержка" - будет ссылка на вашего оператора. Также можете поменять текст самой кнопки, поставить имя оператора как показано на фото ниже, однако мы рекомендуем просто добавлять кнопку (сторонний сайт) с ссылкой на телеграмм аккаунт вашего оператора и соответствующим названием.'
  },
  editButtons: {
    en: ' The buttons - information about the store/work/bonuses are edited in the same section, as in the photo below by clicking the (change) button. If you leave these fields empty, these menu items will disappear from the bot\'s main menu.',
    ru: 'Кнопки - информация о магазине/работа/бонусы редактируется в этом же разделе, как на фото ниже при нажатии кнопки (изменить). Если вы оставите эти поля пустыми, эти пункты меню пропадут из главного меню бота.'
  },
  messageCustomization: {
    en: '2.Customization of messages from your bot',
    ru: '2.Кастомизация сообщений от вашего бота'
  },
  messageBotSection: {
    en: 'Go to Bots/Channels -> Bot Messages',
    ru: ' Заходим в раздел Боты/Каналы -> Сообщения бота'
  },
  allMessagesHere: {
    en: ' All messages that the bot sends to your clients are right here, here you can change absolutely everything, just don\'t break the logic and don\'t forget to use html where it exists',
    ru: ' Все сообщения которые бот отправляет вашим клиентам находятся именно тут, зде��ь вы можете менят�� вообще все только не нарушайте логику и не забывайте использовать html где он есть'
  },
  htmlGuide: {
    en: '{{ variable }} - variables used in the text are inserted here.\nHTML tags:\n<b>Bold text</b>\n<i>Italic</i>\n<code>Text for copying</code>\nTags must be opened and closed. If an error is made, then an error will be returned to you. You can contact support with this error and they will help you solve it.\nIt is important to understand that tags have a beginning and an end - the difference between them is in one slash - /\nBeginning - <b>\nEnd - </b>',
    ru: '{{ variable }} - сюда вставляются переменные, испльзуемые в тексте.\nHTML-теги:\n<b>Жирный текст</b>\n<i>Курсив</i>\n<code>Текст для копирования</code>\nТеги должны открываться и закрываться. В случае если допущена ошибка, тогда вам вернется ошибка. С этой ошибкой можете обратиться в поддержку и вам помогут ее решить.\nВажно понимать, что теги имеют начало и конец - разница в них в одном слеше - /\nНачало - <b>\nКонец - </b>'
  },
  settingsRecommendations: {
    en: 'Setting Recommendations',
    ru: 'Рекомендации по настройкам'
  },
  searchTip: {
    en: ' The easiest way to find the right message is to use the search and copy there part of the message that the bot sends you and that you want to edit',
    ru: ' Проще всего искать нужное сообщение пользуясь поиском и копируя туда часть сообщения которую вам присылает бот и которую вы хотите редактировать'
  },
  addVariant: {
    en: ' If you select some message and click (add another response variant) - ahead you will have 2 variants that the bot will send to clients, an item for those who want the bot to be more diverse and be able to improvise',
    ru: ' Если выделить какое то сообщение и нажать (добавить еще один вариант ответа) - вперед у вас будет соответственно 2 варианта которые бот будет присылать клиентам, пункт для тех кто хочет что бы бот был более разнообразным и мог импровизировать'
  },
  notVisibleMessage: {
    en: ' If you do not see some message or button for editing, it means they are in the customization of appearance',
    ru: ' Если вы не видите какое либо сообщение или кнопку для редактирования значит они находятся в кастомизаии внешнего вида'
  },
  messageCount: {
    en: ' On average, there are 300 messages in the bot that can be styled for yourself',
    ru: ' В среднем в боте присутствует 300 сообщений которые можно стилизовать под себя'
  },
  translationTip: {
    en: ' When translating the bot into another language, it is fastest to use AI https://chat.deepseek.com/sign_in',
    ru: ' При переводе бота на другой язык быстрее всего использовать ии https://chat.deepseek.com/sign_in'
  },
  marketingTitle: {
    en: 'Marketing',
    ru: 'Маркетинг'
  },
  // Finance Page Translations
  financeSections: {
    en: "Finance Sections",
    ru: "Разделы финансов"
  },
  withdrawFunds: {
    en: "Withdraw Funds",
    ru: "Вывод средств"
  },
  withdrawFundsDesc: {
    en: "Withdraw your funds to different payment methods",
    ru: "Вывод ваших средств на различные платежные методы"
  },
  courierSalary: {
    en: "Courier Salary and Penalties",
    ru: "Начисления/штрафы курьерам"
  },
  courierSalaryDesc: {
    en: "Manage courier payments and penalties",
    ru: "Управление выплатами и штрафами для курьеров"
  },
  balanceTopUps: {
    en: "Balance Top Ups/Disputes",
    ru: "Пополнения балансов/споры"
  },
  balanceTopUpsDesc: {
    en: "Manage balance top ups and resolve payment disputes",
    ru: "Управление пополнениями балансов и решение споров по оплатам"
  },
  btcCashout: {
    en: "BTC Cashout",
    ru: "Обнал BTC"
  },
  btcCashoutDesc: {
    en: "Manage Bitcoin cashout operations",
    ru: "Управление операциями по обналичиванию Bitcoin"
  },
  usdt: {
    en: "USDT",
    ru: "USDT"
  },
  usdtDesc: {
    en: "Manage USDT transactions and payments",
    ru: "Управление транзакциями и платежами в USDT"
  },
  partnersExchangers: {
    en: "Partners and Exchangers",
    ru: "Партнеры обменники"
  },
  partnersExchangersDesc: {
    en: "Manage your exchange partners",
    ru: "Управление вашими партнерами по обмену"
  },
  balanceHistory: {
    en: "Balance History",
    ru: "История изменения балансов"
  },
  balanceHistoryDesc: {
    en: "View history of all balance changes",
    ru: "Просмотр истории всех изменений баланса"
  },
  quickAccess: {
    en: "Quick Access",
    ru: "Быстрый доступ"
  },
  paymentMethods: {
    en: "Payment Methods",
    ru: "Способы оплаты"
  },
  reports: {
    en: "Reports",
    ru: "Отчеты"
  },
  
  // Marketing page translations
  marketingShortDesc: {
    en: "Boost your sales with effective marketing strategies",
    ru: "Увеличьте продажи с помощью эффективных маркетинговых стратегий"
  },
  marketingSections: {
    en: "Marketing Tools",
    ru: "Маркетинговые инструменты"
  },
  mailouts: {
    en: "Mailouts",
    ru: "Рассылки"
  },
  mailoutsDesc: {
    en: "Create and manage message campaigns to your customers",
    ru: "Создание и управление кампаниями сообщений для ваших клиентов"
  },
  autoForwarding: {
    en: "Auto-Forwarding",
    ru: "Авто-пересылки"
  },
  autoForwardingDesc: {
    en: "Set up automatic message forwarding",
    ru: "Настройка автоматической пересылки сообщений"
  },
  promotions: {
    en: "Promotions",
    ru: "Промо-акции"
  },
  promotionsDesc: {
    en: "Create and manage special promotions",
    ru: "Создание и управление специальными акциями"
  },
  cumulativeDiscounts: {
    en: "Cumulative Discounts",
    ru: "Накопительные скидки"
  },
  cumulativeDiscountsDesc: {
    en: "Set up loyalty programs with cumulative discounts",
    ru: "Настройка программ лояльности с накопительными скидками"
  },
  promoCodes: {
    en: "Promo Codes",
    ru: "Промокоды"
  },
  promoCodesDesc: {
    en: "Generate and manage promotional codes",
    ru: "Создание и управление промокодами"
  },
  oneTimeDiscounts: {
    en: "One-Time Product Discounts",
    ru: "Разоввые скидки на товрры"
  },
  oneTimeDiscountsDesc: {
    en: "Create special one-time discounts for products",
    ru: "Создание специальных разовых скидок на товары"
  },
  happyHours: {
    en: "Happy Hours",
    ru: "Счастливые часы"
  },
  happyHoursDesc: {
    en: "Set up time-limited special offers",
    ru: "Настройка ограниченных по времени специальных предложений"
  },
  marketingTips: {
    en: "Marketing Tips",
    ru: "Советы по маркетингу"
  },
  marketingTip1: {
    en: "Regular promotions can increase customer retention by up to 25%",
    ru: "Регулярные акции могут увеличить удержание клиентов до 25%"
  },
  marketingTip2: {
    en: "Always analyze the results of your marketing campaigns to improve future strategies",
    ru: "Всегда анализируйте результаты ваших маркетинговых кампаний для улучшения будущих стратегий"
  },
  
  // Operator work translations
  operatorWorkSections: {
    en: "Operator Responsibilities",
    ru: "Обязанности оператора"
  },
  clients: {
    en: "Clients",
    ru: "Клиенты"
  },
  clientsDesc: {
    en: "Manage client information and interactions",
    ru: "Управление информацией и взаимодействием с клиентами"
  },
  feedback: {
    en: "Feedback",
    ru: "Обратная связь"
  },
  feedbackDesc: {
    en: "Handle customer feedback and support requests",
    ru: "Обработка обратной связи и запросов поддержки от клиентов"
  },
  purchasesProcessing: {
    en: "Purchases and Orders Processing",
    ru: "Обработка заявок и покупок"
  },
  purchasesProcessingDesc: {
    en: "Process and manage customer orders and purchases",
    ru: "Обработка и управление заказами и покупками клиентов"
  },
  helpBots: {
    en: "Helper Bots",
    ru: "Боты-Помощники"
  },
  helpBotsDesc: {
    en: "Configure and manage automated help assistants",
    ru: "Настройка и управление автоматизированными помощниками"
  },
  internalChats: {
    en: "Internal Chats",
    ru: "Внутренние чаты"
  },
  internalChatsDesc: {
    en: "Communicate with team members through internal chat system",
    ru: "Общение с членами команды через систему внутренних чатов"
  },
  operatorTips: {
    en: "Operator Tips",
    ru: "Советы оператору"
  },
  operatorTip1: {
    en: "Always respond to client queries within 15 minutes for best customer satisfaction",
    ru: "Всегда отвечайте на запросы клиентов в течение 15 минут для наилучшего удовлетворения клиентов"
  },
  operatorTip2: {
    en: "Use templates for common responses to save time and maintain consistency",
    ru: "Используйте шаблоны для общих ответов, чтобы сэкономить время и сохранить последовательность"
  },
  
  // Withdraw Funds page translations
  withdrawFundsIntro: {
    en: "In this section I will show you how to withdraw cryptocurrency or fiat from the bot",
    ru: "В этом разделе я покажу как выводить крипту или фиат с бота"
  },
  cryptoWithdrawal: {
    en: "Cryptocurrency Withdrawal",
    ru: "Вывод крипты"
  },
  cryptoWithdrawalSteps: {
    en: "- Go to STORES -> WITHDRAW FUNDS (your store name)\n- In this section you can see options for withdrawing cryptocurrency from the admin panel.\nIgnore the USDT item as all transactions in this cryptocurrency go directly to your wallets\n- Choose LTC or BTC\n- In the window that appears, carefully enter the wallet and check it, also specify the withdrawal amount, remember that it's best to set slightly less for withdrawal than is available on the balance to avoid errors due to floating exchange rates\n- In the courier section, indicate whose data you are making the withdrawal under.\nIt's important to understand that if the withdrawal amount exceeds the courier's available balance, you will need to go to the WAREHOUSE - COURIER section and credit the missing amount to his balance by clicking the (Credit) button. Otherwise, the bot will return an error due to insufficient courier balance\n- In the notes you can specify withdrawal details",
    ru: "- Идем в раздел МАГАЗИНЫ -> ВЫВОД СРЕДСТВ (название вашего магазига)\n- В данном разделе вы можете видеть варианты вывода крипты с админки.\nИгнорируйте пункт USDT так как все транзакции в данной крипте идут непосредственно на ваши кошельки\n- Выбираем LTC либо BTC\n- В появившемся окне внимательно вводим кошелек и проверяем его, так же указываем сумму вывода, помните что лучше всего ставить на вывод чуть меньше чем доступно на балансе что бы избежать ошибки из за плавающего курса\n- В разделе курьер указываем под какими данными делаем вывод.\nТут важно понимать что если сумма вывода превышает доступный баланс курьера вам нужно будет зайти в раздел СКЛАД - КУРЬЕР и зачислить на его баланс нажав кнопку (Зачислить) недостающую сумму. В противном случае бот вернет ошибку из за недостаточного баланса курьера\n- В заметках можно указать детали вывода"
  },
  fiatWithdrawal: {
    en: "Fiat Withdrawal",
    ru: "Вывод фиата"
  },
  fiatWithdrawalSteps: {
    en: "- Go to the HOME section\n- Fill in the menu items for P2P exchange\n- Carefully check all requisites\n- Click the request button\n- You can track the withdrawal by going to the ADDITIONAL - BTC CASHOUT menu",
    ru: "- Идем в раздел ГЛАВНАЯ\n- Заполняем пункты меню для P2P обмена\n- Тщательно проверяем все реквизиты\n- Нажимаем кнопку запросить\n- Отслеживать вывод можно зайдя в меню ДОПОЛНИТЕЛЬНО - ОБНАЛ BTC"
  },
  withdrawalAdvice: {
    en: "Advice - never use exchanges with your personal data for withdrawing cryptocurrency from the admin panel if you want to operate for a long time and properly!",
    ru: "Совет - никогда не используйте биржи со своими данными для вывода крипты с админки если хотите двигаться долго и порядочно!"
  },
  // New translations for auto-withdrawal and exchanger withdrawal
  autoWithdrawal: {
    en: "Auto-withdrawal",
    ru: "Автовывод"
  },
  autoWithdrawalSteps: {
    en: "There's also an option to use auto-withdrawal if you don't want to do it manually all the time.\n- Simply specify your permanent addresses for LTC and BTC as well as the desired time for auto-withdrawal (Moscow time), and the system will daily withdraw everything from your balances to the specified addresses.",
    ru: "Так же есть возможность использовать автовывод в том случае если вы не хотите постоянно делать это вручную.\n- Просто укажите свои постоянные адреса для LTC и BTC а так же желаемое время для автовывода (по московскому времени) и система будет ежедневно выводить все с ваших балансов на указанные адреса."
  },
  exchangerWithdrawal: {
    en: "Withdrawal Through an Exchanger",
    ru: "Вывод через обменник"
  },
  exchangerWithdrawalSteps: {
    en: "Another useful option - WITHDRAWAL THROUGH AN EXCHANGER\n- For cases when you need a specific cryptocurrency and don't want to spend time on exchanging it yourself through an exchange",
    ru: "Еще одна полезная опция - ВЫВОД ЧЕРЕЗ ОБМЕННИК\n- На тот случай если вам нужна определенная криптовалюта и не хочется тратить время на собственноручный обмен через биржу"
  },
  termsOfService: {
    en: "We recommend reviewing this exchanger's terms of service in advance",
    ru: "Рекомендуем ознакомиться с условиями данного обменника заранее"
  },
  // Casino Game History translations
  casinoHistory: {
    en: "Casino Game History",
    ru: "История игр в Казино"
  },
  casinoHistoryInfo: {
    en: "To view the history of your clients' Casino games, go to the ADDITIONAL -> CASINO GAME HISTORY menu",
    ru: "Что бы просмотреть историю игр в Казино ваших клиентов перейдите в меню ДОПОЛНИТЕЛЬНО -> ИСТОРИЯ ИГР В КАЗИНО"
  },
  
  // Operator work page translations
  operatorWorkIntro: {
    en: "In this section, we will set up helper bots for ourselves and other store employees!",
    ru: "В этом разделе мы подключим ботов помощников себе и остальным сотрудникам магазина!"
  },
  mainBotConnection: {
    en: "Connecting Main Notification Bot for Store Owners",
    ru: "Подключение главного бота с уведомлениями для владельцев магазина"
  },
  mainBotConnectionSteps: {
    en: "Go to STORES -> ALL STORES and select your store\n- Then go to the NOTIFICATIONS section, check the boxes and click CONNECT. After that, you'll be automatically redirected to a Telegram bot that will be linked to the account you use to log in.\n- If you want to connect it from another account, COPY THE LINK IN THE BROWSER and paste it into the saved messages of the account you want to link it to.\n- Then just enter the bot. Now you will receive all notifications about events!",
    ru: "Идем в меню МАГАЗИНЫ -> ВСЕ МАГАЗИНЫ - выбираем свой магазин\n- Далее заходим в раздел ОПОВЕЩЕНИЯ, проставляем галочки и нажимаем ПОДКЛЮЧИТЬ. После этого вас автоматически перекинет на телеграмм бот который привяжется к аккаунту с которого вы в него зайдете.\n- В случае если вы хотите подключить его с другого аккаунта СКОПИРУЙТЕ ССЫЛКУ В БРАУЗЕРЕ и вставьте ее в сохраненные сообщения с того акаунта к которому его привязываете.\n- После этого просто зайдите в бот. Теперь вы будете получать все уведомления о происхо��их событиях!"
  },
  employeeNotificationBot: {
    en: "Notification Bots for Employees",
    ru: "Боты с уведомлениями для сотрудников"
  },
  employeeNotificationSteps: {
    en: "Similarly, there is an option to connect notification bots for all employees. To do this, go to the EMPLOYEES section, copy the link as shown in the screenshot and send it to the employee.",
    ru: "Аналогично для всех сотрудников есть возможность подключения бота с уведомлениями - Для этого переходим в раздел СОТРУДНИКИ, копируем ссылку как показано на скриншоте и отправляем сотруднику."
  },
  disputeOperatorBot: {
    en: "Dispute System Integration via Telegram",
    ru: "Интеграция системы диспутов через Телеграм"
  },
  disputeOperatorDescription: {
    en: "Another useful feature in helper bots is working with the dispute system for operators and couriers directly through a Telegram account. When connecting a TG Bot for a \"Dispute Operator\" employee - the bot will send notifications about opening disputes, closing disputes, and messages related to disputes. Under each message, there will be a menu for actions. You can view information about the client such as: number of purchases, returns, invited clients. You can also request correspondence for this purchase and make a decision on the dispute:",
    ru: "Еще одна полезная опция в ботах-помощниках это работа с системой диспутов для операторов и курьеров непосредственно через телеграмм аккаунт. При подключении ТГ-Бота для сотрудника \"Оператор диспута\" - бот будет присылать уведомления на открытие спора, закрытие спора и сообщениям по спорам. Под каждым сообщением будет меню для выполнения действий. Вы сможете просмотреть информацию о клиенте такую как: кол-во покупок, возвратов, приглашенных клиентов. Также сможете запросить переписку по данной покупке и принять решение по спору:"
  },
  disputeOptions: {
    en: "Dispute Resolution Options",
    ru: "Варианты решения споров"
  },
  disputeOption1: {
    en: "Close the dispute without refunding the client",
    ru: "Закрыть спор без возврата средств клиенту"
  },
  disputeOption2: {
    en: "Close the dispute with a full refund to the client, and you can fine the courier",
    ru: "Закрыть спор с полным возвратом средств клиенту, при этом можно оштрафовать курьера"
  },
  disputeOption3: {
    en: "Close the dispute without a refund, but give them a promo code for the amount you choose",
    ru: "Закрыть спор без возврата средств, но при этом подарить ему промокод на выбранную вами сумму"
  },
  botSetupInstructions: {
    en: "For connecting this option, the courier or operator must create their own bot in Telegram, see the ",
    ru: "Для подключения данной опции курьер или же оператор должны создать своего бота в телеграмме, о том как это сделать смотрите раздел "
  },
  howToAddBots: {
    en: "HOW TO ADD BOTS",
    ru: "КАК ДОБАВИТЬ БОТЫ"
  },
  botSetupInstructionsContinued: {
    en: " section and send you their token which you can connect for them in the WAREHOUSE - COURIERS - COURIER CARD section by inserting their TOKEN.",
    ru: " и прислать вам свой токен который вы сможете подключить для них в разделе СКЛАД - КУРЬЕРЫ - КАРТОЧКА КУРЬЕРА вставив свой ТОКЕН."
  },
  botCustomization: {
    en: "Helper Bot Customization",
    ru: "Кастомизация Ботов-помощников"
  },
  botCustomizationDescription: {
    en: "To customize Helper Bots, go to the BOTS/CHANNELS - HELPER BOT MESSAGES section",
    ru: "Для кастомизации Ботов помощников перейдите в раздел БОТЫ/КАНАЛЫ - СООБЩЕНИЯ БОТОВ-ПОМОЩНИКОВ"
  },
  back: {
    en: "Back",
    ru: "Назад"
  },
  telegramOperatorTitle: {
    en: "Telegram Operator Button",
    ru: "Кнопка оператора в Телеграм"
  },
  telegramOperatorInstruction: {
    en: "You also have the ability to add a button in the bot that links to a Telegram operator account, so you can have direct communication with your clients outside the admin panel",
    ru: "Так же у вас есть возможность добавить кнопку в боте ведущую на телеграмм аккаунт оператора что бы иметь связь со своими клиентами вне панели администратора"
  },
  feedbackTitle: {
    en: "Feedback",
    ru: "Обратная связь"
  },
  feedbackDescription: {
    en: "Handle customer feedback and support requests",
    ru: "Обработка обратной связи и запросов поддержки"
  },
  feedbackInstruction: {
    en: "Learn how to handle customer feedback and support requests through the admin panel and connect with your clients directly.",
    ru: "Узнайте, как обрабатывать обратную связь и запросы поддержки через панель администратора и напрямую связываться с клиентами."
  },
  sendingMessageTitle: {
    en: "Sending Messages to Clients",
    ru: "Отправка сообщений клиентам"
  },
  sendingMessageInstruction: {
    en: "Send direct messages to your clients through the admin panel. You can respond to their inquiries and provide support without leaving the system.",
    ru: "Отправляйте прямые сообщения своим клиентам через панель администратора. Вы можете отвечать на их запросы и оказывать поддержку, не выходя из системы."
  },
  
  // Addresses page
  addressesTitle: {
    en: "Addresses",
    ru: "Адреса"
  },
  addressesIntro: {
    en: "Manage customer delivery addresses in this section",
    ru: "Управление адресами доставки клиентов в этом разделе"
  },
  // Preorders and Addresses translations - making sure they're correct
  preorders: {
    en: "Preorders/Deliveries",
    ru: "Предзаказы/Доставки"
  },
  preordersDesc: {
    en: "Manage product preorders and deliveries",
    ru: "Управление предзаказами товаров и доставками"
  },
  addresses: {
    en: "Addresses",
    ru: "Адреса"
  },
  addressesDesc: {
    en: "Manage customer delivery addresses",
    ru: "Управление адресами доставки клиентов"
  },
};

/**
 * Get a translation from the additional translations store
 * @param key Translation key
 * @param language Current language
 * @returns Translated text or the key itself if not found
 */
export const getTranslation = (key: string, language: Language): string => {
  if (!key) return '';
  
  // Check if the key exists in our additional translations
  if (additionalTranslations[key] && additionalTranslations[key][language]) {
    return additionalTranslations[key][language];
  }
  
  // Return the key itself if no translation found
  // This allows the original system to handle it if available
  return key;
}

/**
 * Create a translator function for the specified language
 * @param language Language to use for translations
 * @returns A function that translates keys to the specified language
 */
export const createTranslator = (language: Language) => 
  (key: string): string => getTranslation(key, language);
