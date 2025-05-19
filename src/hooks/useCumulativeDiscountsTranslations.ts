
import { useLanguage } from '@/contexts/LanguageContext';
import cumulativeDiscountsTranslations from '@/translations/cumulativeDiscounts';

export function useCumulativeDiscountsTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (cumulativeDiscountsTranslations[language]?.[key]) {
      return cumulativeDiscountsTranslations[language][key];
    }
    return key;
  };

  return { t, language };
}

export default useCumulativeDiscountsTranslations;
