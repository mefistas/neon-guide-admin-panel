import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const InternalChats = () => {
  const { tLocal } = useTranslations();

  const images = [
    {
      src: "https://i.ibb.co/gFv1hNdv/Screenshot-2025-05-22-at-3-11-38-PM.png",
      alt: "Internal chats interface"
    },
    {
      src: "https://i.ibb.co/SbXzdXk/Screenshot-2025-05-18-at-8-29-26-AM.png",
      alt: "Add my branch interface"
    }
  ];

  return (
    <TutorialPage title={tLocal('internalChatsTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>

        <p className="text-gray-300">{tLocal('internalChatsMenuPath')}</p>
        <p className="text-gray-300">{tLocal('internalChatsAddBranch')}</p>
        
        <div className="p-2">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={image.src}
                        alt={image.alt}
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
          <p className="text-gray-300">{tLocal('internalChatsDescription')}</p>
          
          <div className="my-6 space-y-4">
            <p className="text-gray-300">{tLocal('internalChatsInviteButton')}</p>
          </div>
          
          <div className="my-6 space-y-4">
            <p className="text-gray-300">{tLocal('internalChatsOwnerCapabilities')}</p>
            <p className="text-gray-300">{tLocal('internalChatsDescription2')}</p>
          </div>
          
          <div className="my-6 space-y-4">
            <p className="text-gray-300">{tLocal('internalChatsChannelOption')}</p>
            <p className="text-gray-300">{tLocal('internalChatsGroupOption')}</p>
          </div>
          
          <div className="my-6 space-y-4">
            <p className="text-gray-300">{tLocal('internalChatsEncryption')}</p>
            <p className="text-gray-300">{tLocal('internalChatsEncryptionDetails')}</p>
            <p className="text-gray-300">{tLocal('internalChatsServerStorage')}</p>
          </div>
          
          <div className="my-6 space-y-4">
            <p className="text-gray-300">{tLocal('internalChatsPasswordSharing')}</p>
          </div>
          
          <div className="my-6 space-y-4">
            <p className="text-gray-300">{tLocal('internalChatsAutoDeletion')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default InternalChats;
