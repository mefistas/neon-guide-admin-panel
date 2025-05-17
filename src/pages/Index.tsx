
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import { Bot, Dices, CreditCard, TrendingUp, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useLanguage();
  const { tNew } = useTranslations();

  const mainSections = [
    {
      title: 'quickStart',
      icon: <Bot size={24} />,
      description: 'quickStartShortDesc',
      link: '/quick-start',
      isCustom: false
    },
    {
      title: 'customBotHomeTitle',
      icon: <Bot size={24} />,
      description: 'customBotHomeDesc',
      link: '/custom-bot',
      isCustom: true
    },
    {
      title: 'operatorWorkTitle',
      icon: <CreditCard size={24} />,
      description: 'operatorWorkShortDesc',
      link: '/cards-payments',
      isCustom: true
    },
    {
      title: 'casinoSetup',
      icon: <Dices size={24} />,
      description: 'casinoSetupShortDesc',
      link: '/casino-setup',
      isCustom: false
    },
    {
      title: 'financeTitle',
      icon: <Wallet size={24} />,
      description: 'financeShortDesc',
      link: '/finance',
      isCustom: true
    },
    {
      title: 'marketingTitle',
      icon: <TrendingUp size={24} />,
      description: 'marketingShortDesc',
      link: '/marketing',
      isCustom: true
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">{t('welcome')}</h1>
        
        <div className="bg-gray-900/70 p-8 rounded-lg formal-border mb-8">
          <p className="text-xl mb-6">{t('selectTopic')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainSections.map((section, index) => (
              <Link 
                key={index} 
                to={section.link}
                className="block"
              >
                <Button 
                  variant="outline"
                  className="w-full h-auto py-6 flex flex-col items-center text-center gap-3 bg-black/50 hover:bg-gray-800/70 border-gray-700 hover:border-neonBlue transition-all duration-200"
                >
                  <div className="text-neonBlue">{section.icon}</div>
                  <h2 className="text-xl font-medium">
                    {section.isCustom ? tNew(section.title) : t(section.title)}
                  </h2>
                  <p className="text-gray-300 font-normal normal-case">
                    {section.isCustom ? tNew(section.description) : t(section.description)}
                  </p>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
