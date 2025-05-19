
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
import { ChevronDown, ChevronUp, Bot } from 'lucide-react';

const HowToAddBots = () => {
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
    <TutorialPage title={t('howToAddBots')}>
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
                <Bot size={16} />
              </div>
              <h2 className="text-xl font-medium text-gray-100">{t('howToAddBots')}</h2>
            </div>
            <div className="text-[#D6BCFA]">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="overflow-hidden">
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-200">{language === 'ru' ? 
                'В этом разделе вы научитесь добавлять и настраивать ботов для вашего магазина.' : 
                'In this section, you\'ll learn how to add and configure bots for your store.'}</p>
              
              <div className="space-y-3 pl-5">
                {language === 'ru' ? (
                  <>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Идем в раздел БОТЫ</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Нажимаем на кнопку "ДОБАВИТЬ БОТА"</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Выбираем платформу для бота:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Telegram (стандартный выбор)</li>
                        <li>Discord (если используется)</li>
                        <li>Web (для веб-версии магазина)</li>
                        <li>Другие доступные платформы</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Добавляем учетные данные бота:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Имя бота (будет отображаться пользователям)</li>
                        <li>API токен (получаем от @BotFather)</li>
                        <li>Username бота (без символа @)</li>
                        <li>URL-адрес webhook (если используете)</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Настраиваем поведение бота:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Выбираем доступные города для этого бота</li>
                        <li>Настраиваем методы оплаты</li>
                        <li>Задаем процент скидки (если необходимо)</li>
                        <li>Устанавливаем лимиты на минимальную/максимальную сумму заказа</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Настраиваем интеграции (если необходимо):</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Платежные системы (BTC, карты, и т.д.)</li>
                        <li>Системы обмена сообщениями</li>
                        <li>API для дополнительной функциональности</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Настраиваем процесс покупки:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Выбор меню и кнопок интерфейса</li>
                        <li>Процесс выбора товаров и оформления заказа</li>
                        <li>Отображение информации о заказе</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Добавляем фотографию бота (для его индивидуализации)</p>
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
                      <p>Go to the BOTS section</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Click on the "ADD BOT" button</p>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Choose the platform for the bot:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Telegram (standard choice)</li>
                        <li>Discord (if used)</li>
                        <li>Web (for web version of the store)</li>
                        <li>Other available platforms</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Add bot credentials:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Bot name (will be displayed to users)</li>
                        <li>API token (received from @BotFather)</li>
                        <li>Bot username (without the @ symbol)</li>
                        <li>Webhook URL (if used)</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Configure bot behavior:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Select available cities for this bot</li>
                        <li>Configure payment methods</li>
                        <li>Set discount percentage (if necessary)</li>
                        <li>Set limits on minimum/maximum order amount</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Configure integrations (if necessary):</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Payment systems (BTC, cards, etc.)</li>
                        <li>Messaging systems</li>
                        <li>APIs for additional functionality</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Configure the purchasing process:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        <li>Selection of menu and interface buttons</li>
                        <li>Process of selecting products and placing an order</li>
                        <li>Display of order information</li>
                      </ul>
                    </div>
                    <div className="relative pl-5 text-gray-200">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                      <p>Add a photo of the bot (for its personalization)</p>
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
                  'Не забудьте активировать бота в BotFather прежде чем добавлять его в систему. Для получения API токена используйте команду /newbot в BotFather. Храните токен в безопасном месте и не передавайте его третьим лицам.' : 
                  'Don\'t forget to activate the bot in BotFather before adding it to the system. To get an API token, use the /newbot command in BotFather. Store the token in a secure place and do not share it with third parties.'}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TutorialPage>
  );
};

export default HowToAddBots;
