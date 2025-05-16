
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center">
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as 'en' | 'ru')}
      >
        <SelectTrigger className="w-[120px] bg-black/50 border-gray-700 text-white">
          <SelectValue placeholder={t('languageSelector')} />
        </SelectTrigger>
        <SelectContent className="bg-black text-white border-gray-700">
          <SelectItem value="en">{t('english')}</SelectItem>
          <SelectItem value="ru">{t('russian')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
