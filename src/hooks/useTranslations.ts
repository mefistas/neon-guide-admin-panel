
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import * as translations from "@/utils/translations";

// Local translations specific to components
const localTranslations = {
  en: {
    // Common
    back: "Back",

    // Couriers Salary Page
    couriersSalaryTitle: "Accruals/Penalties",
    couriersSalaryDescription1: "For each courier, you can create an employee with access to the panel and/or to the TG-bot assistant. Also, for each type of product, you can set the Salary and Penalty for the courier by default. WAREHOUSE - PRODUCT TYPES - open any and go to the Courier/Profit section",
    couriersSalaryDescription2: "Also in the Couriers section, inside each courier, you can set specific Salary/Penalty settings for the desired product type for this courier.",
    couriersSalaryDescription3: "For each completed purchase, the courier will be credited to his account. If the operators decide the dispute in favor of the client and choose a penalty for the courier - then this amount will be debited from the account.",
    couriersSalaryDescription4: "In the Couriers section, you can see the current balances of couriers and also write off or credit funds to his account with a comment.",
    couriersSalaryDescription5: "When debiting funds from a courier's account, you need to send the funds to the courier yourself. This accounting system only counts profits - you will have to make the transfer yourself with any convenient currency.",
    couriersSalaryDescription6: "To pay couriers' salaries in RUB, you can use our 'Withdraw to RUB' module on the main page of the panel.",
    couriersSalaryProductType: "Product type courier/profit section",
    couriersSalarySettings: "Courier specific settings",
    couriersSalaryBalance: "Courier balance page",
    couriersSalaryLogs: "Courier transaction logs",
    
    // Happy Hours Page
    happyHoursTitle: "Happy Hours",
    happyHoursDescription1: "This option is an excellent way to increase store traffic at certain hours.",
    happyHoursDescription2: "Go to the Warehouse section - Product types and select any product card.",
    happyHoursDescription3: "Go to the happy hours section and activate it. Check the box in the activation field, as well as the time intervals when we want the option to turn on. We also set the price at which we will sell this product, taking into account the promotion.",
    happyHoursDescription4: "In the example above, we see that between 9 and 11 am Moscow time, the cost of this product will be reduced to $20.",
    happyHoursWhen: "When is it profitable?",
    happyHoursReason1: "For example, if we have the task of advertising new products or a new chat/group, in this case it is very convenient to increase the flow of customers at certain hours of your store when you yourself are online and can spend more time communicating with customers.",
    happyHoursReason2: "When the addresses of this product are quite outdated and they need to be sold with priority, faster than other products.",
    happyHoursReason3: "When addresses are made in places where searches are better done during the daytime and you don't want to explain this to each client.",
    happyHoursSettings1Alt: "Happy hours settings activation",
    happyHoursSettings2Alt: "Happy hours price settings",
  },
  ru: {
    // Common
    back: "Назад",

    // Couriers Salary Page
    couriersSalaryTitle: "Начисления/штрафы",
    couriersSalaryDescription1: "Для каждого курьера вы можете создать сотрудника с доступом в панель и/или к ТГ-боту помощнику. Так же для каждого вида товаров вы можете настроить Зарплату и Штраф для курьера по умолчанию. СКЛАД - ВИДЫ ТОВАРОВ - открываем любой и идем в раздел Курьер/Прибыль",
    couriersSalaryDescription2: "Также в разделе Курьеры, внутри каждого курьера вы можете настроить для нужного вида товаров свои определенные настройки Зарплаты/Штрафа для данного курьера.",
    couriersSalaryDescription3: "За каждую выполненную покупку курьеру будет производится начисление на его счет. Если операторы решают спор в пользу клиента и выбирают штраф курьеру - тогда эта сумма будет списана со счета.",
    couriersSalaryDescription4: "В разделе Курьеры можно посмотреть текущие балансы курьеров а также произвести списание или начисление средств на его счет с указанием комментария.",
    couriersSalaryDescription5: "При списании средств со счета курьера, сами средства вам необходимо самостоятельно отправить курьеру. Данная система учета лишь считает прибыль - отправку производить вам придется самим любой удобной валютой.",
    couriersSalaryDescription6: "Для выплаты курьерам зарплаты в РУБ вы можете воспользоваться нашим модулем 'Вывод в RUB' на главной странице панели.",
    couriersSalaryProductType: "Раздел курьер/прибыль в видах товаров",
    couriersSalarySettings: "Настройки для конкретного курьера",
    couriersSalaryBalance: "Страница баланса курьера",
    couriersSalaryLogs: "Журнал транзакций курьера",
    
    // Happy Hours Page
    happyHoursTitle: "Счастливые часы",
    happyHoursDescription1: "Данная опция является отличным способом увеличить трафик магазина в определенные часы.",
    happyHoursDescription2: "Идем в раздел Склад - Виды товаров и выбираем какую либо карточку товара.",
    happyHoursDescription3: "Переходим в раздел счастливые часы и активируем. Проставляем галочку в поле активации, а так же временные интервалы когда хотим что бы опция включалась. Так же устанавливаем цену по которой будем продавать данный товар с учетом акции.",
    happyHoursDescription4: "В примере выше мы видим что в период с 9 до 11 утра по московскому времени стоимость данного товара будет снижена до $20.",
    happyHoursWhen: "Когда это выгодно?",
    happyHoursReason1: "Например у нас стоит задача прорекламировать новую продукцию или новый чат/группу, в этом случае очень удобно увеличить поток клиентов в определенные часы вашего магазина когда вы сами находитесь онлайн и можете уделять больше времени на общение с клиентами.",
    happyHoursReason2: "Когда адреса данного товара достаточно устарели и их нужно продать с приоритетом, быстрее чем остальную продукцию.",
    happyHoursReason3: "Когда адреса выполнены в местах поиски в которых лучше проводить в дневное время суток и вам не хочется объяснять это каждому клиенту.",
    happyHoursSettings1Alt: "Активация настроек счастливых часов",
    happyHoursSettings2Alt: "Настройки цен счастливых часов",
  },
};

type LocalTranslations = typeof localTranslations.en;

export type LocalTranslationKey = keyof LocalTranslations;

const useTranslations = () => {
  const contextValue = useContext(LanguageContext);
  const language = contextValue?.language || 'en'; // Safe access to language
  
  const tLocal = (key: LocalTranslationKey): string => {
    const lang = language as keyof typeof localTranslations;
    return localTranslations[lang]?.[key] || key;
  };

  // Use the correct import from translations module
  const tNew = (key: string): string => {
    if (!translations.getTranslation) return key;
    return translations.getTranslation(key, language as 'en' | 'ru');
  };

  return { tNew, tLocal, language };
};

export default useTranslations;
