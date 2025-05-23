
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import usePromotionsTranslations from '@/hooks/usePromotionsTranslations';
import BackButton from '@/components/BackButton';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const Promotions = () => {
  const { t } = usePromotionsTranslations();
  
  const oneTimeDepositImages = [
    "https://i.ibb.co/RkMTv1fP/IMAGE-2025-05-19-16-21-24.jpg",
    "https://i.ibb.co/7t7jPFfz/IMAGE-2025-05-19-16-21-25.jpg"
  ];

  const nextPurchaseImages = [
    "https://i.ibb.co/JjSPFYgJ/IMAGE-2025-05-19-16-30-38.jpg",
    "https://i.ibb.co/MxCmhyGy/IMAGE-2025-05-19-16-45-23.jpg",
    "https://i.ibb.co/5xMdzZd4/IMAGE-2025-05-19-16-45-24.jpg"
  ];

  return (
    <TutorialPage title={t('promotions')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="light-card-bg rounded-lg p-6 border light-border">
          <p className="mb-6 light-text-secondary">{t('promotionsIntro')}</p>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('purchaseCountPromoTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary mb-4">{t('purchaseCountPromoDesc')}</p>
              <div className="p-4 bg-blue-50/80 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
                <p className="light-text-secondary">{t('purchaseCountPromoExample')}</p>
              </div>
            </div>
            <img 
              src="https://i.ibb.co/WN3MkSNB/IMAGE-2025-05-19-15-56-32.jpg" 
              alt="Purchase count promotion" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('depositSumPromoTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary mb-4">{t('depositSumPromoDesc')}</p>
              <div className="p-4 bg-blue-50/80 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
                <p className="light-text-secondary">{t('depositSumPromoExample')}</p>
              </div>
            </div>
            <img 
              src="https://i.ibb.co/LD613Kfp/IMAGE-2025-05-19-16-07-50.jpg" 
              alt="Deposit sum promotion" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('oneTimeDepositTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary">{t('oneTimeDepositDesc')}</p>
            </div>
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {oneTimeDepositImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img 
                          src={image} 
                          alt={`One-time deposit promotion ${index + 1}`} 
                          className="w-full h-auto rounded-md object-contain border border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-2">
                  <CarouselPrevious className="static translate-y-0 mr-2" />
                  <CarouselNext className="static translate-y-0 ml-2" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('reviewsPromoTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary">{t('reviewsPromoDesc')}</p>
            </div>
            <img 
              src="https://i.ibb.co/zW8L1d0k/IMAGE-2025-05-19-16-25-48.jpg" 
              alt="Reviews promotion" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('nextPurchaseTitle')}
          </h2>
          
          <div className="space-y-4 mb-6">
            <p className="light-text-secondary">{t('nextPurchaseDesc')}</p>
            <p className="light-text-secondary">{t('nextPurchaseSteps')}</p>
          </div>

          <div className="mb-6">
            <Carousel className="w-full">
              <CarouselContent>
                {nextPurchaseImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={image} 
                        alt={`Next purchase discount ${index + 1}`} 
                        className="w-full h-auto rounded-md object-contain border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-2">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>

          <div className="space-y-4 light-text-secondary">
            <p>{t('nextPurchaseDetails1')}</p>
            <p>{t('nextPurchaseDetails2')}</p>
            <p>{t('nextPurchaseNotification')}</p>
            <p>{t('nextPurchaseDiscounts')}</p>
            <p>{t('nextPurchaseMultiple')}</p>
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('salePromoTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary mb-4">{t('salePromoDesc')}</p>
              <p className="light-text-secondary">{t('salePromoDetails')}</p>
            </div>
            <img 
              src="https://i.ibb.co/6c1sWrwC/IMAGE-2025-05-19-16-50-24.jpg" 
              alt="Sale promotion" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <div className="space-y-4 light-text-secondary">
            <p>{t('deleteUnusedDiscounts')}</p>
            <p>{t('followingDiscountsInfo')}</p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Promotions;
