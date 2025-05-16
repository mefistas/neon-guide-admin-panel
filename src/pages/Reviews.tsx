
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

const Reviews = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1569701813229-33284b643e3c",
      alt: "Customer reviews section"
    },
    {
      src: "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
      alt: "Five star rating"
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      alt: "User feedback interface"
    },
    {
      src: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3",
      alt: "Review management system"
    }
  ];

  return (
    <TutorialPage title={t('reviews')}>
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
          <p>{t('reviewsDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('reviewsStep1')}</li>
            <li>{t('reviewsStep2')}</li>
            <li>{t('reviewsStep3')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('reviewsManage1')}</li>
                <li>{t('reviewsManage2')}</li>
                <li>{t('reviewsManage3')}</li>
                <li>{t('reviewsManage4')}</li>
              </ul>
            </li>
            <li>{t('reviewsStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('reviewsModeration1')}</li>
                <li>{t('reviewsModeration2')}</li>
                <li>{t('reviewsModeration3')}</li>
              </ul>
            </li>
            <li>{t('reviewsStep5')}</li>
            <li>{t('reviewsStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('reviewsImportant')}:</p>
            <p>{t('reviewsImportantText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Reviews;
