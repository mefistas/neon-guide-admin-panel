
type Languages = 'en' | 'ru';

type ClientsTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const clientsTranslations: ClientsTranslations = {
  en: {
    clientCards: "Client cards and their editing",
    clientCreation: "When a client writes to the bot - we create a client card in the panel.",
    clientInfo: "In the Clients section, you can view a list of all your clients who have ever activated your shop. In addition to personal data - username/name, etc., there is also:",
    balance: "Balance:",
    balanceDescription: "Current client balance in the shop currency. You can change it if needed.",
    discount: "Discount:",
    discountDescription: "Discount applicable to all products in the store, can also be negative, then the price for goods will be increased. The discount can be of two types: Percentage of the purchase amount or Fixed discount amount in the store currency.",
    block: "Block:",
    blockDescription: "Want to block a client? Set the checkbox and the client will not be able to buy in your store.",
    referrer: "Referrer:",
    referrerDescription: "The person who invited your client with their referral link.",
    mailing: "Mailing:",
    mailingDescription: "Whether this client receives mailings, set the appropriate value.",
    statistics: "Statistics:",
    statisticsDescription: "Number of invited people, number of completed top-ups, number of purchases.",
    comments: "Comments:",
    commentsDescription: "You can leave any comments about the client.",
    history: "History:",
    historyDescription: "Latest chat history. Also there is a Message field (In the CONVERSATION tab), by typing text there and pressing the SAVE button, the user will receive your message from the bot.",
    balanceTopup: "After a successful top-up request, we credit the amount to the client's balance. We also save information about this in the general history of changes for the client. You can view it by clicking the HISTORY button in the upper right corner of the client's page.",
    permissions: "Permissions",
    permissionsDescription: "In the access section, you can custom change restrictions on any functionality in the bot for the client, for example:",
    privateBots: "Cannot create private bots. (the button in the menu for this client and the ability to create private bots will disappear)",
    supportChat: "Cannot write to the 'Support' section. If you use an internal feedback system with the client - then this menu item will disappear for the client. But at the same time, you or your operators can write messages to the client through the Clients section - and the client will be able to respond to you.",
    referrals: "Cannot invite/receive bonuses for invitees. The invitation link will work, but it will not add new clients to the invited ones. And all accruals for already added referrals will also be turned off.",
    conversation: "Conversation",
    conversationDescription: "The conversation section will log all messages that the client sent to your bot. This section is not your correspondence with the client. If you want to contact the client through the bot, use the button in the right corner labeled SUPPORT CHAT.",
    bulkActions: "Bulk Actions",
    bulkActionsDescription: "In the Purchases or Feedback sections, you can select multiple items at once and select 'Close dispute without refund' or 'Mark as read' in the action selection menu.",
    messageTip: "After clicking the 'Execute' button in the form, you can specify a text message that will be sent to all marked clients from the list before closing the dispute or appeal. This way you can quickly close client appeals or disputes with the operator's contact information, whom the client needs to contact to solve their issue."
  },
  ru: {
    clientCards: "Карточки клиентов и их редактирование",
    clientCreation: "Когда клиент пишет в бот - мы создаем карточку клиента в панели.",
    clientInfo: "В разделе Клиенты вы можете посмотреть список всех ваших клиентов, которые когда-либо активировали ваш магазин. Помимо персональных данных - юзернейма/имени и тд есть еще:",
    balance: "Баланс:",
    balanceDescription: "Текущий баланс клиента в валюте магазина. Вы можете менять его при необходимости.",
    discount: "Скидка:",
    discountDescription: "Скидка действующая на всю продукцию в магазине, может быть и отрицательная, тогда цена на товары будет увеличена. Скидка может быть двух типов: Процент от суммы покупки или Фиксированная сумма скидки в валюте магазина.",
    block: "Блокировка:",
    blockDescription: "Хотите заблокировать клиента? Установите галочку и клиент не сможет покупать в вашем магазине.",
    referrer: "Пригласитель:",
    referrerDescription: "Человек, который пригласил вашего клиента по своей реферальной ссылке.",
    mailing: "Рассылка:",
    mailingDescription: "Получает ли данный клиент рассылку, установите нужное значение.",
    statistics: "Статистика:",
    statisticsDescription: "Кол-во приглашенных, кол-во выполненных пополнений, кол-во покупок.",
    comments: "Комментарий:",
    commentsDescription: "Вы можете оставлять любые комментарии по клиенту.",
    history: "История:",
    historyDescription: "Последняя история общения. Также есть поле Сообщение (Во вкладке РАЗГОВОР), написав текст туда и нажав кнопку СОХРАНИТЬ, пользователь получит ваше сообщение от имени бота.",
    balanceTopup: "После успешно выполненной заявки на пополнение мы начисляем сумму на баланс клиента. Также в этот момент мы сохраняем информацию об этом в общую историю изменений по клиенту. Ее посмотреть можно нажав на кнопку ИСТОРИЯ в вверхнем правом углу страницы клиента.",
    permissions: "Доступы",
    permissionsDescription: "В разделе доступы вы можете кастомно менять ограничения на какой либо функционал в боте у клиента, например:",
    privateBots: "Не может создавать приватных ботов. (пропадет кнопка в меню для этого клиента и возможность создавать приватных ботов)",
    supportChat: "Не может писать в раздел \"Поддержка\". Если вы используете внутреннюю систему обратной связи с клиентом - тогда этот пункт меню пропадет у клиента. Но при этом, вы или ваши операторы могут писать клиенту сообщения через раздел Клиенты - и клиент сможет вам отвечать.",
    referrals: "Не может приглашать/получать бонусы за приглашенных. Ссылка для приглашения при этом будет работать, но вот добавлять новых клиентов в приглашенных не будет. А также отключатся все начисления за уже добавленных рефералов.",
    conversation: "Разговор",
    conversationDescription: "В раздел разговор будут логироваться все сообщения которые клиент отправлял в ваш бот. Этот раздел не является вашей перепиской с клиентом. Если же вы хотите связаться с клиентом через бот, используйте кнопку в правом углу с названием ОБЩЕНИЕ С ПОДДЕРЖКОЙ.",
    bulkActions: "Массовые действия",
    bulkActionsDescription: "В разделах Покупки или Обратная связь вы можете выделить сразу несколько элементов и в меню выбора действий и выбрать \"Закрыть спор без возврата\" или \"Пометить прочитанным\".",
    messageTip: "После нажатия на кнопку \"Выполнить\" в форме можете указать текстовое сообщение, которое будет отправлено всем помеченным клиентам из списка перед закрытием спора или обращения. Таким образом можете быстро закрывать обращения клиентов или споров с указанием контактов оператора, к кому клиенту необходимо обратиться для решения своего вопроса."
  }
};

export default clientsTranslations;
