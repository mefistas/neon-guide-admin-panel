
type LanguageType = 'ru' | 'en';

const autoForwardingTranslations: Record<LanguageType, Record<string, string>> = {
  en: {
    autoForwarding: 'Auto Forwarding',
    autoForwardingDesc: 'Information on how to set up auto forwarding',
    uniqueMarketingTool: 'Unique marketing tool!',
    locationPath: 'Located in the Marketing-Auto Forwarding section',
    moduleDescription: 'This module allows you to set up automatic forwarding of posts to your chats using Premium Emoji',
    step1: 'Create a "Forwarding" and give it a name, for example, "Job Announcement".',
    step2: 'Specify the bot token that has administrator rights in your channel from where the forwarding will take place.',
    step3: 'Specify the ID of your channel from where the message will be forwarded.',
    step4: 'Specify the post number that needs to be forwarded.',
    step5: 'Specify the list of chat IDs to which the message should be sent. The bot must be a member of the chat and have permission to send messages. Each ID on a separate line.',
    step6: 'Set up the automatic sending time and that\'s it!',
    marketingLevel: 'Now your marketing is at the highest level!',
    tip: 'Tip',
    autoForwardingTip: 'For maximum effectiveness, combine auto-forwarding with your other marketing tools like mailouts and promotions.'
  },
  ru: {
    autoForwarding: 'Автопересылки',
    autoForwardingDesc: 'Информация о том, как настроить автоматическую пересылку',
    uniqueMarketingTool: 'Уникальный маркетинговый инструмент!',
    locationPath: 'Находится в разделе Маркетинг-Автопересылки',
    moduleDescription: 'Данный мудуль позволит Вам настроить Автоматическую рассылку по Вашим чатам постов, с использованием Premium Emoji',
    step1: 'Создайте "Пересылку" и укажите ей название, например, "Объявление о работе".',
    step2: 'Укажите токен бота, который имееет права администратора в Вашем канале, от куда будет происходить пересылка.',
    step3: 'Укажите ID вашего канала, от куда будет происходить пересылка сообщения.',
    step4: 'Укажите номер поста, который необходимо пересылать.',
    step5: 'Укажите список ID чатов, в которые необходимо отправить сообщение. Бот должен быть участником чата и иметь права на отправку сообщений. Каждый ID в отдельной строчке.',
    step6: 'Настройте время автоматической отправки и все :)',
    marketingLevel: 'Теперь Ваш маркетинг на высшем уровне!',
    tip: 'Совет',
    autoForwardingTip: 'Для максимальной эффективности комбинируйте автопересылки с другими маркетинговыми инструментами, такими как рассылки и акции.'
  }
};

export default autoForwardingTranslations;
