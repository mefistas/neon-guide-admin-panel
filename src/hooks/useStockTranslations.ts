
import { useLanguage } from '@/contexts/LanguageContext';
import stockTranslations from '@/translations/stock';

const useStockTranslations = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return stockTranslations[language as keyof typeof stockTranslations]?.[key] || key;
  };

  return { t, language };
};

export default useStockTranslations;
