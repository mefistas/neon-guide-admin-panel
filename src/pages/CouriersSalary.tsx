
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useTranslations } from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CouriersSalary = () => {
  const { tNew, language } = useTranslations();

  // Updated courier salary images
  const images = [
    {
      src: "https://i.ibb.co/WpM8dyp/Screenshot-2025-05-18-at-5-53-19-PM.png",
      alt: "courierSalaryBalance"
    },
    {
      src: "https://i.ibb.co/BVdqHt9/IMAGE-2025-05-18-17-53-59.jpg",
      alt: "courierSalaryLogs"
    }
  ];

  return (
    <TutorialPage title={tNew('courierSalaryTitle')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <BackButton to="/finance" className="mb-4" />
        
        <section className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>{tNew('courierSalaryIntro')}</p>
          </div>
          
          <div className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
            <img 
              src="https://i.ibb.co/1GcZY0K/Screenshot-2025-05-18-at-5-25-22-PM.png" 
              alt={tNew('courierSalaryProductSetupAlt')} 
              className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-6"
            />
            <div className="text-sm text-gray-400 text-center">
              {tNew('courierSalaryProductSetupCaption')}
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>{tNew('courierSalaryCustomSettings')}</p>
          </div>
          
          <div className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
            <img 
              src="https://i.ibb.co/DDqLrzy/IMAGE-2025-05-18-17-50-51.jpg" 
              alt={tNew('courierSalaryCustomSettingsAlt')} 
              className="rounded-lg shadow-md w-full max-w-3xl mx-auto mb-6"
            />
            <div className="text-sm text-gray-400 text-center">
              {tNew('courierSalaryCustomSettingsCaption')}
            </div>
          </div>
          
          <div className="border-t border-gray-700 my-6 pt-6">
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p>{tNew('courierSalaryPaymentSystem')}</p>
            </div>
            
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image.src}
                          alt={tNew(image.alt)}
                          className="rounded-xl object-cover w-full h-full shadow-md"
                        />
                      </AspectRatio>
                      <div className="text-sm text-gray-400 text-center mt-2">
                        {tNew(`${image.alt}Caption`)}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 space-x-4">
                <CarouselPrevious className="relative static translate-y-0 left-0" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
            
            <div className="prose dark:prose-invert max-w-none mt-6">
              <p>{tNew('courierSalaryPaymentNote')}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 my-6 pt-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>{tNew('courierSalaryRubPayments')}</p>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default CouriersSalary;
