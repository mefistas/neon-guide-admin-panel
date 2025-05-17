
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

const BalanceHistory = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      alt: "Financial report on screen"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      alt: "Transaction history page"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Data analytics dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      alt: "Financial monitoring system"
    }
  ];

  return (
    <TutorialPage title={t('balanceHistory')}>
      <div className="space-y-6">
        <BackButton to="/finance" />
        
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
          <p>{t('historyDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('historyStep1')}</li>
            <li>{t('historyStep2')}</li>
            <li>{t('historyStep3')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('historyFilter1')}</li>
                <li>{t('historyFilter2')}</li>
                <li>{t('historyFilter3')}</li>
                <li>{t('historyFilter4')}</li>
              </ul>
            </li>
            <li>{t('historyStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('historyDetail1')}</li>
                <li>{t('historyDetail2')}</li>
                <li>{t('historyDetail3')}</li>
              </ul>
            </li>
            <li>{t('historyStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('historyExport1')}</li>
                <li>{t('historyExport2')}</li>
                <li>{t('historyExport3')}</li>
              </ul>
            </li>
            <li>{t('historyStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('historyNote')}:</p>
            <p>{t('historyNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default BalanceHistory;
