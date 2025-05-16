
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

const Web = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "webImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f",
      alt: "webImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      alt: "webImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      alt: "webImage4"
    }
  ];

  return (
    <TutorialPage title={t('web')}>
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
          <p>{t('webDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('webStep1')}</li>
            <li>{t('webStep2')}</li>
            <li>{t('webStep3')}</li>
            <li>{t('webStep4')}</li>
            <li>{t('webStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('webField1')}</li>
                <li>{t('webField2')}</li>
                <li>{t('webField3')}</li>
                <li>{t('webField4')}</li>
              </ul>
            </li>
            <li>{t('webStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('webNote')}:</p>
            <p>{t('webNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Web;
