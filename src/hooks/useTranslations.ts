
import { useLanguage } from '@/contexts/LanguageContext';
import { createTranslator } from '@/utils/translations';

/**
 * Custom hook to use both the original translations from LanguageContext
 * and the new translations from translations.ts
 * 
 * Usage:
 * const { t, tNew, language } = useTranslations();
 * 
 * t() - Original translation function from LanguageContext
 * tNew() - New translation function from translations.ts
 */
export const useTranslations = () => {
  const { t, language } = useLanguage();
  
  // Create a translator with the current language
  const tNew = createTranslator(language);
  
  return {
    t,       // Original translation function
    tNew,    // New translation function
    language // Current language
  };
};

export default useTranslations;

