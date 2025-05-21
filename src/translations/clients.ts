
type Languages = 'en' | 'ru';

type ClientsTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const clientsTranslations: ClientsTranslations = {
  en: {
    clientsTitle: "Clients",
    clientCards: "Client cards and their editing",
    clientCreation: "When a client writes to the bot - we create a client card in the panel.",
    clientInfo: "In the Clients section, you can view a list of all your clients who have ever activated your store. In addition to personal data - username/name, etc., there is also:",
    balance: "Balance: ",
    balanceDescription: "Current client balance in store currency, which you can change if necessary",
    discount: "Discount: ",
    discountDescription: "Discount applicable to all products in the store, can also be negative, then the price of goods will be increased. The discount can be of two types: Percentage of the purchase amount or Fixed discount amount in the store currency.",
    block: "Block: ",
    blockDescription: "Want to block a client? Set the checkbox and the client will not be able to buy in your store",
    referrer: "Referrer: ",
    referrerDescription: "The person who invited your client with their referral link",
    subscription: "Subscription: ",
    subscriptionDescription: "Does this client receive mailings? Set the desired value",
    statistics: "Statistics: ",
    statisticsDescription: "Number of invites, number of completed top-ups, number of purchases",
    comments: "Comments: ",
    commentsDescription: "You can leave any comments about the client",
    history: "History: ",
    historyDescription: "Last conversation history and changes in the client's account",
    message: "Message: ",
    messageDescription: "In the CONVERSATION tab, by writing text there and clicking the SAVE button, the user will receive your message from the bot.",
    topup: "Top-up: ",
    topupDescription: "After a successfully completed top-up request, we credit the amount to the client's balance. We also save information about this in the general history of changes for the client. You can view it by clicking the HISTORY button in the upper right corner of the client page.",
    permissions: "Access Permissions",
    permissionsDescription: "In the access section, you can customize restrictions on any functionality in the bot for the client, for example:",
    privateBots: "Cannot create private bots (the button will disappear from the menu for this client and the ability to create private bots)",
    supportChat: "Cannot write to the \"Support\" section. If you use an internal feedback system with the client - then this menu item will disappear for the client. But at the same time, you or your operators can write messages to the client through the Clients section - and the client will be able to reply to you.",
    referrals: "Cannot invite/receive bonuses for invited users. The invitation link will work, but it will not be able to add new clients to invited ones. And also all accruals for already added referrals will be disabled.",
    conversation: "Conversation Section",
    conversationDescription: "All messages that the client sent to your bot will be logged in the conversation section. This section is not your correspondence with the client. If you want to contact the client through the bot, use the button in the right corner labeled SUPPORT CHAT.",
    bulkActions: "Bulk Actions",
    bulkActionsDescription: "In the Purchases or Feedback sections, you can select multiple items at once and in the actions selection menu, choose 'Close dispute without refund' or 'Mark as read'.",
    messageTip: "After clicking the 'Execute' button in the form, you can specify a text message that will be sent to all marked clients from the list before closing the dispute or request."
  },
  ru: {
    clientsTitle: "Клиенты",
    clientCards: "Карточки клиентов и их редактирование",
    clientCreation: "Когда клиент пишет в бот - мы создаем карточку клиента в панели.",
    clientInfo: "В разделе Клиенты вы можете посмотреть список всех ваших клиентов, которые когда-либо активировали ваш магазин. Помимо персональных данных - юзернейма/имени и тд есть еще:",
    balance: "Баланс: ",
    balanceDescription: "Текущий баланс клиента в валюте магазина, который вы можете менять при необходимости",
    discount: "Скидка: ",
    discountDescription: "Скидка действующая на всю продукцию в магазине, может быть и отрицательная, тогда цена на товары будет увеличена. Скидка может быть двух типов: Процент от суммы покупки или Фиксированная сумма скидки в валюте магазина.",
    block: "Блокировка: ",
    blockDescription: "Хотите заблокировать клиента? Установите галочку и клиент не сможет покупать в вашем магазине",
    referrer: "Пригласитель: ",
    referrerDescription: "Человек который пригласил вашего клиента по своей реферальной ссылке",
    subscription: "Рассылка: ",
    subscriptionDescription: "Получает ли данный клиент Рассылку, установите нужное значение",
    statistics: "Статистика: ",
    statisticsDescription: "Кол-во приглашенных, кол-во выполненных пополнений, кол-во покупок",
    comments: "Комментарий: ",
    commentsDescription: "Вы можете оставлять любые коментарии по клиенту",
    history: "История: ",
    historyDescription: "Последняя история общения и изменений в аккаунте клиента",
    message: "Сообщение: ",
    messageDescription: "Во вкладке РАЗГОВОР, написав текст туда и нажав кнопку СОХРАНИТЬ, пользователь получит ваше сообщение от имени бота.",
    topup: "Пополнение: ",
    topupDescription: "После успешно выполненной заявки на пополнение мы начисляем сумму на баланс клиента. Также в этот момент мы сохраняем информацию об этом в общую историю изменений для клиента. Ее посмотреть можно нажав на кнопку ИСТОРИЯ в вверхнем правом углу страницы клиента.",
    permissions: "Доступы",
    permissionsDescription: "В разделе доступы вы можете кастомно менять ограничения на какой либо функционал в боте у клиента например:",
    privateBots: "Не может создавать приватных ботов. (пропадет кнопка в меню для этого клиента и возможность создавать приватных ботов)",
    supportChat: "Не может писать в раздел \"Поддержка\". Если вы используете внутреннюю систему обратной связи с клиентом - тогда этот пункт меню пропадет у клиента. Но при этом, вы или ваши операторы могут писать сообщения клиенту через раздел Клиенты - и клиент сможет вам отвечать.",
    referrals: "Не может приглашать/получать бонусы за приглашенных. Ссылка для приглашения при этом будет работать, но вот добавлять новых клиентов в приглашенных не будет. А также отключатся все начисления за уже добавленных рефералов.",
    conversation: "Раздел разговор",
    conversationDescription: "В раздел разговор будут логироваться все сообщения которые клиент отправлял в ваш бот этот раздел не является вашей перепиской с клиентом. Если же вы хотите связаться с клиентом через бот используйте кнопку в правом углу с названием ОБЩЕНИЕ С ПОДДЕРЖКОЙ",
    bulkActions: "Массовые действия",
    bulkActionsDescription: "В разделах Покупки или Обратная связь вы можете выделить сразу несколько элементов и в меню выбора действий и выбрать \"Закрыть спор без возврата\" или \"Пометить прочитанным\"",
    messageTip: "После нажатия на кнопку \"Выполнить\" в форме можете указать текстовое сообщение, которое будет отправлено всем помеченным клиентам из списка перед закрытием спора или обращения."
  }
};

export default clientsTranslations;
