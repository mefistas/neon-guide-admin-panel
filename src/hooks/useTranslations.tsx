
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations/translations';
import preorders from '../translations/preorders';

const newTranslations = {
  en: {
    ...translations.en,
    ...preorders.en,
  },
  ru: {
    ...translations.ru,
    ...preorders.ru,
  }
};

const useTranslations = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const translation = translations[language as keyof typeof translations]?.[key];
    return translation || key;
  };

  const tLocal = (key: string): string => {
    const translation = translations[language as keyof typeof translations]?.[key];
    return translation || translations['en'][key] || key;
  };

  const tNew = (key: string): string => {
    const translation = newTranslations[language as keyof typeof newTranslations]?.[key];
    return translation || key;
  };

  return { t, tNew, tLocal, language };
};

// For backwards compatibility with named imports
export { useTranslations };

// Default export
export default useTranslations;
