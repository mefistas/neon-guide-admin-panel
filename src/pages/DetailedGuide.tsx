
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Store, 
  Bot, 
  HardDrive, 
  MapPin, 
  Truck, 
  Users, 
  User, 
  ShoppingCart, 
  Wallet, 
  TrendingUp, 
  Banknote, 
  Globe,
  MessageSquare 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useDetailedGuideTranslations from '@/hooks/useDetailedGuideTranslations';

const DetailedGuide = () => {
  const { t } = useDetailedGuideTranslations();

  const guideItems = [
    {
      title: t('mainStats'),
      description: t('mainStatsDesc'),
      path: '/main-stats',
      icon: <Home className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('shops'),
      description: t('shopsDesc'),
      path: '/allstores',
      icon: <Store className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('bots'),
      description: t('botsDesc'),
      path: '/how-to-add-bots',
      icon: <Bot className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('chatsChannels'),
      description: t('chatsChannelsDesc'),
      path: '/chats-chan',
      icon: <MessageSquare className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('warehouse'),
      description: t('warehouseDesc'),
      path: '/stock',
      icon: <HardDrive className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('addresses'),
      description: t('addressesDesc'),
      path: '/addresses',
      icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('couriers'),
      description: t('couriersDesc'),
      path: '/how-to-add-courier',
      icon: <Truck className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('employees'),
      description: t('employeesDesc'),
      path: '/workers',
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('clients'),
      description: t('clientsDesc'),
      path: '/clients',
      icon: <User className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('purchases'),
      description: t('purchasesDesc'),
      path: '/purchases',
      icon: <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('balanceTopUps'),
      description: t('balanceTopUpsDesc'),
      path: '/balance-top-ups',
      icon: <Wallet className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('marketing'),
      description: t('marketingDesc'),
      path: '/marketing',
      icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('finance'),
      description: t('financeDesc'),
      path: '/finance',
      icon: <Banknote className="h-6 w-6 text-blue-600 dark:text-primary" />
    },
    {
      title: t('websites'),
      description: t('websitesDesc'),
      path: '/web',
      icon: <Globe className="h-6 w-6 text-blue-600 dark:text-primary" />
    }
  ];

  return (
    <TutorialPage title={t('detailedGuide')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guideItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <Card className="bg-white/80 hover:bg-blue-50/80 dark:bg-gray-900/70 dark:hover:bg-gray-800/70 transition-colors cursor-pointer h-full border-blue-100 dark:border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {item.icon}
                <div>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300">{item.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </TutorialPage>
  );
};

export default DetailedGuide;
