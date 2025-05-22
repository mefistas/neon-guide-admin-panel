
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import useMainStatsTranslations from '@/hooks/useMainStatsTranslations';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart4, ArrowRightLeft, MoveHorizontal, Bell } from 'lucide-react';

const data = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
  { name: 'Jul', sales: 3490, profit: 4300 }
];

const MainStats = () => {
  const { t, language } = useMainStatsTranslations();
  
  return (
    <TutorialPage title={t('mainStats')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="prose max-w-none">
          <p className="mb-6 font-normal text-gray-700 dark:text-zinc-400">{t('mainStatsDescription')}</p>
          
          <p className="mb-6 text-gray-700 dark:text-zinc-400">
            {t('withdrawFundsInfo')}{' '}
            <Link to="/withdraw-funds" className="text-blue-600 hover:underline dark:text-blue-400">
              {t('withdrawFundsLink')}
            </Link>
          </p>
          
          <p className="mb-6 flex items-center gap-2 text-gray-700 dark:text-zinc-400">
            <MoveHorizontal className="text-blue-600 dark:text-neonBlue" />
            {t('dragDropInfo')}
          </p>
          
          <div className="mt-8">
            <img src="https://i.ibb.co/CfdQKFp/Screenshot-2025-05-21-at-8-44-54-PM.png" alt="Statistics dashboard" className="rounded-lg shadow-md w-full h-auto mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white dark:bg-secondary/20 border-blue-100 dark:border-border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-gray-800 dark:text-white">
                  <BarChart4 className="text-blue-600 dark:text-neonBlue" /> 
                  {language === 'ru' ? 'Статистика продаж' : 'Sales Statistics'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                      <XAxis dataKey="name" stroke="#6b7280" className="dark:stroke-gray-400" />
                      <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          color: '#111827',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="sales" 
                        stroke="#6366f1" 
                        strokeWidth={2} 
                        activeDot={{ r: 6 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="#4ADE80" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-secondary/20 border-blue-100 dark:border-border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-gray-800 dark:text-white">
                  <ArrowRightLeft className="text-blue-600 dark:text-neonBlue" />
                  {language === 'ru' ? 'Последние транзакции' : 'Recent Transactions'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(item => (
                    <div key={item} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700/50">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">
                          {language === 'ru' ? 'Заказ' : 'Order'} #{1000 + item}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date().toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US')}
                        </p>
                      </div>
                      <div className="text-green-600 dark:text-green-400 font-medium">
                        +₽{Math.floor(Math.random() * 10000)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-white dark:bg-secondary/20 border-blue-100 dark:border-border shadow-sm mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-gray-800 dark:text-white">
                <Bell className="text-blue-600 dark:text-neonBlue" />
                {language === 'ru' ? 'Новости и обновления' : 'News and Updates'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map(item => (
                  <div key={item} className="p-3 rounded-lg transition-colors bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                    <p className="font-medium mb-1 text-gray-800 dark:text-white">
                      {language === 'ru' ? 'Обновление функциональности' : 'Feature Update'} v1.{item}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US')}
                    </p>
                    <p className="text-gray-700 dark:text-zinc-400">
                      {language === 'ru' 
                        ? 'Мы добавили новые возможности для управления вашим магазином! Проверьте обновления в разделе настроек.' 
                        : 'We\'ve added new capabilities for managing your store! Check out the updates in the settings section.'
                      }
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <p className="text-gray-800 dark:text-gray-300">{t('newsInfo')}</p>
          
          <div className="mt-10 mb-8 p-4 bg-blue-50 dark:bg-neonBlue/10 rounded-lg border border-blue-100 dark:border-neonBlue text-center">
            <p className="text-lg font-medium text-blue-700 dark:text-blue-500">{t('ourMotto')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default MainStats;
