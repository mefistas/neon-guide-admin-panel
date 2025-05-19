
import { useLanguage } from '@/contexts/LanguageContext';
import { helpBotsTranslations } from '@/translations/helpBots';

/**
 * Custom hook for Help Bots page translations
 */
const useHelpBotsTranslations = () => {
  const { language } = useLanguage();
  
  /**
   * Get translation by key
   */
  const t = (key: keyof typeof helpBotsTranslations) => {
    return helpBotsTranslations[key][language as keyof typeof helpBotsTranslations[typeof key]];
  };
  
  return { t };
};

export default useHelpBotsTranslations;
