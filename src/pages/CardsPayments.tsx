
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, Headset, Bot, ShoppingCart, MapPin } from 'lucide-react';
import BackButton from '@/components/BackButton';

const CardsPayments = () => {
  const { tNew } = useTranslations();

  const operatorSubsections = [
    {
      title: 'clients',
      icon: <Users size={20} className="mr-2" />,
      path: '/clients',
      description: 'clientsDesc'
    },
    {
      title: 'feedback',
      icon: <MessageSquare size={20} className="mr-2" />,
      path: '/feedback',
      description: 'feedbackDesc'
    },
    {
      title: 'purchasesProcessing',
      icon: <Headset size={20} className="mr-2" />,
      path: '/purchases',
      description: 'purchasesProcessingDesc'
    },
    {
      title: 'helpBots',
      icon: <Bot size={20} className="mr-2" />,
      path: '/help-bots',
      description: 'helpBotsDesc'
    },
    {
      title: 'internalChats',
      icon: <MessageSquare size={20} className="mr-2" />,
      path: '/internal-chats',
      description: 'internalChatsDesc'
    },
    {
      title: 'preorders',
      icon: <ShoppingCart size={20} className="mr-2" />,
      path: '/preorders',
      description: 'preordersDesc'
    },
    {
      title: 'addresses',
      icon: <MapPin size={20} className="mr-2" />,
      path: '/addresses',
      description: 'addressesDesc'
    }
  ];

  return (
    <TutorialPage title={tNew('operatorWorkTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <BackButton to="/" className="mb-6" />
        
        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-blue-500 dark:border-neonBlue pl-3 light-text">
            {tNew('operatorWorkSections')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {operatorSubsections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path}
                className="light-accent p-4 rounded-lg light-hover transition-colors flex items-center shadow-sm border light-border"
              >
                <span className="text-blue-700 dark:text-neonBlue">{section.icon}</span>
                <div>
                  <h4 className="font-medium light-text">{tNew(section.title)}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tNew(section.description)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-blue-500 dark:border-neonBlue pl-3 light-text">
            {tNew('operatorTips')}
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50/80 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
              <p className="font-semibold text-gray-800 dark:text-white">{tNew('tip')}:</p>
              <p className="text-gray-700 dark:text-gray-300">{tNew('operatorTip1')}</p>
            </div>
            <div className="p-4 bg-blue-50/80 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
              <p className="font-semibold text-gray-800 dark:text-white">{tNew('important')}:</p>
              <p className="text-gray-700 dark:text-gray-300">{tNew('operatorTip2')}</p>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default CardsPayments;
