
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import useBotsTranslations from '@/hooks/useBotsTranslations';
import { Link } from 'react-router-dom';
import { Bot, Shield, AlertTriangle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HowToAddBots = () => {
  const { t } = useBotsTranslations();
  
  return (
    <TutorialPage title={t('bots')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t('botsDescription')}</p>
            
            {/* BotFather Instructions */}
            <div className="bg-blue-50 dark:bg-blue-500/10 rounded-lg p-6 mb-8 border border-blue-200 dark:border-blue-500/30">
              <h2 className="text-xl font-medium mb-4 text-gray-800 dark:text-white">{t('botFatherTitle')}</h2>
              
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 dark:text-gray-300">{t('botFatherStep1')}</p>
                <p className="text-gray-700 dark:text-gray-300">{t('botFatherStep2')}</p>
                <p className="text-gray-700 dark:text-gray-300">{t('botFatherStep3')}</p>
              </div>
              
              <Alert variant="destructive" className="bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 mb-4">
                <AlertDescription className="text-red-700 dark:text-red-400">
                  {t('botFatherImportant')}
                </AlertDescription>
              </Alert>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('botFatherToken')}</p>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm mb-6 text-gray-800 dark:text-gray-200">
                {t('tokenExample')}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('adminPanelSteps')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('addBotSteps')}</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('captchaRecommendation')}</p>
                <img 
                  src="https://i.ibb.co/HT0VKMxH/Screenshot-2025-05-21-at-7-37-57-PM.png" 
                  alt="Captcha setting" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('botStartInstruction')}</p>
                <img 
                  src="https://i.ibb.co/gLgVSwhH/Screenshot-2025-05-21-at-7-40-18-PM.png" 
                  alt="Bot start button" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">{t('botDetailsTitle')}</h2>
            
            {/* Seller Bot Section */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-blue-400" />
                {t('sellerBotTitle')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('sellerBotDescription')}</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('sellerBotSubscription')}</p>
                <img 
                  src="https://i.ibb.co/VYZjZQPG/Screenshot-2025-05-21-at-7-43-36-PM.png" 
                  alt="Subscription settings" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2">- {t('sellerBotBonus')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">- {t('sellerBotPrivate')}</p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('sellerBotCustomization')}{' '}
                <Link to="/custom-bot" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('customBotLink')}
                </Link>
              </p>
            </div>
            
            {/* Private Bot Section */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-blue-400" />
                <Shield className="text-blue-600 dark:text-blue-400 -ml-4 h-4 w-4" />
                {t('privateBotTitle')}
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('privateBotDescription')}</p>
                <img 
                  src="https://i.ibb.co/TMWmJkzR/Screenshot-2025-05-21-at-7-59-38-PM.png" 
                  alt="Private bot" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <h4 className="text-lg font-medium text-gray-800 dark:text-white my-3">{t('privateBotHowToUse')}</h4>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{t('privateBotUsage')}</p>
            </div>
            
            {/* Distributor Bot Section */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-blue-400" />
                {t('distributorBotTitle')}
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('distributorBotDescription')}</p>
                <img 
                  src="https://i.ibb.co/8LXcTzwQ/Screenshot-2025-05-21-at-5-22-18-PM.png" 
                  alt="Distributor bot" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-gray-700 dark:text-gray-300 md:w-1/2">{t('distributorBotUsage')}</p>
                <div className="md:w-1/2">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/MxK2BNbp/Screenshot-2025-05-21-at-5-23-12-PM.png" 
                          alt="Distributor bot setup 1" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/67rnrFMS/IMAGE-2025-05-21-17-23-57.jpg" 
                          alt="Distributor bot setup 2" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
            
            {/* Payment Bot Section */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-blue-400" />
                {t('paymentBotTitle')}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('paymentBotDescription')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('paymentBotSetup')}</p>
              
              <div className="mb-4">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/cSb4xh9m/Screenshot-2025-05-21-at-5-18-52-PM.png" 
                        alt="Payment bot setup 1" 
                        className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/B5B67pJ1/Screenshot-2025-05-21-at-5-20-03-PM.png" 
                        alt="Payment bot setup 2" 
                        className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {t('paymentBotWork')}{' '}
                <Link to="/addresses" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('addressesLink')}
                </Link>
              </p>
            </div>
            
            {/* Photo Hosting Bots Section */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-blue-400" />
                {t('photoHostingTitle')}
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-1/2">{t('photoHostingDescription')}</p>
                <div className="md:w-1/2">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/ycZRdQHh/Screenshot-2025-05-21-at-5-16-18-PM.png" 
                          alt="Photo hosting setup 1" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/SDTLLGpT/Screenshot-2025-05-21-at-5-17-06-PM.png" 
                          alt="Photo hosting setup 2" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">{t('photoHostingUsage')}</p>
            </div>
            
            {/* FAQ Bots Section */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-blue-400" />
                {t('faqBotsTitle')}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('faqBotsSetup')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('faqBotsMenu')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('faqBotsConfig')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('faqBotsHeaders')}</p>
              
              <h4 className="text-lg font-medium text-gray-800 dark:text-white my-3">{t('faqBotsExamples')}</h4>
              <div className="mb-6">
                <Carousel className="w-full max-w-2xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/Wp4hNxwL/Screenshot-2025-05-21-at-5-08-09-PM.png" 
                        alt="FAQ example 1" 
                        className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/wN837Szv/Screenshot-2025-05-21-at-5-10-51-PM.png" 
                        alt="FAQ example 2" 
                        className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="https://i.ibb.co/R4SgFfXM/IMAGE-2025-05-21-17-09-40.jpg" 
                        alt="FAQ example 3" 
                        className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-1/2">{t('faqBotsClientView')}</p>
                <div className="md:w-1/2">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/fzL65ZMV/Screenshot-2025-05-21-at-5-13-49-PM.png" 
                          alt="FAQ client view 1" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/GQctRk6P/Screenshot-2025-05-21-at-5-14-14-PM.png" 
                          alt="FAQ client view 2" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="https://i.ibb.co/yF4QVWSK/Screenshot-2025-05-21-at-5-14-24-PM.png" 
                          alt="FAQ client view 3" 
                          className="rounded-lg shadow-md w-full h-auto border border-gray-200 dark:border-gray-700"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('faqBotsSorting')}</p>
                <img 
                  src="https://i.ibb.co/YTbNR2kn/Screenshot-2025-05-21-at-5-11-16-PM.png" 
                  alt="FAQ sorting" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {t('faqBotsHelperLink')}{' '}
                <Link to="/help-bots" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('helperBotsLink')}
                </Link>
              </p>
            </div>
            
            {/* Recommendations Section */}
            <div className="bg-yellow-50 dark:bg-yellow-500/10 rounded-lg p-6 my-8 border border-yellow-200 dark:border-yellow-500/30">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-500" />
                {t('recommendationsTitle')}
              </h3>
              
              <p className="text-gray-800 dark:text-white font-medium mb-2">{t('protectionQuestion')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('protectionIntro')}</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li className="text-gray-700 dark:text-gray-300">{t('protectionTip1')}</li>
                <li className="text-gray-700 dark:text-gray-300">{t('protectionTip2')}</li>
                <li className="text-gray-700 dark:text-gray-300">{t('protectionTip3')}</li>
                <li className="text-gray-700 dark:text-gray-300">{t('protectionTip4')}</li>
                <li className="text-gray-700 dark:text-gray-300">{t('protectionTip5')}</li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('bonusFeature')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('bonusSetup')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t('bonusLimit')}</p>
              
              <Alert className="bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 mb-4">
                <AlertDescription>
                  <p className="font-medium mb-1 text-gray-800 dark:text-white">{t('lifehack')}</p>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">{t('lifehackDescription')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('lifehackWarning')}</p>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddBots;
