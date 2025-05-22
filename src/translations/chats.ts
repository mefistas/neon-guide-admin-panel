
type Languages = 'en' | 'ru';

type ChatsTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const chatsTranslations: ChatsTranslations = {
  en: {
    pageTitle: "Channels/Chats",
    introText: "In this section, you will learn how to set up and manage chats and channels for your shop to improve communication with customers.",
    menuPath: "Go to BOTS/CHANNELS - CHANNELS FOR MAILING",
    addChannel: "And click on the button to add a channel with a bot",
    setupInstructions: "- Specify the name of the shop, set the name of the channel",
    idInstruction: "- You will also need the ID of your chat or channel. To find out the ID, use this service in Telegram - https://t.me/username_to_id_bot",
    tokenInstruction: "- Also create a token for a new bot from @BotFather and paste it into the appropriate window",
    tokenImportant: "IMPORTANT - this bot needs to be added to your chats or channels and given ADMINISTRATOR rights for correct operation, then save.",
    saveWarning: "You will not be able to save until the bot is an administrator in your channel/chat! If you have done everything correctly, your channel will start to appear in the list available for work.",
    publicationsSection: "Now go to the BOTS/CHANNELS - PUBLICATIONS TO CHANNELS section",
    addPublication: "Click Add publication and write what you want to notify your clients about",
    buttonFormatInfo: "The section with the button works in the format (button text | link) - in case you write a button, your clients will be able to click on it and follow the corresponding link. Press save and check the result. Remember that the link in the button only works for going to telegram accounts, external links will not work!",
    repeatMessages: "You can send existing messages to groups and chats again",
    subscriptionRequirement: "You can also require users to subscribe to your channels before they can use your shop. This will help increase your audience and ensure clients receive important announcements. See the section",
    oneTimeDiscounts: "One-time Discounts",
    reviewsSettings: "In the settings of ALL SHOPS, in the Reviews tab - you can set up automatic publication of reviews to a channel/chat from a certain rating. In this case, all reviews with a rating of 3 and above will be published to your chat/channel! You can change the text template and make it more informative. Also in this section, you can write quick replies to clients from the bot for the review they left!",
    stockNotifications: "You can also start a mailing so that notifications about stock replenishment come to your chats or channels",
    marketingLearnMore: "After filling out this module, we advise you to check out the MARKETING section to learn about the wider capabilities of this module."
  },
  ru: {
    pageTitle: "Каналы/чаты",
    introText: "В этом разделе вы узнаете, как настроить и управлять чатами и каналами для вашего магазина, чтобы улучшить коммуникацию с клиентами.",
    menuPath: "Переходим в меню БОТЫ/КАНАЛЫ - КАНАЛЫ ДЛЯ РАССЫЛКИ",
    addChannel: "И нажимаем на кнопку добавить канал с ботом",
    setupInstructions: "- Указываем название магазина, задаем название канала",
    idInstruction: "- Так же вам понадобится ID вашего чата или канала. Что бы узнать id используйте данный сервис в телеграмме - https://t.me/username_to_id_bot",
    tokenInstruction: "- Так же создайте токен нового бота у @BotFather и вставьте его в соответствующее окно",
    tokenImportant: "ВАЖНО - данного бота нужно добавить в свои чаты или каналы и дать права АДМИНИСТРАТОРА для корректной работы после этого сохраняемся.",
    saveWarning: "Сохранить не получится пока бот не будет администратором в вашем канале/чате! Если вы все сделали правильно то ваш канал начнет отображаться в списке доступных для работы",
    publicationsSection: "Теперь переходим в раздел БОТЫ/КАНАЛЫ - ПУБЛИКАЦИИ В КАНАЛЫ",
    addPublication: "Нажимаем добавить публикацию и пишем то о чем хотим оповестить наших клиентов",
    buttonFormatInfo: "Раздел с кнопкой работает в формате (текст кнопки | ссылка) - в случае если вы прописываете кнопку ваши клиенты смогут нажать на нее и перейти по соответствующей ссылки. Нажимаем сохранить и проверяем результат. Помните что ссылка в кнопке работает только для перехода на телеграмм акаунты, сторонние ссылки работать не будут!",
    repeatMessages: "Вы можете повторно отправлять уже существующие сообщения в группы и чаты",
    subscriptionRequirement: "Вы так же можете требовать от пользователей подписки на ваши каналы, прежде чем они смогут использовать ваш магазин. Это поможет увеличить вашу аудиторию и гарантирует, что клиенты получат важные объявления. Смотри раздел",
    oneTimeDiscounts: "Единовременные скидки",
    reviewsSettings: "В настройках ВСЕ МАГАЗИНЫ, во вкладке Отзывы - можно настроить автоматическую публикацию отзывов в канал/чат с определенного рейтинга. В данном случае все отзывы с рейтингом 3 и выше будут публиковаться в ваш чат/канал! Вы можете изменить текстовый шаблон и сделать его более информативным. Так же в этом разделе вы можете прописать быстрые ответы клиентам от бота на оставленный ими отзыв!",
    stockNotifications: "Так же вы можете запустить рассылку что бы в ваши чаты или каналы пришли уведомления о пополнении витрины",
    marketingLearnMore: "Заполнив этот модуль советуем далее ознакомиться с разделом МАРКЕТИНГ что бы узнать о более широких возможностях данного модуля"
  }
};

export default chatsTranslations;
