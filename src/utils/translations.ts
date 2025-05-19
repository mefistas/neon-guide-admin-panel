
import preorders from '@/translations/preorders';

/**
 * Create a translator function for the given language
 * 
 * @param language - The language to use for translations
 * @returns A function that takes a key and returns the translated string
 */
export function createTranslator(language: string, additionalTranslations?: any) {
  // Default translations
  const translations: Record<string, Record<string, string>> = {
    en: {
      // App
      adminPanelTutorial: "Admin Panel Tutorial",
      detailedGuide: "Detailed Guide",
      quickStart: "Quick Start",
      askQuestion: "Ask a Question",

      // General settings
      loading: "Loading...",
      error: "Error",
      success: "Success",
      
      // Card payments
      cardsPayments: "Cards & Payments",
      operatorWorkTitle: "Operator Work",
      operatorWorkSections: "Available Sections",
      operatorTips: "Tips for Operators",
      tip: "Tip",
      important: "Important",
      operatorTip1: "Always respond to client inquiries promptly to maintain good communication.",
      operatorTip2: "Follow the dispute resolution guidelines to ensure fair outcomes for both clients and the store.",
      
      // Operator sections
      clients: "Clients",
      clientsDesc: "Manage client information and balances",
      feedback: "Feedback",
      feedbackDesc: "Handle client messages and support",
      purchasesProcessing: "Purchases Processing",
      purchasesProcessingDesc: "Handle orders and resolve disputes",
      helpBots: "Helper Bots",
      helpBotsDesc: "Configure and manage help bots",
      internalChats: "Internal Chats",
      internalChatsDesc: "Communicate with team members",
      
      // Custom Bot
      customBotTitle: "Custom Bot",
      
      // Finance
      financeTitle: "Finance",
      
      // Marketing
      marketingTitle: "Marketing",

      ...additionalTranslations?.en || {}
    },
    ru: {
      // App
      adminPanelTutorial: "Обучение по Админ-Панели",
      detailedGuide: "Подробное Руководство",
      quickStart: "Быстрый Старт",
      askQuestion: "Задать Вопрос",

      // General settings
      loading: "Загрузка...",
      error: "Ошибка",
      success: "Успех",

      // Card payments
      cardsPayments: "Карты и Платежи",
      operatorWorkTitle: "Работа Оператора",
      operatorWorkSections: "Доступные Разделы",
      operatorTips: "Советы для Операторов",
      tip: "Совет",
      important: "Важно",
      operatorTip1: "Всегда оперативно отвечайте на запросы клиентов для поддержания хорошей коммуникации.",
      operatorTip2: "Следуйте рекомендациям по разрешению споров, чтобы обеспечить справедливые результаты как для клиентов, так и для магазина.",
      
      // Operator sections
      clients: "Клиенты",
      clientsDesc: "Управление информацией о клиентах и балансами",
      feedback: "Обратная Связь",
      feedbackDesc: "Обработка сообщений клиентов и поддержка",
      purchasesProcessing: "Обработка Покупок",
      purchasesProcessingDesc: "Обработка заказов и разрешение споров",
      helpBots: "Боты-Помощники",
      helpBotsDesc: "Настройка и управление ботами-помощниками",
      internalChats: "Внутренние Чаты",
      internalChatsDesc: "Общение с членами команды",

      // Custom Bot
      customBotTitle: "Настройка Бота",

      // Finance
      financeTitle: "Финансы",
      
      // Marketing
      marketingTitle: "Маркетинг",

      ...additionalTranslations?.ru || {}
    }
  };

  // Return a function that returns the translation for the given key
  return (key: string) => {
    return translations[language]?.[key] || key;
  };
}

// Precomputed translators for common languages
export const enTranslator = createTranslator('en', preorders);
export const ruTranslator = createTranslator('ru', preorders);
