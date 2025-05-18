
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

const Usdt = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title="USDT">
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <h2 className="text-xl font-semibold text-white">USDT Payments</h2>
        
        <div className="space-y-6 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="space-y-4">
            <p className="text-gray-300">
              To enable USDT payments in your store, you need to go to the STORES-ALL STORES section, 
              select your store, go to the EXCHANGER SETTINGS menu and check the box next to USDT as a payment method.
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
                After that, go to the ADDITIONAL - USDT TRC20 menu as shown in the photo.
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
              In this section, click ADD in the upper right corner of the page and fill in all the information as shown in the photos.
              After that, all your USDT wallets will be displayed in this section:
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
        </div>
      </div>
    </TutorialPage>
  );
};

export default Usdt;
