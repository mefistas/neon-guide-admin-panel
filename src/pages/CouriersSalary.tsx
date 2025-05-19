import React, { useState } from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BackButton from '@/components/BackButton';
import { ChevronDown } from 'lucide-react';

interface SalaryRule {
  id: string;
  title: string;
  value: string | JSX.Element;
}

interface TranslationsType {
  [key: string]: {
    en: string;
    ru: string;
  };
}

const CouriersSalary = () => {
  const { tLocal } = useTranslations();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  
  // Translation keys must be defined in the translations object
  const translatedRules: SalaryRule[] = [
    {
      id: "rule1",
      title: tLocal("couriersSalaryRule1Title"),
      value: tLocal("couriersSalaryRule1Value")
    },
    {
      id: "rule2",
      title: tLocal("couriersSalaryRule2Title"),
      value: tLocal("couriersSalaryRule2Value")
    },
    {
      id: "rule3",
      title: tLocal("couriersSalaryRule3Title"),
      value: (
        <div className="space-y-2">
          <p>{tLocal("couriersSalaryRule3Value1")}</p>
          <p>{tLocal("couriersSalaryRule3Value2")}</p>
        </div>
      )
    }
  ];

  return (
    <TutorialPage title={tLocal("couriersSalaryTitle")}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/workers" />
        </div>

        <section className="space-y-6">
          <p className="text-base">{tLocal('couriersSalaryDescription1')}</p>
          
          <div className="my-6">
            <img 
              src="https://i.ibb.co/1GcZY0Kg/Screenshot-2025-05-18-at-5-25-22-PM.png" 
              alt={tLocal('couriersSalaryProductTypeAlt')} 
              className="rounded-lg w-full max-w-2xl mx-auto border border-gray-700"
            />
          </div>
          
          <p className="text-base">{tLocal('couriersSalaryDescription2')}</p>
          
          <div className="my-6">
            <img 
              src="https://i.ibb.co/DDqLrzy6/IMAGE-2025-05-18-17-50-51.jpg" 
              alt={tLocal('couriersSalarySettingsAlt')} 
              className="rounded-lg w-full max-w-2xl mx-auto border border-gray-700"
            />
          </div>
          
          <Separator className="my-8" />
          
          <div className="space-y-4">
            <p className="text-base">{tLocal('couriersSalaryDescription3')}</p>
            <p className="text-base">{tLocal('couriersSalaryDescription4')}</p>
            
            <div className="p-2 my-6">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={image.src}
                            alt={tLocal(image.alt)}
                            className="rounded-xl object-cover w-full h-full border border-gray-700"
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-4">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>
            </div>
            
            <p className="text-base">{tLocal('couriersSalaryDescription5')}</p>
            
            <Separator className="my-8" />
            
            <p className="text-base">{tLocal('couriersSalaryDescription6')}</p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default CouriersSalary;
