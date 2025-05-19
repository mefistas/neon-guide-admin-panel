
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';

const Preorders = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('preordersTitle')}>
      <div className="max-w-4xl mx-auto space-y-8">
        <BackButton to="/cards-payments" className="mb-6" />
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <p className="mb-6">{tNew('preordersIntro')}</p>

          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('preordersSetupTitle')}
          </h2>
          
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

          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
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
            
            <p>{tNew('preordersAdditionalSettings')}</p>
            <p>{tNew('preordersMenuInfo')}</p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg mt-4">
              <h3 className="font-medium mb-2">{tNew('preordersExampleTitle')}</h3>
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
          
          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
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
          
          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('preordersStaffTitle')}
          </h2>
          
          <div className="space-y-4">
            <p>{tNew('preordersStaffDesc')}</p>
            <p>{tNew('preordersStaffSetup')}</p>
            <p>
              {tNew('preordersStaffMore').split('РАБОТНИКИ')[0]}
              <Link to="/workers" className="text-neonBlue hover:underline">
                {tNew('workers')}
              </Link>
              {tNew('preordersStaffMore').split('РАБОТНИКИ')[1] || ''}
            </p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Preorders;
