
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { MessageSquare } from 'lucide-react';

const Feedback = () => {
  const { tLocal } = useTranslations();
  
  return (
    <TutorialPage title={tLocal('feedbackTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">{tLocal('feedbackDescription')}</h2>
          
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-neonBlue" />
              <h2 className="text-lg font-medium">{tLocal('feedbackTitle')}</h2>
            </div>
            
            <p className="text-gray-300 whitespace-pre-line">{tLocal('feedbackInstruction')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Feedback;
