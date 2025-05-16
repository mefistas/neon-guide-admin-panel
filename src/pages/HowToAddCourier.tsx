
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

const HowToAddCourier = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Person using laptop computer"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddCourier')}>
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
          <p>{t('courierDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('courierStep1')}</li>
            <li>{t('courierStep2')}</li>
            <li>{t('courierStep3')}</li>
            <li>{t('courierStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('courierField1')}</li>
                <li>{t('courierField2')}</li>
                <li>{t('courierField3')}</li>
                <li>{t('courierField4')}</li>
                <li>{t('courierField5')}</li>
                <li>{t('courierField6')}</li>
                <li>{t('courierField7')}</li>
              </ul>
            </li>
            <li>{t('courierStep5')}</li>
            <li>{t('courierStep6')}</li>
            <li>{t('courierStep7')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('courierNote')}:</p>
            <p>{t('courierNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCourier;
