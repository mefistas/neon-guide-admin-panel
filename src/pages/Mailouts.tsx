
import React, { useState } from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import useMailoutsTranslations from '@/hooks/useMailoutsTranslations';

const Mailouts = () => {
  const { tNew } = useTranslations();
  const { t } = useMailoutsTranslations();
  
  // Array of carousel images
  const carouselImages = [
    "https://i.ibb.co/wFcFbv5R/IMAGE-2025-05-19-15-25-59.jpg",
    "https://i.ibb.co/Tzm3S4x/IMAGE-2025-05-19-15-31-32.jpg",
    "https://i.ibb.co/LdmBB0hC/IMAGE-2025-05-19-15-32-56.jpg"
  ];

  return (
    <TutorialPage title={t('mailouts')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        {/* Introduction */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {t('mailoutsTypes')}
          </h2>
          <ul className="space-y-4 list-disc pl-6">
            <li>{t('oneTimeMailouts')}</li>
            <li>{t('manualLaunchMailouts')}</li>
            <li>{t('automaticLaunchMailouts')}</li>
          </ul>
        </section>
        
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* How to create mailout */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {t('howToCreateMailout')}
          </h2>
          
          {/* Carousel with images */}
          <div className="my-6">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={image} 
                        alt={`Mailout interface ${index + 1}`} 
                        className="w-full h-auto rounded-md object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-2">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
          
          <h3 className="text-lg font-medium mb-3">{t('createMailoutSteps')}</h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>{t('step1')}</li>
            <li>{t('step2')}</li>
            <li>{t('step3')}</li>
            <li>{t('step4')}</li>
            <li>{t('step5')}</li>
            <li>{t('step6')}</li>
            <li>{t('step7')}</li>
          </ul>
          
          <p className="mt-4">{t('saveButton')}</p>
        </section>
        
        {/* Possible errors */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {t('possibleErrors')}
          </h2>
          
          <div className="space-y-4">
            <p>{t('error1')}</p>
            <p>{t('error2')}</p>
          </div>
          
          <div className="mt-6">
            <img 
              src="https://i.ibb.co/LdmBB0hC/IMAGE-2025-05-19-15-32-56.jpg" 
              alt="Error example" 
              className="rounded-md w-full max-w-lg mx-auto"
            />
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Mailouts;
