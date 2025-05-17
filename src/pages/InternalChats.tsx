
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

const InternalChats = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1611746869696-d09bce200020",
      alt: "Chat interface on computer"
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      alt: "Team messaging app"
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      alt: "Mobile chat application"
    },
    {
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      alt: "Secure messaging platform"
    }
  ];

  return (
    <TutorialPage title={t('internalChats')}>
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
          <p>{t('chatsDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('chatsStep1')}</li>
            <li>{t('chatsStep2')}</li>
            <li>{t('chatsStep3')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('chatsFeature1')}</li>
                <li>{t('chatsFeature2')}</li>
                <li>{t('chatsFeature3')}</li>
                <li>{t('chatsFeature4')}</li>
              </ul>
            </li>
            <li>{t('chatsStep4')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('chatsSecurity1')}</li>
                <li>{t('chatsSecurity2')}</li>
                <li>{t('chatsSecurity3')}</li>
              </ul>
            </li>
            <li>{t('chatsStep5')}</li>
            <li>{t('chatsStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('chatsPrivacy')}:</p>
            <p>{t('chatsPrivacyText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default InternalChats;
