
import React, { useEffect, useState } from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { useLocation } from 'react-router-dom';
import useAddressesTranslations from '@/hooks/useAddressesTranslations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Addresses = () => {
  const { tNew } = useTranslations();
  const { t } = useAddressesTranslations();
  const location = useLocation();
  const [referrer, setReferrer] = useState('/');
  
  // Determine the referrer for the back button
  useEffect(() => {
    // Check if there's a state with a from property
    if (location.state && location.state.from) {
      setReferrer(location.state.from);
    } else {
      // Default paths based on common navigation patterns
      const referrerMap: Record<string, string> = {
        '/marketing': '/marketing',
        '/detailed-guide': '/detailed-guide'
      };
      
      // Use document.referrer or a default path
      const prevPath = document.referrer.split('/').pop() || '';
      setReferrer(referrerMap[`/${prevPath}`] || '/detailed-guide');
    }
  }, [location]);
  
  const addAddressesImages = [
    {
      src: "https://i.ibb.co/mkpKfjY/IMAGE-2025-05-21-12-46-41.jpg",
      alt: "Add addresses module interface screenshot"
    },
    {
      src: "https://i.ibb.co/7B3D3hC/IMAGE-2025-05-21-13-17-45.jpg",
      alt: "Text upload interface"
    },
    {
      src: "https://i.ibb.co/qMp3svGs/IMAGE-2025-05-21-13-23-09.jpg",
      alt: "Photo upload with shared caption"
    },
    {
      src: "https://i.ibb.co/MkQ4RqH2/IMAGE-2025-05-21-12-56-53.jpg",
      alt: "Multi-upload photo+text interface"
    }
  ];
  
  const addressesModuleImages = [
    {
      src: "https://i.ibb.co/SXbwrPB8/IMAGE-2025-05-21-13-37-05.jpg",
      alt: "Addresses module interface"
    },
    {
      src: "https://i.ibb.co/C5rqXV8k/IMAGE-2025-05-21-13-43-43.jpg",
      alt: "Addresses module settings"
    },
    {
      src: "https://i.ibb.co/TDDfthNP/IMAGE-2025-05-21-13-43-44.jpg",
      alt: "Addresses module filters"
    }
  ];
  
  const addressesStatusImages = [
    {
      src: "https://i.ibb.co/xSB9mRSf/IMAGE-2025-05-21-13-57-03.jpg",
      alt: "Addresses status with markers"
    },
    {
      src: "https://i.ibb.co/jZq98Fwd/IMAGE-2025-05-21-14-00-11.jpg",
      alt: "Manually issued addresses"
    }
  ];
  
  return (
    <TutorialPage title={t('addressesTitle')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <BackButton to={referrer} className="mb-6" />
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {t('addressesTitle')}
          </h3>
          
          <p className="mb-8">{t('addressesIntro')}</p>
          
          {/* ADD ADDRESSES MODULE */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium border-b border-gray-700 pb-2">{t('addAddressesModule')}</h4>
            <p>{t('addAddressesDescription')}</p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg">
                  <img 
                    src={addAddressesImages[0].src} 
                    alt={addAddressesImages[0].alt} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div className="w-full md:w-1/2">
                <p>{t('districtList')}</p>
                <p className="mt-2">{t('districtPriority')}</p>
              </div>
            </div>
            
            <p>{t('uploadOptions')}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t('blueArrow')}</li>
              <li>{t('greenArrow')}</li>
            </ul>
          </div>
          
          {/* ADD ADDRESSES SECTION */}
          <div className="space-y-6 mt-10">
            <h4 className="text-lg font-medium border-b border-gray-700 pb-2">{t('addAddressesSection')}</h4>
            <p>{t('linkTextFormat')}</p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <p>{t('uploadInstruction')}</p>
              </div>
              <div className="w-full md:w-1/2">
                <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg">
                  <img 
                    src={addAddressesImages[1].src} 
                    alt={addAddressesImages[1].alt} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <p>{t('photoSameCaption')}</p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <p>{t('photoUploadInstruction')}</p>
              </div>
              <div className="w-full md:w-1/2">
                <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg">
                  <img 
                    src={addAddressesImages[2].src} 
                    alt={addAddressesImages[2].alt} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          {/* MULTI-UPLOAD PHOTO+TEXT */}
          <div className="space-y-6 mt-10">
            <h4 className="text-lg font-medium border-b border-gray-700 pb-2">{t('multiUploadSection')}</h4>
            <p>{t('convenientModule')}</p>
            
            <div className="flex flex-col gap-6">
              <p>{t('multiUploadInstruction')}</p>
              <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg max-w-2xl mx-auto">
                <img 
                  src={addAddressesImages[3].src} 
                  alt={addAddressesImages[3].alt} 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            
            <div className="space-y-4">
              <p>{t('locationOptions')}</p>
              <p>{t('notifications')}</p>
              <p>{t('saveButtons')}</p>
              <p className="font-medium">{t('successMessage')}</p>
            </div>
          </div>
          
          {/* ADDRESSES MODULE */}
          <div className="space-y-6 mt-12">
            <h4 className="text-lg font-medium border-b border-gray-700 pb-2">{t('addressesModule')}</h4>
            <p>{t('accessModule')}</p>
            <p>{t('allAddresses')}</p>
            
            <div className="space-y-6">
              <p>{t('moduleDescription')}</p>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {addressesModuleImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-4">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>
              
              <div className="space-y-4">
                <p>{t('returnToModule')}</p>
                <p>{t('mkInformation')}</p>
                <p>{t('manualIssue')}</p>
              </div>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {addressesStatusImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-4">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>
              
              <div className="space-y-4">
                <p>{t('editAddresses')}</p>
                <p>{t('bulkAction')}</p>
                <p>{t('actionOptions')}</p>
                <p>{t('applyChanges')}</p>
              </div>
              
              <div className="p-4 mt-4">
                <AspectRatio ratio={16 / 9} className="bg-gray-800 overflow-hidden rounded-lg">
                  <img 
                    src="https://i.ibb.co/Jjs3Lg4Y/Screenshot-2025-05-21-at-2-08-07-PM.png" 
                    alt="Address bulk actions" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              
              <div className="p-4 bg-neonBlue/10 rounded-md border border-neonBlue mt-6">
                <p className="font-semibold">{t('tip')}:</p>
                <p>{t('nextRecommendation')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Addresses;
