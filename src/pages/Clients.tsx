
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import useClientsTranslations from '@/hooks/useClientsTranslations';
import { 
  Search, 
  UserCircle, 
  Tag, 
  PercentCircle, 
  History, 
  MessageSquare,
  Shield,
  UserX,
  Download
} from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Clients = () => {
  const { t: globalT } = useLanguage();
  const { t } = useClientsTranslations();

  return (
    <TutorialPage title={globalT('clients')}>
      <div className="space-y-6">
        <div className="mb-4 flex justify-between items-center">
          <BackButton to="/detailed-guide" />
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="light-text">
              <Download className="h-4 w-4 mr-1" /> CSV
            </Button>
            <Button variant="outline" size="sm" className="light-text">
              <Download className="h-4 w-4 mr-1" /> XLS
            </Button>
          </div>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            {t('clientCards')}
          </p>
          
          <Separator className="my-6" />
          
          <p className="text-gray-700 dark:text-gray-300">
            {t('clientCreation')}
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            {t('clientInfo')}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-start my-6">
            <div className="md:w-2/3">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <Tag className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
                  </div>
                  <span><strong>{t('balance')}</strong> {t('balanceDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <PercentCircle className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
                  </div>
                  <span><strong>{t('discount')}</strong> {t('discountDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <UserX className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
                  </div>
                  <span><strong>{t('block')}</strong> {t('blockDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <UserCircle className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
                  </div>
                  <span><strong>{t('referrer')}</strong> {t('referrerDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
                  </div>
                  <span><strong>{t('comments')}</strong> {t('commentsDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <History className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
                  </div>
                  <span><strong>{t('history')}</strong> {t('historyDescription')}</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{t('balanceTopup')}</p>
            </div>
            
            <div className="md:w-1/3">
              <Card className="overflow-hidden light-card border-blue-100 dark:border-gray-700">
                <CardContent className="p-0">
                  <img 
                    src="https://i.ibb.co/rGxHQWN8/Screenshot-2025-05-22-at-12-51-02-AM.png" 
                    alt="Client balance edit interface"
                    className="w-full h-auto rounded-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('permissions')}</h3>
          
          <div className="flex flex-col md:flex-row gap-6 items-start my-6">
            <div className="md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t('permissionsDescription')}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="mt-1">•</div>
                  <span>{t('privateBots')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">•</div>
                  <span>{t('supportChat')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">•</div>
                  <span>{t('referrals')}</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3">
              <Card className="overflow-hidden light-card border-blue-100 dark:border-gray-700">
                <CardContent className="p-0">
                  <img 
                    src="https://i.ibb.co/9m0G41Ts/Screenshot-2025-05-22-at-12-46-46-AM.png" 
                    alt="Client permissions interface"
                    className="w-full h-auto rounded-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('conversation')}</h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t('conversationDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card className="overflow-hidden light-card border-blue-100 dark:border-gray-700">
              <CardContent className="p-0">
                <img 
                  src="https://i.ibb.co/M5cW782Z/Screenshot-2025-05-22-at-12-55-45-AM.png" 
                  alt="Client conversation history"
                  className="w-full h-auto rounded-sm"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden light-card border-blue-100 dark:border-gray-700">
              <CardContent className="p-0">
                <img 
                  src="https://i.ibb.co/TxbMk8cP/IMAGE-2025-05-22-00-58-45.jpg" 
                  alt="Support chat interface"
                  className="w-full h-auto rounded-sm"
                />
              </CardContent>
            </Card>
          </div>
          
          <Alert className="bg-blue-50 border-blue-200 text-gray-800 dark:bg-secondary/20 dark:border-border dark:text-gray-300 mb-6">
            <div className="flex gap-2">
              <Shield className="h-5 w-5 text-blue-600 dark:text-neonBlue" />
              <AlertDescription>
                <p className="font-medium text-gray-800 dark:text-white">{t('bulkActions')}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{t('bulkActionsDescription')}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{t('messageTip')}</p>
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Clients;
