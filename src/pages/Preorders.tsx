
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

const Preorders = () => {
  const { tNew } = useTranslations();

  return (
    <TutorialPage title={tNew('preordersTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <BackButton to="/cards-payments" className="mb-6" />
        
        <div className="mb-8">
          <p className="text-lg mb-6">{tNew('preordersPageDescription')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-white">{tNew('citiesSetupTitle')}</h3>
                <p>{tNew('citiesSetupDescription')}</p>
                <div className="mt-4">
                  <img 
                    src="https://i.ibb.co/5DzTGBq/IMAGE-2025-05-19-12-32-04.jpg" 
                    alt="Cities setup" 
                    className="rounded-md border border-gray-700 w-full"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-white">{tNew('districtsSetupTitle')}</h3>
                <p>{tNew('districtsSetupDescription')}</p>
                <Alert className="bg-gray-700/50 border-gray-600 text-white mt-4">
                  <AlertDescription>
                    {tNew('districtsRequirement')}
                  </AlertDescription>
                </Alert>
                <div className="mt-4">
                  <img 
                    src="https://i.ibb.co/QjvvqZ4/IMAGE-2025-05-19-12-34-27.jpg" 
                    alt="Districts setup" 
                    className="rounded-md border border-gray-700 w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-2xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('productTypesTitle')}
          </h2>
          <p className="mb-4">{tNew('productTypesDescription')}</p>
          <p className="mb-6">{tNew('productTypeCreation')}</p>
          
          <div className="flex flex-col items-center mb-4">
            <img 
              src="https://i.ibb.co/TMt9wCH/Screenshot-2025-05-19-at-12-40-08-PM.png" 
              alt="Product type settings" 
              className="rounded-md border border-gray-700 max-w-full"
            />
          </div>
          
          <p>{tNew('productTypeSettings')}</p>
          <p className="mt-4">{tNew('botMenuSetup')}</p>
          
          <div className="flex flex-col md:flex-row items-start gap-6 mt-6">
            <div className="flex-1">
              <p>{tNew('cityDistrictExample')}</p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://i.ibb.co/DHvMhS6/Screenshot-2025-05-19-at-12-50-46-PM.png" 
                alt="District example" 
                className="rounded-md border border-gray-700 w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('processingPreordersTitle')}
          </h2>
          <p className="mb-4">{tNew('processingPreordersDescription')}</p>
          
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.ibb.co/WdV5xYm/IMAGE-2025-05-19-12-58-03.jpg" 
              alt="Processing preorders" 
              className="rounded-md border border-gray-700 max-w-full"
            />
          </div>
          
          <p className="mb-8">{tNew('processingInstructions')}</p>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
              {tNew('employeeAccountsTitle')}
            </h3>
            <p className="mb-4">{tNew('employeeAccountsDescription')}</p>
            <p className="mb-4">{tNew('employeeCreation')}</p>
            <p>
              {tNew('employeeSettings')} <Link to="/workers" className="text-blue-400 hover:underline">{tNew('workers')}</Link>
            </p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Preorders;
