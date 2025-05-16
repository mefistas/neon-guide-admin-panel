
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CustomBot = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      alt: "customBotImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
      alt: "customBotImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      alt: "customBotImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9",
      alt: "customBotImage4"
    }
  ];

  return (
    <TutorialPage title={t('customBot')}>
      <div className="space-y-6">
        <div className="p-2">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={image.src}
                        alt={t(image.alt)}
                        className="rounded-xl object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 space-x-4">
              <CarouselPrevious className="relative static translate-y-0 left-0" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>

        <div className="space-y-4">
          <p>{t('customBotDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('customBotStep1')}</li>
            <li>{t('customBotStep2')}</li>
            <li>{t('customBotStep3')}</li>
            <li>{t('customBotStep4')}</li>
            <li>{t('customBotStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('customBotField1')}</li>
                <li>{t('customBotField2')}</li>
                <li>{t('customBotField3')}</li>
                <li>{t('customBotField4')}</li>
              </ul>
            </li>
            <li>{t('customBotStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('customBotNote')}:</p>
            <p>{t('customBotNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CustomBot;
