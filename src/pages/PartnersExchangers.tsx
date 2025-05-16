
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

const PartnersExchangers = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0",
      alt: "partnersExchangersImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1553729459-6dd7d7798dd4",
      alt: "partnersExchangersImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
      alt: "partnersExchangersImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
      alt: "partnersExchangersImage4"
    }
  ];

  return (
    <TutorialPage title={t('partnersExchangers')}>
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
          <p>{t('partnersExchangersDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('partnersExchangersStep1')}</li>
            <li>{t('partnersExchangersStep2')}</li>
            <li>{t('partnersExchangersStep3')}</li>
            <li>{t('partnersExchangersStep4')}</li>
            <li>{t('partnersExchangersStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('partnersExchangersField1')}</li>
                <li>{t('partnersExchangersField2')}</li>
                <li>{t('partnersExchangersField3')}</li>
                <li>{t('partnersExchangersField4')}</li>
              </ul>
            </li>
            <li>{t('partnersExchangersStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('partnersExchangersNote')}:</p>
            <p>{t('partnersExchangersNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default PartnersExchangers;
