
import { useContext } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import mailoutTranslations from '@/translations/mailouts';

export function useMailoutsTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!mailoutTranslations[language] || !mailoutTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return mailoutTranslations[language][key];
  };

  return { t };
}

export default useMailoutsTranslations;
