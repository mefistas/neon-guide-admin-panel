
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import { Bot, Dices, Headset, TrendingUp, Wallet, Book } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const { tNew } = useTranslations();

  const mainSections = [
    {
      title: 'quickStart',
      icon: <Bot size={24} className="mb-2" />,
      description: 'quickStartShortDesc',
      link: '/quick-start',
      isCustom: false
    },
    {
      title: 'customBotHomeTitle',
      icon: <Bot size={24} className="mb-2" />,
      description: 'customBotHomeDesc',
      link: '/custom-bot',
      isCustom: true
    },
    {
      title: 'financeTitle',
      icon: <Wallet size={24} className="mb-2" />,
      description: 'financeShortDesc',
      link: '/finance',
      isCustom: true
    },
    {
      title: 'marketingTitle',
      icon: <TrendingUp size={24} className="mb-2" />,
      description: 'marketingShortDesc',
      link: '/marketing',
      isCustom: true
    },
    {
      title: 'operatorWorkTitle',
      icon: <Headset size={24} className="mb-2" />,
      description: 'operatorWorkShortDesc',
      link: '/cards-payments',
      isCustom: true
    },
    {
      title: 'casinoSetup',
      icon: <Dices size={24} className="mb-2" />,
      description: 'casinoSetupShortDesc',
      link: '/casino-setup',
      isCustom: false
    },
    {
      title: 'detailedGuide',
      icon: <Book size={24} className="mb-2" />,
      description: 'detailedGuideShortDesc',
      link: '/detailed-guide',
      isCustom: false
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
                className="bg-black/50 p-6 rounded-lg formal-border hover:bg-gray-800/50 transition-colors flex flex-col items-center text-center"
              >
                {section.icon}
                <h2 className="text-xl font-medium mb-2">
                  {section.isCustom ? tNew(section.title) : t(section.title)}
                </h2>
                <p className="text-gray-300">
                  {section.isCustom ? tNew(section.description) : t(section.description)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
