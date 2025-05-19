
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import cumulativeDiscountsTranslations from '@/translations/cumulativeDiscounts';

export function useCumulativeDiscountsTranslations() {
  const { language } = useContext(LanguageContext);

  const t = (key: string): string => {
    if (cumulativeDiscountsTranslations[language]?.[key]) {
      return cumulativeDiscountsTranslations[language][key];
    }
    return key;
  };

  return { t, language };
}

export default useCumulativeDiscountsTranslations;
