
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Wallet, Bitcoin, History, CreditCard, ArrowDownToLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Finance = () => {
  const { tNew } = useTranslations();

  const financeSubsections = [
    {
      title: 'withdrawFunds',
      icon: <ArrowDownToLine size={20} className="mr-2" />,
      path: '/partners-exchangers',
      description: 'withdrawFundsDesc'
    },
    {
      title: 'courierSalary',
      icon: <CreditCard size={20} className="mr-2" />,
      path: '/couriers-salary',
      description: 'courierSalaryDesc'
    },
    {
      title: 'balanceTopUps',
      icon: <Wallet size={20} className="mr-2" />,
      path: '/balance-top-ups',
      description: 'balanceTopUpsDesc'
    },
    {
      title: 'btcCashout',
      icon: <Bitcoin size={20} className="mr-2" />,
      path: '/btc-cashout',
      description: 'btcCashoutDesc'
    },
    {
      title: 'usdt',
      icon: <CreditCard size={20} className="mr-2" />,
      path: '/usdt',
      description: 'usdtDesc'
    },
    {
      title: 'partnersExchangers',
      icon: <CreditCard size={20} className="mr-2" />,
      path: '/partners-exchangers',
      description: 'partnersExchangersDesc'
    },
    {
      title: 'balanceHistory',
      icon: <History size={20} className="mr-2" />,
      path: '/balance-history',
      description: 'balanceHistoryDesc'
    }
  ];

  return (
    <TutorialPage title={tNew('financeTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <Wallet size={32} className="text-neonBlue" />
            <h2 className="text-2xl font-semibold">{tNew('financeTitle')}</h2>
          </div>
          
          <p className="text-lg mb-6">
            {tNew('financeShortDesc')}
          </p>
        </section>

        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('financeSections')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {financeSubsections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path}
                className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors flex items-center"
              >
                {section.icon}
                <div>
                  <h4 className="font-medium">{tNew(section.title)}</h4>
                  <p className="text-sm text-gray-400">{tNew(section.description)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('quickAccess')}
          </h3>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{tNew('paymentMethods')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/btc-cashout" className={navigationMenuTriggerStyle()}>
                      <Bitcoin className="mr-2" size={18} />
                      <div>
                        <div className="font-medium">{tNew('btcCashout')}</div>
                        <p className="text-sm text-muted-foreground">{tNew('btcCashoutDesc')}</p>
                      </div>
                    </Link>
                    <Link to="/usdt" className={navigationMenuTriggerStyle()}>
                      <CreditCard className="mr-2" size={18} />
                      <div>
                        <div className="font-medium">{tNew('usdt')}</div>
                        <p className="text-sm text-muted-foreground">{tNew('usdtDesc')}</p>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{tNew('reports')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/balance-history" className={navigationMenuTriggerStyle()}>
                      <History className="mr-2" size={18} />
                      <div>
                        <div className="font-medium">{tNew('balanceHistory')}</div>
                        <p className="text-sm text-muted-foreground">{tNew('balanceHistoryDesc')}</p>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Finance;
