
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, CreditCard, Bot } from 'lucide-react';

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
      icon: <CreditCard size={20} className="mr-2" />,
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
    }
  ];

  return (
    <TutorialPage title={tNew('operatorWorkTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <CreditCard size={32} className="text-neonBlue" />
            <h2 className="text-2xl font-semibold">{tNew('operatorWorkTitle')}</h2>
          </div>
          
          <p className="text-lg mb-6">
            {tNew('operatorWorkShortDesc')}
          </p>
        </section>

        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('operatorWorkSections')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {operatorSubsections.map((section, index) => (
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
            {tNew('operatorTips')}
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-neonBlue/10 rounded-md border border-neonBlue">
              <p className="font-semibold">{tNew('tip')}:</p>
              <p>{tNew('operatorTip1')}</p>
            </div>
            <div className="p-4 bg-neonBlue/10 rounded-md border border-neonBlue">
              <p className="font-semibold">{tNew('important')}:</p>
              <p>{tNew('operatorTip2')}</p>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default CardsPayments;
