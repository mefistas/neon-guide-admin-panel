
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

const OneTimeDiscounts = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
      alt: "Discount tag on product"
    },
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      alt: "Online store discount section"
    },
    {
      src: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
      alt: "Sale promotion banner"
    },
    {
      src: "https://images.unsplash.com/photo-1564419320461-6870880221ad",
      alt: "Customer with discount coupon"
    }
  ];

  return (
    <TutorialPage title={t('oneTimeDiscounts')}>
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
          <p>{t('discountsDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('discountStep1')}</li>
            <li>{t('discountStep2')}</li>
            <li>{t('discountStep3')}</li>
            <li>{t('discountStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('discountField1')}</li>
                <li>{t('discountField2')}</li>
                <li>{t('discountField3')}</li>
                <li>{t('discountField4')}</li>
              </ul>
            </li>
            <li>{t('discountStep5')}</li>
            <li>{t('discountStep6')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('discountSetting1')}</li>
                <li>{t('discountSetting2')}</li>
                <li>{t('discountSetting3')}</li>
              </ul>
            </li>
            <li>{t('discountStep7')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('discountNote')}:</p>
            <p>{t('discountNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default OneTimeDiscounts;
