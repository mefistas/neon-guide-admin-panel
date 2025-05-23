
type Languages = 'en' | 'ru';

type StockTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const stockTranslations: StockTranslations = {
  en: {
    // Main title
    stockTitle: "WAREHOUSE",
    
    // Introduction
    stockIntro: "In this section we will talk about the WAREHOUSE module and its components. This section will NOT cover COURIERS and ADDRESSES - use the corresponding sections in the detailed guide to learn about them.",
    quickStartNote: "For your store to work correctly, you need to populate the necessary warehouse components. To do this quickly and get started right away, you can use the QUICK START section. Here we will talk in more detail about each type of settings.",
    
    // Cities section
    citiesTitle: "CITIES:",
    citiesStart: "Start by adding a delivery city by clicking on the corresponding button at the top",
    citiesExisting: "If you already have cities, you will see them in the main cities section.",
    citiesEdit: "To edit a city, click on it. A section with all the data of the selected city will open, and if you already have products and addresses, you will also be able to see statistics on the remaining items in a convenient table listing districts and product types",
    citiesTip: "Tip: it is best to immediately mark all cities as available for pre-order",
    
    // Districts section
    districtsTitle: "DISTRICTS:",
    districtsAdd: "When you click the Add District button, a data entry menu will open for you",
    districtsVisible: "After saving, all your districts will be visible in the STOCK-DISTRICTS and ADD ADDRESSES sections",
    districtsNote: "As you can see, both of these sections are the same and serve as the main tool for adding addresses in the panel. Use the search or filters on the right to find the right district for editing or filling with addresses faster, and we also recommend setting a higher sorting order number for districts that are more popular so that they are shown to you and your customers first. To learn how to work with addresses, go to the",
    addressesSection: "ADDRESSES",
    
    // Product Groups section
    productGroupsTitle: "PRODUCT GROUPS:",
    productGroupsStart: "Go to this section and click the Add Product Group button. In the window that opens, we recommend that you immediately enter as much information as possible about your products so that you do not have to edit this section 10 times. Slug is auto-generated, we can ignore this item.",
    productGroupsName: "The name of the group is your product, for example CAT MEMES in our example. The product photo will be shown to the customer when choosing a product. If your store has product card designs, we recommend setting them as an avatar in this section, and set the photo of the product that is currently in stock (after all, the product may differ in quality depending on the batch) directly in PRODUCT TYPES.",
    productGroupsDescription: "Write a description of the product to attract and encourage customers to buy, why is this product so good? why choose it? Just below, you will have an additional menu for the most standard settings for the PRODUCT TYPE that must also be filled out. Product type is most often the weight or quantity for individual items that your customer will ultimately purchase.",
    productGroupsImportant: "IMPORTANT - IF YOU CHECK THE AVAILABLE FOR PRE-ORDER BOX, THIS PRODUCT CATEGORY WILL BE AVAILABLE EXCLUSIVELY FOR PRE-ORDER AND WILL NOT BE AVAILABLE FOR FILLING WITH ADDRESSES. Therefore, if a certain volume of goods in your store is available for both pre-order and instant addresses, write information about it twice by checking or removing checkmarks in the AVAILABLE FOR PRE-ORDER field",
    
    // Product Types section
    productTypesTitle: "PRODUCT TYPES:",
    productTypesStart: "Go to this section for more detailed settings of your product types. In the main menu you will be able to see general information, as well as a convenient quick action tool with which you can enable, disable and change groups for selected products",
    productTypesSettings: "Open any product type and go to its settings. This is where you can set a photo of the product itself that is current at this time, as well as tell more about this position. If you check the box - do not apply discount, then no personal customer discounts will apply to this item",
    productTypesPricing: "Just below there are sections PRODUCT PRICES BY CITY and MARKUPS BY ADDRESS TYPE. PRODUCT PRICES BY CITY is a convenient function if your products cost differently in different cities, click on the magnifying glass to select a city where the product differs from the standard amount set for the product and set the appropriate price. You can also set a separate cost for happy hours if it is activated in your store, you can learn more about happy hours in the",
    happyHoursSection: "HAPPY HOURS",
    productTypesMarkups: "MARKUPS BY ADDRESS TYPE - in some cases, the price for a product using a magnet is slightly more expensive than the others, if your store has exactly this system, enter the appropriate settings in this section, it works exactly the same if your courier receives a higher salary for a certain type of address.",
    
    // Courier/Profit section
    courierProfitTitle: "The next section possible for editing is Courier/Profit. In order for your system to work perfectly, be sure to fill in this part for each product. Courier salary per unit - does not mean per gram/piece BUT FOR THAT AMOUNT which is indicated in the PRODUCT TYPE that you are editing",
    courierDetails: "You can learn more about the courier charging system in the",
    financeSection: "FINANCE",
    
    // Preorder section
    preorderTitle: "Pre-order:",
    preorderNote: "Remember that if a product is available for pre-order, instant addresses will not work. Set the text that will be visible to the customer when viewing a product available for pre-order, as well as the cities in which it will be available. Read more about pre-orders in the",
    preordersSection: "PRE-ORDERS/DELIVERIES",
    
    // Happy Hours section
    happyHoursTitle: "Happy Hours:",
    happyHoursNote: "All the details of this menu are described in MARKETING-HAPPY HOURS",
    
    // Telegraph section
    telegraphTitle: "Telegra.ph:",
    telegraphNote: "!Deprecated section - ignore!",
    
    // MK section
    mkTitle: "MK:",
    mkIntro: "A fairly new section that gives our customers even more control over their business. We start by clicking the ADD MK button",
    mkDescription: "Now in this section you will see all the mk that were given to couriers and their statistics on sales and returns. This will give higher control over the statistics and speed of the courier's work, as well as about the real terms for the implementation of certain products in your showcase",
    mkAddresses: "In the addresses section, you can also see which specific mk relates to the address and courier, and also by clicking on the mk under the courier, activate a filter to see only addresses related to this MK",
    
    // History section
    historyTitle: "STOCK CHANGE HISTORY:",
    historyDescription: "In this section you can see all the logs of changes ever made in the panel, as well as export them in a format convenient for you",
    
    // Notifications section
    notificationsTitle: "REMAINDER NOTIFICATIONS:",
    notificationsDescription: "If you have cities set up, additional submenu items related to the remainders in these cities will appear in the stock section, click to view. After clicking, a city editing section will open, the instructions for which we wrote earlier, it is in this section that there is a visual table with remainders by city!",
    notificationsSettings: "You can also set up notifications on the remainders by going to the appropriate menu and clicking ADD REMAINDER NOTIFICATIONS. Set the parameters for which you want to receive notifications, these notifications will only come if they are set up by an employee",
    
    // Recommendation
    workersRecommendation: "We recommend checking out the",
    workersSection: "EMPLOYEES",
    workersNext: "section next.",
    
    section: "section"
  },
  ru: {
    // Main title
    stockTitle: "СКЛАД",
    
    // Introduction
    stockIntro: "В этом разделе поговорим о модуле СКЛАД и его компонентах, в данном разделе НЕ будут затронуты КУРЬЕРЫ и АДРЕСА - для ознакомления с ними используйте соответствующие разделы в подробном руководстве.",
    quickStartNote: "Для корректной работы вашего магазина необходимо наполнить нужные компоненты склада, что бы сделать это быстро и сразу приступить к работе вы можете воспользоваться разделом БЫСТРЫЙ СТАРТ, здесь же мы будем говорить более детально о каждых видах настроек",
    
    // Cities section
    citiesTitle: "ГОРОДА:",
    citiesStart: "Начинаем работу с добавления города поставки нажимая на соответствующую кнопку сверху",
    citiesExisting: "Если у вас уже есть города вы будете видеть их в основном разделе городов.",
    citiesEdit: "Что бы отредактировать город нажмите на него. У вас откроется раздел со всеми данными выбранного города и в случае если у вас уже пополнены товары и адреса вы так же сможете видеть статистику по остаткам в нем в виде удобной таблицы с перечислением районов и видов товаров",
    citiesTip: "Совет: лучше всего сразу пометить все города как доступные для предзаказов",
    
    // Districts section
    districtsTitle: "РАЙОНЫ:",
    districtsAdd: "При нажатии на кнопку Добавить Район у вас откроется меню для ввода данных",
    districtsVisible: "После сохранения все ваши районы будут видны в разделе СКЛАД-РАЙОНЫ и ДОБАВИТЬ АДРЕСА",
    districtsNote: "Как вы сможете заметить оба этих раздела одинаковые и служат главным инструментом для добавления адресов в панели. Используйте поиск или фильтры справа что бы быстрее искать подходящий район для редактирования или пополнения адресами, а так же рекомендуем ставить более высокое число в порядке сортировки для районов которые пользуются большей популярностью что бы они показывались вам и вашим клиентам в первую очередь. Для того что бы узнать как работать с адресами перейдите в раздел",
    addressesSection: "АДРЕСА",
    
    // Product Groups section
    productGroupsTitle: "ГРУППЫ ТОВАРОВ:",
    productGroupsStart: "Переходим в данный раздел и нажимаем кнопку Добавить группа товаров. В открывшемся окне рекомендуем сразу же вписать как можно больше информации о вашей продукции что бы не редактировать данный раздел по 10 раз. Slug автогенерируем можем игнорировать этот пункт.",
    productGroupsName: "Название группы это и есть ваш продукт например CAT MEMES в нашем примере. Фото для товара будет показываться клиенту при выборе продукта, если у вашего магазина есть дизайн карточек товаров рекомендуем ставить их как аватар в данном разделе, а фото самого товара который на данный момент в наличии (ведь товар может отличаться по качеству в зависимости от партии) установить уже непосредственно в ВИДЫ ТОВАРОВ.",
    productGroupsDescription: "Распишите описание товара что бы оно завлекало и агитировало клиентов к покупкам, почему этот товар так хорош? почему стоит остановить свой выбор именно на нем? Чуть ниже у вас будет дополнительное меню для самых стандартных настроек ВИДА ТОВАРОВ его тоже необходимо заполнить. Вид товара это чаще всего вес или количество для отдельных позиций которые ваш клиент и будет выкупать в конечном счете",
    productGroupsImportant: "ВАЖНО - В СЛУЧАЕ УСТАНОВЛЕНИЯ ГАЛОЧКИ ДОСТУПЕН ДЛЯ ПРЕДЗАКАЗА ДАННАЯ КАТЕГОРИЯ ТОВАРА БУДЕТ ДОСТУПНА ИСКЛЮЧИТЕЛЬНО ДЛЯ ПРЕДЗАКАЗА И НЕ БУДЕТ ДОСТУПНА ДЛЯ ПОПОЛНЕНИЯ АДРЕСАМИ. Поэтому в случае если определенный объем товара в вашем магазине доступен как для предзаказа так и для моментальных адресов прописывайте информацию о нем дважды проставляя или убирая галочки в поле ДОСТУПЕН ДЛЯ ПРЕДЗАКАЗА",
    
    // Product Types section
    productTypesTitle: "ВИДЫ ТОВАРОВ:",
    productTypesStart: "Переходим в данный раздел для более детальной настройки ваших видов товаров. В основном меню вы сможете видеть общую информацию, а так же удобный инструмент быстрых действий с помощью которого можно включать, отключать и менять группы для выделенных товаров",
    productTypesSettings: "Открываем какой либо вид товара и заходим в его настройки. Именно здесь вы можете установить фото самого товара актуальное на данное время, а так же более детально рассказать об этой позиии. Если установить галочку в - не применять скидку то на данную позицию не будут действовать никакие личные скидки клиентов",
    productTypesPricing: "Чуть ниже есть разделы ЦЕНЫ НА ТОВАРЫ ПО ГОРОДАМ и НАЦЕНКИ НА ТИП АДРЕСА. ЦЕНЫ НА ТОВАРЫ ПО ГОРОДАМ - удобная функция в случае если ваши товары стоят по разному в различных городах, нажатием на лупу выберите город товар в котором отличается от стандартной суммы заданной для товар и проставьте соответствующую цену. Так же можно проставить отдельную стоимость для счастливых часов если она активирована в вашем магазине, более подробно о счастливых часах можно узнать в разделе",
    happyHoursSection: "СЧАСТЛИВЫЕ ЧАСЫ",
    productTypesMarkups: "НАЦЕНКИ НА ТИП АДРЕСА - в некоторых случаях цена на товар с использованием магнита немного дороже остальных, если в вашем магазине именно такая система внесите соответствующие настройки в данном разделе, точно так же работает если ваш курьер получает более высокую зарплату за определенный тип адреса.",
    
    // Courier/Profit section
    courierProfitTitle: "Следующий раздел возможный для редактирования Курьер/Прибыль. Что бы ваша система работала идеально обязательно заполните эту часть для каждого товара. Зарплата курьера за единицу - обозначает не за гр/шт А ЗА ТО КОЛИЧЕСТВО которое указано в ВИДЕ ТОВАРА который вы редактируете",
    courierDetails: "Более подробно ознакомиться с системой начислений курьер можно в разделе",
    financeSection: "ФИНАНСОВ",
    
    // Preorder section
    preorderTitle: "Предзаказ:",
    preorderNote: "Помните что если товар доступен для предзаказа, моментальные адреса не будут работать. Установите текст который будет виден клиенту при просмотре товара доступного для предзаказа, а так же города в которых он будет доступен. Подробнее о предзаказах читайте в разделе",
    preordersSection: "ПРЕДЗАКАЗЫ/ДОСАВКИ",
    
    // Happy Hours section
    happyHoursTitle: "Счастливые часы:",
    happyHoursNote: "Все подробности данного меню расписаны в МАРКЕТИНГ-СЧАСТЛИВЫЕ ЧАСЫ",
    
    // Telegraph section
    telegraphTitle: "Telegra.ph:",
    telegraphNote: "!Устаревший раздел-игнорируйте!",
    
    // MK section
    mkTitle: "МК:",
    mkIntro: "Достаточно новый раздел который дает нашим клиентам еще больше контроля над своим бизнесом. Начинаем работу с того что нажимаем кнопку ДОБАВИТЬ МК",
    mkDescription: "Теперь в данном разделе вы будете видеть все мк которые были выданы курьерам на руки а так же их статистику по продажам и возвратам. Это даст более высокий контроль за статистикой и скоростью работы курьера а так же о реальных сроках реализации тех или иных продуктов на вашей витрине",
    mkAddresses: "В разделе адреса вы так же сможете видеть какой конкретно мк относится к адресу и курьеру а так же при нажатии на мк под курьером активировать фильтр что бы видеть только адреса относящиеся к данному МК",
    
    // History section
    historyTitle: "ИСТОРИЯ ИЗМЕНЕНИЯ СКЛАДА:",
    historyDescription: "В данном разделе вы можете видеть все логи изменений когда либо совершенных в панели, а так же экспортировать их в удобном для вас формате",
    
    // Notifications section
    notificationsTitle: "УВЕДОМЛЕНИЯ ПО ОСТАТКАМ:",
    notificationsDescription: "В случае если у вас установлены города, в разделе склада появятся дополнительные пункты подменю относящиеся к остаткам в этих городах, нажмите что бы просмотреть. После нажатия откроется раздел редактирования города инструкции к которому мы писали ранее, именно в этом разделе находится наглядная таблица с остатками по городам!",
    notificationsSettings: "Так же вы можете настроить уведомления по остаткам зайдя в соответствующее меню и нажав ДОБАВИТЬ УВЕДОМЛЕНИЯ ПО ОСТАТКАМ. Настройте параметры при которых хотите получать уведомления, эти уведомления будут приходить только в случае если они настроенны у какого либо сотрудника",
    
    // Recommendation
    workersRecommendation: "Рекомендуем ознакомиться с разделом",
    workersSection: "СОТРУДНИКИ",
    workersNext: "далее.",
    
    section: "раздел"
  }
};

export default stockTranslations;
