
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

const MarketingPage = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Marketing dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec",
      alt: "Email marketing campaign"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: "Digital marketing strategy"
    },
    {
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
      alt: "Marketing analytics"
    }
  ];

  return (
    <TutorialPage title={t('marketing')}>
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
          <p>{t('marketingDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('marketingStep1')}</li>
            <li>{t('marketingStep2')}</li>
            <li>{t('marketingStep3')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('marketingFeature1')}</li>
                <li>{t('marketingFeature2')}</li>
                <li>{t('marketingFeature3')}</li>
                <li>{t('marketingFeature4')}</li>
              </ul>
            </li>
            <li>{t('marketingStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('marketingSegment1')}</li>
                <li>{t('marketingSegment2')}</li>
                <li>{t('marketingSegment3')}</li>
              </ul>
            </li>
            <li>{t('marketingStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('marketingAnalytics1')}</li>
                <li>{t('marketingAnalytics2')}</li>
                <li>{t('marketingAnalytics3')}</li>
              </ul>
            </li>
            <li>{t('marketingStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('marketingTip')}:</p>
            <p>{t('marketingTipText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default MarketingPage;
