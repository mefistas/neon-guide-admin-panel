
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { addressesTranslations } from '@/translations/addresses';

const useAddressesTranslations = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    if (!addressesTranslations[language] || !addressesTranslations[language][key]) {
      // Fallback to English if translation doesn't exist
      if (addressesTranslations.en && addressesTranslations.en[key]) {
        return addressesTranslations.en[key];
      }
      // Return the key if no translation exists at all
      return key;
    }
    return addressesTranslations[language][key];
  };

  return { t, language };
};

export default useAddressesTranslations;
