
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

    // Balance TopUps Page
    balanceTopUpsTitle: "Balance Top Ups/Disputes",
    balanceTopUpsSubtitle: "Managing Balance Top-Ups and Payment Disputes",
    balanceTopUpsDescription: "In this section, you can see all the balance top-up requests from your clients. You can filter them by status, payment method, and date range.",
    balanceTopUpsImage: "Balance top-ups interface",
    balanceTopUpsMostCommonIssue: "The most common issue with balance top-ups is when a client claims they've made a payment but the system hasn't received it yet. Here's how to handle such situations:",
    balanceTopUpsServicePayment: "For Service Payment Issues:",
    balanceTopUpsCheckTransaction: "Check the transaction ID or payment details in your payment processor dashboard",
    balanceTopUpsOpenDispute: "If the payment is confirmed but not reflected in the system, open a dispute and resolve it manually",
    balanceTopUpsDisputeImage: "Dispute resolution interface",
    balanceTopUpsUsdtPayment: "For USDT Payment Issues:",
    balanceTopUpsCheckUsdtTransaction: "Verify the transaction on the blockchain using the transaction ID",
    balanceTopUpsProcessApplication: "Process the application manually if the transaction is confirmed",
    balanceTopUpsCarouselImage1: "USDT transaction verification step 1",
    balanceTopUpsCarouselImage2: "USDT transaction verification step 2",
    balanceTopUpsRecommendation: "We recommend using USDT for all transactions to avoid payment processing issues. Learn more about USDT payments here:",
    balanceTopUpsFilters: "Use filters to quickly find specific transactions by date, status, or payment method:",
    balanceTopUpsFiltersImage: "Balance top-ups filters",
    balanceTopUpsBalanceHistory: "You can also view the complete balance history of each client in the Balance History section.",

    // Casino Setup Page
    casino: "Casino Setup",
    casinoInstructions: "Casino Integration Instructions",
    storeSetupTitle: "Setting Up Casino in Your Store",
    casinoSteps: "1. Go to the Stores menu and select your store\n2. Navigate to the Casino tab\n3. Enable the casino feature\n4. Select which games you want to make available\n5. Set the house edge percentage for each game",
    availableGames: "Available Casino Games",
    gamesList: "• Dice - Classic dice game with customizable odds\n• Crash - Multiplier game with increasing risk\n• Coinflip - Simple 50/50 game\n• Slots - Classic slot machine\n• Mines - Risk-based tile selection game\n• Stairs - Climbing game with increasing rewards",
    gameChanceInfo: "Each game has adjustable odds and house edge settings. The default house edge is 3%, but you can adjust this based on your business model.",
    slotMachines: "Slot Machine Settings",
    slotMachineInfo: "Slot machines can be customized with different themes and payout structures. You can set the RTP (Return To Player) percentage and the frequency of bonus rounds.",
    casinoHistory: "Casino Game History",
    casinoHistoryInfo: "To view the history of your clients' Casino games, go to the ADDITIONAL -> CASINO GAME HISTORY menu",
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

    // Balance TopUps Page
    balanceTopUpsTitle: "Пополнения балансов/споры",
    balanceTopUpsSubtitle: "Управление пополнениями баланса и спорами по оплатам",
    balanceTopUpsDescription: "В этом разделе вы можете видеть все запросы на пополнение баланса от ваших клиентов. Вы можете фильтровать их по статусу, способу оплаты и диапазону дат.",
    balanceTopUpsImage: "Интерфейс пополнения баланса",
    balanceTopUpsMostCommonIssue: "Наиболее распространенной проблемой с пополнением баланса является ситуация, когда клиент утверждает, что произвел оплату, но система еще не получила ее. Вот как обрабатывать такие ситуации:",
    balanceTopUpsServicePayment: "Для проблем с оплатой услуг:",
    balanceTopUpsCheckTransaction: "Проверьте ID транзакции или детали платежа в панели управления вашего платежного процессора",
    balanceTopUpsOpenDispute: "Если оплата подтверждена, но не отражена в системе, откройте спор и разрешите его вручную",
    balanceTopUpsDisputeImage: "Интерфейс разрешения споров",
    balanceTopUpsUsdtPayment: "Для проблем с оплатой USDT:",
    balanceTopUpsCheckUsdtTransaction: "Проверьте транзакцию на блокчейне, используя ID транзакции",
    balanceTopUpsProcessApplication: "Обработайте заявку вручную, если транзакция подтверждена",
    balanceTopUpsCarouselImage1: "Шаг 1 проверки транзакции USDT",
    balanceTopUpsCarouselImage2: "Шаг 2 проверки транзакции USDT",
    balanceTopUpsRecommendation: "Мы рекомендуем использовать USDT для всех транзакций, чтобы избежать проблем с обработкой платежей. Узнайте больше о платежах USDT здесь:",
    balanceTopUpsFilters: "Используйте фильтры для быстрого поиска определенных транзакций по дате, статусу или способу оплаты:",
    balanceTopUpsFiltersImage: "Фильтры пополнений баланса",
    balanceTopUpsBalanceHistory: "Вы также можете просмотреть полную историю баланса каждого клиента в разделе История баланса.",

    // Casino Setup Page
    casino: "Настройка казино",
    casinoInstructions: "Инструкции по интеграции казино",
    storeSetupTitle: "Настройка казино в вашем магазине",
    casinoSteps: "1. Перейдите в меню Магазины и выберите свой магазин\n2. Перейдите на вкладку Казино\n3. Включите функцию казино\n4. Выберите, какие игры вы хотите сделать доступными\n5. Установите процент преимущества заведения для каждой игры",
    availableGames: "Доступные игры казино",
    gamesList: "• Кости - Классическая игра в кости с настраиваемыми шансами\n• Краш - Игра с множителем и возрастающим риском\n• Монетка - Простая игра 50/50\n• Слоты - Классический игровой автомат\n• Мины - Игра с выбором плитки на основе риска\n• Лестница - Игра с подъемом с увеличивающимися наградами",
    gameChanceInfo: "Каждая игра имеет настраиваемые шансы и настройки преимущества заведения. По умолчанию преимущество заведения составляет 3%, но вы можете настроить это в соответствии с вашей бизнес-моделью.",
    slotMachines: "Настройки игровых автоматов",
    slotMachineInfo: "Игровые автоматы можно настроить с разными темами и структурами выплат. Вы можете установить процент RTP (возврат игроку) и частоту бонусных раундов.",
    casinoHistory: "История игр в казино",
    casinoHistoryInfo: "Чтобы просмотреть историю игр в казино ваших клиентов, перейдите в меню ДОПОЛНИТЕЛЬНО -> ИСТОРИЯ ИГР В КАЗИНО",
  },
};

type LocalTranslations = typeof localTranslations.en;

export type LocalTranslationKey = keyof LocalTranslations;

const useTranslations = () => {
  // Import from the LanguageContext using useContext
  const { language = 'en' } = useContext(LanguageContext) || {};
  
  // Function to get local translation
  const tLocal = (key: LocalTranslationKey): string => {
    const lang = language as keyof typeof localTranslations;
    return localTranslations[lang]?.[key] || key;
  };

  // Function to get translation from the translations module
  const tNew = (key: string): string => {
    if (!translations.getTranslation) return key;
    return translations.getTranslation(key, language as 'en' | 'ru');
  };

  return { tNew, tLocal, language };
};

export default useTranslations;
