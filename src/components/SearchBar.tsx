
import React, { useState, useEffect } from 'react';
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
}

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  const routes: Route[] = [
    { title: t('quickStart'), path: '/quick-start', description: 'Get started with your shop quickly' },
    { title: t('detailedGuide'), path: '/detailed-guide', description: 'Detailed documentation for all features' },
    { title: t('mainStats'), path: '/main-stats', description: 'Dashboard and statistics' },
    { title: t('clients'), path: '/clients', description: 'Manage your clients' },
    { title: t('finance'), path: '/finance', description: 'Financial management' },
    { title: t('marketing'), path: '/marketing', description: 'Marketing tools and campaigns' },
    { title: t('bots'), path: '/how-to-add-bots', description: 'Set up and manage bots' },
    { title: t('addresses'), path: '/addresses', description: 'Manage delivery addresses' },
    { title: t('couriers'), path: '/how-to-add-courier', description: 'Set up couriers' },
    { title: t('casinoSetup'), path: '/casino-setup', description: 'Set up casino' },
    { title: t('chatsChannels'), path: '/chats-chan', description: 'Configure chats and channels' },
    { title: t('workers'), path: '/workers', description: 'Manage your employees' },
  ];

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
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-9 w-9 rounded-full border-gray-300 dark:border-gray-700 mr-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">{t('search')}</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={language === 'ru' ? "Поиск..." : "Search..."} />
        <CommandList>
          <CommandEmpty>{language === 'ru' ? "Результатов не найдено" : "No results found"}</CommandEmpty>
          <CommandGroup heading={language === 'ru' ? "Разделы" : "Sections"}>
            {routes.map((route) => (
              <CommandItem
                key={route.path}
                onSelect={() => handleSelect(route.path)}
              >
                <span>{route.title}</span>
                {route.description && (
                  <span className="text-xs text-muted-foreground ml-2">
                    {route.description}
                  </span>
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
