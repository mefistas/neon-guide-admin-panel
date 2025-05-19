
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const Purchases = () => {
  const { tLocal } = useTranslations();
  
  return (
    <TutorialPage title={tLocal('purchasesTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/" />
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-tight">{tLocal('purchasesSubtitle')}</h1>
        </div>
        
        <p>{tLocal('purchasesClientOptions')}</p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-medium mb-2">{tLocal('purchasesSection')}</h3>
            <p className="text-gray-300 mb-2">{tLocal('purchasesFlowDescription')}</p>
            <p className="text-gray-300">{tLocal('purchasesDisputeInfo')}</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <img 
              src="https://i.ibb.co/R2jRnGM/IMAGE-2025-05-18-14-26-09.jpg" 
              alt="Disputes in the Purchases section" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-medium mb-2">{tLocal('purchasesStatistics')}</h3>
            
            <div className="h-[200px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: 'Mon', value: 12 },
                  { name: 'Tue', value: 18 },
                  { name: 'Wed', value: 5 },
                  { name: 'Thu', value: 8 },
                  { name: 'Fri', value: 23 },
                  { name: 'Sat', value: 17 },
                  { name: 'Sun', value: 4 },
                ]}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-medium mb-2">{tLocal('purchasesStatusColumn')}</h3>
            
            <img 
              src="https://i.ibb.co/JrQTFPj/IMAGE-2025-05-18-14-38-48.jpg" 
              alt="Purchase status with reviews" 
              className="rounded-lg shadow-lg my-4"
            />
            
            <div className="grid grid-cols-2 gap-2 text-xs mt-4">
              <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded text-center">Completed</div>
              <div className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded text-center">In progress</div>
              <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded text-center">Paid, waiting</div>
              <div className="bg-red-500/10 text-red-500 px-3 py-1 rounded text-center">Disputed</div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-medium mb-2">{tLocal('purchasesFilters')}</h3>
            
            <div className="mt-4">
              <img 
                src="https://i.ibb.co/SNRJgXf/IMAGE-2025-05-18-14-44-39.jpg" 
                alt="Filters in purchases section" 
                className="rounded-lg shadow-lg"
              />
              
              <div className="mt-4 text-sm">
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Filter by date range</li>
                  <li>Filter by payment method</li>
                  <li>Filter by purchase status</li>
                  <li>Filter by product type</li>
                  <li>Filter by client name/ID</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Purchases;
