
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

const HowToAddAddress = () => {
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
    <TutorialPage title={t('howToAddAddress')}>
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
              <h2 className="text-xl font-medium text-gray-100">{t('howToAddAddress')}</h2>
            </div>
            <div className="text-[#D6BCFA]">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="overflow-hidden">
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-200">{language === 'ru' ? 
                'В этом разделе вы научитесь добавлять адреса (клады), включая массовую загрузку.' : 
                'In this section, you\'ll learn how to add addresses (stashes), including bulk uploading.'}</p>
              
              <div className="space-y-3 pl-5">
                {language === 'ru' ? (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Идем в раздел ДОБАВИТЬ АДРЕСА</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Видим списки районов. Используем поиск если их много, находим нужный район и нажимаем ДОБАВИТЬ АДРЕСА</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Заполняем необходимые поля в форме:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Выбираем курьера (которого мы ранее добавили)</li>
                        <li>Выбираем МК (если настраивали) или оставляем как есть</li>
                        <li>Выбираем тип продукта и грамовку (например, меф "единичка")</li>
                        <li>Можно игнорировать раздел изображений (опционально)</li>
                        <li>Идем в раздел текста для ввода адресов</li>
                        <li>Подготавливаем адреса в нужном формате для массовой загрузки</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Массовая загрузка адресов:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Загрузите все фотографии кладов на фотохостинг (например, imgbb.com)</li>
                        <li>В текстовом поле укажите ссылку на фото и описание клада</li>
                        <li>Используйте двойной пробел между разными адресами</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Нажимаем "Сохранить" если больше нет других грамовок в этом районе</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Или нажимаем "Сохранить и добавить еще" если в этом районе есть еще другие типы продуктов</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Go to the ADD ADDRESSES section</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>See lists of districts. Use search if there are many, find the right district and click ADD ADDRESSES</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Fill in the required fields in the form:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Select the courier (which we added earlier)</li>
                        <li>Select the MK (if configured) or leave as is</li>
                        <li>Select the product type and weight (e.g., meph "single")</li>
                        <li>You can ignore the images section (optional)</li>
                        <li>Go to the text section to enter addresses</li>
                        <li>Prepare addresses in the required format for bulk upload</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Bulk upload of addresses:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Upload all stash photos to a photo hosting service (e.g., imgbb.com)</li>
                        <li>In the text field, specify the link to the photo and the stash description</li>
                        <li>Use a double space between different addresses</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click "Save" if there are no other weights in this district</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Or click "Save and add more" if there are other product types in this district</p>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
                <p className="font-semibold">{language === 'ru' ? 'Совет по массовой загрузке:' : 'Bulk upload tip:'}</p>
                <p className="text-gray-200">{language === 'ru' ? 
                  'Формат для массовой загрузки адресов (каждый адрес разделяется двумя пустыми строками):\nhttps://imgbb.com/link_to_image\nв указанной точке по кордам\n\n\nhttps://imgbb.com/another_image\nв указанной точке по кордам' : 
                  'Format for bulk uploading addresses (each address is separated by two empty lines):\nhttps://imgbb.com/link_to_image\nat the specified point by coordinates\n\n\nhttps://imgbb.com/another_image\nat the specified point by coordinates'}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TutorialPage>
  );
};

export default HowToAddAddress;
