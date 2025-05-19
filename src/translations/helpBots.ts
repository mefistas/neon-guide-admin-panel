
export type HelpBotsTranslations = {
  paymentBot: {
    en: string;
    ru: string;
  };
  paymentBotDescription: {
    en: string;
    ru: string;
  };
  paymentBotSteps: {
    en: string;
    ru: string;
  };
  paymentBotFeatures: {
    en: string;
    ru: string;
  };
  paymentBotOperators: {
    en: string;
    ru: string;
  };
};

export const helpBotsTranslations: HelpBotsTranslations = {
  paymentBot: {
    en: "Payment Acceptance Bot",
    ru: "Бот приема платежей"
  },
  paymentBotDescription: {
    en: "Another convenient type of helper bot is the Payment Acceptance Bot",
    ru: "Еще один удобный вид бота помощника это Бот приема платежей"
  },
  paymentBotSteps: {
    en: "In the Bots -> Working Bots section, there is a bot type called \"Payment Acceptance Bot\". After creating the bot, inside the bot settings there will be an \"Operator connection link\". You need to pass this link to the operator to activate the bot. Only one operator can be activated via the link. If you need to connect several operators, you will need to copy a new link from the bot settings.",
    ru: "В разделе Боты -> Рабочие Боты есть тип бота \"Бот приема платежей\". После создания бота - внутри настроек этого бота будет \"Ссылка для подключения оператора\" Вам необходимо передать эту ссылку оператору для активации бота. По ссылке можно активировать только одного оператора. Если вам необходимо подключить несколько - необходимо будет скопировать новую ссылку из настроек бота."
  },
  paymentBotFeatures: {
    en: "After activating the bot, the operator will have access only to account replenishment and viewing the latest deposits for the past 8 hours inside this bot. Also, this account will be blocked from accessing seller bots. That is, the operator will not be able to purchase goods from the showcase. The operator can create multiple deposit requests, open disputes, and resolve issues with exchanger support.",
    ru: "После активации бота, у оператора будет доступно только пополнение счета и просмотр последних пополнений за последние 8 часов внутри этого бота. А также, данному аккаунту будет заблокирован доступ в боты-продавцы. То есть покупать товар с витрины оператор не сможет. Оператор сможет создавать несколько заявок на пополнение, открывать споры и решать вопросы с поддержкой обменника."
  },
  paymentBotOperators: {
    en: "Funds will be credited to the store balance, only the store owner will be able to withdraw them. You can simultaneously work on manual and automatic sales. To disable an operator, it is enough to find the desired operator in the Clients section and check the Blocked checkbox. Or disable \"Manual Sales\" and remove the balance.",
    ru: "Средства будут зачисляться на баланс магазина, выводить их сможет только владелец магазина. Вы можете одновременно работать на ручных продажах и автоматических. Для отключения оператора достаточно в разделе Клиенты найти нужного оператора и поставить ему галочку Заблокирован. Либо отключить \"Ручные продажи\" и удалить баланс."
  }
};
