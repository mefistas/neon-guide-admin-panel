
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

const BalanceTopUps = () => {
  const { tLocal } = useTranslations();
  
  return (
    <TutorialPage title={tLocal('balanceTopUpsTitle')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{tLocal('balanceTopUpsSubtitle')}</h2>
        
        <div className="space-y-6 bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-700 dark:text-gray-300">
              {tLocal('balanceTopUpsDescription')}
            </p>
            <div className="flex justify-center">
              <img 
                src="https://i.ibb.co/whsfR70G/Screenshot-2025-05-18-at-9-38-44-AM.png" 
                alt={tLocal('balanceTopUpsImage')} 
                className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {tLocal('balanceTopUpsMostCommonIssue')}
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 my-4 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{tLocal('balanceTopUpsServicePayment')}</h3>
              <ol className="list-decimal pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>{tLocal('balanceTopUpsCheckTransaction')}</li>
                <li>{tLocal('balanceTopUpsOpenDispute')}</li>
              </ol>
              <div className="flex justify-center mt-4">
                <img 
                  src="https://i.ibb.co/8g6JxpkH/IMAGE-2025-05-18-14-52-03.jpg" 
                  alt={tLocal('balanceTopUpsDisputeImage')} 
                  className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 my-4 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{tLocal('balanceTopUpsUsdtPayment')}</h3>
              <ol className="list-decimal pl-5 text-gray-700 dark:text-gray-300 space-y-2">
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
                            className="rounded-xl object-cover w-full h-full border border-gray-200 dark:border-gray-700"
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
                            className="rounded-xl object-cover w-full h-full border border-gray-200 dark:border-gray-700"
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
            
            <p className="text-gray-700 dark:text-gray-300">
              {tLocal('balanceTopUpsRecommendation')} 
              <Link to="/usdt" className="text-blue-600 hover:underline dark:text-blue-400">
                USDT
              </Link>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
              <p className="text-gray-700 dark:text-gray-300">
                {tLocal('balanceTopUpsFilters')}
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/nN9qCpXh/Screenshot-2025-05-18-at-3-12-17-PM.png" 
                  alt={tLocal('balanceTopUpsFiltersImage')} 
                  className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
            
            <p className="text-gray-700 dark:text-gray-300">
              {tLocal('balanceTopUpsBalanceHistory')}
            </p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default BalanceTopUps;
