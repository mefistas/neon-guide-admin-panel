
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import usePromotionsTranslations from '@/hooks/usePromotionsTranslations';
import BackButton from '@/components/BackButton';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Promotions = () => {
  const { t } = usePromotionsTranslations();
  
  return (
    <TutorialPage title={t('promotionsTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <p className="mb-6">{t('promotionsIntro')}</p>
          
          {/* Purchase Count Promotion */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">{t('purchaseCountPromoTitle')}</h3>
                <p className="mb-4">{t('purchaseCountPromoDesc')}</p>
                <p className="bg-neonBlue/10 p-4 rounded-md border border-neonBlue">
                  {t('purchaseCountPromoExample')}
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://i.ibb.co/WN3MkSNB/IMAGE-2025-05-19-15-56-32.jpg" 
                  alt="Purchase Count Promotion" 
                  className="rounded-lg border border-gray-700 w-full" 
                />
              </div>
            </div>
          </div>
          
          {/* Deposit Sum Promotion */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">{t('depositSumPromoTitle')}</h3>
                <p className="mb-4">{t('depositSumPromoDesc')}</p>
                <p className="bg-neonBlue/10 p-4 rounded-md border border-neonBlue">
                  {t('depositSumPromoExample')}
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://i.ibb.co/LD613Kfp/IMAGE-2025-05-19-16-07-50.jpg" 
                  alt="Deposit Sum Promotion" 
                  className="rounded-lg border border-gray-700 w-full" 
                />
              </div>
            </div>
          </div>
          
          {/* One-Time Deposit Promotion */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">{t('oneTimeDepositTitle')}</h3>
                <p className="mb-4">{t('oneTimeDepositDesc')}</p>
              </div>
              <div className="md:w-1/3">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/RkMTv1fP/IMAGE-2025-05-19-16-21-24.jpg" 
                        alt="One-time Deposit Promotion 1" 
                        className="rounded-lg border border-gray-700 w-full" 
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/7t7jPFfz/IMAGE-2025-05-19-16-21-25.jpg" 
                        alt="One-time Deposit Promotion 2" 
                        className="rounded-lg border border-gray-700 w-full" 
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          </div>
          
          {/* Reviews Promotion */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">{t('reviewsPromoTitle')}</h3>
                <p className="mb-4">{t('reviewsPromoDesc')}</p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://i.ibb.co/zW8L1d0k/IMAGE-2025-05-19-16-25-48.jpg" 
                  alt="Reviews Promotion" 
                  className="rounded-lg border border-gray-700 w-full" 
                />
              </div>
            </div>
          </div>
          
          {/* Next Purchase Discount */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-medium mb-4">{t('nextPurchaseTitle')}</h3>
            <p className="mb-4">{t('nextPurchaseDesc')}</p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">{t('nextPurchaseSteps')}</li>
            </ul>
            
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src="https://i.ibb.co/JjSPFYgJ/IMAGE-2025-05-19-16-30-38.jpg" 
                    alt="Next Purchase Discount 1" 
                    className="rounded-lg border border-gray-700 w-full" 
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://i.ibb.co/MxCmhyGy/IMAGE-2025-05-19-16-45-23.jpg" 
                    alt="Next Purchase Discount 2" 
                    className="rounded-lg border border-gray-700 w-full" 
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://i.ibb.co/5xMdzZd4/IMAGE-2025-05-19-16-45-24.jpg" 
                    alt="Next Purchase Discount 3" 
                    className="rounded-lg border border-gray-700 w-full" 
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="mt-6 space-y-4">
              <p>{t('nextPurchaseDetails1')}</p>
              <p>{t('nextPurchaseDetails2')}</p>
              <p>{t('nextPurchaseNotification')}</p>
              <p>{t('nextPurchaseDiscounts')}</p>
              <p>{t('nextPurchaseMultiple')}</p>
            </div>
          </div>
          
          {/* Sale Promotion */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">{t('salePromoTitle')}</h3>
                <p className="mb-4">{t('salePromoDesc')}</p>
                <p className="mb-4">{t('salePromoDetails')}</p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://i.ibb.co/6c1sWrwC/IMAGE-2025-05-19-16-50-24.jpg" 
                  alt="Sale Promotion" 
                  className="rounded-lg border border-gray-700 w-full" 
                />
              </div>
            </div>
          </div>
          
         
          <div className="mt-10 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-medium mb-4">{t('additionalSettings')}</h3>
            <p className="mb-4">{t('deleteUnusedDiscounts')}</p>
            <p className="mb-4">{t('followingDiscountsInfo')}</p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Promotions;
