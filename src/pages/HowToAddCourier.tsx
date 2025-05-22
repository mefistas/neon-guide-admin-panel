
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import useCouriersTranslations from '@/hooks/useCouriersTranslations';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  PackageCheck, 
  Bot,
  Keyboard 
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HowToAddCourier = () => {
  const { t, language } = useCouriersTranslations();
  
  return (
    <TutorialPage title={t('couriers')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-800 dark:text-gray-200 font-medium mb-6">{t('couriersDescription')}</p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">{t('couriersInfo')}</p>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-700 dark:text-gray-300">{t('addCourier')}</p>
            <p className="text-gray-700 dark:text-gray-300">{t('selectShop')}</p>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
              <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('dragProducts')}</p>
              <img 
                src="https://i.ibb.co/rKw45rQD/Screenshot-2025-05-21-at-9-25-37-PM.png" 
                alt="Drag products interface" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
          </div>
          
          <Alert className="bg-blue-50 dark:bg-secondary/30 border-blue-200 dark:border-border mb-8">
            <div className="flex gap-2">
              <Keyboard className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
              <AlertDescription>
                <p className="font-medium text-gray-800 dark:text-white">{t('shortcutTip')}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">{t('macShortcut')}</li>
                  <li className="text-gray-700 dark:text-gray-300">{t('winShortcut')}</li>
                </ul>
              </AlertDescription>
            </div>
          </Alert>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t('balanceInfo')}{' '}
            <Link to="/couriers-salary" className="text-blue-600 hover:underline dark:text-blue-400">
              {t('couriersSalaryLink')}
            </Link>
          </p>
          
          <Separator className="my-8" />
          
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center gap-2">
              <Bot className="text-blue-600 dark:text-neonBlue" />
              {language === 'ru' ? 'Настройка ботов для курьера' : 'Setting up bots for courier'}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t('botSetup')}</p>
            
            <div className="flex justify-center my-6">
              <img 
                src="https://i.ibb.co/KzrVTwLL/Screenshot-2025-05-21-at-10-47-16-PM.png" 
                alt="Bot token setup" 
                className="rounded-lg shadow-md max-w-2xl w-full h-auto"
              />
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t('botUsage')}</p>
            
            <div className="flex justify-center my-6">
              <img 
                src="https://i.ibb.co/v6hhNCqN/Screenshot-2025-05-21-at-11-10-11-PM.png" 
                alt="Courier bot links" 
                className="rounded-lg shadow-md max-w-2xl w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mt-10 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              {t('recommendation')}{' '}
              <Link to="/workers" className="text-blue-600 hover:underline dark:text-blue-400">
                {t('workersLink')}
              </Link>
              {' '}{t('couriersSalaryLink') !== t('workersLink') ? 
                <>
                  {language === 'ru' ? 'и' : 'and'}{' '}
                  <Link to="/couriers-salary" className="text-blue-600 hover:underline dark:text-blue-400">
                    {t('couriersSalaryLink')}
                  </Link>
                </> : ''}
              {' '}{language === 'ru' ? 'далее!' : 'next!'}
            </p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCourier;
