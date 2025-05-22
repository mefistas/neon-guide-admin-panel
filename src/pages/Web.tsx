
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import { BriefcaseIcon } from 'lucide-react';

const Web = () => {
  return (
    <TutorialPage title="САЙТЫ">
      <div className="space-y-6">
        <div className="mb-6">
          <BackButton to="/detailed-guide" />
        </div>

        <div className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <div className="flex flex-col items-center justify-center space-y-6 py-8">
            <BriefcaseIcon size={64} className="text-blue-600/80 dark:text-neonBlue/80" />
            
            <div className="max-w-2xl text-center space-y-4">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                В данный момент мы работаем над созданием сайтов-визиток.
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300">
                В скором времени будет возможность добавлять свои домены и вешать на них свои визитки или создавать по шаблону, с автоматической подстановкой ссылок на активных ботов и операторов. Далее эти визитки будут доработаны до создания полноценных сайтов авто-продаж. Этот раздел пополнится как только Сайты будут доступны для работы.
              </p>
              
              <p className="text-lg font-medium text-blue-700 dark:text-blue-400 mt-6">
                Оставайтесь с нами!
              </p>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Web;
