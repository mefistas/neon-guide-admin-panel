
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

const BtcCashout = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
      alt: "Bitcoin image"
    },
    {
      src: "https://images.unsplash.com/photo-1516245834210-c4c142787335",
      alt: "Cryptocurrency exchange"
    },
    {
      src: "https://images.unsplash.com/photo-1591994843349-f415893b3a6b",
      alt: "Bitcoin transaction"
    },
    {
      src: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",
      alt: "Crypto wallet"
    }
  ];

  return (
    <TutorialPage title={t('btcCashout')}>
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
          <p>{t('btcDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('btcStep1')}</li>
            <li>{t('btcStep2')}</li>
            <li>{t('btcStep3')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('btcField1')}</li>
                <li>{t('btcField2')}</li>
                <li>{t('btcField3')}</li>
                <li>{t('btcField4')}</li>
              </ul>
            </li>
            <li>{t('btcStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('btcSecurity1')}</li>
                <li>{t('btcSecurity2')}</li>
                <li>{t('btcSecurity3')}</li>
              </ul>
            </li>
            <li>{t('btcStep5')}</li>
            <li>{t('btcStep6')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('btcTransaction1')}</li>
                <li>{t('btcTransaction2')}</li>
                <li>{t('btcTransaction3')}</li>
              </ul>
            </li>
            <li>{t('btcStep7')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('btcWarning')}:</p>
            <p>{t('btcWarningText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default BtcCashout;
