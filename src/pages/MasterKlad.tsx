
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

const MasterKlad = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      alt: "masterKladImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      alt: "masterKladImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6",
      alt: "masterKladImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      alt: "masterKladImage4"
    }
  ];

  return (
    <TutorialPage title={t('masterKlad')}>
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
          <p>{t('masterKladDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('masterKladStep1')}</li>
            <li>{t('masterKladStep2')}</li>
            <li>{t('masterKladStep3')}</li>
            <li>{t('masterKladStep4')}</li>
            <li>{t('masterKladStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('masterKladField1')}</li>
                <li>{t('masterKladField2')}</li>
                <li>{t('masterKladField3')}</li>
                <li>{t('masterKladField4')}</li>
              </ul>
            </li>
            <li>{t('masterKladStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('masterKladNote')}:</p>
            <p>{t('masterKladNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default MasterKlad;
