
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

const HowToAddDistrict = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://i.ibb.co/XkXCXFQQ/IMAGE-2025-05-16-16-47-23.jpg",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://i.ibb.co/Mkbv2t45/IMAGE-2025-05-16-16-47-25.jpg",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://i.ibb.co/KxJ2fkQL/IMAGE-2025-05-16-16-47-26.jpg",
      alt: "Person using laptop computer"
    },
    {
      src: "https://i.ibb.co/VcwhrQqd/IMAGE-2025-05-16-16-47-28.jpg",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddDistrict')}>
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
          <p>{t('districtDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('districtStep1')}</li>
            <li>{t('districtStep2')}</li>
            <li>{t('districtStep3')}</li>
            <li>{t('districtStep4')}</li>
            <li>{t('districtStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('districtField1')}</li>
                <li>{t('districtField2')}</li>
                <li>{t('districtField3')}</li>
                <li>{t('districtField4')}</li>
              </ul>
            </li>
            <li>{t('districtStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('districtProTip')}:</p>
            <p>{t('districtProTipText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddDistrict;
