import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import useTranslations from '@/hooks/useTranslations';
import { Home, Settings, Users, ShoppingCart, CreditCard, MessageSquare, TrendingUp, Mail, BookOpenCheck, Bot, BadgePercent, MapPin, PlusCircle, ListChecks, PercentCircle, LucideIcon } from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

const Index = () => {
  const { t } = useLanguage();
  const { tNew } = useTranslations();

  const navItems: NavItem[] = [
    { title: 'settings', path: '/settings', icon: Settings },
    { title: 'couriers', path: '/couriers', icon: Users },
    { title: 'cardsPayments', path: '/cards-payments', icon: CreditCard },
    { title: 'purchases', path: '/purchases', icon: ShoppingCart },
    { title: 'internalChats', path: '/internal-chats', icon: MessageSquare },
    { title: 'marketing', path: '/marketing', icon: TrendingUp },
    { title: 'mailouts', path: '/mailouts', icon: Mail },
    { title: 'quickStart', path: '/quick-start', icon: BookOpenCheck },
    { title: 'helpBots', path: '/help-bots', icon: Bot },
    { title: 'customBot', path: '/custom-bot', icon: Bot },
    { title: 'howToAddCity', path: '/how-to-add-city', icon: MapPin },
    { title: 'howToAddDistrict', path: '/how-to-add-district', icon: PlusCircle },
    { title: 'howToAddAddress', path: '/how-to-add-address', icon: MapPin },
    { title: 'howToAddCourier', path: '/how-to-add-courier', icon: Users },
    { title: 'howToAddBots', path: '/how-to-add-bots', icon: Bot },
    { title: 'howToCreateProductGroup', path: '/how-to-create-product-group', icon: ListChecks },
    { title: 'financeTitle', path: '/finance', icon: CreditCard },
    { title: 'percentageCalculation', path: '/percentage-calculation', icon: PercentCircle },
    { title: 'bonusSystem', path: '/bonus-system', icon: BadgePercent },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-200">{t('welcome')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors flex items-center space-x-3 border border-gray-700"
          >
            <item.icon size={24} className="text-neonBlue" />
            <span className="text-lg font-medium text-gray-300">{tNew(item.title)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
