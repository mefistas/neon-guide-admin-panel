
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

const Purchases = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      alt: "purchasesImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      alt: "purchasesImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      alt: "purchasesImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1556742111-a301076d9d18",
      alt: "purchasesImage4"
    }
  ];

  return (
    <TutorialPage title={t('purchases')}>
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
          <p>{t('purchasesDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('purchasesStep1')}</li>
            <li>{t('purchasesStep2')}</li>
            <li>{t('purchasesStep3')}</li>
            <li>{t('purchasesStep4')}</li>
            <li>{t('purchasesStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('purchasesField1')}</li>
                <li>{t('purchasesField2')}</li>
                <li>{t('purchasesField3')}</li>
                <li>{t('purchasesField4')}</li>
              </ul>
            </li>
            <li>{t('purchasesStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('purchasesNote')}:</p>
            <p>{t('purchasesNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Purchases;
