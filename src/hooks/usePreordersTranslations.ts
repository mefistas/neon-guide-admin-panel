
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import preordersTranslations from '@/translations/preorders';

const usePreordersTranslations = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    if (!preordersTranslations[language as keyof typeof preordersTranslations]) {
      return key;
    }
    
    const translations = preordersTranslations[language as keyof typeof preordersTranslations];
    
    if (!translations[key as keyof typeof translations]) {
      return key;
    }
    
    return translations[key as keyof typeof translations] as string;
  };
  
  return { t };
};

export default usePreordersTranslations;
