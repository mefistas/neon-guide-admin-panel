
import { useContext } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import oneTimeDiscountsTranslations from '@/translations/oneTimeDiscounts';

export function useOneTimeDiscountsTranslations() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!oneTimeDiscountsTranslations[language] || !oneTimeDiscountsTranslations[language][key]) {
      // Return the key if no translation exists
      return key;
    }
    return oneTimeDiscountsTranslations[language][key];
  };

  return { t };
}

export default useOneTimeDiscountsTranslations;
