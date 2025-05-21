
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TutorialPage from '@/components/TutorialPage';
import BackButton from '@/components/BackButton';
import useStockTranslations from '@/hooks/useStockTranslations';
import { 
  City,
  MapPin,
  Package,
  PackageX,
  HardDrive,
  Database,
  BellDot
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Stock = () => {
  const { t } = useStockTranslations();
  const location = useLocation();

  // Image carousel component for multiple images
  const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentImage, setCurrentImage] = React.useState(0);

    const nextImage = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
      <div className="relative my-6">
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full rounded-lg shadow-md h-auto max-h-96 object-contain"
        />
        {images.length > 1 && (
          <div className="flex justify-center mt-2 gap-2">
            <button
              onClick={prevImage}
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            >
              ←
            </button>
            <span className="flex items-center text-gray-300 text-sm">
              {currentImage + 1} / {images.length}
            </span>
            <button
              onClick={nextImage}
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            >
              →
            </button>
          </div>
        )}
      </div>
    );
  };

  // TextWithImage component for showing text with an image to the right
  const TextWithImage = ({
    text,
    image,
    imageAlt = "Illustration"
  }: {
    text: string;
    image: string;
    imageAlt?: string;
  }) => (
    <div className="flex flex-col md:flex-row gap-6 my-6">
      <div className="md:w-1/2">
        <p className="text-gray-300">{text}</p>
      </div>
      <div className="md:w-1/2">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
    </div>
  );

  return (
    <TutorialPage title={t('stock')}>
      <div className="mb-4">
        <BackButton to="/detailed-guide" className="mb-6" />
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">{t('stockDescription')}</p>
        <p className="text-gray-300 mb-8">{t('quickStartNote')}</p>
        
        {/* CITIES Section */}
        <h2 className="text-2xl font-semibold text-white mt-8 border-l-4 border-[#7E69AB] pl-3">
          {t('cities')}
        </h2>
        <TextWithImage 
          text={t('citiesDescription')}
          image="https://i.ibb.co/tP1msDHf/Screenshot-2025-05-21-at-2-52-57-PM.png"
        />
        
        <TextWithImage 
          text={t('citiesExisting')}
          image="https://i.ibb.co/8gW7qCdH/Screenshot-2025-05-21-at-3-10-51-PM.png"
        />
        
        <p className="text-gray-300 mb-4">{t('citiesEdit')}</p>
        
        <div className="my-6">
          <img
            src="https://i.ibb.co/39nzkvmv/IMAGE-2025-05-21-15-18-24.jpg"
            alt="City editing interface"
            className="rounded-lg shadow-md w-full md:w-2/3 h-auto mx-auto"
          />
        </div>
        
        <p className="text-gray-300 mb-8">{t('citiesTip')}</p>
        
        {/* DISTRICTS Section */}
        <h2 className="text-2xl font-semibold text-white mt-10 border-l-4 border-[#7E69AB] pl-3">
          {t('districts')}
        </h2>
        <TextWithImage 
          text={t('districtsDescription')}
          image="https://i.ibb.co/G4xjwHs1/Screenshot-2025-05-21-at-3-24-13-PM.png"
        />
        
        <p className="text-gray-300 mb-4">{t('districtsVisible')}</p>
        
        <div className="my-6">
          <img
            src="https://i.ibb.co/dJpfjyVP/Screenshot-2025-05-21-at-3-37-32-PM.png"
            alt="Districts list"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        
        <p className="text-gray-300 mb-6">
          {t('districtsNote')} {' '}
          <Link to="/addresses" className="text-blue-400 hover:underline">
            {t('АДРЕСА')}
          </Link>
        </p>
        
        {/* PRODUCT GROUPS Section */}
        <h2 className="text-2xl font-semibold text-white mt-10 border-l-4 border-[#7E69AB] pl-3">
          {t('productGroups')}
        </h2>
        <p className="text-gray-300 mb-4">{t('productGroupsDescription')}</p>
        <p className="text-gray-300 mb-4">{t('productGroupsName')}</p>
        <p className="text-gray-300 mb-4">{t('productGroupsDetails')}</p>
        <p className="text-gray-300 mb-4">{t('productGroupsPreorders')}</p>
        
        <ImageCarousel 
          images={[
            "https://i.ibb.co/S4SWy2Rg/Screenshot-2025-05-21-at-3-45-03-PM.png",
            "https://i.ibb.co/GQsY5Rc9/Screenshot-2025-05-21-at-3-45-23-PM.png",
            "https://i.ibb.co/zV8vq41g/Screenshot-2025-05-21-at-3-47-23-PM.png"
          ]}
        />
        
        {/* PRODUCT TYPES Section */}
        <h2 className="text-2xl font-semibold text-white mt-10 border-l-4 border-[#7E69AB] pl-3">
          {t('productTypes')}
        </h2>
        <p className="text-gray-300 mb-4">{t('productTypesDescription')}</p>
        
        <div className="my-6">
          <img
            src="https://i.ibb.co/4R7wFbXP/IMAGE-2025-05-21-16-04-20.jpg"
            alt="Product types interface"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        
        <p className="text-gray-300 mb-4">{t('productTypesSettings')}</p>
        <p className="text-gray-300 mb-4">{t('productTypesPricing')} {' '}
          <Link to="/happy-hours" className="text-blue-400 hover:underline">
            {t('СЧАСТЛИВЫЕ ЧАСЫ')}
          </Link>
        </p>
        <p className="text-gray-300 mb-4">{t('productTypesMarkups')}</p>
        
        <ImageCarousel 
          images={[
            "https://i.ibb.co/PGRLs57k/Screenshot-2025-05-21-at-4-11-19-PM.png",
            "https://i.ibb.co/mC77BrTG/Screenshot-2025-05-21-at-4-12-27-PM.png"
          ]}
        />
        
        <p className="text-gray-300 mb-4">{t('productTypesCourierProfit')}</p>
        
        <TextWithImage 
          text={t('productTypesCourierDetails')}
          image="https://i.ibb.co/1Jp5GkHB/Screenshot-2025-05-21-at-4-27-33-PM.png"
        />
        
        <p className="mb-2">
          <Link to="/finance" className="text-blue-400 hover:underline">
            {t('ФИНАНСЫ')}
          </Link>
        </p>
        
        {/* Preorder Section */}
        <h3 className="text-xl font-semibold text-white mt-8">
          {t('preorder')}
        </h3>
        
        <TextWithImage 
          text={t('preorderDescription')}
          image="https://i.ibb.co/LXkC3xF1/Screenshot-2025-05-21-at-4-32-51-PM.png"
        />
        
        <p className="mb-2">
          <Link to="/preorders" className="text-blue-400 hover:underline">
            {t('ПРЕДЗАКАЗЫ')}
          </Link>
        </p>
        
        {/* Happy Hours Section */}
        <h3 className="text-xl font-semibold text-white mt-8">
          {t('happyHours')}
        </h3>
        <p className="text-gray-300 mb-4">
          {t('happyHoursDescription')} {' '}
          <Link to="/happy-hours" className="text-blue-400 hover:underline">
            {t('happyHours')}
          </Link>
        </p>
        
        {/* Telegraph Section */}
        <h3 className="text-xl font-semibold text-white mt-8">
          {t('telegraph')}
        </h3>
        <p className="text-gray-300 mb-8">{t('telegraphDescription')}</p>
        
        {/* MK Section */}
        <h2 className="text-2xl font-semibold text-white mt-10 border-l-4 border-[#7E69AB] pl-3">
          {t('masterKlad')}
        </h2>
        <p className="text-gray-300 mb-4">{t('masterKladDescription')}</p>
        
        <div className="my-6">
          <img
            src="https://i.ibb.co/73QYLnF/Screenshot-2025-05-21-at-5-28-39-PM.png"
            alt="MK interface"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        
        <p className="text-gray-300 mb-4">{t('masterKladInfo')}</p>
        
        <div className="my-6">
          <img
            src="https://i.ibb.co/x8hxTZ9s/IMAGE-2025-05-21-17-31-17.jpg"
            alt="MK statistics"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        
        <p className="text-gray-300 mb-8">{t('masterKladAddresses')}</p>
        
        {/* Stock History Section */}
        <h2 className="text-2xl font-semibold text-white mt-10 border-l-4 border-[#7E69AB] pl-3">
          {t('stockHistory')}
        </h2>
        <p className="text-gray-300 mb-8">{t('stockHistoryDescription')}</p>
        
        {/* Remainder Notifications Section */}
        <h2 className="text-2xl font-semibold text-white mt-10 border-l-4 border-[#7E69AB] pl-3">
          {t('remainderNotifications')}
        </h2>
        
        <TextWithImage 
          text={t('remainderNotificationsDescription')}
          image="https://i.ibb.co/6JRwtH4y/IMAGE-2025-05-21-17-44-40.jpg"
        />
        
        <p className="text-gray-300 mb-4">{t('remainderNotificationsSettings')}</p>
        
        <div className="my-6">
          <img
            src="https://i.ibb.co/d06hjmt8/Screenshot-2025-05-21-at-5-52-08-PM.png"
            alt="Remainder notifications settings"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        
        <div className="mt-10 mb-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300">
            {t('recommendation')} {' '}
            <Link to="/workers" className="text-blue-400 hover:underline">
              {t('workers')}
            </Link>
          </p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Stock;
