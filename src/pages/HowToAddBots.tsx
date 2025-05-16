
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

const HowToAddBots = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Person using laptop computer"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddBots')}>
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
          <p>{t('botDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('botStep1')}</li>
            <li>{t('botStep2')}</li>
            <li>{t('botStep3')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('botPlatform1')}</li>
                <li>{t('botPlatform2')}</li>
                <li>{t('botPlatform3')}</li>
                <li>{t('botPlatform4')}</li>
              </ul>
            </li>
            <li>{t('botStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('botCred1')}</li>
                <li>{t('botCred2')}</li>
                <li>{t('botCred3')}</li>
                <li>{t('botCred4')}</li>
              </ul>
            </li>
            <li>{t('botStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('botBehavior1')}</li>
                <li>{t('botBehavior2')}</li>
                <li>{t('botBehavior3')}</li>
                <li>{t('botBehavior4')}</li>
              </ul>
            </li>
            <li>{t('botStep6')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('botInt1')}</li>
                <li>{t('botInt2')}</li>
                <li>{t('botInt3')}</li>
              </ul>
            </li>
            <li>{t('botStep7')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('botFlow1')}</li>
                <li>{t('botFlow2')}</li>
                <li>{t('botFlow3')}</li>
              </ul>
            </li>
            <li>{t('botStep8')}</li>
            <li>{t('botStep9')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('botNote')}:</p>
            <p>{t('botNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddBots;
