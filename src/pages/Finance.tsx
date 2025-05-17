
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Wallet, History, CreditCard, ArrowDownToLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';

const Finance = () => {
  const { tNew } = useTranslations();

  const financeSubsections = [
    {
      title: 'withdrawFunds',
      icon: <ArrowDownToLine size={20} className="mr-2" />,
      path: '/withdraw-funds',
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
        <BackButton to="/" className="mb-6" />
        
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
      </div>
    </TutorialPage>
  );
};

export default Finance;
