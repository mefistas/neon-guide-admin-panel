
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

const Workers = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      alt: "workersImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
      alt: "workersImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      alt: "workersImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292149-870c4277271a",
      alt: "workersImage4"
    }
  ];

  return (
    <TutorialPage title={t('workers')}>
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
          <p>{t('workersDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('workersStep1')}</li>
            <li>{t('workersStep2')}</li>
            <li>{t('workersStep3')}</li>
            <li>{t('workersStep4')}</li>
            <li>{t('workersStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('workersField1')}</li>
                <li>{t('workersField2')}</li>
                <li>{t('workersField3')}</li>
                <li>{t('workersField4')}</li>
              </ul>
            </li>
            <li>{t('workersStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('workersNote')}:</p>
            <p>{t('workersNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Workers;
