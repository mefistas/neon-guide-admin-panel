
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

const Marketing = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "marketingImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      alt: "marketingImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      alt: "marketingImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
      alt: "marketingImage4"
    }
  ];

  return (
    <TutorialPage title={t('marketing')}>
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
          <p>{t('marketingDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('marketingStep1')}</li>
            <li>{t('marketingStep2')}</li>
            <li>{t('marketingStep3')}</li>
            <li>{t('marketingStep4')}</li>
            <li>{t('marketingStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('marketingField1')}</li>
                <li>{t('marketingField2')}</li>
                <li>{t('marketingField3')}</li>
                <li>{t('marketingField4')}</li>
              </ul>
            </li>
            <li>{t('marketingStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('marketingNote')}:</p>
            <p>{t('marketingNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Marketing;
