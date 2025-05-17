import { Language } from '@/contexts/LanguageContext';

/**
 * Creates a translator function for the specified language
 * 
 * @param language The language to use for translations
 * @returns A function that translates keys to their corresponding values
 */
export const createTranslator = (language: Language) => {
  return (key: keyof typeof translations[typeof language]) => {
    return translations[language][key] || key;
  };
};

export const translations = {
  en: {
    // Common
    back: "Back",
    
    // Operator Work Section
    operatorWorkTitle: "Operator Work",
    operatorWorkShortDesc: "This section covers all aspects of operator work, including client management, feedback processing, and purchase handling.",
    operatorWorkSections: "Main Sections",
    operatorTips: "Tips for Operators",
    tip: "Tip",
    important: "Important",
    operatorTip1: "Always verify client information before processing any requests to ensure security and accuracy.",
    operatorTip2: "Regular communication with clients helps build trust and improves service quality.",
    
    // Operator Work Subsections
    clients: "Clients",
    clientsDesc: "Manage client profiles and information",
    feedback: "Feedback",
    feedbackDesc: "Process client feedback and reviews",
    purchasesProcessing: "Purchases Processing",
    purchasesProcessingDesc: "Handle client purchase requests",
    helpBots: "Help Bots",
    helpBotsDesc: "Configure automated support systems",
    internalChats: "Internal Chats",
    internalChatsDesc: "Communicate with team members",
    
    // Finance Section
    financeTitle: "Finance",
    financeShortDesc: "Manage all financial aspects of your business, including withdrawals, payments, and transaction history.",
    financeSections: "Financial Operations",
    quickAccess: "Quick Access",
    paymentMethods: "Payment Methods",
    reports: "Reports",
    
    // Finance Subsections
    withdrawFunds: "Withdraw Funds",
    withdrawFundsDesc: "Process fund withdrawal requests",
    courierSalary: "Courier Salary",
    courierSalaryDesc: "Manage courier payment systems",
    balanceTopUps: "Balance Top-ups",
    balanceTopUpsDesc: "Process account balance additions",
    btcCashout: "BTC Cashout",
    btcCashoutDesc: "Handle Bitcoin withdrawal requests",
    usdt: "USDT Transactions",
    usdtDesc: "Process USDT cryptocurrency operations",
    partnersExchangers: "Partners & Exchangers",
    partnersExchangersDesc: "Manage financial partnerships",
    balanceHistory: "Balance History",
    balanceHistoryDesc: "View transaction records and reports",
    
    // Marketing Section
    marketingTitle: "Marketing",
    marketingShortDesc: "Develop and manage marketing strategies, promotions, and customer engagement campaigns.",
    marketingSections: "Marketing Tools",
    marketingTips: "Marketing Tips",
    marketingTip1: "Segment your audience for more targeted and effective promotions.",
    marketingTip2: "Track the performance of your marketing campaigns to optimize future strategies.",
    
    // Marketing Subsections
    mailouts: "Email Campaigns",
    mailoutsDesc: "Create and manage email marketing",
    autoForwarding: "Auto Forwarding",
    autoForwardingDesc: "Set up automated message forwarding",
    promotions: "Promotions",
    promotionsDesc: "Create special offers and deals",
    cumulativeDiscounts: "Cumulative Discounts",
    cumulativeDiscountsDesc: "Loyalty rewards programs",
    promoCodes: "Promo Codes",
    promoCodesDesc: "Generate and track promotional codes",
    oneTimeDiscounts: "One-time Discounts",
    oneTimeDiscountsDesc: "Create limited-time special offers",
    happyHours: "Happy Hours",
    happyHoursDesc: "Time-limited special promotions"
  },
  ru: {
    // Common
    back: "Назад",
    
    // Operator Work Section
    operatorWorkTitle: "Работа оператора",
    operatorWorkShortDesc: "Этот раздел охватывает все аспекты работы оператора, включая управление клиентами, обработку отзывов и обработку покупок.",
    operatorWorkSections: "Основные разделы",
    operatorTips: "Советы для операторов",
    tip: "Совет",
    important: "Важно",
    operatorTip1: "Всегда проверяйте информацию о клиенте перед обработкой любых запросов для обеспечения безопасности и точности.",
    operatorTip2: "Регулярное общение с клиентами помогает укрепить доверие и улучшить качество обслуживания.",
    
    // Operator Work Subsections
    clients: "Клиенты",
    clientsDesc: "Управление профилями и информацией клиентов",
    feedback: "Отзывы",
    feedbackDesc: "Обработка отзывов и обзоров клиентов",
    purchasesProcessing: "Обработка покупок",
    purchasesProcessingDesc: "Обработка запросов на покупку от клиентов",
    helpBots: "Боты поддержки",
    helpBotsDesc: "Настройка автоматизированных систем поддержки",
    internalChats: "Внутренние чаты",
    internalChatsDesc: "Общение с членами команды",
    
    // Finance Section
    financeTitle: "Финансы",
    financeShortDesc: "Управляйте всеми финансовыми аспектами вашего бизнеса, включая снятие средств, платежи и историю транзакций.",
    financeSections: "Финансовые операции",
    quickAccess: "Быстрый доступ",
    paymentMethods: "Способы оплаты",
    reports: "Отчеты",
    
    // Finance Subsections
    withdrawFunds: "Вывод средств",
    withdrawFundsDesc: "Обработка запросов на вывод средств",
    courierSalary: "Зарплата курьеров",
    courierSalaryDesc: "Управление системами оплаты курьеров",
    balanceTopUps: "Пополнение баланса",
    balanceTopUpsDesc: "Обработка пополнений баланса аккаунта",
    btcCashout: "Вывод BTC",
    btcCashoutDesc: "Обработка запросов на вывод Bitcoin",
    usdt: "Транзакции USDT",
    usdtDesc: "Обработка операций с криптовалютой USDT",
    partnersExchangers: "Партнеры и обменники",
    partnersExchangersDesc: "Управление финансовыми партнерствами",
    balanceHistory: "История баланса",
    balanceHistoryDesc: "Просмотр записей транзакций и отчетов",
    
    // Marketing Section
    marketingTitle: "Маркетинг",
    marketingShortDesc: "Разрабатывайте и управляйте маркетинговыми стратегиями, акциями и кампаниями по привлечению клиентов.",
    marketingSections: "Маркетинговые инструменты",
    marketingTips: "Советы по маркетингу",
    marketingTip1: "Сегментируйте свою аудиторию для более целенаправленных и эффективных акций.",
    marketingTip2: "Отслеживайте эффективность ваших маркетинговых кампаний для оптимизации будущих стратегий.",
    
    // Marketing Subsections
    mailouts: "Email-кампании",
    mailoutsDesc: "Создание и управление email-маркетингом",
    autoForwarding: "Автоматическая пересылка",
    autoForwardingDesc: "Настройка автоматической пересылки сообщений",
    promotions: "Акции",
    promotionsDesc: "Создание специальных предложений и акций",
    cumulativeDiscounts: "Накопительные скидки",
    cumulativeDiscountsDesc: "Программы вознаграждения за лояльность",
    promoCodes: "Промо-коды",
    promoCodesDesc: "Генерация и отслеживание промо-кодов",
    oneTimeDiscounts: "Разовые скидки",
    oneTimeDiscountsDesc: "Создание ограниченных по времени специальных предложений",
    happyHours: "Счастливые часы",
    happyHoursDesc: "Ограниченные по времени специальные акции"
  }
};
