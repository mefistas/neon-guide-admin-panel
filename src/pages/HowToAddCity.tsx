
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

const HowToAddCity = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://i.ibb.co/jkQ7NS5C/IMAGE-2025-05-16-15-43-34.jpg",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://i.ibb.co/gbh3p8F1/IMAGE-2025-05-16-15-46-23.jpg",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://i.ibb.co/DHBdsLTs/IMAGE-2025-05-16-15-47-02.jpg",
      alt: "Person using laptop computer"
    },
    {
      src: "https://i.ibb.co/CsnDWcWX/IMAGE-2025-05-16-15-47-32.jpg",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddCity')}>
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
          <p>{t('cityAddDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('cityStep1')}</li>
            <li>{t('cityStep2')}</li>
            <li>{t('cityStep3')}</li>
            <li>{t('cityStep4')}</li>
            <li>{t('cityStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('cityField1')}</li>
                <li>{t('cityField2')}</li>
                <li>{t('cityField3')}</li>
                <li>{t('cityField4')}</li>
              </ul>
            </li>
            <li>{t('cityStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('importantNote')}:</p>
            <p>{t('cityImportantNote')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCity;
