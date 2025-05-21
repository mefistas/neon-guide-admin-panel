
import { useLanguage } from '@/contexts/LanguageContext';
import chatsTranslations from '@/translations/chats';

export function useChatsTranslations() {
  const { language } = useLanguage();

  const tLocal = (key: string): string => {
    if (!chatsTranslations[language] || !chatsTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return chatsTranslations[language][key];
  };

  return { tLocal, language };
}

export default useChatsTranslations;
