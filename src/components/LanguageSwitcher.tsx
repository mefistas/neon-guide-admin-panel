
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center">
      <Globe className="mr-2 h-4 w-4 text-gray-400 dark:text-gray-400" />
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as 'en' | 'ru')}
      >
        <SelectTrigger className="w-[150px] bg-white border-blue-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <SelectValue placeholder={t('languageSelector')} />
        </SelectTrigger>
        <SelectContent className="bg-white text-gray-800 border-blue-100 dark:bg-gray-800 dark:text-white dark:border-gray-700">
          <SelectItem value="en" className="text-gray-800 dark:text-white">{t('english')}</SelectItem>
          <SelectItem value="ru" className="text-gray-800 dark:text-white">{t('russian')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
