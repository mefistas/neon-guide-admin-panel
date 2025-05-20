
import React, { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import translations from '@/utils/translations';
import { happyHoursTranslations } from '@/translations/happyHours';
import { helpBotsTranslations } from '@/translations/helpBots';
import newSectionsTranslations from '@/translations/newSections';
import preordersTranslations from '@/translations/preorders';
import mailoutTranslations from '@/translations/mailouts';
import promotionsTranslations from '@/translations/promotions';
import cumulativeDiscountsTranslations from '@/translations/cumulativeDiscounts';
import promoCodesTranslations from '@/translations/promoCodes';
import autoForwardingTranslations from '@/translations/autoForwarding';
import workersTranslations from '@/translations/workers';

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
    // Check in workers translations
    if (workersTranslations[language]?.[key]) {
      return workersTranslations[language][key];
    }
    
    // Check in auto forwarding translations
    if (autoForwardingTranslations[language]?.[key]) {
      return autoForwardingTranslations[language][key];
    }
    
    // Check in promo codes translations
    if (promoCodesTranslations[language]?.[key]) {
      return promoCodesTranslations[language][key];
    }
    
    // Check in cumulative discounts translations
    if (cumulativeDiscountsTranslations[language]?.[key]) {
      return cumulativeDiscountsTranslations[language][key];
    }
    
    // Check in promotions translations
    if (promotionsTranslations[language]?.[key]) {
      return promotionsTranslations[language][key];
    }
    
    // Check in mailouts translations
    if (mailoutTranslations[language]?.[key]) {
      return mailoutTranslations[language][key];
    }
    
    // Check in preorders translations
    if (preordersTranslations[language]?.[key]) {
      return preordersTranslations[language][key];
    }
    
    // Check in new sections translations
    if (newSectionsTranslations[language]?.[key]) {
      return newSectionsTranslations[language][key];
    }
    
    // Check in happy hours translations
    if (happyHoursTranslations[language]?.[key]) {
      return happyHoursTranslations[language][key];
    }
    
    // Check in help bots translations
    if (helpBotsTranslations[language]?.[key]) {
      return helpBotsTranslations[language][key];
    }

    // Fall back to the original translation system
    if (translations[language]?.[key]) {
      return translations[language][key];
    }

    // If no translation is found, return the key as a fallback
    return key;
  };

  // Local translator for component-specific translations
  const tLocal = (key: string): string => {
    if (!translations[language] || !translations[language][key]) {
      return key;
    }
    return translations[language][key];
  };

  return { t, tNew, tLocal, language };
}

export default useTranslations;
