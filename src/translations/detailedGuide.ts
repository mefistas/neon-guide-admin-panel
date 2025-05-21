
type Languages = 'en' | 'ru';

type DetailedGuideTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const detailedGuideTranslations: DetailedGuideTranslations = {
  en: {
    detailedGuide: "Detailed Guide",
    mainStats: "Main/Statistics",
    mainStatsDesc: "View main dashboard and statistics for your shop",
    shops: "Shops",
    shopsDesc: "Manage and configure your shops",
    bots: "BOTS",
    botsDesc: "Add and configure bots for your shop",
    chatsChannels: "Chats/Channels",
    chatsChannelsDesc: "Set up and manage chats and channels",
    warehouse: "Warehouse",
    warehouseDesc: "Manage your product inventory",
    addresses: "Addresses",
    addressesDesc: "Manage delivery addresses",
    couriers: "Couriers",
    couriersDesc: "Manage delivery couriers",
    employees: "Employees",
    employeesDesc: "Manage staff and employee accounts",
    clients: "Clients",
    clientsDesc: "View and manage client information",
    purchases: "Purchases",
    purchasesDesc: "Track and manage purchases",
    balanceTopUps: "Balance Top-ups",
    balanceTopUpsDesc: "Manage balance top-ups and payments",
    marketing: "Marketing",
    marketingDesc: "Marketing tools and promotions",
    finance: "Finance",
    financeDesc: "Financial management and reporting",
    websites: "Websites",
    websitesDesc: "Manage your websites"
  },
  ru: {
    detailedGuide: "Подробное руководство",
    mainStats: "Главная/Статистика",
    mainStatsDesc: "Просмотр основной панели мониторинга и статистики вашего магазина",
    shops: "Магазины",
    shopsDesc: "Управление и настройка ваших магазинов",
    bots: "БОТЫ",
    botsDesc: "Добавление и настройка ботов для вашего магазина",
    chatsChannels: "Каналы/Чаты",
    chatsChannelsDesc: "Настройка и управление чатами и каналами",
    warehouse: "Склад",
    warehouseDesc: "Управление товарными запасами",
    addresses: "Адреса",
    addressesDesc: "Управление адресами доставки",
    couriers: "Курьеры",
    couriersDesc: "Управление курьерами доставки",
    employees: "Сотрудники",
    employeesDesc: "Управление персоналом и учетными записями сотрудников",
    clients: "Клиенты",
    clientsDesc: "Просмотр и управление информацией о клиентах",
    purchases: "Покупки",
    purchasesDesc: "Отслеживание и управление покупками",
    balanceTopUps: "Пополнения балансов",
    balanceTopUpsDesc: "Управление пополнениями баланса и платежами",
    marketing: "Маркетинг",
    marketingDesc: "Маркетинговые инструменты и акции",
    finance: "Финансы",
    financeDesc: "Финансовое управление и отчетность",
    websites: "Сайты",
    websitesDesc: "Управление вашими сайтами"
  }
};

export default detailedGuideTranslations;
