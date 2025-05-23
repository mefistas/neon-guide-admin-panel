
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import usePromotionsTranslations from '@/hooks/usePromotionsTranslations';
import BackButton from '@/components/BackButton';
import { MapPin, Gift, Target } from 'lucide-react';

const Promotions = () => {
  const { t } = usePromotionsTranslations();
  
  return (
    <TutorialPage title={t('promotions')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="bg-white/90 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('promotionsDesc')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('promotionsPath')}</p>
            </div>
            <img 
              src="https://i.ibb.co/y2kSKH8/Screenshot-2025-05-19-at-3-13-35-PM.png" 
              alt="Promotions Interface" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">{t('locationPromotions')}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t('locationPromotionsDesc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Gift className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">{t('productPromotions')}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t('productPromotionsDesc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Target className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">{t('targetedPromotions')}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t('targetedPromotionsDesc')}</p>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-gray-700 dark:text-gray-300">{t('promotionsSetupInstructions')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Promotions;
