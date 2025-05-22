
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import { TrendingUp, Tag, Clock, Mail, MessageSquare, Percent, Gift } from 'lucide-react';
import BackButton from '@/components/BackButton';

const Marketing = () => {
  const { tNew, tLocal } = useTranslations();

  const marketingSubsections = [
    {
      title: 'mailouts',
      icon: <Mail size={20} className="mr-2" />,
      path: '/mailouts',
      description: 'mailoutsDesc'
    },
    {
      title: 'autoForwarding',
      icon: <MessageSquare size={20} className="mr-2" />,
      path: '/auto-forwarding',
      description: 'autoForwardingDesc'
    },
    {
      title: 'promotions',
      icon: <Gift size={20} className="mr-2" />,
      path: '/promotions',
      description: 'promotionsDesc'
    },
    {
      title: 'cumulativeDiscounts',
      icon: <Percent size={20} className="mr-2" />,
      path: '/cumulative-discounts',
      description: 'cumulativeDiscountsDesc'
    },
    {
      title: 'promoCodes',
      icon: <Tag size={20} className="mr-2" />,
      path: '/promo-codes',
      description: 'promoCodesDesc'
    },
    {
      title: 'oneTimeDiscounts',
      icon: <Tag size={20} className="mr-2" />,
      path: '/one-time-discounts',
      description: 'oneTimeDiscountsDesc'
    },
    {
      title: 'happyHours',
      icon: <Clock size={20} className="mr-2" />,
      path: '/happy-hours',
      description: 'happyHoursDesc'
    }
  ];

  return (
    <TutorialPage title={tNew('marketingTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <BackButton to="/" className="mb-6" />
        
        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-blue-500 dark:border-neonBlue pl-3 text-gray-800 dark:text-white">
            {tNew('marketingSections')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketingSubsections.map((section, index) => (
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

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-blue-500 dark:border-neonBlue pl-3 text-gray-800 dark:text-white">
            {tNew('marketingTips')}
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50/80 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
              <p className="font-semibold text-gray-800 dark:text-white">{tNew('tip')}:</p>
              <p className="text-gray-700 dark:text-gray-300">{tNew('marketingTip1')}</p>
            </div>
            <div className="p-4 bg-blue-50/80 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
              <p className="font-semibold text-gray-800 dark:text-white">{tNew('important')}:</p>
              <p className="text-gray-700 dark:text-gray-300">{tNew('marketingTip2')}</p>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Marketing;
