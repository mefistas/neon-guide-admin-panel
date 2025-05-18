
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Purchases = () => {
  const { tLocal } = useTranslations();
  
  const images = [
    {
      src: "https://i.ibb.co/3yp8M16q/Screenshot-2025-05-18-at-9-22-31-AM.png",
      alt: "Disputes in the Purchases section"
    },
    {
      src: "https://i.ibb.co/67L6bXfX/Screenshot-2025-05-18-at-9-25-06-AM.png",
      alt: "Purchase status with reviews"
    },
    {
      src: "https://i.ibb.co/35gTvxwg/Screenshot-2025-05-18-at-11-27-20-AM.png",
      alt: "Filters in purchases section"
    },
    {
      src: "https://i.ibb.co/SqTv5ZY/IMAGE-2025-05-18-11-30-37.jpg",
      alt: "Creating dispute operator"
    },
    {
      src: "https://i.ibb.co/8LS02tzt/IMAGE-2025-05-18-11-34-18.jpg",
      alt: "Dispute resolution options"
    },
    {
      src: "https://i.ibb.co/nysTBCf/Screenshot-2025-05-18-at-9-24-10-AM.png",
      alt: "Full refund interface"
    },
    {
      src: "https://i.ibb.co/b4tDc4w/Screenshot-2025-05-18-at-9-24-27-AM.png",
      alt: "Close in favor of store interface"
    }
  ];

  return (
    <TutorialPage title={tLocal('purchasesTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
        
        <h2 className="text-xl font-semibold text-gray-200 mb-6">{tLocal('purchasesSubtitle')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 text-gray-300">
            <p>{tLocal('purchasesClientOptions')}</p>
            
            <p className="font-medium text-lg text-white mt-8">{tLocal('purchasesSection')}</p>
            <p>{tLocal('purchasesFlowDescription')}</p>
            <p>{tLocal('purchasesDisputeInfo')}</p>
            
            <div className="p-2 md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={images[0].src}
                          alt={tLocal(images[0].alt)}
                          className="rounded-xl object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            
            <p>{tLocal('purchasesStatistics')}</p>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <p>{tLocal('purchasesStatusColumn')}</p>
            </div>
            
            <div className="md:hidden p-2 my-4">
              <img 
                src={images[1].src}
                alt={tLocal(images[1].alt)}
                className="rounded-xl object-cover w-full"
              />
            </div>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p>{tLocal('purchasesFilters')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={images[2].src}
                    alt={tLocal(images[2].alt)}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesDisputeOperator')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={images[3].src}
                    alt={tLocal(images[3].alt)}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesOperatorActions')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={images[4].src}
                    alt={tLocal(images[4].alt)}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesFullRefund')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={images[5].src}
                    alt={tLocal(images[5].alt)}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesCloseForStore')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={images[6].src}
                    alt={tLocal(images[6].alt)}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-6 pt-6">
              <p>
                {tLocal('purchasesHelpBots')} 
                <Link to="/help-bots" className="text-neonBlue hover:underline ml-1">
                  {tLocal('helpBotsLink')}
                </Link>
              </p>
              
              <p className="mt-4">
                {tLocal('purchasesBalanceRecommendation')} 
                <Link to="/balance-top-ups" className="text-neonBlue hover:underline ml-1">
                  {tLocal('balanceTopUpsLink')}
                </Link>
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="sticky top-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={image.src}
                            alt={tLocal(image.alt)}
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
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Purchases;
