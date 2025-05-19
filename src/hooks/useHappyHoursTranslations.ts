
import { useLanguage } from '@/contexts/LanguageContext';
import { happyHoursTranslations } from '@/translations/happyHours';

/**
 * Custom hook for Happy Hours page translations
 */
const useHappyHoursTranslations = () => {
  const { language } = useLanguage();
  
  /**
   * Get translation by key
   */
  const t = (key: keyof typeof happyHoursTranslations) => {
    return happyHoursTranslations[key][language as keyof typeof happyHoursTranslations[typeof key]];
  };
  
  return { t };
};

export default useHappyHoursTranslations;
