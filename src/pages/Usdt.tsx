
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

const Usdt = () => {
  const { tLocal } = useTranslations();

  return (
    <TutorialPage title={tLocal('usdtTitle')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <h2 className="text-xl font-semibold text-white">{tLocal('usdtPayments')}</h2>
        
        <div className="space-y-6 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="space-y-4">
            <p className="text-gray-300">
              {tLocal('usdtSetupInstructions')}
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-2/3">
                <img 
                  src="https://i.ibb.co/KxMNnpDH/IMAGE-2025-05-18-14-02-43.jpg" 
                  alt="USDT payment setup" 
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 my-6"></div>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <p className="text-gray-300">
                {tLocal('usdtAdditionalMenu')}
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/C5GYNkfx/IMAGE-2025-05-18-14-05-09.jpg" 
                  alt="USDT TRC20 menu" 
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 my-6"></div>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              {tLocal('usdtAddWallet')}
            </p>
            
            <div className="p-2">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src="https://i.ibb.co/bMXDdqgf/IMAGE-2025-05-18-14-09-35.jpg"
                          alt="USDT wallet setup"
                          className="rounded-xl object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src="https://i.ibb.co/YBC2BMfZ/Screenshot-2025-05-18-at-2-11-40-PM.png"
                          alt="USDT wallet list"
                          className="rounded-xl object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-4">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>
            </div>
          </div>
          
          {/* New USDT payment information section from balance-top-ups */}
          <div className="border-t border-gray-700 my-6"></div>
          
          <div className="space-y-4">
            <div className="bg-gray-700/30 rounded-lg p-4 my-4">
              <h3 className="text-lg font-semibold text-white mb-2">{tLocal('balanceTopUpsUsdtPayment')}</h3>
              <ol className="list-decimal pl-5 text-gray-300 space-y-2">
                <li>{tLocal('balanceTopUpsCheckUsdtTransaction')}</li>
                <li>{tLocal('balanceTopUpsProcessApplication')}</li>
              </ol>
              
              <div className="p-2">
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src="https://i.ibb.co/MyHKY59h/IMAGE-2025-05-18-14-58-42.jpg"
                            alt={tLocal('balanceTopUpsCarouselImage1')}
                            className="rounded-xl object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src="https://i.ibb.co/4nMYRDRm/IMAGE-2025-05-18-15-02-07.jpg"
                            alt={tLocal('balanceTopUpsCarouselImage2')}
                            className="rounded-xl object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-4 space-x-4">
                    <CarouselPrevious className="relative static translate-y-0 left-0" />
                    <CarouselNext className="relative static translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
            </div>
            
            <p className="text-gray-300">
              {tLocal('balanceTopUpsRecommendation')}
            </p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Usdt;
