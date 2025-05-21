
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import botsTranslations from '@/translations/bots';

const useBotsTranslations = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    if (!botsTranslations[language] || !botsTranslations[language][key]) {
      // Fallback to English if translation doesn't exist
      if (botsTranslations.en && botsTranslations.en[key]) {
        return botsTranslations.en[key];
      }
      // Return the key if no translation exists at all
      return key;
    }
    return botsTranslations[language][key];
  };

  return { t, language };
};

export default useBotsTranslations;
