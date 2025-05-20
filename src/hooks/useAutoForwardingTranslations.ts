
import { useContext } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import autoForwardingTranslations from '@/translations/autoForwarding';

export function useAutoForwardingTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!autoForwardingTranslations[language] || !autoForwardingTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return autoForwardingTranslations[language][key];
  };

  return { t };
}

export default useAutoForwardingTranslations;
