
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Shield, Settings, Bell, Home, DollarSign, Gift, Dices } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AllStores = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://i.ibb.co/VcMFpb4Z/Screenshot-2025-05-22-at-4-38-58-PM.png",
      alt: "Authentication settings"
    },
    {
      src: "https://i.ibb.co/DfbncrHy/Screenshot-2025-05-22-at-4-39-43-PM.png",
      alt: "Change password"
    },
    {
      src: "https://i.ibb.co/YMhCD1J/Screenshot-2025-05-22-at-4-40-22-PM.png", 
      alt: "Two-factor authentication"
    }
  ];

  const storeLinks = [
    { name: "withdrawFunds", icon: <DollarSign size={18} />, path: "/withdraw-funds" },
    { name: "helpBots", icon: <Bell size={18} />, path: "/help-bots" },
    { name: "chatsChannels", icon: <Home size={18} />, path: "/chats-chan" },
    { name: "finance", icon: <DollarSign size={18} />, path: "/finance" },
    { name: "oneTimeDiscounts", icon: <Gift size={18} />, path: "/one-time-discounts" },
    { name: "casinoSetup", icon: <Dices size={18} />, path: "/casio-setup" }
  ];

  return (
    <TutorialPage title={t('allStores')}>
      <div className="space-y-6">
        <div className="mb-6">
          <BackButton to="/detailed-guide" />
        </div>

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-neonBlue pl-3">
                Безопасность вашего магазина
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ваш магазин это ваш дом, что бы в ваш дом не пришли непрошеные гости перед работой в системе обязательно зайдите в раздел НАСТРОЙКИ, смените пароль, а так же включите двухфакторную аутентификацию
              </p>
              
              <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50 mt-6">
                <Shield className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                <AlertDescription className="text-gray-700 dark:text-gray-300">
                  Используйте сложные пароли и двухфакторную аутентификацию для защиты вашего магазина
                </AlertDescription>
              </Alert>
            </div>
            
            <div className="lg:w-1/2">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 10}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-xl object-cover w-full h-full border border-blue-100 dark:border-gray-700"
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
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-neonBlue pl-3">
            Управление магазином
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Теперь когда вы в безопасности можно приступить к осмотру основного модуля МАГАЗИНЫ-ВСЕ МАГАЗИНЫ. По умолчанию каждому клиенту выдается один магазин, в случае если вам нужно добавить еще один обратитесь к администратору.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                В данном разделе находится краткая статистика с основной информацией о вашем магазине, так же в этом разделе существует функционал деактивации и активации магазина и запрос на обязательное прохождение капчи у всех пользователей. Это довольно важный инструмент в случае если вас атакуют боты и вы хотите от них защититься. Запросите обязательную капчу и все ненастоящие клиенты автоматически сбросятся в вашем боте
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden border border-blue-100 dark:border-gray-700">
                <img 
                  src="https://i.ibb.co/99hSLZ0n/Screenshot-2025-05-22-at-1-21-06-AM.png" 
                  alt="Statistics interface" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-neonBlue pl-3">
            Настройки магазина
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Нажимаем на название своего магазина и попадаем в большую панель с различными настройками. Здесь доступно 10 разделов для редактирования большинство из которых уже описаны в нашей документации:
              </p>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {storeLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
                      <span className="text-blue-600 dark:text-blue-400">{link.icon}</span>
                      <span>{t(link.name)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 mt-6">
                Для разделов Личные боты, Язык/Меню, а так же Кастомизация ботов был создан специальный единый раздел - <Link to="/custom-bot" className="text-blue-600 hover:underline dark:text-blue-400">Кастомизация ботов</Link> этот раздел отвечает за адаптивные настройки вашего магазина, переводы на другие языки, формирование личного меню под свои нужды и многое другое.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden border border-blue-100 dark:border-gray-700">
                <img 
                  src="https://i.ibb.co/6R66Z7Vv/Screenshot-2025-05-22-at-4-51-38-PM.png" 
                  alt="Store settings interface" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-neonBlue pl-3">
            Основная информация
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden border border-blue-100 dark:border-gray-700 mb-6">
                <img 
                  src="https://i.ibb.co/cS3b5zdR/Screenshot-2025-05-22-at-5-33-01-PM.png" 
                  alt="Main information" 
                  className="w-full h-auto" 
                />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                Установите логотип и название своего магазина что бы клиенты всегда могли отличить вас от других. Чуть ниже будет информация о ваших балансах она так же будет видна в верхней части панели вне зависимости от ого в каком разделе находитесь.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden border border-blue-100 dark:border-gray-700 mb-6">
                <img 
                  src="https://i.ibb.co/RkWh4VqP/Screenshot-2025-05-22-at-6-44-37-PM.png" 
                  alt="Store settings" 
                  className="w-full h-auto" 
                />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                Листаем вниз и видим такие настройки как видимость рейтинга на главной странице бота, видимость количества сделок, работает ли магазин и можем ли мы открывать споры по покупкам. Рекомендуем включить все эти разделы, они добавят информативности для ваших клиентов.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Далее мы так же видим количество просроченных заявок в сутки в среднем стоит ставить цифру 7 потому что если у ваших клиентов более чем 7 просроченных заявок на пополнение за последние 24 часа скорее всего это боты. Предзаказ стрелочки листать советуем включить если у вас есть предзаказы, таким способом клиенту удобней просматривать карточки товаров в боте.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-neonBlue pl-3">
            Глобальные переменные
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <p className="text-gray-700 dark:text-gray-300">
                Глобальные переменные - очень удобный инструмент, для хранения ссылок на операторов, чаты, каналы в одном месте. Вы можете использовать их во всех текстах бота, а также в рассылках.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Если вы хотите их использовать и в каком-то месте это не работает - пишите админу через кнопку в главно меню и мы доработаем это под вас либо подскажем как лучше использовать.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden border border-blue-100 dark:border-gray-700">
                <img 
                  src="https://i.ibb.co/vC4N9zQ5/Screenshot-2025-05-22-at-6-53-59-PM.png" 
                  alt="Global variables" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default AllStores;
