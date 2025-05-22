import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import useMainStatsTranslations from '@/hooks/useMainStatsTranslations';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart4, ArrowRightLeft, MoveHorizontal, Bell } from 'lucide-react';
const data = [{
  name: 'Jan',
  sales: 4000,
  profit: 2400
}, {
  name: 'Feb',
  sales: 3000,
  profit: 1398
}, {
  name: 'Mar',
  sales: 2000,
  profit: 9800
}, {
  name: 'Apr',
  sales: 2780,
  profit: 3908
}, {
  name: 'May',
  sales: 1890,
  profit: 4800
}, {
  name: 'Jun',
  sales: 2390,
  profit: 3800
}, {
  name: 'Jul',
  sales: 3490,
  profit: 4300
}];
const MainStats = () => {
  const {
    t,
    language
  } = useMainStatsTranslations();
  return <TutorialPage title={t('mainStats')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="mb-6 font-normal text-zinc-400">{t('mainStatsDescription')}</p>
          
          <p className="mb-6 text-slate-950">
            {t('withdrawFundsInfo')}{' '}
            <Link to="/withdraw-funds" className="text-blue-400 hover:underline">
              {t('withdrawFundsLink')}
            </Link>
          </p>
          
          <p className="mb-6 flex items-center gap-2 text-slate-950">
            <MoveHorizontal className="text-neonBlue" />
            {t('dragDropInfo')}
          </p>
          
          <div className="mt-8">
            <img src="https://i.ibb.co/CfdQKFp/Screenshot-2025-05-21-at-8-44-54-PM.png" alt="Statistics dashboard" className="rounded-lg shadow-md w-full h-auto mb-8 text-zinc-200" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-zinc-500">
            <Card className="bg-secondary/30 dark:bg-secondary/20 border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart4 className="text-neonBlue" /> 
                  {language === 'ru' ? 'Статистика продаж' : 'Sales Statistics'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="name" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip contentStyle={{
                      backgroundColor: 'rgba(17, 17, 17, 0.9)',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff'
                    }} />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#7E69AB" strokeWidth={2} activeDot={{
                      r: 6
                    }} />
                      <Line type="monotone" dataKey="profit" stroke="#4ADE80" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/30 dark:bg-secondary/20 border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ArrowRightLeft className="text-neonBlue" />
                  {language === 'ru' ? 'Последние транзакции' : 'Recent Transactions'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(item => <div key={item} className="flex justify-between items-center py-2 border-b border-gray-700/50">
                      <div>
                        <p className="font-medium">{language === 'ru' ? 'Заказ' : 'Order'} #{1000 + item}</p>
                        <p className="text-sm text-gray-400">
                          {new Date().toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US')}
                        </p>
                      </div>
                      <div className="text-green-400 font-medium">+₽{Math.floor(Math.random() * 10000)}</div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-secondary/30 dark:bg-secondary/20 border-border mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="text-neonBlue" />
                {language === 'ru' ? 'Новости и обновления' : 'News and Updates'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map(item => <div key={item} className="p-3 rounded-lg transition-colors bg-cyan-50">
                    <p className="font-medium mb-1">
                      {language === 'ru' ? 'Обновление функциональности' : 'Feature Update'} v1.{item}
                    </p>
                    <p className="text-gray-400 text-sm mb-2">
                      {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US')}
                    </p>
                    <p className="text-slate-950">
                      {language === 'ru' ? 'Мы добавили новые возможности для управления вашим магазином! Проверьте обновления в разделе настроек.' : 'We\'ve added new capabilities for managing your store! Check out the updates in the settings section.'}
                    </p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
          
          <p className="text-slate-950">{t('newsInfo')}</p>
          
          <div className="mt-10 mb-8 p-4 bg-neonBlue/10 rounded-lg border border-neonBlue text-center">
            <p className="text-lg font-medium text-zinc-300">{t('ourMotto')}</p>
          </div>
        </div>
      </div>
    </TutorialPage>;
};
export default MainStats;