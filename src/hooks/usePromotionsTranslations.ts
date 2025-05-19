
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import promotionsTranslations from '@/translations/promotions';

export function usePromotionsTranslations() {
  const { language } = useContext(LanguageContext);

  const t = (key: string): string => {
    if (!promotionsTranslations[language] || !promotionsTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return promotionsTranslations[language][key];
  };

  return { t };
}

export default usePromotionsTranslations;
