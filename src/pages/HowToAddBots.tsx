
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
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="bg-white/90 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t('botsDescription')}</p>
            
            <div className="bg-blue-50/80 dark:bg-secondary/20 rounded-lg p-6 mb-8 border border-blue-200 dark:border-border">
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Bot className="text-blue-600 dark:text-neonBlue" />
                <span className="text-gray-800 dark:text-white">{t('botFatherInstruction')}</span>
              </h2>
              
              <ol className="space-y-3 mb-6 list-decimal pl-5">
                <li className="text-gray-700 dark:text-gray-300">{t('startCommand')}</li>
                <li className="text-gray-700 dark:text-gray-300">{t('botNameInstruction')}</li>
                <li className="text-gray-700 dark:text-gray-300">{t('usernameInstruction')}</li>
              </ol>
              
              <Alert variant="destructive" className="bg-red-50 dark:bg-destructive/10 border-red-200 dark:border-destructive/30 mb-4">
                <AlertDescription className="text-red-700 dark:text-red-400">
                  {t('usernameRequirement')}
                </AlertDescription>
              </Alert>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('tokenReceived')}</p>
              <div className="bg-blue-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm mb-6 text-gray-800 dark:text-gray-200">
                {t('tokenExample')}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">{t('adminPanelInstruction')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('addBotInstruction')}</p>
              
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
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-neonBlue" />
                {t('sellerBot')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('sellerBotDescription')}</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('subscriptionNote')}</p>
                <img 
                  src="https://i.ibb.co/VYZjZQPG/Screenshot-2025-05-21-at-7-43-36-PM.png" 
                  alt="Subscription settings" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('newClientBonus')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('privateStatus')}</p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('customizationLink')}{' '}
                <Link to="/custom-bot" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('customizationBotLink')}
                </Link>
              </p>
            </div>
            
            <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
            
            {/* Continue with other bot sections... */}
            {/* Private Bot Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="text-blue-600 dark:text-neonBlue" />
                <Shield className="text-blue-600 dark:text-neonBlue -ml-4 h-4 w-4" />
                {t('privateBot')}
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                <p className="text-gray-700 dark:text-gray-300 md:w-2/3">{t('privateBotDescription')}</p>
                <img 
                  src="https://i.ibb.co/TMWmJkzR/Screenshot-2025-05-21-at-7-59-38-PM.png" 
                  alt="Private bot" 
                  className="rounded-lg shadow-md md:w-1/3 h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <h4 className="text-lg font-medium text-gray-800 dark:text-white my-3">{t('howToUseTitle')}</h4>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{t('privateBotUsage')}</p>
            </div>
            
            <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
            
            {/* Recommendations Section */}
            <div className="bg-white/50 dark:bg-secondary/20 rounded-lg p-6 my-8 border light-border">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-500" />
                {t('recommendationsTitle')}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{t('protectionQuestion')}</p>
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
              
              <Alert className="bg-blue-50/80 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 mb-4">
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
