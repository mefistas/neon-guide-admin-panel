
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import { useLanguage } from '@/contexts/LanguageContext';
import useChatsTranslations from '@/hooks/useChatsTranslations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageSquare, 
  Users, 
  Megaphone, 
  Settings, 
  Link as LinkIcon,
  Star,
  BellRing
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ChatsChannels = () => {
  const { t } = useLanguage();
  const { tLocal } = useChatsTranslations();
  
  return (
    <TutorialPage title={tLocal('pageTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
            {tLocal('introText')}
          </p>
          
          <Separator className="my-6" />
          
          <Card className="bg-white dark:bg-secondary/30 border-blue-100 dark:border-border mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-gray-800 dark:text-white">
                <Megaphone className="text-blue-600 dark:text-neonBlue" /> 
                {tLocal('menuPath')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p className="mb-4">{tLocal('addChannel')}</p>
              <ul className="space-y-2">
                <li>{tLocal('setupInstructions')}</li>
                <li>{tLocal('idInstruction')}</li>
                <li>{tLocal('tokenInstruction')} <strong className="text-blue-700 dark:text-neonBlue">{tLocal('tokenImportant')}</strong></li>
              </ul>
              
              <div className="mt-4 mb-6">
                <img 
                  src="https://i.ibb.co/Kp0KnNhk/Screenshot-2025-05-22-at-2-22-56-PM.png" 
                  alt="Channel setup with bot"
                  className="rounded-lg shadow-sm border border-blue-100 dark:border-gray-700 max-w-full h-auto"
                />
              </div>
              
              <p className="font-medium text-gray-800 dark:text-white">{tLocal('saveWarning')}</p>
              
              <div className="mt-4">
                <img 
                  src="https://i.ibb.co/fPgv3WQ/Screenshot-2025-05-22-at-2-27-39-PM.png" 
                  alt="List of available channels"
                  className="rounded-lg shadow-sm border border-blue-100 dark:border-gray-700 max-w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
          
          <Separator className="my-6" />
          
          <Card className="bg-white dark:bg-secondary/30 border-blue-100 dark:border-border mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-gray-800 dark:text-white">
                <MessageSquare className="text-blue-600 dark:text-neonBlue" /> 
                {tLocal('publicationsSection')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p className="mb-4">{tLocal('addPublication')}</p>
              <p className="mb-6">{tLocal('buttonFormatInfo')}</p>
              
              <Carousel className="mb-6">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <img 
                        src="https://i.ibb.co/20y8Vv9N/Screenshot-2025-05-22-at-2-32-11-PM.png" 
                        alt="Publication setup"
                        className="rounded-lg shadow-sm border border-blue-100 dark:border-gray-700 max-w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img 
                        src="https://i.ibb.co/Ngrznv18/Screenshot-2025-05-22-at-2-36-31-PM.png" 
                        alt="Publication result"
                        className="rounded-lg shadow-sm border border-blue-100 dark:border-gray-700 max-w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-2 gap-2">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>
              
              <p className="mb-3">{tLocal('repeatMessages')}</p>
              <p>
                {tLocal('subscriptionRequirement')}{' '}
                <Link to="/one-time-discounts" className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  {tLocal('oneTimeDiscounts')}
                </Link>
              </p>
            </CardContent>
          </Card>
          
          <Separator className="my-6" />
          
          <Card className="bg-white dark:bg-secondary/30 border-blue-100 dark:border-border mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-gray-800 dark:text-white">
                <Star className="text-blue-600 dark:text-neonBlue" /> 
                {tLocal('reviewsSettings')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <div className="mt-4">
                <img 
                  src="https://i.ibb.co/q3g4pgvj/Screenshot-2025-05-22-at-2-45-33-PM.png" 
                  alt="Reviews publication settings"
                  className="rounded-lg shadow-sm border border-blue-100 dark:border-gray-700 max-w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
          
          <Alert className="bg-blue-50 border-blue-200 dark:bg-secondary/20 dark:border-border mb-6">
            <div className="flex gap-2">
              <BellRing className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
              <AlertDescription className="text-gray-700 dark:text-gray-300">
                <p>{tLocal('stockNotifications')}</p>
                <p className="mt-2">
                  {tLocal('marketingLearnMore')}{' '}
                  <Link to="/marketing" className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                    {t('marketing')}
                  </Link>
                </p>
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>
    </TutorialPage>
  );
};

export default ChatsChannels;
