
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Bot, Building, Dices, CreditCard } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const mainSections = [
    {
      title: 'quickStart',
      icon: <Bot size={24} className="mb-2" />,
      description: 'quickStartShortDesc',
      link: '/quick-start'
    },
    {
      title: 'detailedGuide',
      icon: <Building size={24} className="mb-2" />,
      description: 'detailedGuideShortDesc',
      link: '/how-to-add-city'
    },
    {
      title: 'casinoSetup',
      icon: <Dices size={24} className="mb-2" />,
      description: 'casinoSetupShortDesc',
      link: '/casino-setup'
    },
    {
      title: 'cardsPayments',
      icon: <CreditCard size={24} className="mb-2" />,
      description: 'cardsPaymentsShortDesc',
      link: '/cards-payments'
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">{t('welcome')}</h1>
        
        <div className="bg-gray-900/70 p-8 rounded-lg formal-border mb-8">
          <p className="text-xl mb-6">{t('selectTopic')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainSections.map((section, index) => (
              <Link 
                key={index} 
                to={section.link}
                className="bg-black/50 p-6 rounded-lg formal-border hover:bg-gray-800/50 transition-colors flex flex-col items-center text-center"
              >
                {section.icon}
                <h2 className="text-xl font-medium mb-2">{t(section.title)}</h2>
                <p className="text-gray-300">{t(section.description)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
