
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center">
      <Globe className="mr-2 h-4 w-4 text-gray-400" />
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as 'en' | 'ru')}
      >
        <SelectTrigger className="w-[150px] bg-gray-800 border-gray-700 text-white">
          <SelectValue placeholder={t('languageSelector')} />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-white border-gray-700">
          <SelectItem value="en">{t('english')}</SelectItem>
          <SelectItem value="ru">{t('russian')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
