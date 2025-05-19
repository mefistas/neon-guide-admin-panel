
import React, { useState } from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BackButton from '@/components/BackButton';
import { ChevronDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface SalaryRule {
  id: string;
  title: string;
  value: string | JSX.Element;
}

// Define carousel images
const carouselImages = [
  {
    src: "https://i.ibb.co/WpM8dypp/Screenshot-2025-05-18-at-5-53-19-PM.png",
    alt: "couriersSalaryCarouselAlt1"
  },
  {
    src: "https://i.ibb.co/BVdqHt91/IMAGE-2025-05-18-17-53-59.jpg",
    alt: "couriersSalaryCarouselAlt2"
  }
];

// Create placeholder translations
const couriersSalaryTranslations = {
  couriersSalaryTitle: {
    en: "Accruals/Fines",
    ru: "Начисления/штрафы"
  },
  couriersSalaryDescription1: {
    en: "For each courier, you can create an employee with access to the panel and/or the Telegram helper bot. Also, for each type of product, you can set up a Salary and Fine for the courier by default. WAREHOUSE - PRODUCT TYPES - open any and go to the Courier/Profit section",
    ru: "Для каждого курьера вы можете создать сотрудника с доступом в панель и/или к ТГ-боту помощнику. Так же для каждого вида товаров вы можете настроить Зарплату и Штраф для курьера по умолчанию. СКЛАД - ВИДЫ ТОВАРОВ - открываем любой и идем в раздел Курьер/Прибыль"
  },
  couriersSalaryDescription2: {
    en: "Also in the Couriers section, inside each courier, you can configure specific Salary/Fine settings for the required type of goods for this courier.",
    ru: "Также в разделе Курьеры, внутри каждого курьера вы можете настроить для нужного вида товаров свои определенные настройки Зарплаты/Штрафа для данного курьера."
  },
  couriersSalaryDescription3: {
    en: "For each completed purchase, the courier will be credited to their account. If the operators decide the dispute in favor of the client and choose a fine for the courier, then this amount will be debited from the account.",
    ru: "За каждую выполненную покупку курьеру будет производится начисление на его счет. Если операторы решают спор в пользу клиента и выбирают штраф курьеру - тогда эта сумма будет списана со счета."
  },
  couriersSalaryDescription4: {
    en: "In the Couriers section, you can see the current balances of couriers, as well as make a debit or credit to their account with a comment.",
    ru: "В разделе Курьеры можно посмотреть текущие балансы курьеров а также произвести списание или начисление средств на его счет с указанием комментария."
  },
  couriersSalaryDescription5: {
    en: "When debiting funds from the courier's account, you need to send the funds to the courier yourself. This accounting system only calculates profits - you will have to make the transfer yourself in any convenient currency.",
    ru: "При списании средств со счета курьера, сами средства вам необходимо самостоятельно отправить курьеру. Данная система учета лишь считает прибыль - отправку производить вам придется самим любой удобной валютой."
  },
  couriersSalaryDescription6: {
    en: "To pay couriers in RUB, you can use our \"Withdrawal in RUB\" module on the main page of the panel.",
    ru: "Для выплаты курьерам зарплаты в РУБ вы можете воспользоваться нашим модулем \"Вывод в RUB\" на главной странице панели."
  },
  couriersSalaryProductTypeAlt: {
    en: "Courier salary settings in product type",
    ru: "Настройки зарплаты курьера в типе товара"
  },
  couriersSalarySettingsAlt: {
    en: "Courier salary settings",
    ru: "Настройки зарплаты курьера"
  },
  couriersSalaryCarouselAlt1: {
    en: "Courier balance management",
    ru: "Управление балансом курьера"
  },
  couriersSalaryCarouselAlt2: {
    en: "Courier salary details",
    ru: "Детали зарплаты курьера"
  },
  couriersSalaryRule1Title: {
    en: "Setting up Salaries",
    ru: "Настройка Зарплат"
  },
  couriersSalaryRule1Value: {
    en: "Configure salary settings per product type in the Warehouse section",
    ru: "Настройте параметры зарплаты по типу товара в разделе Склад"
  },
  couriersSalaryRule2Title: {
    en: "Individual Settings",
    ru: "Индивидуальные настройки"
  },
  couriersSalaryRule2Value: {
    en: "Set custom salary options for each courier separately",
    ru: "Установите индивидуальные параметры зарплаты для каждого курьера отдельно"
  },
  couriersSalaryRule3Title: {
    en: "Balance Management",
    ru: "Управление балансом"
  },
  couriersSalaryRule3Value1: {
    en: "Track courier earnings and deductions in the Couriers section",
    ru: "Отслеживайте заработок и вычеты курьера в разделе Курьеры"
  },
  couriersSalaryRule3Value2: {
    en: "Make manual adjustments with comments when necessary",
    ru: "При необходимости вносите корректировки вручную с комментариями"
  },
  back: {
    en: "Back",
    ru: "Назад"
  }
};

const CouriersSalary = () => {
  const { language } = useTranslations();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Custom tLocal function to use our local translations
  const tLocal = (key: string) => {
    return couriersSalaryTranslations[key as keyof typeof couriersSalaryTranslations]?.[language as 'en' | 'ru'] || key;
  };

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
          <BackButton to="/finance" />
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
