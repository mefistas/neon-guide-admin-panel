
import React, { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import translations from '@/utils/translations';
import happyHoursTranslations from '@/translations/happyHours';
import helpBotsTranslations from '@/translations/helpBots';
import newSectionsTranslations from '@/translations/newSections';

// Original translation function that works with the legacy system
export function useTranslations() {
  const { language, setLanguage } = useContext(LanguageContext);

  // Original translator function
  const t = (key: string): string => {
    if (!translations[language] || !translations[language][key]) {
      // Return the key if no translation exists
      // console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    return translations[language][key];
  };

  // New translator function that works with the modular approach
  const tNew = (key: string): string => {
    // Check in happy hours translations
    if (happyHoursTranslations[language]?.[key]) {
      return happyHoursTranslations[language][key];
    }
    
    // Check in help bots translations
    if (helpBotsTranslations[language]?.[key]) {
      return helpBotsTranslations[language][key];
    }
    
    // Check in new sections translations
    if (newSectionsTranslations[language]?.[key]) {
      return newSectionsTranslations[language][key];
    }

    // Fall back to the original translation system
    if (translations[language]?.[key]) {
      return translations[language][key];
    }

    // If no translation is found, return the key as a fallback
    return key;
  };

  // Local translator for component-specific translations
  const tLocal = (translations: Record<string, Record<string, string>>, key: string): string => {
    if (!translations[language] || !translations[language][key]) {
      return key;
    }
    return translations[language][key];
  };

  return { t, tNew, tLocal, language };
}

export default useTranslations;
