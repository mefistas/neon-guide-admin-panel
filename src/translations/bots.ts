
type Languages = 'en' | 'ru';

type BotsTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const botsTranslations: BotsTranslations = {
  ru: {
    bots: "БОТЫ",
    botsDescription: "Ниже вы сможете найти описание и функции всех рабочих ботов которые доступны в нашей системе для максимальной автоматизации вашего бизнеса",
    botFatherInstruction: "Для работы с данным разделом вам необходимо получить хотя бы один токен для установки бота который вам может выдать @BotFather",
    startCommand: "Нажмите старт и пришлите боту команду /newbot",
    botNameInstruction: "Придумайте название которое хотите дать боту например - (КРАКЕН)",
    usernameInstruction: "После этого придумываем юзернейм и тоже отправляем боту",
    usernameRequirement: "ВАЖНО: юзернейм должен быть строго на английском и заканчиваться окончанием bot.",
    tokenReceived: "После этого BotFather пришлет вам длинное сообщение с вашим токеном, этот токен можно скопировать нажав на него, выглядит он примерно так:",
    tokenExample: "8102468:AAG1CBNxxxxxoXjeTpT5CkCdKDN4OgG4xw",
    adminPanelInstruction: "Заходим в админ панель раздел БОТЫ/КАНАЛЫ - РАБОЧИЕ БОТЫ",
    addBotInstruction: "В верхнем правом углу нажимаем на кнопку ДОБАВИТЬ БОТ и устанавливаем галочку напротив нашего магазина. Вставляем токен который нам дал BotFather в пустое поле и выбираем тип бота который хотите создать",
    captchaRecommendation: "Рекомендуется так же защитить капчей вашего бота установив галочку напротив этого пункта",
    botStartInstruction: "После сохранения любого бота его нужно обязательно запустить нажав на зеленю кнопку в разделе БОТЫ/КАНАЛЫ",
    botDetailsTitle: "Теперь разберем более детально функции каждого бота по отдельности!",
    
    // Seller bot section
    sellerBot: "БОТ ПРОДАВЕЦ",
    sellerBotDescription: "Основной бот с которого чаще всего начинается знакомство с функционалом панели, выполняет функцию продаж и имеет широкую возможность кастомизации включая переводы на другие языки.",
    subscriptionNote: "В случае если у вас есть каналы и в магазине установлен пункт обязательной подписки на них не забывайте проставлять галочку НЕ ТРЕБУЕТ ПОДПИСКИ если для данного бота она не нужна",
    newClientBonus: "Так же устанавливаем бонус для новых клиентов если вы хотите добавить эту фкнкцию",
    privateStatus: "Бот продавец будет всегда выдаваться покупателям при использовании бота распределителя, если же вы хотите что бы он был скрыт от чужих глаз переведите его в статус ПРИВАТНЫЙ-ПРОДАВЕЦ",
    customizationLink: "Для более тонкой настройки и кастомизации бота перейдите в раздел",
    customizationBotLink: "Кастомизация Бота",
    
    // Private bot section
    privateBot: "ПРИВАТНЫЙ БОТ",
    privateBotDescription: "Данный бот выполняет те же самые функции бота продавца однако убирается из списка доступных ботов для выдачи клиентов при активации бота-распределителя",
    howToUseTitle: "Как это использовать?",
    privateBotUsage: "Учитывая что ваши боты будут блокироваться время от времени лучше всего не направлять на один бот поток весь клиентов так как в случае блокировки вы будете терять связь со всеми из них. Создайте и добавьте в панель около 20 ботов-продавцов. Подключите несколько ботов распределителей о которых мы поговорим далее и следите за актуальным количеством пользователей в каждом боте-продавце. По достижению на одном боте 50+ клиентов переведите его в статус приватного и он больше не будет отображаться в боте распределителе и не будет виден новым клиентам. Таким образом учитывая что вероятность жалоб от более ранних клиентов ниже чем от новых по мере роста магазина и атак конкурентов, ваши старые клиенты будут всегда на связи. Однако не забывайте что телеграмм все равно может заблокировать такого бота и время от времени стоит переводить ваших клиентов на новый",
    
    // Distributor bot section
    distributorBot: "БОТ-РАСПРЕДЕЛИТЕЛЬ",
    distributorBotDescription: "Идеальный переходник что бы минимизировать блокировки ботов-продавцов",
    distributorBotUsage: "При активации данного бота отправляйте весь трафик входящих клиентов именно на него, вы так же сможете кастомизировать сообщения и кнопки которые будут доступны клиенту при его использовании",
    
    // Payment bot section
    paymentBot: "БОТ ОБРАБОТКИ ПЛАТЕЖЕЙ",
    paymentBotDescription: "Бывают ситуации когда клиент пишет непосредственно оператору и хочет купить продукт общаясь с живым человеком или же не совсем понимает как правильно работать с ботом, для таких ситуаций мы создали бота для обработки платежей что бы вы могли не терять свою статистику в подобных случаях и продолжать вести детализированный учет продаж",
    paymentBotSetup: "Для работы с данным ботом будет необходимо подключить оператора. Заполняем его и сохраняем точно так же как делали с другими типами ботов, а потом переходим в него заново и копируем ссылку для активации которую потом и передаем нашему оператору",
    paymentBotUsage: "Работа с данным ботом подразумевает что оператор сам будет заходить в него и при готовности клиента купить какой либо товар копировать и отправлять ему нужный кошелек и сумму для пополнения после чего выдаст соответствующий товар руками использовав функцию выдачи товара вручную о том как это сделать читайте в разделе",
    addressesLink: "АДРЕСА",
    
    // Photo hosting bots section
    photoHostingBots: "БОТЫ ФОТОХОСТЕРЫ",
    photoHostingBotsDescription: "Для работы с данным ботом помимо токена вам необходимо придумать пароль который вы будете выдавать вашим сотрудникам для работы с данным ботом, этот пароль сбрасывается раз в несколько дней что бы уменьшить ненужную нагрузку на нашу систему, без этого пароля бот не будет давать возможность загружать фотографии",
    photoHostingBotsUsage: "После успешного ввода пароля просто пришлите боту любое фото и он сделает из него ссылку!",
    
    // FAQ bots section
    faqBots: "БОТЫ-FAQ",
    faqBotsSetup: "Подключаем бот-ответ/вопрос точно так же как делали ранее, теперь начинается самое интересное",
    faqBotsAdmin: "В разделе БОТЫ/КАНАЛЫ снизу есть пункт меню FAQ заходим туда и нажимаем ДОБАВИТЬ FAQ",
    faqBotsConfiguration: "Указываем наш магазин и бот ответственный за данную задачу и прописываем всю необходимую информацию которая может понадобиться нашим клиентам создавая для каждого раздела свой заголовок",
    faqBotsHeaders: "Заголовок в данном случае является кнопкой на которую клиент будет нажимать при выборе своего запроса если вы хотите сделать более сильный функционал и разветвление при добавлении новых элементов используйте уже существующие заголовки как родительский раздел как показано синими стрелками",
    faqBotsExamples: "Примеры добавления",
    faqBotsClientView: "Вот так будут выглядеть подобные настройки на стороне клиента при использовании данного бота",
    faqBotsSorting: "В самом разделе FAQ вы так же можете двигать и перемещать свои разделы просто перетягивая их вверх или вниз",
    helperBotsLink: "Так же в нашем сервисе предусмотрены боты-помощники, подробнее о их пользе вы можете ознакомиться в разделе",
    helperBotsTitle: "БОТЫ-ПОМОЩНИКИ",
    
    // Recommendations section
    recommendationsTitle: "РЕКОМЕНДАЦИИ И ПОЛЕЗНАЯ ИНФОРМАЦИЯ",
    protectionQuestion: "Как защитить себя от сноса вашего бота продавца? чата или же канала! Каждый снос очень вредит магазину а при желании можно вообще сносить вас каждый день и забрать ваш бизнес!",
    protectionIntro: "Исходя из своего опыта дам вам советы как защитить себя от этого.",
    protectionTip1: "Для не особо опытных продавцов правило которое нужно соблюдать! Чат должен быть на отдельной симке а также бот, канал , акк оператора, распределитель!",
    protectionTip2: "Канал и чат лучше приобрести с отлежкой не меньше 6 месяцев а лучше 1-2 года тогда снос данного чата при выполнении след пунктов будет практически не возможен если только вы не попадете под рейд тг который проводиться каждый квартал.",
    protectionTip3: "Тоже самое касается аккаунта оператора, можно создать их заранее либо купить акк с отлёжкой под оператора и под бота на таком сервисе как lolz.live.",
    protectionTip4: "На все аккаунты лучше купить прем статус что уменьшит вероятность сноса ваших ресурсов",
    protectionTip5: "в бота - канал - чат нужно накачать ботов желательно с премиум есть куча сервисов для этого. Объясню для чего это нужно когда специализированным софтом на вас кидают жалобы если число жалоб превысит 50 проц от общего количества пользователей то вас снесут в течении часа модераторы телеги. Для этого мы накачиваем ботов в чат итд что обезопасит вас.",
    bonusFeature: "Для стимуляции создания личных ботов добавили возможность выставления БОНУСА за создание своего первого личного бота в валюте магазина.",
    bonusSetup: "Для этого необходимо в настройках магазина во вкладке Личные боты установить сумму бонуса за создание первого бота в валюте магазина.",
    bonusLimit: "Также добавили туда возможность установить максимальное количество ботов, которых может создать клиент. Бонус за создание бота будет начислен сразу после создания и придет уведомление всем сотрудникам, которые получают уведомления по промо-акциям.",
    lifehack: "так же, небольшой лайфхак - эффективность которого еще не доказана - но очень интересно.",
    lifehackDescription: "В разделе Боты - вы можете изменить тип бота клиента на \"Бот-продавец\" - тогда распределитель будет выдавать его другим клиентам.",
    lifehackWarning: "Возможно такие боты будут дольше жить, а возможно аккаунт клиента быстрее умрет :) Одно из двух :)",
  },
  en: {
    bots: "BOTS",
    botsDescription: "Below you will find a description and functions of all working bots available in our system for maximum automation of your business",
    botFatherInstruction: "To work with this section, you need to get at least one token for setting up a bot, which you can get from @BotFather",
    startCommand: "Click start and send the command /newbot to the bot",
    botNameInstruction: "Choose a name for your bot, for example - (KRAKEN)",
    usernameInstruction: "After that, think of a username and also send it to the bot",
    usernameRequirement: "IMPORTANT: The username must be strictly in English and end with the ending bot.",
    tokenReceived: "After that, BotFather will send you a long message with your token, you can copy this token by clicking on it, it looks something like this:",
    tokenExample: "8102468:AAG1CBNxxxxxoXjeTpT5CkCdKDN4OgG4xw",
    adminPanelInstruction: "Go to the admin panel section BOTS/CHANNELS - WORKING BOTS",
    addBotInstruction: "In the upper right corner, click the ADD BOT button and check the box next to our store. Insert the token that BotFather gave us in the empty field and select the type of bot you want to create",
    captchaRecommendation: "It is also recommended to protect your bot with a captcha by checking the box next to this item",
    botStartInstruction: "After saving any bot, you must start it by clicking the green button in the BOTS/CHANNELS section",
    botDetailsTitle: "Now let's look at the functions of each bot in more detail!",
    
    // Seller bot section
    sellerBot: "SELLER BOT",
    sellerBotDescription: "The main bot with which acquaintance with the functionality of the panel often begins, performs the function of sales and has a wide possibility of customization including translations into other languages.",
    subscriptionNote: "If you have channels and the store has a mandatory subscription to them, don't forget to check the NO SUBSCRIPTION REQUIRED box if this bot doesn't need it",
    newClientBonus: "Also set a bonus for new clients if you want to add this function",
    privateStatus: "The seller bot will always be given to buyers when using the distributor bot, but if you want it to be hidden from prying eyes, convert it to PRIVATE-SELLER status",
    customizationLink: "For more fine-tuning and customization of the bot, go to the section",
    customizationBotLink: "Bot Customization",
    
    // Private bot section
    privateBot: "PRIVATE BOT",
    privateBotDescription: "This bot performs the same functions as the seller bot, however, it is removed from the list of available bots for issuing to clients when activating the distributor bot",
    howToUseTitle: "How to use it?",
    privateBotUsage: "Considering that your bots will be blocked from time to time, it is best not to direct the entire flow of clients to one bot, since in case of blocking, you will lose contact with all of them. Create and add about 20 seller bots to the panel. Connect several distributor bots that we will discuss later and monitor the current number of users in each seller bot. Upon reaching 50+ clients on one bot, convert it to private status and it will no longer be displayed in the distributor bot and will not be visible to new clients. Thus, given that the probability of complaints from earlier clients is lower than from new ones as the store grows and competitors attack, your old clients will always be in touch. However, don't forget that Telegram can still block such a bot, and from time to time it's worth transferring your clients to a new one",
    
    // Distributor bot section
    distributorBot: "DISTRIBUTOR BOT",
    distributorBotDescription: "The perfect adapter to minimize blocking of seller bots",
    distributorBotUsage: "When activating this bot, send all incoming client traffic to it, you will also be able to customize messages and buttons that will be available to the client when using it",
    
    // Payment bot section
    paymentBot: "PAYMENT PROCESSING BOT",
    paymentBotDescription: "There are situations when a client writes directly to the operator and wants to buy a product by communicating with a real person or does not quite understand how to properly work with the bot, for such situations we have created a payment processing bot so that you can maintain your statistics in such cases and continue to keep detailed sales records",
    paymentBotSetup: "To work with this bot, you will need to connect an operator. We fill it out and save it in the same way as we did with other types of bots, and then we go back to it and copy the activation link, which we then pass to our operator",
    paymentBotUsage: "Working with this bot implies that the operator himself will enter it and, when the client is ready to buy any product, copy and send him the necessary wallet and the amount for replenishment, after which he will issue the corresponding product manually using the manual product issuance function, for more information on how to do this, see the section",
    addressesLink: "ADDRESSES",
    
    // Photo hosting bots section
    photoHostingBots: "PHOTO HOSTING BOTS",
    photoHostingBotsDescription: "To work with this bot, in addition to the token, you need to come up with a password that you will give to your employees to work with this bot, this password is reset once every few days to reduce unnecessary load on our system, without this password, the bot will not allow you to upload photos",
    photoHostingBotsUsage: "After successfully entering the password, simply send any photo to the bot and it will turn it into a link!",
    
    // FAQ bots section
    faqBots: "FAQ BOTS",
    faqBotsSetup: "We connect the question/answer bot in the same way as we did earlier, now the most interesting part begins",
    faqBotsAdmin: "In the BOTS/CHANNELS section at the bottom there is a FAQ menu item, we go there and click ADD FAQ",
    faqBotsConfiguration: "We specify our store and the bot responsible for this task and write all the necessary information that our clients may need, creating our own heading for each section",
    faqBotsHeaders: "The heading in this case is the button that the client will click when selecting their request, if you want to make more powerful functionality and branching when adding new elements, use existing headers as a parent section as shown by blue arrows",
    faqBotsExamples: "Examples of adding",
    faqBotsClientView: "This is what similar settings will look like on the client side when using this bot",
    faqBotsSorting: "In the FAQ section itself, you can also move and rearrange your sections simply by dragging them up or down",
    helperBotsLink: "Also in our service there are helper bots, you can learn more about their benefits in the section",
    helperBotsTitle: "HELPER BOTS",
    
    // Recommendations section
    recommendationsTitle: "RECOMMENDATIONS AND USEFUL INFORMATION",
    protectionQuestion: "How to protect yourself from the demolition of your seller bot? chat or channel! Each demolition is very harmful to the store, and if desired, you can even demolish you every day and take your business!",
    protectionIntro: "Based on my experience, I will give you tips on how to protect yourself from this.",
    protectionTip1: "For not very experienced sellers, the rule that must be followed! The chat should be on a separate SIM card as well as the bot, channel, operator account, distributor!",
    protectionTip2: "It's better to purchase a channel and chat with a delay of at least 6 months, or better 1-2 years, then the demolition of this chat, when following the following points, will be practically impossible unless you get caught in a TG raid that takes place every quarter.",
    protectionTip3: "The same applies to the operator's account, you can create them in advance or buy an account with a delay for the operator and for the bot on a service like lolz.live.",
    protectionTip4: "It's better to buy premium status for all accounts, which will reduce the likelihood of your resources being demolished",
    protectionTip5: "You need to pump bots into the bot - channel - chat, preferably with premium, there are a bunch of services for this. I'll explain why this is needed: when specialized software is used to file complaints against you, if the number of complaints exceeds 50 percent of the total number of users, you will be demolished within an hour by Telegram moderators. For this, we pump bots into the chat, etc., which will protect you.",
    bonusFeature: "To stimulate the creation of personal bots, we added the ability to set a BONUS for creating your first personal bot in the store's currency.",
    bonusSetup: "To do this, in the store settings in the Personal Bots tab, set the bonus amount for creating the first bot in the store's currency.",
    bonusLimit: "We also added there the ability to set the maximum number of bots that a client can create. The bonus for creating a bot will be credited immediately after creation and a notification will be sent to all employees who receive notifications about promotions.",
    lifehack: "Also, a small life hack - the effectiveness of which has not yet been proven - but very interesting.",
    lifehackDescription: "In the Bots section - you can change the client's bot type to \"Seller Bot\" - then the distributor will give it to other clients.",
    lifehackWarning: "Perhaps such bots will live longer, or perhaps the client's account will die faster :) One of the two :)",
  },
};

export default botsTranslations;
