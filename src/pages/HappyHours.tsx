
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HappyHours = () => {
  const { tLocal } = useTranslations();
  
  const carouselImages = [
    {
      src: "https://i.ibb.co/bMCZm8SF/Screenshot-2025-05-18-at-6-32-33-PM.png",
      alt: "happyHoursSettings1Alt"
    },
    {
      src: "https://i.ibb.co/jk4sv3Td/Screenshot-2025-05-18-at-6-33-14-PM.png",
      alt: "happyHoursSettings2Alt"
    }
  ];

  return (
    <TutorialPage title={tLocal('happyHoursTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <BackButton to="/marketing" className="mb-6" />
        
        <section className="space-y-6">
          <p className="text-base">{tLocal('happyHoursDescription1')}</p>
          
          <p className="text-base">{tLocal('happyHoursDescription2')}</p>
          
          <p className="text-base">{tLocal('happyHoursDescription3')}</p>
          
          <div className="my-6">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image.src}
                          alt={tLocal(image.alt)}
                          className="rounded-xl object-cover w-full h-full border border-gray-700"
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
          
          <p className="text-base">{tLocal('happyHoursDescription4')}</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-semibold">{tLocal('happyHoursWhen')}</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>{tLocal('happyHoursReason1')}</li>
            <li>{tLocal('happyHoursReason2')}</li>
            <li>{tLocal('happyHoursReason3')}</li>
          </ul>
        </section>
      </div>
    </TutorialPage>
  );
};

export default HappyHours;
