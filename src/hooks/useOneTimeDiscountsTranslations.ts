
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import oneTimeDiscountsTranslations from '@/translations/oneTimeDiscounts';

export function useOneTimeDiscountsTranslations() {
  const { language } = useContext(LanguageContext);

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
