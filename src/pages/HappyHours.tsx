
import React, { useState } from 'react';
import TutorialPage from '@/components/TutorialPage';
import useHappyHoursTranslations from '@/hooks/useHappyHoursTranslations';
import BackButton from '@/components/BackButton';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Check, Clock } from 'lucide-react';

const HappyHours = () => {
  const { t } = useHappyHoursTranslations();
  
  const images = [
    {
      src: "https://i.ibb.co/bMCZm8SF/Screenshot-2025-05-18-at-6-32-33-PM.png",
      alt: "Happy Hours Settings 1"
    },
    {
      src: "https://i.ibb.co/jk4sv3Td/Screenshot-2025-05-18-at-6-33-14-PM.png",
      alt: "Happy Hours Settings 2"
    }
  ];

  return (
    <TutorialPage title={t('happyHours')}>
      <div className="space-y-6 max-w-4xl">
        <div className="mb-6">
          <BackButton to="/marketing" />
        </div>
        
        <p className="text-xl text-gray-800 dark:text-gray-200 mb-8">{t('happyHoursDesc')}</p>
        
        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Clock className="mr-2 text-blue-600 dark:text-neonBlue" size={20} />
            {t('howToSetup')}
          </h2>
          
          <div className="space-y-4 mb-6 text-gray-700 dark:text-gray-300">
            <p>{t('goToProductTypes')}</p>
            <p>{t('activateHappyHours')}</p>
            <p>{t('setupInstructions')}</p>
          </div>
          
          <div className="my-8">
            <Carousel className="max-w-3xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="rounded-md w-full h-auto border border-gray-200 dark:border-gray-600" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static mx-2" />
                <CarouselNext className="relative static mx-2" />
              </div>
            </Carousel>
          </div>
          
          <p className="mt-6 text-gray-700 dark:text-gray-300">{t('exampleExplanation')}</p>
        </section>
        
        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t('whenIsItUseful')}</h2>
          
          <ul className="space-y-4">
            <li className="flex">
              <Check size={20} className="mr-2 text-green-500 shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">{t('useCasePromote')}</p>
            </li>
            <li className="flex">
              <Check size={20} className="mr-2 text-green-500 shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">{t('useCaseOldAddresses')}</p>
            </li>
            <li className="flex">
              <Check size={20} className="mr-2 text-green-500 shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">{t('useCaseDaylight')}</p>
            </li>
          </ul>
        </section>
        
        <div className="p-4 bg-blue-50 dark:bg-neonBlue/10 rounded-md mt-4 border border-blue-200 dark:border-neonBlue">
          <p className="font-semibold text-gray-800 dark:text-white">{t('tip')}:</p>
          <p className="text-gray-700 dark:text-gray-300">{t('happyHoursTip')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HappyHours;
