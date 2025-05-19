
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Link } from 'react-router-dom';
import { Truck, Package, User, Users } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Preorders = () => {
  const { tNew } = useTranslations();

  return (
    <TutorialPage title={tNew('preordersTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <BackButton to="/cards-payments" className="mb-6" />
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('preordersSetupTitle')}
          </h3>
          
          <div className="space-y-6">
            <p>{tNew('preordersNeedCitiesDistricts')}</p>
            
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3">{tNew('citiesSetupTitle')}</h4>
              <p className="mb-4">{tNew('citiesSetupDescription')}</p>
              <div className="flex justify-center my-4">
                <img 
                  src="https://i.ibb.co/5DzTGBq/IMAGE-2025-05-19-12-32-04.jpg"
                  alt={tNew('citiesSetupImage')}
                  className="rounded-lg max-w-full shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3">{tNew('districtsSetupTitle')}</h4>
              <p className="mb-4">{tNew('districtsSetupDescription')}</p>
              <div className="flex justify-center my-4">
                <img 
                  src="https://i.ibb.co/QjvvqZ4n/IMAGE-2025-05-19-12-34-27.jpg"
                  alt={tNew('districtsSetupImage')}
                  className="rounded-lg max-w-full shadow-lg"
                />
              </div>
              <p>{tNew('districtsRequirement')}</p>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('productTypesSetupTitle')}
          </h3>
          
          <div className="space-y-4">
            <p>{tNew('productTypesDescription')}</p>
            <div className="flex justify-center my-4">
              <img 
                src="https://i.ibb.co/TMt9wCHK/Screenshot-2025-05-19-at-12-40-08-PM.png"
                alt={tNew('productTypesImage')}
                className="rounded-lg max-w-full shadow-lg"
              />
            </div>
            <p>{tNew('productTypesSettings')}</p>
            <p>{tNew('menuButtonAppears')}</p>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p>{tNew('cityDistrictExample')}</p>
            </div>
            <div className="flex-1">
              <img 
                src="https://i.ibb.co/DHvMhS6c/Screenshot-2025-05-19-at-12-50-46-PM.png"
                alt={tNew('cityDistrictExampleImage')}
                className="rounded-lg max-w-full shadow-lg"
              />
            </div>
          </div>
        </section>
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('processingPreordersTitle')}
          </h3>
          
          <div className="space-y-4">
            <p>{tNew('preordersAppearInPurchases')}</p>
            <div className="flex justify-center my-4">
              <img 
                src="https://i.ibb.co/WdV5xYm/IMAGE-2025-05-19-12-58-03.jpg"
                alt={tNew('preordersInPurchasesImage')}
                className="rounded-lg max-w-full shadow-lg"
              />
            </div>
            <p>{tNew('markAsCompleted')}</p>
            <p>{tNew('sendMessageToCustomer')}</p>
          </div>
        </section>
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('employeeAccountsTitle')}
          </h3>
          
          <div className="space-y-4">
            <p>{tNew('employeeAccountsDescription')}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{tNew('employeeNotifications')}</li>
              <li>{tNew('employeeCanProcess')}</li>
              <li>{tNew('employeeSection')}</li>
              <li>{tNew('employeeType')}</li>
            </ul>
            <p>
              {tNew('learnMoreEmployeeSettings')}
              <Link to="/workers" className="text-blue-400 hover:underline ml-1">
                {tNew('workers')}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Preorders;
