
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Clients = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4",
      alt: "clientsImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      alt: "clientsImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      alt: "clientsImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      alt: "clientsImage4"
    }
  ];

  return (
    <TutorialPage title={t('clients')}>
      <div className="space-y-6">
        <BackButton to="/cards-payments" />
        
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
          <p>{t('clientsDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('clientsStep1')}</li>
            <li>{t('clientsStep2')}</li>
            <li>{t('clientsStep3')}</li>
            <li>{t('clientsStep4')}</li>
            <li>{t('clientsStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('clientsField1')}</li>
                <li>{t('clientsField2')}</li>
                <li>{t('clientsField3')}</li>
                <li>{t('clientsField4')}</li>
              </ul>
            </li>
            <li>{t('clientsStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('clientsNote')}:</p>
            <p>{t('clientsNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Clients;
