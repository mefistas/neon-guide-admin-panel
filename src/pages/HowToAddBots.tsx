import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import useBotsTranslations from '@/hooks/useBotsTranslations';
import { Link } from 'react-router-dom';
import {
  Bot, 
  Shield, 
  MessageCircle, 
  Database, 
  CreditCard, 
  ImagePlus, 
  MessageSquare, 
  AlertTriangle
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HowToAddBots = () => {
  const { t, language } = useBotsTranslations();
  
  return (
    <TutorialPage title={t('bots')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
      
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">{t('botsDescription')}</p>
          
          <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6 mb-8 border border-border">
            <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Bot className="text-neonBlue" />
              <span>{t('botFatherInstruction')}</span>
            </h2>
            
            <ol className="space-y-3 mb-6 list-decimal pl-5">
              <li className="text-gray-300">{t('startCommand')}</li>
              <li className="text-gray-300">{t('botNameInstruction')}</li>
              <li className="text-gray-300">{t('usernameInstruction')}</li>
            </ol>
            
            <Alert variant="destructive" className="bg-destructive/10 border-destructive/30 mb-4">
              <AlertDescription>
                {t('usernameRequirement')}
              </AlertDescription>
            </Alert>
            
            <p className="text-gray-300 mb-2">{t('tokenReceived')}</p>
            <div className="bg-gray-800 p-3 rounded-md font-mono text-sm mb-6">
              {t('tokenExample')}
            </div>
            
            <p className="text-gray-300">{t('adminPanelInstruction')}</p>
            <p className="text-gray-300 mb-4">{t('addBotInstruction')}</p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <p className="text-gray-300 md:w-2/3">{t('captchaRecommendation')}</p>
              <img 
                src="https://i.ibb.co/HT0VKMxH/Screenshot-2025-05-21-at-7-37-57-PM.png" 
                alt="Captcha setting" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <p className="text-gray-300 md:w-2/3">{t('botStartInstruction')}</p>
              <img 
                src="https://i.ibb.co/gLgVSwhH/Screenshot-2025-05-21-at-7-40-18-PM.png" 
                alt="Bot start button" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-white mb-6">{t('botDetailsTitle')}</h2>
          
          {/* Seller Bot Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Bot className="text-neonBlue" />
              {t('sellerBot')}
            </h3>
            <p className="text-gray-300 mb-4">{t('sellerBotDescription')}</p>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
              <p className="text-gray-300 md:w-2/3">{t('subscriptionNote')}</p>
              <img 
                src="https://i.ibb.co/VYZjZQPG/Screenshot-2025-05-21-at-7-43-36-PM.png" 
                alt="Subscription settings" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-2">{t('newClientBonus')}</p>
            <p className="text-gray-300 mb-4">{t('privateStatus')}</p>
            
            <p className="text-gray-300 mb-6">
              {t('customizationLink')}{' '}
              <Link to="/custom-bot" className="text-blue-400 hover:underline">
                {t('customizationBotLink')}
              </Link>
            </p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Private Bot Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Bot className="text-neonBlue" />
              <Shield className="text-neonBlue -ml-4 h-4 w-4" />
              {t('privateBot')}
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
              <p className="text-gray-300 md:w-2/3">{t('privateBotDescription')}</p>
              <img 
                src="https://i.ibb.co/TMWmJkzR/Screenshot-2025-05-21-at-7-59-38-PM.png" 
                alt="Private bot" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
            
            <h4 className="text-lg font-medium text-white my-3">{t('howToUseTitle')}</h4>
            <p className="text-gray-300 whitespace-pre-line">{t('privateBotUsage')}</p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Distributor Bot Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Bot className="text-neonBlue" />
              <MessageCircle className="text-neonBlue -ml-4 h-4 w-4" />
              {t('distributorBot')}
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
              <p className="text-gray-300 md:w-2/3">{t('distributorBotDescription')}</p>
              <img 
                src="https://i.ibb.co/8LXcTzwQ/Screenshot-2025-05-21-at-5-22-18-PM.png" 
                alt="Distributor bot" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-4">{t('distributorBotUsage')}</p>
            
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/MxK2BNbp/Screenshot-2025-05-21-at-5-23-12-PM.png" 
                      alt="Distributor bot settings 1" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/67rnrFMS/IMAGE-2025-05-21-17-23-57.jpg" 
                      alt="Distributor bot settings 2" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-2 gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
          
          <Separator className="my-6" />
          
          {/* Payment Bot Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Bot className="text-neonBlue" />
              <CreditCard className="text-neonBlue -ml-4 h-4 w-4" />
              {t('paymentBot')}
            </h3>
            
            <p className="text-gray-300 mb-4">{t('paymentBotDescription')}</p>
            
            <p className="text-gray-300 mb-4">{t('paymentBotSetup')}</p>
            
            <Carousel className="w-full max-w-2xl mx-auto mb-6">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/cSb4xh9m/Screenshot-2025-05-21-at-5-18-52-PM.png" 
                      alt="Payment bot setup 1" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/B5B67pJ1/Screenshot-2025-05-21-at-5-20-03-PM.png" 
                      alt="Payment bot setup 2" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-2 gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            
            <p className="text-gray-300">
              {t('paymentBotUsage')}{' '}
              <Link to="/addresses" className="text-blue-400 hover:underline">
                {t('addressesLink')}
              </Link>
            </p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Photo Hosting Bots Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Bot className="text-neonBlue" />
              <ImagePlus className="text-neonBlue -ml-4 h-4 w-4" />
              {t('photoHostingBots')}
            </h3>
            
            <p className="text-gray-300 mb-4">{t('photoHostingBotsDescription')}</p>
            
            <Carousel className="w-full max-w-2xl mx-auto mb-6">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/ycZRdQHh/Screenshot-2025-05-21-at-5-16-18-PM.png" 
                      alt="Photo hosting bot 1" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/SDTLLGpT/Screenshot-2025-05-21-at-5-17-06-PM.png" 
                      alt="Photo hosting bot 2" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-2 gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            
            <p className="text-gray-300 mb-4">{t('photoHostingBotsUsage')}</p>
          </div>
          
          <Separator className="my-6" />
          
          {/* FAQ Bots Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Bot className="text-neonBlue" />
              <MessageSquare className="text-neonBlue -ml-4 h-4 w-4" />
              {t('faqBots')}
            </h3>
            
            <p className="text-gray-300 mb-2">{t('faqBotsSetup')}</p>
            <p className="text-gray-300 mb-2">{t('faqBotsAdmin')}</p>
            <p className="text-gray-300 mb-4">{t('faqBotsConfiguration')}</p>
            <p className="text-gray-300 mb-2">{t('faqBotsHeaders')}</p>
            <p className="text-gray-300 mb-2">{t('faqBotsExamples')}:</p>
            
            <Carousel className="w-full max-w-2xl mx-auto mb-6">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/Wp4hNxwL/Screenshot-2025-05-21-at-5-08-09-PM.png" 
                      alt="FAQ bot setup 1" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/wN837Szv/Screenshot-2025-05-21-at-5-10-51-PM.png" 
                      alt="FAQ bot setup 2" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/R4SgFfXM/IMAGE-2025-05-21-17-09-40.jpg" 
                      alt="FAQ bot setup 3" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-2 gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            
            <p className="text-gray-300 mb-2">{t('faqBotsClientView')}:</p>
            
            <Carousel className="w-full max-w-2xl mx-auto mb-6">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/fzL65ZMV/Screenshot-2025-05-21-at-5-13-49-PM.png" 
                      alt="FAQ bot client view 1" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/GQctRk6P/Screenshot-2025-05-21-at-5-14-14-PM.png" 
                      alt="FAQ bot client view 2" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://i.ibb.co/yF4QVWSK/Screenshot-2025-05-21-at-5-14-24-PM.png" 
                      alt="FAQ bot client view 3" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-2 gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
              <p className="text-gray-300 md:w-2/3">{t('faqBotsSorting')}</p>
              <img 
                src="https://i.ibb.co/YTbNR2kn/Screenshot-2025-05-21-at-5-11-16-PM.png" 
                alt="FAQ bot sorting" 
                className="rounded-lg shadow-md md:w-1/3 h-auto"
              />
            </div>
            
            <p className="text-gray-300">
              {t('helperBotsLink')}{' '}
              <Link to="/help-bots" className="text-blue-400 hover:underline">
                {t('helperBotsTitle')}
              </Link>
            </p>
          </div>
          
          {/* Recommendations Section */}
          <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6 my-8 border border-border">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" />
              {t('recommendationsTitle')}
            </h3>
            
            <p className="text-gray-300 font-medium mb-2">{t('protectionQuestion')}</p>
            <p className="text-gray-300 mb-4">{t('protectionIntro')}</p>
            
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-gray-300">{t('protectionTip1')}</li>
              <li className="text-gray-300">{t('protectionTip2')}</li>
              <li className="text-gray-300">{t('protectionTip3')}</li>
              <li className="text-gray-300">{t('protectionTip4')}</li>
              <li className="text-gray-300">{t('protectionTip5')}</li>
            </ul>
            
            <p className="text-gray-300 mb-2">{t('bonusFeature')}</p>
            <p className="text-gray-300 mb-2">{t('bonusSetup')}</p>
            <p className="text-gray-300 mb-6">{t('bonusLimit')}</p>
            
            <Alert className="bg-blue-500/10 border-blue-500/30 mb-4">
              <AlertDescription>
                <p className="font-medium mb-1">{t('lifehack')}</p>
                <p className="mb-2">{t('lifehackDescription')}</p>
                <p>{t('lifehackWarning')}</p>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddBots;
