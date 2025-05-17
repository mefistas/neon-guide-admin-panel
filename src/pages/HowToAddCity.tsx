
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

const HowToAddCity = () => {
  const { t, language } = useLanguage();
  const { tNew } = useTranslations();
  const [expanded, setExpanded] = React.useState(true);

  const images = [
    {
      src: "https://i.ibb.co/jkQ7NS5C/IMAGE-2025-05-16-15-43-34.jpg",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://i.ibb.co/20BhDsK2/photo-2025-05-16-15-49-30.jpg",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://i.ibb.co/DHBdsLTs/IMAGE-2025-05-16-15-47-02.jpg",
      alt: "Person using laptop computer"
    },
    {
      src: "https://i.ibb.co/CsnDWcWX/IMAGE-2025-05-16-15-47-32.jpg",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddCity')}>
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
              <h2 className="text-xl font-medium text-gray-100">{t('howToAddCity')}</h2>
            </div>
            <div className="text-[#D6BCFA]">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="overflow-hidden">
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-200">{language === 'ru' ? 
                'Для добавления города тебе нужно перейти в раздел города и нажать кнопку добавить город.' : 
                'To add a city, you need to go to the cities section and click the add city button.'}</p>
              
              <div className="space-y-3 pl-5">
                {language === 'ru' ? (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Идем в раздел ГОРОДА</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Нажимаем на кнопку "ДОБАВИТЬ ГОРОД"</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Заполняем необходимые поля в форме:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Название города на русском и английском</li>
                        <li>Название для вывода в боте</li>
                        <li>Выбираем статус "Активен" для отображения в боте</li>
                        <li>Задаем положение города для сортировки в списке</li>
                      </ul>
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
                      <p>Go to the CITIES section</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click on the "ADD CITY" button</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Fill in the required fields in the form:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>City name in Russian and English</li>
                        <li>Name to display in the bot</li>
                        <li>Set status to "Active" to display in the bot</li>
                        <li>Set city position for sorting in the list</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click the "Save" button</p>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
                <p className="font-semibold">{language === 'ru' ? 'Важно:' : 'Important:'}</p>
                <p className="text-gray-200">{language === 'ru' ? 
                  'После добавления городов не забудь добавить для них районы, иначе пользователи не смогут делать заказы в этих городах.' : 
                  'After adding cities, don\'t forget to add districts for them, otherwise users won\'t be able to place orders in these cities.'}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCity;
