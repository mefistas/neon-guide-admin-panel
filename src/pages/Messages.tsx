
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

const Messages = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
      alt: "messagesImage1"
    },
    {
      src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
      alt: "messagesImage2"
    },
    {
      src: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e",
      alt: "messagesImage3"
    },
    {
      src: "https://images.unsplash.com/photo-1590769620285-6451cf97d52e",
      alt: "messagesImage4"
    }
  ];

  return (
    <TutorialPage title={t('messages')}>
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
          <p>{t('messagesDescription')}</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('messagesStep1')}</li>
            <li>{t('messagesStep2')}</li>
            <li>{t('messagesStep3')}</li>
            <li>{t('messagesStep4')}</li>
            <li>{t('messagesStep5')}
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('messagesField1')}</li>
                <li>{t('messagesField2')}</li>
                <li>{t('messagesField3')}</li>
                <li>{t('messagesField4')}</li>
              </ul>
            </li>
            <li>{t('messagesStep6')}</li>
          </ol>
          <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
            <p className="font-semibold">{t('messagesNote')}:</p>
            <p>{t('messagesNoteText')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Messages;
