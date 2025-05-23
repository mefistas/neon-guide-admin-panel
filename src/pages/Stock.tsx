
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useStockTranslations from '@/hooks/useStockTranslations';
import { Link } from 'react-router-dom';
import { Package, Plus, AlertCircle, Clock, Users, MapPin, FileText, Building, ShoppingCart } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Stock = () => {
  const { t } = useStockTranslations();

  return (
    <TutorialPage title={t('stockTitle')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <BackButton to="/detailed-guide" className="mb-6" />
        
        <div className="bg-white/90 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">{t('stockIntro')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('quickStartNote')}</p>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Cities Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <Building className="text-blue-600 dark:text-neonBlue" />
                {t('citiesTitle')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('citiesStart')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/tP1msDHf/Screenshot-2025-05-21-at-2-52-57-PM.png" 
                  alt="Add city interface" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('citiesExisting')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('citiesEdit')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/8gW7qCdH/Screenshot-2025-05-21-at-3-10-51-PM.png" 
                  alt="Cities list" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg p-4">
                    <p className="text-gray-700 dark:text-gray-300">{t('citiesTip')}</p>
                  </div>
                </div>
                <img 
                  src="https://i.ibb.co/39nzkvmv/IMAGE-2025-05-21-15-18-24.jpg" 
                  alt="City statistics" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Districts Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <MapPin className="text-blue-600 dark:text-neonBlue" />
                {t('districtsTitle')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('districtsAdd')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/G4xjwHs1/Screenshot-2025-05-21-at-3-24-13-PM.png" 
                  alt="Add district interface" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{t('districtsVisible')}</p>
                <img 
                  src="https://i.ibb.co/dJpfjyVP/Screenshot-2025-05-21-at-3-37-32-PM.png" 
                  alt="Districts list" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
                />
                <p className="text-gray-700 dark:text-gray-300">
                  {t('districtsNote')} 
                  <Link to="/addresses" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    {t('addressesSection')}
                  </Link>
                </p>
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Product Groups Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <Package className="text-blue-600 dark:text-neonBlue" />
                {t('productGroupsTitle')}
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{t('productGroupsStart')}</p>
                <p className="text-gray-700 dark:text-gray-300">{t('productGroupsName')}</p>
                <p className="text-gray-700 dark:text-gray-300">{t('productGroupsDescription')}</p>
                
                <div className="bg-yellow-50/80 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/30 rounded-lg p-4">
                  <p className="font-medium text-gray-800 dark:text-white mb-2">ВАЖНО:</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('productGroupsImportant')}</p>
                </div>
                
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://i.ibb.co/S4SWy2Rg/Screenshot-2025-05-21-at-3-45-03-PM.png" 
                          alt="Product groups 1" 
                          className="rounded-lg object-cover w-full h-full border border-gray-200 dark:border-gray-700"
                        />
                      </AspectRatio>
                    </CarouselItem>
                    <CarouselItem>
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://i.ibb.co/GQsY5Rc9/Screenshot-2025-05-21-at-3-45-23-PM.png" 
                          alt="Product groups 2" 
                          className="rounded-lg object-cover w-full h-full border border-gray-200 dark:border-gray-700"
                        />
                      </AspectRatio>
                    </CarouselItem>
                    <CarouselItem>
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://i.ibb.co/zV8vq41g/Screenshot-2025-05-21-at-3-47-23-PM.png" 
                          alt="Product groups 3" 
                          className="rounded-lg object-cover w-full h-full border border-gray-200 dark:border-gray-700"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-4 space-x-4">
                    <CarouselPrevious className="relative static translate-y-0 left-0" />
                    <CarouselNext className="relative static translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Product Types Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <ShoppingCart className="text-blue-600 dark:text-neonBlue" />
                {t('productTypesTitle')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('productTypesStart')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/4R7wFbXP/IMAGE-2025-05-21-16-04-20.jpg" 
                  alt="Product types interface" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{t('productTypesSettings')}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('productTypesPricing')} 
                  <Link to="/happy-hours" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    {t('happyHoursSection')}
                  </Link>. {t('productTypesMarkups')}
                </p>
                
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://i.ibb.co/PGRLs57k/Screenshot-2025-05-21-at-4-11-19-PM.png" 
                          alt="Product pricing 1" 
                          className="rounded-lg object-cover w-full h-full border border-gray-200 dark:border-gray-700"
                        />
                      </AspectRatio>
                    </CarouselItem>
                    <CarouselItem>
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://i.ibb.co/mC77BrTG/Screenshot-2025-05-21-at-4-12-27-PM.png" 
                          alt="Product pricing 2" 
                          className="rounded-lg object-cover w-full h-full border border-gray-200 dark:border-gray-700"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-4 space-x-4">
                    <CarouselPrevious className="relative static translate-y-0 left-0" />
                    <CarouselNext className="relative static translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('courierProfitTitle')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('courierDetails')} 
                    <Link to="/finance" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      {t('financeSection')}
                    </Link>
                  </p>
                </div>
                <img 
                  src="https://i.ibb.co/1Jp5GkHB/Screenshot-2025-05-21-at-4-27-33-PM.png" 
                  alt="Courier profit settings" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Preorder Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('preorderTitle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('preorderNote')} 
                    <Link to="/preorders" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      {t('preordersSection')}
                    </Link>
                  </p>
                </div>
                <img 
                  src="https://i.ibb.co/LXkC3xF1/Screenshot-2025-05-21-at-4-32-51-PM.png" 
                  alt="Preorder settings" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Happy Hours Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('happyHoursTitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('happyHoursNote')} 
                <Link to="/happy-hours" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  {t('happyHoursSection')}
                </Link>
              </p>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Telegraph Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('telegraphTitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300 italic">{t('telegraphNote')}</p>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* MK Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <FileText className="text-blue-600 dark:text-neonBlue" />
                {t('mkTitle')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('mkIntro')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/73QYLnF/Screenshot-2025-05-21-at-5-28-39-PM.png" 
                  alt="MK interface" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('mkDescription')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('mkAddresses')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/x8hxTZ9s/IMAGE-2025-05-21-17-31-17.jpg" 
                  alt="MK statistics" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* History Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('historyTitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('historyDescription')}</p>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Notifications Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('notificationsTitle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{t('notificationsDescription')}</p>
                </div>
                <img 
                  src="https://i.ibb.co/6JRwtH4y/IMAGE-2025-05-21-17-44-40.jpg" 
                  alt="Notifications interface" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{t('notificationsSettings')}</p>
                <img 
                  src="https://i.ibb.co/d06hjmt8/Screenshot-2025-05-21-at-5-52-08-PM.png" 
                  alt="Notification settings" 
                  className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
                />
              </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Recommendation */}
            <div className="bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300">
                {t('workersRecommendation')} 
                <Link to="/workers" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  {t('workersSection')}
                </Link> {t('workersNext')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Stock;
