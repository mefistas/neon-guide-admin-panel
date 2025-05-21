
type Languages = 'en' | 'ru';

type ChatsTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const chatsTranslations: ChatsTranslations = {
  en: {
    chatsChannelsDescription: "In this section, you'll learn how to set up and manage chats and channels for your shop to improve communication with your customers.",
    chatSetupTitle: "Setting up Chat",
    chatSetupDescription: "Create and configure your shop's chat to provide customer support and build community.",
    chatSetupImageAlt: "Chat setup interface",
    channelSetupTitle: "Channel Configuration",
    channelSetupDescription: "Set up announcement channels for promotions, news, and other important updates.",
    channelSetupImageAlt: "Channel setup interface",
    mustSubscribeTip: "Required Subscription",
    mustSubscribeDescription: "You can require users to subscribe to your channels before they can use your shop. This helps grow your audience and ensures customers receive important announcements.",
    advancedSettingsTitle: "Advanced Settings",
    advancedSettingsDescription: "Additional settings to customize your chat and channel experience:",
    advancedSetting1: "Set custom permissions for different user roles in your chats",
    advancedSetting2: "Configure automatic messaging for new subscribers",
    advancedSetting3: "Set up content filtering and moderation options"
  },
  ru: {
    chatsChannelsDescription: "В этом разделе вы узнаете, как настроить и управлять чатами и каналами для вашего магазина, чтобы улучшить коммуникацию с клиентами.",
    chatSetupTitle: "Настройка Чата",
    chatSetupDescription: "Создание и настройка чата вашего магазина для поддержки клиентов и построения сообщества.",
    chatSetupImageAlt: "Интерфейс настройки чата",
    channelSetupTitle: "Конфигурация Канала",
    channelSetupDescription: "Настройте каналы объявлений для акций, новостей и других важных обновлений.",
    channelSetupImageAlt: "Интерфейс настройки канала",
    mustSubscribeTip: "Обязательная Подписка",
    mustSubscribeDescription: "Вы можете требовать от пользователей подписки на ваши каналы, прежде чем они смогут использовать ваш магазин. Это поможет увеличить вашу аудиторию и гарантирует, что клиенты получат важные объявления.",
    advancedSettingsTitle: "Расширенные Настройки",
    advancedSettingsDescription: "Дополнительные параметры для настройки опыта работы с чатами и каналами:",
    advancedSetting1: "Установите настраиваемые разрешения для различных ролей пользователей в ваших чатах",
    advancedSetting2: "Настройте автоматические сообщения для новых подписчиков",
    advancedSetting3: "Настройте фильтрацию содержимого и параметры модерации"
  }
};

export default chatsTranslations;
