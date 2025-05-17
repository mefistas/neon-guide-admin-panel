
/**
 * Custom translations system that works alongside the original
 * translations from LanguageContext.
 * 
 * This system allows adding new translations without modifying
 * the protected LanguageContext.tsx file.
 */

// Types from the original system
export type Language = 'en' | 'ru';

type TranslationRecord = {
  [key: string]: {
    en: string;
    ru: string;
  }
};

type TranslationsStore = TranslationRecord;

// Add new translations here
const additionalTranslations: TranslationsStore = {
  // Custom Bot translations
  customBotTitle: {
    en: 'Custom Bot',
    ru: 'Кастомный Бот'
  },
  customBotShortDesc: {
    en: 'In this section, you can fully adapt the bot to your needs and customize all necessary menu items for yourself',
    ru: 'В этом разделе ты сможешь полностью адаптировать бот под свои нужды настроить все необходимые пункты меню под себя'
  },
  // New translations for the home page Custom Bot section
  customBotHomeTitle: {
    en: 'Bot Customization',
    ru: 'Кастомизация Бота'
  },
  customBotHomeDesc: {
    en: 'Complete guide to setting up the bot\'s menu and languages for your store',
    ru: 'Полный гайд по настройке меню и языков бота под свой магазин'
  }
};

/**
 * Get a translation from the additional translations store
 * @param key Translation key
 * @param language Current language
 * @returns Translated text or the key itself if not found
 */
export const getTranslation = (key: string, language: Language): string => {
  if (!key) return '';
  
  // Check if the key exists in our additional translations
  if (additionalTranslations[key] && additionalTranslations[key][language]) {
    return additionalTranslations[key][language];
  }
  
  // Return the key itself if no translation found
  // This allows the original system to handle it if available
  return key;
}

/**
 * Create a translator function for the specified language
 * @param language Language to use for translations
 * @returns A function that translates keys to the specified language
 */
export const createTranslator = (language: Language) => 
  (key: string): string => getTranslation(key, language);
