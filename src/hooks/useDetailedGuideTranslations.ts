
import { useLanguage } from '@/contexts/LanguageContext';
import detailedGuideTranslations from '@/translations/detailedGuide';

export function useDetailedGuideTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!detailedGuideTranslations[language] || !detailedGuideTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return detailedGuideTranslations[language][key];
  };

  return { t };
}

export default useDetailedGuideTranslations;
