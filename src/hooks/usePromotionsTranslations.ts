
import { useLanguage } from '@/contexts/LanguageContext';
import promotionsTranslations from '@/translations/promotions';

export function usePromotionsTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!promotionsTranslations[language] || !promotionsTranslations[language][key]) {
      return key;
    }
    return promotionsTranslations[language][key];
  };

  return { t };
}

export default usePromotionsTranslations;
