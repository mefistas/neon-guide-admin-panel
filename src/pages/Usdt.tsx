
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

const Usdt = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f",
      alt: "usdtImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05",
      alt: "usdtImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1643138834038-3250c8c5d96b",
      alt: "usdtImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1624438253998-7bb8eca8a3f0",
      alt: "usdtImage4"
    }
  ];

  return (
    <TutorialPage title={t('usdt')}>
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
          <p>{t('usdtDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('usdtStep1')}</li>
            <li>{t('usdtStep2')}</li>
            <li>{t('usdtStep3')}</li>
            <li>{t('usdtStep4')}</li>
            <li>{t('usdtStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('usdtField1')}</li>
                <li>{t('usdtField2')}</li>
                <li>{t('usdtField3')}</li>
                <li>{t('usdtField4')}</li>
              </ul>
            </li>
            <li>{t('usdtStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('usdtNote')}:</p>
            <p>{t('usdtNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Usdt;
