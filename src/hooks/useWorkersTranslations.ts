
import { useLanguage } from '@/contexts/LanguageContext';
import workersTranslations from '@/translations/workers';

export function useWorkersTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!workersTranslations[language] || !workersTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return workersTranslations[language][key];
  };

  return { t };
}

export default useWorkersTranslations;
