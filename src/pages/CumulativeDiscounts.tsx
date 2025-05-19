
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const CumulativeDiscounts = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('cumulativeDiscounts')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        {/* Introduction */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <p className="mb-4">{tNew('cumulativeDiscountsDesc')}</p>
          
          <p className="mb-6">{tNew('cumulativeDiscountsExplanation')}</p>
          
          <p className="mb-4">{tNew('cumulativeDiscountsPath')}</p>

          <div className="mt-6 mb-6">
            <img 
              src="https://i.ibb.co/S4GLcRfM/image.png" 
              alt="Cumulative Discounts Interface" 
              className="rounded-md w-full max-w-lg mx-auto border border-gray-600"
            />
          </div>
          
          <p className="mb-4">{tNew('cumulativeDiscountsSetupInstructions')}</p>
        </section>
        
        {/* Example table */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('cumulativeDiscountsExample')}
          </h3>
          
          <Table className="mb-4 border border-gray-700 rounded-md overflow-hidden">
            <TableHeader className="bg-gray-800">
              <TableRow>
                <TableHead className="text-white">{tNew('cumulativeDiscountsPurchases')}</TableHead>
                <TableHead className="text-white">{tNew('cumulativeDiscountsPercent')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>1%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>15</TableCell>
                <TableCell>2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>30</TableCell>
                <TableCell>3%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
        
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">{tNew('tip')}:</p>
          <p>{tNew('cumulativeDiscountsTip')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CumulativeDiscounts;
