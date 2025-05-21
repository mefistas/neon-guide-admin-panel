
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import mainStatsTranslations from '@/translations/mainStats';

const useMainStatsTranslations = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    if (!mainStatsTranslations[language] || !mainStatsTranslations[language][key]) {
      // Fallback to English if translation doesn't exist
      if (mainStatsTranslations.en && mainStatsTranslations.en[key]) {
        return mainStatsTranslations.en[key];
      }
      // Return the key if no translation exists at all
      return key;
    }
    return mainStatsTranslations[language][key];
  };

  return { t, language };
};

export default useMainStatsTranslations;
