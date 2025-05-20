
import React, { useState } from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';
import useWorkersTranslations from '@/hooks/useWorkersTranslations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Workers = () => {
  const { t } = useWorkersTranslations();
  
  // For the carousel of connection images
  const connectionImages = [
    { src: "https://i.ibb.co/7JDBT7QT/Screenshot-2025-05-20-at-10-11-19-AM.png", alt: "Connection screen 1" },
    { src: "https://i.ibb.co/TxWRKCx4/Screenshot-2025-05-20-at-10-17-09-AM.png", alt: "Connection screen 2" }
  ];

  return (
    <TutorialPage title={t('workers')}>
      <div className="space-y-6">
        <BackButton to="/" className="mb-4" />
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p>{t('workersDescription')}</p>
              <p>{t('workerStatus')}</p>
              <p>{t('startWork')}</p>
            </div>
            <div>
              <img 
                src="https://i.ibb.co/fd2C9CVk/Screenshot-2025-05-20-at-9-49-55-AM.png" 
                alt="Add worker interface" 
                className="rounded-lg border border-gray-700"
              />
            </div>
          </div>

          <div className="bg-gray-800/40 rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-3">{t('workerTypes')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-gray-700/30 rounded">
                <p>{t('courier')}</p>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <p>{t('warehouse')}</p>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <p>{t('administrator')}</p>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <Link to="/cards-payments" className="hover:text-neonBlue transition-colors">
                  {t('disputeOperator')}
                </Link>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <Link to="/cards-payments" className="hover:text-neonBlue transition-colors">
                  {t('preorderOperator')}
                </Link>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <Link to="/finance" className="hover:text-neonBlue transition-colors">
                  {t('balanceOperator')}
                </Link>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <p>{t('websiteEditor')}</p>
              </div>
              <div className="p-3 bg-gray-700/30 rounded">
                <p>{t('marketer')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p>{t('loginPassword')}</p>
            </div>
            <div>
              <img 
                src="https://i.ibb.co/tpZsgMHQ/Screenshot-2025-05-20-at-10-39-24-AM.png" 
                alt="Login and password interface"
                className="rounded-lg border border-gray-700"
              />
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-6">{t('roleFunctions')}</h2>

            {/* Courier */}
            <div className="space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('courierTitle')}</h3>
              <p>{t('courierRequirements')}</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>{t('courierStep1')}</li>
                <li>
                  {t('courierStep2')}{' '}
                  <Link to="/how-to-add-courier" className="text-neonBlue hover:underline">
                    КУРЬЕРА
                  </Link>
                </li>
                <div className="my-4">
                  <img 
                    src="https://i.ibb.co/bRqqF1tW/IMAGE-2025-05-20-10-04-17.jpg" 
                    alt="Courier configuration" 
                    className="rounded-lg border border-gray-700 max-w-md mx-auto"
                  />
                </div>
                <li>{t('courierStep3')}</li>
                <li>
                  {t('courierStep4')}{' '}
                  <Link to="/purchases" className="text-neonBlue hover:underline">
                    ОТКРЫТ СПОР
                  </Link>
                </li>
                <li>
                  {t('courierStep5')}{' '}
                  <Link to="/help-bots" className="text-neonBlue hover:underline">
                    бота-помощника
                  </Link>
                </li>
                <li>{t('courierStep6')}</li>
              </ol>
              
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {connectionImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="rounded-lg border border-gray-700 w-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-4">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>

              <p>{t('courierHistory')}</p>
              <p>{t('courierBonuses')}</p>
              <p>
                {t('courierTelegramBot')}{' '}
                <Link to="/help-bots" className="text-neonBlue hover:underline">
                  {t('botRecommendation')}
                </Link>
              </p>
            </div>

            {/* Warehouse */}
            <div className="border-t border-gray-700 pt-6 space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('warehouseTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <p>{t('warehouseDescription')}</p>
                  <p className="mt-4">
                    {t('warehouseDisputes')}{' '}
                    <Link to="/cards-payments" className="text-neonBlue hover:underline">
                      ОПЕРАТОРА
                    </Link>
                  </p>
                  <p className="mt-4">{t('warehouseNotifications')}</p>
                </div>
                <div>
                  <img 
                    src="https://i.ibb.co/67sDCDg4/Screenshot-2025-05-20-at-10-23-34-AM.png" 
                    alt="Warehouse configuration" 
                    className="rounded-lg border border-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Administrator */}
            <div className="border-t border-gray-700 pt-6 space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('administratorTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <p>{t('administratorDescription')}</p>
                </div>
                <div>
                  <img 
                    src="https://i.ibb.co/gZPzcc4K/Screenshot-2025-05-20-at-10-27-22-AM.png" 
                    alt="Administrator configuration" 
                    className="rounded-lg border border-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Preorder Operator */}
            <div className="border-t border-gray-700 pt-6 space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('preorderOperatorTitle')}</h3>
              <p>{t('preorderOperatorDescription')}</p>
              <p>{t('preorderOperatorBot')}</p>
              <p>
                {t('preorderRecommendation')}{' '}
                <Link to="/help-bots" className="text-neonBlue hover:underline">
                  {t('botRecommendation')}
                </Link>{' '}
                <Link to="/preorders" className="text-neonBlue hover:underline">
                  {t('preorderOperator')}
                </Link>
              </p>
            </div>

            {/* Balance Operator */}
            <div className="border-t border-gray-700 pt-6 space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('balanceOperatorTitle')}</h3>
              <p>{t('balanceOperatorDescription')}</p>
              <p>
                {t('balanceRecommendation')}{' '}
                <Link to="/usdt" className="text-neonBlue hover:underline">
                  USDT
                </Link>{' '}
                <Link to="/balance-top-ups" className="text-neonBlue hover:underline">
                  {t('balanceOperator')}
                </Link>
              </p>
            </div>

            {/* Website Editor */}
            <div className="border-t border-gray-700 pt-6 space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('websiteEditorTitle')}</h3>
              <p>
                {t('websiteEditorDescription')}{' '}
                <Link to="/web" className="text-neonBlue hover:underline">
                  САЙТЫ
                </Link>
              </p>
            </div>

            {/* Marketer */}
            <div className="border-t border-gray-700 pt-6 space-y-6 mb-8">
              <h3 className="text-lg font-medium bg-gray-800/40 p-3 rounded-lg">{t('marketerTitle')}</h3>
              <p>{t('marketerDescription')}</p>
              <p>
                {t('marketerRecommendation')}{' '}
                <Link to="/marketing" className="text-neonBlue hover:underline">
                  МАРКЕТИНГ
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Workers;
