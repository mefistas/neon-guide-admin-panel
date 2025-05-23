
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Purchases = () => {
  const { tLocal } = useTranslations();
  
  return (
    <TutorialPage title={tLocal('purchasesTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">{tLocal('purchasesSubtitle')}</h2>
        
        <div className="space-y-6">
          <div className="text-gray-700 dark:text-gray-300">
            <p>{tLocal('purchasesClientOptions')}</p>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <p className="font-medium text-lg text-gray-800 dark:text-white">{tLocal('purchasesSection')}</p>
              <p className="mt-2">{tLocal('purchasesFlowDescription')}</p>
              <p className="mt-2">{tLocal('purchasesDisputeInfo')}</p>
              
              <div className="my-4">
                <img 
                  src="https://i.ibb.co/3yp8M16q/Screenshot-2025-05-18-at-9-22-31-AM.png"
                  alt={tLocal("Disputes in the Purchases section")}
                  className="rounded-lg object-cover w-full max-w-2xl"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <p>{tLocal('purchasesStatistics')}</p>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <p>{tLocal('purchasesStatusColumn')}</p>
              <div className="my-4">
                <img 
                  src="https://i.ibb.co/67L6bXfX/Screenshot-2025-05-18-at-9-25-06-AM.png"
                  alt={tLocal("Purchase status with reviews")}
                  className="rounded-lg object-cover w-full max-w-2xl"
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p>{tLocal('purchasesFilters')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://i.ibb.co/35gTvxwg/Screenshot-2025-05-18-at-11-27-20-AM.png"
                    alt={tLocal("Filters in purchases section")}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesDisputeOperator')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://i.ibb.co/SqTv5ZY/IMAGE-2025-05-18-11-30-37.jpg"
                    alt={tLocal("Creating dispute operator")}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesOperatorActions')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://i.ibb.co/8LS02tzt/IMAGE-2025-05-18-11-34-18.jpg"
                    alt={tLocal("Dispute resolution options")}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesFullRefund')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://i.ibb.co/nysTBCf/Screenshot-2025-05-18-at-9-24-10-AM.png"
                    alt={tLocal("Full refund interface")}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p>{tLocal('purchasesCloseForStore')}</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://i.ibb.co/b4tDc4w/Screenshot-2025-05-18-at-9-24-27-AM.png"
                    alt={tLocal("Close in favor of store interface")}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
              <p>
                {tLocal('purchasesHelpBots')} 
                <Link to="/help-bots" className="text-blue-600 dark:text-neonBlue hover:underline ml-1">
                  {tLocal('helpBotsLink')}
                </Link>
              </p>
              
              <p className="mt-4">
                {tLocal('purchasesBalanceRecommendation')} 
                <Link to="/balance-top-ups" className="text-blue-600 dark:text-neonBlue hover:underline ml-1">
                  {tLocal('balanceTopUpsLink')}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Purchases;
