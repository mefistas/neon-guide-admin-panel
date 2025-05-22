
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';

const AllStores = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title="МАГАЗИНЫ">
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/detailed-guide" />
        </div>

        <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-lg border light-border">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <p className="text-gray-800 dark:text-gray-300">
                Ваш магазин это ваш дом, что бы в ваш дом не пришли непрошеные гости перед работой в системе обязательно зайдите в раздел НАСТРОЙКИ, смените пароль, а так же включите двухфакторную аутентификацию
              </p>
            </div>

            <div className="flex-1">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src="https://i.ibb.co/VcMFpb4Z/Screenshot-2025-05-22-at-4-38-58-PM.png"
                        alt="Security settings 1"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </CarouselItem>
                  <CarouselItem>
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src="https://i.ibb.co/DfbncrHy/Screenshot-2025-05-22-at-4-39-43-PM.png"
                        alt="Security settings 2"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </CarouselItem>
                  <CarouselItem>
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src="https://i.ibb.co/YMhCD1J/Screenshot-2025-05-22-at-4-40-22-PM.png"
                        alt="Security settings 3"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="relative static translate-y-0 left-0" />
                  <CarouselNext className="relative static translate-y-0 right-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-lg border light-border">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                МАГАЗИНЫ-ВСЕ МАГАЗИНЫ
              </h2>
              <p className="text-gray-800 dark:text-gray-300">
                Теперь когда вы в безопасности можно приступить к осмотру основного модуля МАГАЗИНЫ-ВСЕ МАГАЗИНЫ
                По умолчанию каждому клиенту выдается один магазин, в случае если вам нужно добавить еще один обратитесь к администратору. В данном разделе находится краткая статистика с основной информацией о вашем магазине, так же в этом разделе существует функционал деактивации и активации магазина и запрос на обязательное прохождение капчи у всех пользователей. Это довольно важный инструмент в случае если вас атакуют боты и вы хотите от них защититься. Запросите обязательную капчу и все ненастоящие клиенты автоматически сбросятся в вашем боте
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://i.ibb.co/99hSLZ0n/Screenshot-2025-05-22-at-1-21-06-AM.png"
                alt="Stores management interface"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-lg border light-border">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Настройки магазина
              </h2>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Нажимаем на название своего магазина и попадаем в большую панель с различными настройками
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                Здесь доступно 10 разделов для редактирования большинство из которых уже описаны в нашей документации:
              </p>
              <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                <li>
                  <Link to="/withdraw-funds" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Вывод средств
                  </Link>
                </li>
                <li>
                  <Link to="/help-bots" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Оповещения
                  </Link>
                </li>
                <li>
                  <Link to="/chats-chan" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Настройки отзывов
                  </Link>
                </li>
                <li>
                  <Link to="/finance" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Настройки обменника
                  </Link>
                </li>
                <li>
                  <Link to="/one-time-discounts" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Канал/рефералка
                  </Link>
                </li>
                <li>
                  <Link to="/casino-setup" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Казино
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://i.ibb.co/6R66Z7Vv/Screenshot-2025-05-22-at-4-51-38-PM.png"
                alt="Store settings panel"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-lg border light-border">
          <p className="text-gray-800 dark:text-gray-300 mb-4">
            Для разделов Личные боты, Язык/Меню, а так же Кастомизация ботов был создан специальный единый раздел - 
            <Link to="/custom-bots" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
              Кастомизация ботов
            </Link>
            этот раздел отвечает за адаптивные настройки вашего магазина, переводы на другие языки, формирование личного меню под свои нужды и многое другое.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-lg border light-border">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            Раздел главной информации
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
              <p className="text-gray-800 dark:text-gray-300">
                Здесь мы поговорим только о разделе главной информации и что она отображает
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://i.ibb.co/cS3b5zdR/Screenshot-2025-05-22-at-5-33-01-PM.png"
                alt="Main shop information"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
          
          <p className="text-gray-800 dark:text-gray-300 mb-6">
            Установите логотип и название своего магазина что бы клиенты всегда могли отличить вас от других. Чуть ниже будет информация о ваших балансах она так же будет видна в верхней части панели вне зависимости от ого в каком разделе находитесь.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
              <p className="text-gray-800 dark:text-gray-300">
                Листаем вниз и видим такие настройки как видимость рейтинга на главной странице бота, видимость количества сделок, работает ли магазин и можем ли мы открывать споры по покупкам. Рекомендуем включить все эти разделы, они добавят информативности для ваших клиентов.
              </p>
              <p className="text-gray-800 dark:text-gray-300 mt-4">
                Далее мы так же видим количество просроченных заявок в сутки в среднем стоит ставить цифру 7 потому что если у ваших клиентов более чем 7 просроченных заявок на пополнение за последние 24 часа скорее всего это боты.
                Предзаказ стрелочки листать советуем включить если у вас есть предзаказы, таким способом клиенту удобней просматривать карточки товаров в боте. Ниже можно указать оператора предзаказов что бы клиенты всегда знали кому писать 
                Далее вы можете изменить типы кладов/кнопки предзаказа - переименовать такие переменные как магнит/прикоп и кнопки самого меню бота, а так же оставить ссылку на ваш канал которая будет отображаться в карточках товаров доступных для предзаказов
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://i.ibb.co/RkWh4VqP/Screenshot-2025-05-22-at-6-44-37-PM.png"
                alt="Store settings and options"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Глобальные переменные
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-gray-800 dark:text-gray-300">
                  Глобальные переменные - очень удобный инструмент, для хранения ссылок на операторов, чаты, каналы в одном месте. 
                  Вы можете использовать их во всех текстах бота, а также в рассылках. 
                  Если вы хотите их использовать и в каком-то месте это не работает - пишите админу через кнопку в главно меню и мы доработаем это под вас либо подскажем как лучше использовать.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://i.ibb.co/vC4N9zQ5/Screenshot-2025-05-22-at-6-53-59-PM.png"
                  alt="Global variables"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default AllStores;
