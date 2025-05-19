
import { useLanguage } from '@/contexts/LanguageContext';
import promoCodesTranslations from '@/translations/promoCodes';

export function usePromoCodesTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (promoCodesTranslations[language]?.[key]) {
      return promoCodesTranslations[language][key];
    }
    return key;
  };

  return { t, language };
}

export default usePromoCodesTranslations;
