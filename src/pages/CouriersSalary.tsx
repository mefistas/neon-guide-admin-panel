
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

const CouriersSalary = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      alt: "couriersSalaryImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97",
      alt: "couriersSalaryImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1629740067905-bd3f515aa739",
      alt: "couriersSalaryImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1559884743-74a57598c6c7",
      alt: "couriersSalaryImage4"
    }
  ];

  return (
    <TutorialPage title={t('couriersSalary')}>
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
          <p>{t('couriersSalaryDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('couriersSalaryStep1')}</li>
            <li>{t('couriersSalaryStep2')}</li>
            <li>{t('couriersSalaryStep3')}</li>
            <li>{t('couriersSalaryStep4')}</li>
            <li>{t('couriersSalaryStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('couriersSalaryField1')}</li>
                <li>{t('couriersSalaryField2')}</li>
                <li>{t('couriersSalaryField3')}</li>
                <li>{t('couriersSalaryField4')}</li>
              </ul>
            </li>
            <li>{t('couriersSalaryStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('couriersSalaryNote')}:</p>
            <p>{t('couriersSalaryNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CouriersSalary;
