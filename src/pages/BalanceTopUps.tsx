
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

const BalanceTopUps = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
      alt: "balanceTopUpsImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      alt: "balanceTopUpsImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
      alt: "balanceTopUpsImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
      alt: "balanceTopUpsImage4"
    }
  ];

  return (
    <TutorialPage title={t('balanceTopUps')}>
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
          <p>{t('balanceTopUpsDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('balanceTopUpsStep1')}</li>
            <li>{t('balanceTopUpsStep2')}</li>
            <li>{t('balanceTopUpsStep3')}</li>
            <li>{t('balanceTopUpsStep4')}</li>
            <li>{t('balanceTopUpsStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('balanceTopUpsField1')}</li>
                <li>{t('balanceTopUpsField2')}</li>
                <li>{t('balanceTopUpsField3')}</li>
                <li>{t('balanceTopUpsField4')}</li>
              </ul>
            </li>
            <li>{t('balanceTopUpsStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('balanceTopUpsNote')}:</p>
            <p>{t('balanceTopUpsNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default BalanceTopUps;
