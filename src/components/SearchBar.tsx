
import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import clientsTranslations from '@/translations/clients';
import mailoutTranslations from '@/translations/mailouts';
import chatsTranslations from '@/translations/chats';
import detailedGuideTranslations from '@/translations/detailedGuide';
import botsTranslations from '@/translations/bots';

interface Route {
  title: string;
  path: string;
  description?: string;
  keywords?: string[];
  content?: string[];
}

interface SearchResult {
  title: string;
  path: string;
  description?: string;
  matchType: 'title' | 'description' | 'content' | 'keyword';
  excerpt?: string;
}

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Define all routes with their content for searching
  const routes: Route[] = useMemo(() => [
    { 
      title: t('quickStart'), 
      path: '/quick-start', 
      description: 'Get started with your shop quickly',
      keywords: ['setup', 'quick', 'start', 'guide', 'beginning', 'basic'],
      content: ['setting up shop', 'first steps', 'quick configuration']
    },
    { 
      title: t('detailedGuide'), 
      path: '/detailed-guide', 
      description: 'Detailed documentation for all features',
      keywords: ['detailed', 'guide', 'documentation', 'manual', 'help', 'reference'],
      content: Object.values(detailedGuideTranslations[language] || {})
    },
    { 
      title: t('mainStats'), 
      path: '/main-stats', 
      description: 'Dashboard and statistics',
      keywords: ['statistics', 'dashboard', 'metrics', 'analytics', 'data', 'overview', 'charts'],
      content: ['sales overview', 'customer analytics', 'revenue charts']
    },
    { 
      title: t('clients'), 
      path: '/clients', 
      description: 'Manage your clients',
      keywords: ['clients', 'customers', 'users', 'profiles', 'management'],
      content: Object.values(clientsTranslations[language] || {})
    },
    { 
      title: t('finance'), 
      path: '/finance', 
      description: 'Financial management',
      keywords: ['finance', 'money', 'payment', 'transaction', 'currency', 'wallet', 'income', 'revenue'],
      content: ['payment methods', 'transaction history', 'balance management']
    },
    { 
      title: t('marketing'), 
      path: '/marketing', 
      description: 'Marketing tools and campaigns',
      keywords: ['marketing', 'promotion', 'campaign', 'advertising', 'promo', 'discount'],
      content: ['marketing campaigns', 'promotional tools', 'discount management']
    },
    { 
      title: t('bots'), 
      path: '/how-to-add-bots', 
      description: 'Set up and manage bots',
      keywords: ['bots', 'telegram', 'automation', 'messages', 'setup', 'token', 'botfather'],
      content: Object.values(botsTranslations[language] || {})
    },
    { 
      title: t('addresses'), 
      path: '/addresses', 
      description: 'Manage delivery addresses',
      keywords: ['addresses', 'location', 'delivery', 'shipping', 'places', 'spots'],
      content: ['delivery zones', 'location management', 'address configuration']
    },
    { 
      title: t('couriers'), 
      path: '/how-to-add-courier', 
      description: 'Set up couriers',
      keywords: ['couriers', 'delivery', 'staff', 'personnel', 'shipping', 'workers'],
      content: ['courier setup', 'delivery staff', 'shipping personnel']
    },
    { 
      title: t('casinoSetup'), 
      path: '/casino-setup', 
      description: 'Set up casino',
      keywords: ['casino', 'games', 'gambling', 'setup', 'configuration'],
      content: ['casino games', 'gambling setup', 'game configuration']
    },
    { 
      title: t('chatsChannels'), 
      path: '/chats-chan', 
      description: 'Configure chats and channels',
      keywords: ['chats', 'channels', 'messages', 'communication', 'telegram', 'groups'],
      content: Object.values(chatsTranslations[language] || {})
    },
    { 
      title: t('workers'), 
      path: '/workers', 
      description: 'Manage your employees',
      keywords: ['workers', 'employees', 'staff', 'personnel', 'team', 'management'],
      content: ['employee management', 'staff configuration', 'worker permissions']
    },
    {
      title: t('purchases'),
      path: '/purchases',
      description: 'View and manage purchases',
      keywords: ['purchases', 'orders', 'sales', 'transactions', 'history', 'payments'],
      content: ['order history', 'purchase management', 'sales tracking']
    },
    {
      title: t('balanceTopUps'),
      path: '/balance-top-ups',
      description: 'Balance top-ups and management',
      keywords: ['balance', 'top-up', 'deposit', 'refill', 'credit', 'funds', 'payment'],
      content: ['account balance', 'deposit management', 'payment processing']
    },
    {
      title: t('mailouts'),
      path: '/mailouts',
      description: 'Configure and manage mailouts',
      keywords: ['mailouts', 'email', 'messaging', 'notifications', 'communication'],
      content: Object.values(mailoutTranslations[language] || {})
    },
  ], [t, language]);

  // Advanced search function that searches through titles, descriptions, keywords, and content
  const searchResults = useMemo((): SearchResult[] => {
    if (!searchQuery.trim()) return [];
    
    const lowerQuery = searchQuery.toLowerCase().trim();
    const results: SearchResult[] = [];
    
    routes.forEach(route => {
      let matched = false;
      
      // Search in title
      if (route.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          title: route.title,
          path: route.path,
          description: route.description,
          matchType: 'title'
        });
        matched = true;
      }
      
      // Search in description
      if (!matched && route.description && route.description.toLowerCase().includes(lowerQuery)) {
        results.push({
          title: route.title,
          path: route.path,
          description: route.description,
          matchType: 'description'
        });
        matched = true;
      }
      
      // Search in keywords
      if (!matched && route.keywords) {
        const matchingKeyword = route.keywords.find(keyword => 
          keyword.toLowerCase().includes(lowerQuery)
        );
        
        if (matchingKeyword) {
          results.push({
            title: route.title,
            path: route.path,
            description: route.description,
            matchType: 'keyword'
          });
          matched = true;
        }
      }
      
      // Search in content
      if (!matched && route.content) {
        for (const contentItem of route.content) {
          if (typeof contentItem === 'string' && contentItem.toLowerCase().includes(lowerQuery)) {
            const startIndex = contentItem.toLowerCase().indexOf(lowerQuery);
            const endIndex = startIndex + lowerQuery.length;
            
            // Create a readable excerpt
            let startExcerpt = Math.max(0, startIndex - 30);
            let endExcerpt = Math.min(contentItem.length, endIndex + 30);
            
            let excerpt = startExcerpt > 0 ? '...' : '';
            excerpt += contentItem.substring(startExcerpt, endIndex);
            excerpt += `<span class="bg-yellow-200 dark:bg-yellow-900">${contentItem.substring(startIndex, endIndex)}</span>`;
            excerpt += contentItem.substring(endIndex, endExcerpt);
            excerpt += endExcerpt < contentItem.length ? '...' : '';
            
            results.push({
              title: route.title,
              path: route.path,
              description: excerpt,
              matchType: 'content',
              excerpt
            });
            
            matched = true;
            break;
          }
        }
      }
    });
    
    // Remove duplicates (prefer title matches over description/content matches)
    const uniquePaths = new Set();
    return results.filter(result => {
      if (!uniquePaths.has(result.path)) {
        uniquePaths.add(result.path);
        return true;
      }
      return false;
    });
  }, [routes, searchQuery]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (path: string) => {
    navigate(path);
    setOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-9 rounded-full border-blue-200 bg-white text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white mr-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1" />
        <span className="sr-only md:not-sr-only md:ml-1 md:text-sm">{t('search')}</span>
      </Button>
      
      {/* Remove className from CommandDialog as it's not in the type definition */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder={language === 'ru' ? "Поиск..." : "Search..."} 
          value={searchQuery}
          onValueChange={setSearchQuery}
          className="text-gray-800 dark:text-gray-200"
        />
        <CommandList className="bg-white dark:bg-gray-900">
          <CommandEmpty className="text-gray-700 dark:text-gray-300">
            {language === 'ru' ? "Результатов не найдено" : "No results found"}
          </CommandEmpty>
          <CommandGroup heading={language === 'ru' ? "Результаты поиска" : "Search Results"}>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <CommandItem
                  key={`${result.path}-${index}`}
                  onSelect={() => handleSelect(result.path)}
                  className="flex flex-col items-start text-gray-800 dark:text-gray-200"
                >
                  <div className="font-medium">{result.title}</div>
                  {result.matchType === 'content' && result.excerpt ? (
                    <div 
                      className="text-xs text-gray-600 dark:text-gray-400 mt-1"
                      dangerouslySetInnerHTML={{ __html: result.excerpt }}
                    />
                  ) : (
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {result.description}
                    </div>
                  )}
                </CommandItem>
              ))
            ) : (
              searchQuery.trim() ? (
                <div className="p-2 text-sm text-gray-600 dark:text-gray-400">
                  {language === 'ru' ? "Введите более точный запрос" : "Enter a more specific search query"}
                </div>
              ) : (
                <div className="p-2 text-sm text-gray-600 dark:text-gray-400">
                  {language === 'ru' ? "Начните печатать для поиска" : "Start typing to search"}
                </div>
              )
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
