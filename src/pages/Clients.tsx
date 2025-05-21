
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import useTranslations from '@/hooks/useTranslations';
import { 
  Search, 
  UserCircle, 
  Tag, 
  PercentCircle, 
  History, 
  MessageSquare,
  Shield,
  UserX
} from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Clients = () => {
  const { t } = useLanguage();
  const { tLocal } = useTranslations();

  return (
    <TutorialPage title={t('clients')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg dark:text-gray-300 text-gray-700">
            {tLocal('clientCards')}
          </p>
          
          <Separator className="my-6" />
          
          <p className="dark:text-gray-300 text-gray-700">
            {tLocal('clientCreation')}
          </p>
          
          <p className="dark:text-gray-300 text-gray-700">
            {tLocal('clientInfo')}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-start my-6">
            <div className="md:w-2/3">
              <ul className="space-y-2 dark:text-gray-300 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <Tag className="h-5 w-5 text-primary dark:text-neonBlue" />
                  </div>
                  <span><strong>{tLocal('balance')}</strong> {tLocal('balanceDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <PercentCircle className="h-5 w-5 text-primary dark:text-neonBlue" />
                  </div>
                  <span><strong>{tLocal('discount')}</strong> {tLocal('discountDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <UserX className="h-5 w-5 text-primary dark:text-neonBlue" />
                  </div>
                  <span><strong>{tLocal('block')}</strong> {tLocal('blockDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <UserCircle className="h-5 w-5 text-primary dark:text-neonBlue" />
                  </div>
                  <span><strong>{tLocal('referrer')}</strong> {tLocal('referrerDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <MessageSquare className="h-5 w-5 text-primary dark:text-neonBlue" />
                  </div>
                  <span><strong>{tLocal('comments')}</strong> {tLocal('commentsDescription')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1">
                    <History className="h-5 w-5 text-primary dark:text-neonBlue" />
                  </div>
                  <span><strong>{tLocal('history')}</strong> {tLocal('historyDescription')}</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="https://i.ibb.co/rGxHQWN/Screenshot-2025-05-22-at-12-51-02-AM.png" 
                alt="Client balance edit interface"
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <h3 className="text-xl font-semibold dark:text-white text-gray-900">{tLocal('permissions')}</h3>
          
          <div className="flex flex-col md:flex-row gap-6 items-start my-6">
            <div className="md:w-2/3">
              <p className="dark:text-gray-300 text-gray-700 mb-4">
                {tLocal('permissionsDescription')}
              </p>
              <ul className="space-y-2 dark:text-gray-300 text-gray-700">
                <li>• {tLocal('privateBots')}</li>
                <li>• {tLocal('supportChat')}</li>
                <li>• {tLocal('referrals')}</li>
              </ul>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="https://i.ibb.co/9m0G41T/Screenshot-2025-05-22-at-12-46-46-AM.png" 
                alt="Client permissions interface"
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <h3 className="text-xl font-semibold dark:text-white text-gray-900">{tLocal('conversation')}</h3>
          
          <p className="dark:text-gray-300 text-gray-700 mb-4">
            {tLocal('conversationDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <img 
              src="https://i.ibb.co/M5cW782/Screenshot-2025-05-22-at-12-55-45-AM.png" 
              alt="Client conversation history"
              className="rounded-lg shadow-md w-full"
            />
            <img 
              src="https://i.ibb.co/TxbMk8c/IMAGE-2025-05-22-00-58-45.jpg" 
              alt="Support chat interface"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          
          <Alert className="bg-blue-50/70 dark:bg-secondary/20 border-blue-200/50 dark:border-border mb-6">
            <div className="flex gap-2">
              <Shield className="h-5 w-5 text-primary dark:text-neonBlue" />
              <AlertDescription className="dark:text-gray-300 text-gray-700">
                <p className="font-medium">{tLocal('bulkActions')}</p>
                <p className="mt-2">{tLocal('bulkActionsDescription')}</p>
                <p className="mt-2">{tLocal('messageTip')}</p>
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Clients;
