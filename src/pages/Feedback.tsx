
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { MessageSquare, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const { tLocal } = useTranslations();
  
  return (
    <TutorialPage title={tLocal('feedbackTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{tLocal('feedbackDescription')}</h2>
          
          <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-blue-600 dark:text-neonBlue" />
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">{tLocal('feedbackTitle')}</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{tLocal('feedbackInstruction')}</p>
          </div>
          
          {/* Section for sending message to client */}
          <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Send size={20} className="text-blue-600 dark:text-neonBlue" />
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">{tLocal('sendingMessageTitle')}</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">{tLocal('sendingMessageInstruction')}</p>
            
            <div className="flex justify-center">
              <img 
                src="https://i.ibb.co/67ChdPnq/Screenshot-2025-05-18-at-12-33-42-PM.png" 
                alt="Client messaging interface" 
                className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700" 
              />
            </div>
          </div>
          
          {/* New section for Telegram operator button */}
          <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail size={20} className="text-blue-600 dark:text-neonBlue" />
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">{tLocal('telegramOperatorTitle')}</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">{tLocal('telegramOperatorInstruction')}</p>
            
            <div className="flex justify-center">
              <img 
                src="https://i.ibb.co/Zpjrtjn0/Screenshot-2025-05-18-at-12-40-11-PM.png" 
                alt="Telegram operator button setup" 
                className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Feedback;
