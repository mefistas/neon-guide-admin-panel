
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';

const Preorders = () => {
  const { tNew, language } = useTranslations();
  
  return (
    <TutorialPage title={tNew('preordersTitle')}>
      <div className="max-w-4xl mx-auto space-y-8">
        <BackButton to="/cards-payments" className="mb-6" />
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <p className="mb-6">{tNew('preordersIntro')}</p>

          <div className="space-y-6 mb-8">
            <div className="space-y-4">
              <p>{tNew('preordersStep1')}</p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/5DzTGBq/IMAGE-2025-05-19-12-32-04.jpg" 
                  alt="Cities setup" 
                  className="rounded-lg max-w-full h-auto border border-gray-700" 
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <p>{tNew('preordersStep2')}</p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/QjvvqZ4/IMAGE-2025-05-19-12-34-27.jpg" 
                  alt="Districts setup" 
                  className="rounded-lg max-w-full h-auto border border-gray-700" 
                />
              </div>
            </div>
            
            <p className="font-medium text-amber-300">{tNew('preordersRequirement')}</p>
          </div>

          <div className="border-t border-gray-700 pt-6 mt-6">
            <h2 className="text-xl font-medium mb-4">
              {tNew('preordersProductsTitle')}
            </h2>
            
            <div className="space-y-6 mb-8">
              <p>{tNew('preordersProductsDesc')}</p>
              <p>{tNew('preordersProductSetup')}</p>
              
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/TMt9wCH/Screenshot-2025-05-19-at-12-40-08-PM.png" 
                  alt="Product setup" 
                  className="rounded-lg max-w-full h-auto border border-gray-700" 
                />
              </div>
              
              <p>{tNew('preordersOtherSettings')}</p>
              <p>{tNew('preordersMenuInfo')}</p>
              
              <div className="bg-gray-800/50 p-4 rounded-lg mt-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <p className="md:w-2/3">{tNew('preordersExampleDesc')}</p>
                  <div className="md:w-1/3">
                    <img 
                      src="https://i.ibb.co/DHvMhS6/Screenshot-2025-05-19-at-12-50-46-PM.png" 
                      alt="Example setup" 
                      className="rounded-lg max-w-full h-auto border border-gray-700" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-6">
            <h2 className="text-xl font-medium mb-4">
              {tNew('preordersProcessingTitle')}
            </h2>
            
            <div className="space-y-6 mb-8">
              <p>{tNew('preordersProcessingDesc')}</p>
              
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/WdV5xYm/IMAGE-2025-05-19-12-58-03.jpg" 
                  alt="Processing preorders" 
                  className="rounded-lg max-w-full h-auto border border-gray-700" 
                />
              </div>
              
              <p>{tNew('preordersProcessingSteps')}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-6">
            <h2 className="text-xl font-medium mb-4">
              {tNew('preordersStaffTitle')}
            </h2>
            
            <div className="space-y-4">
              <p>{tNew('preordersStaffDesc')}</p>
              <p>{tNew('preordersStaffSetup')}</p>
              <p>
                {language === 'ru' 
                  ? "Что бы узнать подробнее о настройках сотрудника для предзаказов ознакомьтесь пожалуйста с разделом "
                  : "To learn more about employee settings for preorders, please refer to the section "
                }
                <Link to="/workers" className="text-neonBlue hover:underline">
                  {language === 'ru' ? 'РАБОТНИКИ' : 'WORKERS'}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Preorders;
