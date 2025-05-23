
import React from 'react';
import { Link } from 'react-router-dom';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import usePreordersTranslations from '@/hooks/usePreordersTranslations';
import { Separator } from '@/components/ui/separator';

const Preorders = () => {
  const { t } = usePreordersTranslations();
  
  return (
    <TutorialPage title={t('preordersTitle')}>
      <div className="max-w-4xl mx-auto space-y-8">
        <BackButton to="/cards-payments" className="mb-6" />
        
        <div className="bg-white/90 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-white text-lg">{t('preordersIntro')}</p>
            
            <div className="bg-blue-50/80 dark:bg-gray-800/50 rounded-lg p-6 space-y-4">
              <p className="text-gray-800 dark:text-white">{t('preordersStep1')}</p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/5DzTGBq/IMAGE-2025-05-19-12-32-04.jpg" 
                  alt="Cities settings" 
                  className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-full"
                />
              </div>
              
              <p className="text-gray-800 dark:text-white mt-4">{t('preordersStep2')}</p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/QjvvqZ4n/IMAGE-2025-05-19-12-34-27.jpg" 
                  alt="Districts settings" 
                  className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-full"
                />
              </div>
              
              <p className="text-gray-800 dark:text-white font-medium mt-4">{t('preordersRequirement')}</p>
            </div>
          </div>
          
          <Separator className="bg-gray-200 dark:bg-gray-700 my-8" />
          
          {/* Product Types */}
          <div className="space-y-4">
            <h2 className="text-2xl text-gray-800 dark:text-white font-semibold">{t('preordersProductsTitle')}</h2>
            <p className="text-gray-800 dark:text-white text-lg">{t('preordersProductsDesc')}</p>
            <p className="text-gray-800 dark:text-white text-lg">{t('preordersProductSetup')}</p>
            
            <div className="flex justify-center">
              <img 
                src="https://i.ibb.co/TMt9wCHK/Screenshot-2025-05-19-at-12-40-08-PM.png" 
                alt="Product types settings" 
                className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-full"
              />
            </div>
            
            <p className="text-gray-800 dark:text-white">{t('preordersOtherSettings')}</p>
            <p className="text-gray-800 dark:text-white">{t('preordersMenuInfo')}</p>
            
            <div className="bg-blue-50/80 dark:bg-gray-800/50 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p className="text-gray-800 dark:text-white">{t('preordersExampleDesc')}</p>
              </div>
              <div className="flex-shrink-0 flex justify-center md:justify-end">
                <img 
                  src="https://i.ibb.co/DHvMhS6c/Screenshot-2025-05-19-at-12-50-46-PM.png" 
                  alt="Example district" 
                  className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-full md:max-w-[300px]"
                />
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200 dark:bg-gray-700 my-8" />
          
          {/* Processing Preorders */}
          <div className="space-y-4">
            <h2 className="text-2xl text-gray-800 dark:text-white font-semibold">{t('preordersProcessingTitle')}</h2>
            <p className="text-gray-800 dark:text-white">{t('preordersProcessingDesc')}</p>
            
            <div className="flex justify-center">
              <img 
                src="https://i.ibb.co/WdV5xYm/IMAGE-2025-05-19-12-58-03.jpg" 
                alt="Purchases section" 
                className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-full"
              />
            </div>
            
            <p className="text-gray-800 dark:text-white">{t('preordersProcessingSteps')}</p>
          </div>
          
          <Separator className="bg-gray-200 dark:bg-gray-700 my-8" />
          
          {/* Staff Accounts */}
          <div className="space-y-4">
            <h2 className="text-2xl text-gray-800 dark:text-white font-semibold">{t('preordersStaffTitle')}</h2>
            <p className="text-gray-800 dark:text-white">{t('preordersStaffDesc')}</p>
            <p className="text-gray-800 dark:text-white">{t('preordersStaffSetup')}</p>
            <p className="text-gray-800 dark:text-white">
              {t('preordersLearnMore')}{' '}
              <Link to="/workers" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                {t('workers')}
              </Link> {t('section')}
            </p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Preorders;
