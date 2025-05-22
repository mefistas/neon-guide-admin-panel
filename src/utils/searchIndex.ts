
import { useState, useEffect } from 'react';
import * as translations from '../utils/translations';
import * as addressesTranslations from '../translations/addresses';
import * as autoForwardingTranslations from '../translations/autoForwarding';
import * as botsTranslations from '../translations/bots';
import * as chatsTranslations from '../translations/chats';
import * as clientsTranslations from '../translations/clients';
import * as couriersTranslations from '../translations/couriers';
import * as cumulativeDiscountsTranslations from '../translations/cumulativeDiscounts';
import * as detailedGuideTranslations from '../translations/detailedGuide';
import * as happyHoursTranslations from '../translations/happyHours';
import * as helpBotsTranslations from '../translations/helpBots';
import * as mailoutTranslations from '../translations/mailouts';
import * as mainStatsTranslations from '../translations/mainStats';
import * as newSectionsTranslations from '../translations/newSections';
import * as oneTimeDiscountsTranslations from '../translations/oneTimeDiscounts';
import * as preordersTranslations from '../translations/preorders';
import * as promoCodesTranslations from '../translations/promoCodes';
import * as promotionsTranslations from '../translations/promotions';
import * as stockTranslations from '../translations/stock';
import * as workersTranslations from '../translations/workers';

type IndexItem = {
  key: string;
  text: string;
  path: string;
  section?: string;
};

export const useSearchIndex = (searchTerm: string) => {
  const [results, setResults] = useState<IndexItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Build search index from all translations files
  const buildSearchIndex = () => {
    const index: IndexItem[] = [];

    // Helper function to flatten translations objects
    const flattenTranslations = (obj: any, path: string, section?: string): void => {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          if (section) {
            flattenTranslations(value, path, `${section}-${key}`);
          } else {
            flattenTranslations(value, path, key);
          }
        } else if (typeof value === 'string') {
          index.push({
            key,
            text: value,
            path,
            section
          });
        }
      });
    };

    // Add main translations from translations.ts
    // Access the nested objects properly
    if (translations.additionalTranslations) {
      Object.entries(translations.additionalTranslations).forEach(([key, translationObj]) => {
        if (translationObj.en) index.push({
          key,
          text: translationObj.en,
          path: '/',
          section: 'main'
        });
        if (translationObj.ru) index.push({
          key,
          text: translationObj.ru,
          path: '/',
          section: 'main'
        });
      });
    }
    
    // Add specialized translations
    const translationModules = [
      { content: addressesTranslations, path: '/addresses' },
      { content: autoForwardingTranslations, path: '/auto-forwarding' },
      { content: botsTranslations, path: '/how-to-add-bots' },
      { content: chatsTranslations, path: '/chats-chan' },
      { content: clientsTranslations, path: '/clients' },
      { content: couriersTranslations, path: '/how-to-add-courier' },
      { content: cumulativeDiscountsTranslations, path: '/cumulative-discounts' },
      { content: detailedGuideTranslations, path: '/detailed-guide' },
      { content: happyHoursTranslations, path: '/happy-hours' },
      { content: helpBotsTranslations, path: '/help-bots' },
      { content: mailoutTranslations, path: '/mailouts' },
      { content: mainStatsTranslations, path: '/main-stats' },
      { content: newSectionsTranslations, path: '/' },
      { content: oneTimeDiscountsTranslations, path: '/one-time-discounts' },
      { content: preordersTranslations, path: '/preorders' },
      { content: promoCodesTranslations, path: '/promo-codes' },
      { content: promotionsTranslations, path: '/promotions' },
      { content: stockTranslations, path: '/stock' },
      { content: workersTranslations, path: '/workers' },
    ];
    
    translationModules.forEach(({ content, path }) => {
      // Check if module has default export or named exports
      if (content.default) {
        // Handle default export
        if (content.default.en) flattenTranslations(content.default.en, path, path.substring(1));
        if (content.default.ru) flattenTranslations(content.default.ru, path, path.substring(1));
      } else {
        // Handle named exports - look for common patterns in translation files
        const translations = content as any;
        if (translations.en) flattenTranslations(translations.en, path, path.substring(1));
        if (translations.ru) flattenTranslations(translations.ru, path, path.substring(1));
        
        // Some translation files might have different structures
        // e.g. addressesTranslations might export { addressesTranslations } with en/ru inside
        Object.values(translations).forEach((exportedObj: any) => {
          if (exportedObj && typeof exportedObj === 'object') {
            if (exportedObj.en) flattenTranslations(exportedObj.en, path, path.substring(1));
            if (exportedObj.ru) flattenTranslations(exportedObj.ru, path, path.substring(1));
          }
        });
      }
    });
    
    return index;
  };

  useEffect(() => {
    if (!searchTerm || searchTerm.length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const searchTermLower = searchTerm.toLowerCase();
    
    // Build or get the search index
    const index = buildSearchIndex();
    
    // Filter the results
    const filteredResults = index.filter(item => 
      item.text.toLowerCase().includes(searchTermLower) || 
      item.key.toLowerCase().includes(searchTermLower)
    );
    
    // Deduplicate results based on text and path
    const uniqueResults = filteredResults.reduce((acc: IndexItem[], current) => {
      const isDuplicate = acc.find(item => 
        item.text === current.text && item.path === current.path
      );
      if (!isDuplicate) {
        acc.push(current);
      }
      return acc;
    }, []);
    
    // Sort by relevance (prioritize title matches, then text matches)
    const sortedResults = uniqueResults.sort((a, b) => {
      const aKeyMatch = a.key.toLowerCase().includes(searchTermLower);
      const bKeyMatch = b.key.toLowerCase().includes(searchTermLower);
      
      if (aKeyMatch && !bKeyMatch) return -1;
      if (!aKeyMatch && bKeyMatch) return 1;
      
      return 0;
    });
    
    // Limit results to avoid overwhelming the UI
    setResults(sortedResults.slice(0, 20));
    setIsSearching(false);
  }, [searchTerm]);

  return { results, isSearching };
};
