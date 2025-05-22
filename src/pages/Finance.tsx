
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Wallet, CreditCard, ArrowDownToLine } from 'lucide-react';
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
    }
    // Removed partners/exchangers subsection
  ];

  return (
    <TutorialPage title={tNew('financeTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <BackButton to="/" className="mb-6" />
        
        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-blue-500 dark:border-neonBlue pl-3 text-gray-800 dark:text-white">
            {tNew('financeSections')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {financeSubsections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path}
                className="bg-blue-50/80 dark:bg-gray-800/50 p-4 rounded-lg hover:bg-blue-100/80 dark:hover:bg-gray-700/50 transition-colors flex items-center shadow-sm border border-blue-100 dark:border-gray-700"
              >
                <span className="text-blue-700 dark:text-neonBlue">{section.icon}</span>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">{tNew(section.title)}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tNew(section.description)}</p>
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
