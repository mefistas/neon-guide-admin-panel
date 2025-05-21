
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import couriersTranslations from '@/translations/couriers';

const useCouriersTranslations = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    if (!couriersTranslations[language] || !couriersTranslations[language][key]) {
      // Fallback to English if translation doesn't exist
      if (couriersTranslations.en && couriersTranslations.en[key]) {
        return couriersTranslations.en[key];
      }
      // Return the key if no translation exists at all
      return key;
    }
    return couriersTranslations[language][key];
  };

  return { t, language };
};

export default useCouriersTranslations;
