
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
  Link as LinkIcon
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ChatsChannels = () => {
  const { t } = useLanguage();
  const { tLocal, language } = useChatsTranslations();
  
  return (
    <TutorialPage title={t('chatsChannels')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="prose prose-invert dark:prose-invert prose-gray max-w-none">
          <p className="text-lg font-medium mb-6 dark:text-gray-200 text-gray-700">{tLocal('chatsChannelsDescription')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-secondary/30 dark:bg-secondary/20 border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="text-neonBlue dark:text-neonBlue text-primary" /> 
                  {tLocal('chatSetupTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="dark:text-gray-300 text-gray-700">
                <p className="mb-4">{tLocal('chatSetupDescription')}</p>
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://i.ibb.co/hVT6g86/chat-setup.png" 
                    alt={tLocal('chatSetupImageAlt')}
                    className="rounded-lg shadow-md max-w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/30 dark:bg-secondary/20 border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Megaphone className="text-neonBlue dark:text-neonBlue text-primary" /> 
                  {tLocal('channelSetupTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="dark:text-gray-300 text-gray-700">
                <p className="mb-4">{tLocal('channelSetupDescription')}</p>
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://i.ibb.co/8gW7qCd/channel-setup.png" 
                    alt={tLocal('channelSetupImageAlt')}
                    className="rounded-lg shadow-md max-w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Alert className="bg-blue-50/70 dark:bg-secondary/20 border-blue-200/50 dark:border-border mb-8">
            <div className="flex gap-2">
              <LinkIcon className="h-5 w-5 text-primary dark:text-neonBlue" />
              <AlertDescription className="dark:text-gray-300 text-gray-700">
                <p className="font-medium">{tLocal('mustSubscribeTip')}</p>
                <p className="mt-2">{tLocal('mustSubscribeDescription')}</p>
              </AlertDescription>
            </div>
          </Alert>
          
          <Card className="bg-secondary/30 dark:bg-secondary/20 border-border mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Settings className="text-neonBlue dark:text-neonBlue text-primary" /> 
                {tLocal('advancedSettingsTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="dark:text-gray-300 text-gray-700">
              <p className="mb-4">{tLocal('advancedSettingsDescription')}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{tLocal('advancedSetting1')}</li>
                <li>{tLocal('advancedSetting2')}</li>
                <li>{tLocal('advancedSetting3')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </TutorialPage>
  );
};

export default ChatsChannels;
