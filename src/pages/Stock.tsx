
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useStockTranslations from '@/hooks/useStockTranslations';
import { Link } from 'react-router-dom';
import { Package, Plus, AlertCircle, Clock, Users, MapPin, FileText } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { Separator } from '@/components/ui/separator';

const Stock = () => {
  const { t } = useStockTranslations();

  return (
    <TutorialPage title={t('stockTitle')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <BackButton to="/detailed-guide" className="mb-6" />
        
        <div className="bg-white/90 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t('stockIntro')}</p>
                <p className="text-gray-700 dark:text-gray-300">{t('stockPath')}</p>
              </div>
              <img 
                src="https://i.ibb.co/2jJV5Mzb/Screenshot-2025-05-20-at-7-44-10-PM.png" 
                alt="Stock management interface" 
                className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              />
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <Plus className="text-blue-600 dark:text-neonBlue" />
                {t('addingProducts')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t('addingProductsDescription')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('addingProductsSteps')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/5kyKn7RH/Screenshot-2025-05-20-at-7-45-16-PM.png" 
                  alt="Adding products interface" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-blue-800 dark:text-blue-300">{t('importantNote')}</p>
                    <p className="text-blue-700 dark:text-blue-300">{t('productTypesNote')}</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <Clock className="text-blue-600 dark:text-neonBlue" />
                {t('stockStatuses')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t('stockStatusesDescription')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{t('statusAvailable')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{t('statusReserved')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{t('statusSold')}</span>
                    </li>
                  </ul>
                </div>
                <img 
                  src="https://i.ibb.co/ySwN5h3J/Screenshot-2025-05-20-at-7-46-29-PM.png" 
                  alt="Stock statuses" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <Users className="text-blue-600 dark:text-neonBlue" />
                {t('courierAssignment')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t('courierAssignmentDescription')}</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('learnMoreCouriers')} 
                    <Link to="/couriers-salary" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      {t('couriersSalarySection')}
                    </Link>
                  </p>
                </div>
                <img 
                  src="https://i.ibb.co/m0kTXGQ7/Screenshot-2025-05-20-at-7-47-37-PM.png" 
                  alt="Courier assignment" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <MapPin className="text-blue-600 dark:text-neonBlue" />
                {t('locationManagement')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t('locationManagementDescription')}</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('locationDetails')} 
                    <Link to="/addresses" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      {t('addressesSection')}
                    </Link>
                  </p>
                </div>
                <img 
                  src="https://i.ibb.co/QQR8zMH5/Screenshot-2025-05-20-at-7-48-45-PM.png" 
                  alt="Location management" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <FileText className="text-blue-600 dark:text-neonBlue" />
                {t('stockReports')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t('stockReportsDescription')}</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700 dark:text-gray-300">• {t('dailyReports')}</li>
                    <li className="text-gray-700 dark:text-gray-300">• {t('weeklyReports')}</li>
                    <li className="text-gray-700 dark:text-gray-300">• {t('monthlyReports')}</li>
                  </ul>
                </div>
                <img 
                  src="https://i.ibb.co/m4z7hYYG/Screenshot-2025-05-20-at-7-49-58-PM.png" 
                  alt="Stock reports" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-300">{t('tip')}</p>
                  <p className="text-yellow-700 dark:text-yellow-300">{t('stockManagementTip')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Stock;
