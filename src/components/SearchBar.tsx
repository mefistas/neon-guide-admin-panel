
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

interface Route {
  title: string;
  path: string;
  description?: string;
  content?: string[];
}

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  const routes: Route[] = useMemo(() => [
    { 
      title: t('quickStart'), 
      path: '/quick-start', 
      description: 'Get started with your shop quickly',
      content: ['setup', 'quick', 'start', 'guide', 'beginning', 'basic']
    },
    { 
      title: t('detailedGuide'), 
      path: '/detailed-guide', 
      description: 'Detailed documentation for all features',
      content: ['detailed', 'guide', 'documentation', 'manual', 'help', 'reference']
    },
    { 
      title: t('mainStats'), 
      path: '/main-stats', 
      description: 'Dashboard and statistics',
      content: ['statistics', 'dashboard', 'metrics', 'analytics', 'data', 'overview', 'charts']
    },
    { 
      title: t('clients'), 
      path: '/clients', 
      description: 'Manage your clients',
      content: ['clients', 'customers', 'users', 'profiles', 'management', 'balance', 'discount', 'block']
    },
    { 
      title: t('finance'), 
      path: '/finance', 
      description: 'Financial management',
      content: ['finance', 'money', 'payment', 'transaction', 'currency', 'wallet', 'income', 'revenue']
    },
    { 
      title: t('marketing'), 
      path: '/marketing', 
      description: 'Marketing tools and campaigns',
      content: ['marketing', 'promotion', 'campaign', 'advertising', 'promo', 'discount']
    },
    { 
      title: t('bots'), 
      path: '/how-to-add-bots', 
      description: 'Set up and manage bots',
      content: ['bots', 'telegram', 'automation', 'messages', 'setup', 'token', 'botfather']
    },
    { 
      title: t('addresses'), 
      path: '/addresses', 
      description: 'Manage delivery addresses',
      content: ['addresses', 'location', 'delivery', 'shipping', 'places', 'spots']
    },
    { 
      title: t('couriers'), 
      path: '/how-to-add-courier', 
      description: 'Set up couriers',
      content: ['couriers', 'delivery', 'staff', 'personnel', 'shipping', 'workers']
    },
    { 
      title: t('casinoSetup'), 
      path: '/casino-setup', 
      description: 'Set up casino',
      content: ['casino', 'games', 'gambling', 'setup', 'configuration']
    },
    { 
      title: t('chatsChannels'), 
      path: '/chats-chan', 
      description: 'Configure chats and channels',
      content: ['chats', 'channels', 'messages', 'communication', 'telegram', 'groups']
    },
    { 
      title: t('workers'), 
      path: '/workers', 
      description: 'Manage your employees',
      content: ['workers', 'employees', 'staff', 'personnel', 'team', 'management']
    },
    {
      title: t('purchases'),
      path: '/purchases',
      description: 'View and manage purchases',
      content: ['purchases', 'orders', 'sales', 'transactions', 'history', 'payments']
    },
    {
      title: t('balanceTopUps'),
      path: '/balance-top-ups',
      description: 'Balance top-ups and management',
      content: ['balance', 'top-up', 'deposit', 'refill', 'credit', 'funds', 'payment']
    },
  ], [t]);

  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return routes;
    
    const lowerQuery = searchQuery.toLowerCase().trim();
    
    return routes.filter(route => {
      // Search in title and description
      if (
        route.title.toLowerCase().includes(lowerQuery) || 
        (route.description && route.description.toLowerCase().includes(lowerQuery))
      ) {
        return true;
      }
      
      // Search in content keywords
      if (route.content) {
        return route.content.some(keyword => 
          keyword.toLowerCase().includes(lowerQuery)
        );
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
        className="h-9 rounded-full border-gray-300 dark:border-gray-700 mr-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">{t('search')}</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder={language === 'ru' ? "Поиск..." : "Search..."} 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>{language === 'ru' ? "Результатов не найдено" : "No results found"}</CommandEmpty>
          <CommandGroup heading={language === 'ru' ? "Результаты поиска" : "Search Results"}>
            {filteredRoutes.map((route) => (
              <CommandItem
                key={route.path}
                onSelect={() => handleSelect(route.path)}
                className="flex flex-col items-start"
              >
                <div className="font-medium">{route.title}</div>
                {route.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {route.description}
                  </div>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
