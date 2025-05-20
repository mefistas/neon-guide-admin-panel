
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Store, 
  Bot, 
  Warehouse, 
  MapPin, 
  Truck, 
  Users, 
  User, 
  ShoppingCart, 
  Wallet, 
  TrendingUp, 
  Banknote, 
  Globe 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DetailedGuide = () => {
  const { t } = useLanguage();

  const guideItems = [
    {
      title: 'Main/Statistics',
      description: 'View main dashboard and statistics for your shop',
      path: '/main-stats',
      icon: <Home className="h-6 w-6 text-primary" />
    },
    {
      title: 'Shops',
      description: 'Manage and configure your shops',
      path: '/allstores',
      icon: <Store className="h-6 w-6 text-primary" />
    },
    {
      title: 'BOTS',
      description: 'Add and configure bots for your shop',
      path: '/how-to-add-bots',
      icon: <Bot className="h-6 w-6 text-primary" />
    },
    {
      title: 'Warehouse',
      description: 'Manage your product inventory',
      path: '/stock',
      icon: <Warehouse className="h-6 w-6 text-primary" />
    },
    {
      title: 'Addresses',
      description: 'Manage delivery addresses',
      path: '/addresses',
      icon: <MapPin className="h-6 w-6 text-primary" />
    },
    {
      title: 'Couriers',
      description: 'Manage delivery couriers',
      path: '/how-to-add-courier',
      icon: <Truck className="h-6 w-6 text-primary" />
    },
    {
      title: 'Employees',
      description: 'Manage staff and employee accounts',
      path: '/workers',
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: 'Clients',
      description: 'View and manage client information',
      path: '/clients',
      icon: <User className="h-6 w-6 text-primary" />
    },
    {
      title: 'Purchases',
      description: 'Track and manage purchases',
      path: '/purchases',
      icon: <ShoppingCart className="h-6 w-6 text-primary" />
    },
    {
      title: 'Balance Top-ups',
      description: 'Manage balance top-ups and payments',
      path: '/balance-top-ups',
      icon: <Wallet className="h-6 w-6 text-primary" />
    },
    {
      title: 'Marketing',
      description: 'Marketing tools and promotions',
      path: '/marketing',
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
    {
      title: 'Finance',
      description: 'Financial management and reporting',
      path: '/finance',
      icon: <Banknote className="h-6 w-6 text-primary" />
    },
    {
      title: 'Websites',
      description: 'Manage your websites',
      path: '/web',
      icon: <Globe className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <TutorialPage title={t('detailedGuide')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guideItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <Card className="bg-gray-900/70 hover:bg-gray-800/70 transition-colors cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {item.icon}
                <div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{item.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </TutorialPage>
  );
};

export default DetailedGuide;
