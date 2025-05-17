
import { useLanguage } from '@/contexts/LanguageContext';
import { createTranslator } from '@/utils/translations';

type LocalTranslations = {
  back: {
    en: string;
    ru: string;
  };
};

// Local translations that don't require modifying the language files
const localTranslations: LocalTranslations = {
  back: {
    en: "Back",
    ru: "Назад"
  }
};

/**
 * Custom hook to use both the original translations from LanguageContext,
 * the new translations from translations.ts, and local translations
 * 
 * Usage:
 * const { t, tNew, tLocal, language } = useTranslations();
 * 
 * t() - Original translation function from LanguageContext
 * tNew() - New translation function from translations.ts
 * tLocal() - Local translation function for component-specific translations
 */
export const useTranslations = () => {
  const { t, language } = useLanguage();
  
  // Create a translator with the current language
  const tNew = createTranslator(language);
  
  // Local translation function
  const tLocal = (key: keyof LocalTranslations) => {
    return localTranslations[key][language] || key;
  };
  
  return {
    t,       // Original translation function
    tNew,    // New translation function
    tLocal,  // Local translation function
    language // Current language
  };
};

export default useTranslations;
