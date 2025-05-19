
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';

const HowToAddDistrict = () => {
  const { t, language } = useLanguage();
  const { tNew } = useTranslations();
  const [expanded, setExpanded] = React.useState(true);

  const images = [
    {
      src: "https://i.ibb.co/XkXCXFQQ/IMAGE-2025-05-16-16-47-23.jpg",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://i.ibb.co/Mkbv2t45/IMAGE-2025-05-16-16-47-25.jpg",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://i.ibb.co/KxJ2fkQL/IMAGE-2025-05-16-16-47-26.jpg",
      alt: "Person using laptop computer"
    },
    {
      src: "https://i.ibb.co/VcwhrQqd/IMAGE-2025-05-16-16-47-28.jpg",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddDistrict')}>
      <div className="space-y-6">
        <div className="p-2 mb-6">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={image.src}
                        alt={t(image.alt)}
                        className="rounded-xl object-cover w-full h-full"
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

        <Collapsible 
          open={expanded} 
          onOpenChange={setExpanded}
          className={`backdrop-blur-sm transition-all duration-300 overflow-hidden rounded-lg ${
            expanded 
              ? 'bg-[#1A1F2C]' 
              : 'bg-[#111827] hover:bg-[#1A1F2C]/80'
          }`}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-5 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center min-w-8 h-8 rounded-full bg-[#7E69AB]/40 text-white font-medium">
                <MapPin size={16} />
              </div>
              <h2 className="text-xl font-medium text-gray-100">{t('howToAddDistrict')}</h2>
            </div>
            <div className="text-[#D6BCFA]">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="overflow-hidden">
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-200">{language === 'ru' ? 
                'Для добавления района нужно перейти в раздел районы и нажать на кнопку добавить район.' : 
                'To add a district, you need to go to the districts section and click the add district button.'}</p>
              
              <div className="space-y-3 pl-5">
                {language === 'ru' ? (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Идем в раздел РАЙОНЫ</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Нажимаем на кнопку "ДОБАВИТЬ РАЙОН"</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Заполняем необходимые поля в форме:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Выбираем город, к которому относится район</li>
                        <li>Название района на русском и английском</li>
                        <li>Устанавливаем позицию для сортировки</li>
                        <li>Выбираем статус "Активен" для отображения в боте</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Если в одном городе много районов вы можете задать им цвет для удобства</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Нажимаем кнопку "Сохранить"</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Go to the DISTRICTS section</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click on the "ADD DISTRICT" button</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Fill in the required fields in the form:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Select the city that the district belongs to</li>
                        <li>District name in Russian and English</li>
                        <li>Set position for sorting</li>
                        <li>Set status to "Active" to display in the bot</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>If there are many districts in one city, you can assign them colors for convenience</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click the "Save" button</p>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
                <p className="font-semibold">{language === 'ru' ? 'Совет:' : 'Tip:'}</p>
                <p className="text-gray-200">{language === 'ru' ? 
                  'Для удобства работы с большим количеством районов используйте цветовую кодировку и понятные названия. Это упростит поиск нужного района при добавлении адресов.' : 
                  'For convenience when working with a large number of districts, use color coding and clear names. This will make it easier to find the right district when adding addresses.'}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TutorialPage>
  );
};

export default HowToAddDistrict;
