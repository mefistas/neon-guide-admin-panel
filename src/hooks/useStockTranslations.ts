
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import stockTranslations from '@/translations/stock';

const useStockTranslations = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    if (!stockTranslations[language] || !stockTranslations[language][key]) {
      // Fallback to English if translation doesn't exist
      if (stockTranslations.en && stockTranslations.en[key]) {
        return stockTranslations.en[key];
      }
      // Return the key if no translation exists at all
      return key;
    }
    return stockTranslations[language][key];
  };

  return { t, language };
};

export default useStockTranslations;
