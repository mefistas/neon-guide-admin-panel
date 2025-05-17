
/**
 * Additional translations utility for new pages and components.
 * This file is used to store translations for new content without modifying 
 * the original LanguageContext.tsx file.
 * 
 * Import this file to use translations in new components:
 * import { getTranslation } from '@/utils/translations';
 * 
 * Usage:
 * const translatedText = getTranslation(key, language);
 */

type Language = 'en' | 'ru';

interface TranslationsStore {
  [key: string]: {
    en: string;
    ru: string;
  };
}

// Add new translations here
const additionalTranslations: TranslationsStore = {
  // Example
  // newPageTitle: {
  //   en: 'New Page',
  //   ru: 'Новая страница'
  // }
};

/**
 * Get translation for a specific key and language
 * @param key Translation key
 * @param language Current language
 * @returns Translated text or key if translation not found
 */
export const getTranslation = (key: string, language: Language): string => {
  if (additionalTranslations[key] && additionalTranslations[key][language]) {
    return additionalTranslations[key][language];
  }
  return key;
};

/**
 * Add new translations to the store
 * @param key Translation key
 * @param en English translation
 * @param ru Russian translation
 */
export const addTranslation = (key: string, en: string, ru: string): void => {
  additionalTranslations[key] = { en, ru };
};

/**
 * Create a translation utility function with current language
 * @param language Current language
 * @returns Translation function
 */
export const createTranslator = (language: Language) => 
  (key: string): string => getTranslation(key, language);

