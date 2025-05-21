
import { useLanguage } from '@/contexts/LanguageContext';
import clientsTranslations from '@/translations/clients';

export function useClientsTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!clientsTranslations[language] || !clientsTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return clientsTranslations[language][key];
  };

  return { t, language };
}

export default useClientsTranslations;
