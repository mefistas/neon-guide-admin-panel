
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
import BackButton from '@/components/BackButton';

const Merchants = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1573164574001-518958d9baa2",
      alt: "merchantsImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      alt: "merchantsImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      alt: "merchantsImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d",
      alt: "merchantsImage4"
    }
  ];

  return (
    <TutorialPage title={t('merchants')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/" />
        </div>
        
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
          <p>{t('merchantsDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('merchantsStep1')}</li>
            <li>{t('merchantsStep2')}</li>
            <li>{t('merchantsStep3')}</li>
            <li>{t('merchantsStep4')}</li>
            <li>{t('merchantsStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('merchantsField1')}</li>
                <li>{t('merchantsField2')}</li>
                <li>{t('merchantsField3')}</li>
                <li>{t('merchantsField4')}</li>
              </ul>
            </li>
            <li>{t('merchantsStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('merchantsNote')}:</p>
            <p>{t('merchantsNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Merchants;
