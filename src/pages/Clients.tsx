
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import useTranslations from '@/hooks/useTranslations';
import { Search, FileDown, Users } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';

const Clients = () => {
  const { t } = useLanguage();
  const { tLocal } = useTranslations();

  return (
    <TutorialPage title={t('clients')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-300">{tLocal('clientsDescription')}</p>
          
          {/* Search section */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Search size={20} className="text-neonBlue" />
              <h3 className="text-lg font-medium">{t('search')}</h3>
            </div>
            <p className="text-gray-300">{tLocal('clientsSearch')}</p>
          </div>
        </div>

        {/* Client management section */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} className="text-neonBlue" />
            <h2 className="text-xl font-semibold">{tLocal('clientsCardTitle')}</h2>
          </div>
          
          <p className="text-gray-300 mb-6">{tLocal('clientsCardDescription')}</p>
          
          {/* Client management image */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.ibb.co/nMrGQNWf/Screenshot-2025-05-17-at-11-19-23-PM.png" 
              alt="Client management interface"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
          
          {/* Export options */}
          <div className="mt-8 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <FileDown size={20} className="text-neonBlue" />
              <h3 className="text-lg font-medium">{t('export')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600 flex items-center justify-between">
                <span>CSV Format</span>
                <span className="text-neonBlue">.csv</span>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600 flex items-center justify-between">
                <span>Excel Format</span>
                <span className="text-neonBlue">.xls</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Example client table */}
        <div className="overflow-x-auto">
          <Table className="border-collapse border border-gray-800">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-gray-800">ID</TableHead>
                <TableHead className="bg-gray-800">{t('name')}</TableHead>
                <TableHead className="bg-gray-800">{t('balance')}</TableHead>
                <TableHead className="bg-gray-800">{t('discount')}</TableHead>
                <TableHead className="bg-gray-800">{t('actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((item) => (
                <TableRow key={item} className="hover:bg-gray-800/50">
                  <TableCell className="font-medium">#{item}00{item}</TableCell>
                  <TableCell>User{item}</TableCell>
                  <TableCell>${Math.floor(Math.random() * 1000)}</TableCell>
                  <TableCell>{Math.floor(Math.random() * 30)}%</TableCell>
                  <TableCell className="text-neonBlue hover:underline cursor-pointer">
                    {t('view')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Clients;
