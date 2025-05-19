
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import useTranslations from '@/hooks/useTranslations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, User } from 'lucide-react';

const HowToAddCourier = () => {
  const { t, language } = useLanguage();
  const { tNew } = useTranslations();
  const [expanded, setExpanded] = React.useState(true);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop computer showing admin interface"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Monitor showing programming code"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Person using laptop computer"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Code on computer screen"
    }
  ];

  return (
    <TutorialPage title={t('howToAddCourier')}>
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
                <User size={16} />
              </div>
              <h2 className="text-xl font-medium text-gray-100">{t('howToAddCourier')}</h2>
            </div>
            <div className="text-[#D6BCFA]">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="overflow-hidden">
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-200">{language === 'ru' ? 
                'Для добавления курьера перейдем в раздел курьеры и добавим необходимые данные.' : 
                'To add a courier, we\'ll go to the couriers section and add the necessary data.'}</p>
              
              <div className="space-y-3 pl-5">
                {language === 'ru' ? (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Идем в раздел КУРЬЕРЫ</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Нажимаем на кнопку "ДОБАВИТЬ КУРЬЕРА"</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Заполняем необходимые поля в форме:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Имя курьера (видимое только в админке)</li>
                        <li>Telegram ID курьера (для связи через бота)</li>
                        <li>Номер телефона (для экстренной связи)</li>
                        <li>Выбираем город, в котором работает курьер</li>
                        <li>Устанавливаем максимальную сумму выдачи</li>
                        <li>Выбираем статус "Активен" для возможности работы</li>
                        <li>Задаем зарплату для автоматического расчета</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>При необходимости можно добавить фото курьера</p>
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
                      <p>Go to the COURIERS section</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click on the "ADD COURIER" button</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Fill in the required fields in the form:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Courier name (visible only in admin panel)</li>
                        <li>Telegram ID of the courier (for communication through the bot)</li>
                        <li>Phone number (for emergency contact)</li>
                        <li>Select the city where the courier works</li>
                        <li>Set the maximum distribution amount</li>
                        <li>Select "Active" status to enable work</li>
                        <li>Set salary for automatic calculation</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>If needed, you can add a photo of the courier</p>
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
                  'Обязательно правильно указывайте Telegram ID курьера, иначе он не сможет получать уведомления о новых заданиях через бота. Для получения Telegram ID можно использовать бота @userinfobot.' : 
                  'Be sure to correctly specify the courier\'s Telegram ID, otherwise they won\'t be able to receive notifications about new tasks through the bot. You can use @userinfobot to get the Telegram ID.'}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCourier;
