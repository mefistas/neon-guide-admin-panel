
const translations = {
  en: {
    // Cards/Payments section
    preorders: "Preorders/Deliveries",
    preordersDesc: "Manage product preorders and deliveries",
    addresses: "Addresses",
    addressesDesc: "Manage customer delivery addresses",
    
    // Marketing section
    mustSubscribe: "Must Subscribe Channel",
    mustSubscribeDesc: "Required channel subscription settings",
    
    // Preorders page
    preordersTitle: "Preorders/Deliveries",
    preordersIntro: "To work with preorders, you need to have cities created with districts.",
    preordersSetupTitle: "Setting Up Preorders",
    preordersStep1: "1) In the Warehouse - Cities section, create a new city or check that your city/cities have the \"Active for preorder?\" checkbox marked. In the list of cities, you'll see checkmarks under the necessary column and can set or remove the needed ones. After that, you need to click the \"SAVE\" button at the bottom of the screen.",
    preordersStep2: "2) In the Districts section, check for districts for our cities. Similarly, add new ones or set checkmarks to activate for preorder.",
    preordersRequirement: "For preorders to work correctly, you need at least one district available for preorder.",
    preordersProductsTitle: "Creating Product Types for Preorder",
    preordersProductsDesc: "In the \"Product Types\" section, you need to create SEPARATE product types for preorder, which cannot have addresses added. You can use these products ONLY for preorder, thus, for example, make a discount for this product or add separate positions that are available only for preorder.",
    preordersProductSetup: "When creating a product type, you need to check the \"Preorder?\" checkbox and add text that will be provided to the client after purchasing this product. For example, it can be instructions for receiving the product, a link to the operator responsible for this product, or something else.",
    preordersMenuInfo: "After you create cities, districts, and product types available for preorder - in the main menu of the bot, there will be a menu item - \"PREORDER\". You can change the text of this button in the Store settings. Also, you can add a requirement for the client, after placing a preorder, to \"Add delivery address\". To do this, in the store settings, you need to check the \"Address required for preorder?\" checkbox.",
    preordersExampleTitle: "Example",
    preordersExampleDesc: "For example, there are cases when you do not need the client to choose the district they need - in this case, you can simply create a separate City/District for them and make only them available for preorder. For example, name a district \"The entire city\".",
    
    // Processing preorders
    preordersProcessingTitle: "Processing Preorders",
    preordersProcessingDesc: "When a client places a preorder and pays for it - this order will appear in the Purchases section.",
    preordersProcessingSteps: "When the preorder is ready, you need to change the status to completed and give the client their product. To do this, click on the chat icon to the right of the application, enter text with information about the order in the input field, and press the SEND button. The client will receive a message from the bot with information about their order, and the application will be marked as completed.",
    
    // Additional staff accounts
    preordersStaffTitle: "Additional Staff Accounts",
    preordersStaffDesc: "There is also the possibility to create an additional account for an employee with access to process preorders for a specific district. This way, you can create several employee accounts and assign them to different districts. At the same time, when creating a preorder, the employee assigned to the corresponding district will receive a notification in the Telegram bot. Also, through this Telegram bot, the employee will be able to process the request and send information about the product or shipment to the client.",
    preordersStaffSetup: "For this, go to the \"Employees\" section and click the \"Add employee\" button. Employee type - Preorder Operator",
    preordersStaffMore: "To learn more about employee settings for preorders, please refer to the WORKERS section",
    
    // Addresses page
    addressesTitle: "Addresses",
    addressesIntro: "Manage customer delivery addresses in this section",
    
    // Must Subscribe page
    mustSubscribeTitle: "Must Subscribe Channel",
    mustSubscribeIntro: "Configure required channel subscription settings for users",
  },
  ru: {
    // Cards/Payments section
    preorders: "Предзаказы/Доставки",
    preordersDesc: "Управление предзаказами товаров и доставками",
    addresses: "Адреса",
    addressesDesc: "Управление адресами доставки клиентов",
    
    // Marketing section
    mustSubscribe: "Обязательная подписка на канал",
    mustSubscribeDesc: "Настройки обязательной подписки на канал",
    
    // Preorders page
    preordersTitle: "Предзаказы/Доставки",
    preordersIntro: "Для работы с предзаказами необходимо чтобы у вас были созданы города и к ним районы.",
    preordersSetupTitle: "Настройка предзаказов",
    preordersStep1: "1) в разделе Склад - Города создаем новый город или проверяем, чтобы у нужного вам города/городов стояла галочка \"Активен для предзаказа?\". В списке городов видим галочки под нужной колонкой и устанавливаем или убираем нужные. После этого, необходимо нажать кнопку \"СОХРАНИТЬ\" внизу экрана.",
    preordersStep2: "2) В разделе Районы проверяем наличие районов для наших городов. Аналогично, добавляем новые или выставляем галочки на активацию для предзаказа.",
    preordersRequirement: "Для корректной работы предзаказов вам необходимо, чтобы хотя бы один район был доступен для предзаказа.",
    preordersProductsTitle: "Создание Видов товаров для предзаказа",
    preordersProductsDesc: "В разделе \"Виды товаров\" необходимо создать для предзаказа ОТДЕЛЬНЫЕ виды товаров, к которым нельзя будет добавить адреса. Вы можете использовать эти товары ТОЛЬКО для предзаказа тем самым, например, сделать скидку для данного товара или добавить отдельные позиции, которые доступны только для предзаказа.",
    preordersProductSetup: "При создании вида товара необходимо установить галочку \"Предзаказ?\" и добавить текст, который будет выдаваться клиенту после покупки данного товара. Например, это может быть инструкция по получению товара, ссылка на оператора, ответственного за данный товар или что-то другое.",
    preordersMenuInfo: "После того, как вы создадите города, районы и виды товаров, доступные для предзаказа - в главном меню бота появится пункт меню - \"ПРЕДЗАКАЗ\". Текст этой кнопки вы можете поменять в настройках Магазина. Также, вы можете добавить необходимость для клиента, после оформления предзаказа \"Добавить адрес доставки\". Для этого, в настройках магазина необходимо установить галочку \"Требуется адрес по предзаказу?\".",
    preordersExampleTitle: "Пример",
    preordersExampleDesc: "Например, бывают случаи, когда вам не нужно чтобы клиент выбирал нужный ему район - в таком случае, вы можете просто создать отдельный Город/Район для него и сделать доступными для предзаказа только их. Например, район назвать \"Весь город\".",
    
    // Processing preorders
    preordersProcessingTitle: "Обработка предзаказов",
    preordersProcessingDesc: "Когда клиент оформит предзаказ и оплатит его - этот заказ появится в разделе Покупки.",
    preordersProcessingSteps: "Когда предзаказ готов вам необходимо перевести статус в выполнено и выдать клиенту его товар. Для этого нажмите на иконку чата справа от заявки впишите текст с информацией о заказе в поле для ввода и нажимайте кнопку ОТПРАВИТЬ. Клиент получит сообщение от бота с информацией о его заказе, а заявка будет помечена как выполненная.",
    
    // Additional staff accounts
    preordersStaffTitle: "Дополнительные аккаунты сотрудников",
    preordersStaffDesc: "Также есть возможность создать дополнительный аккаунт для сотрудника с доступом обработки предзаказов на определенный район. Таким образом, вы можете создать несколько учетных записей для сотрудников и прикрепить их к разным районам. При этом, при создании предзаказа сотрудник, прикрепленный к соответствующему району получит уведомление в ТГ-бот. Также, через этот ТГ-бот сотрудник сможет обработать заявку и отправить информацию о товаре или об отправке клиенту.",
    preordersStaffSetup: "Для этого заходим в раздел \"Сотрудники\" и нажимаем кнопку \"Добавить сотрудника\". Тип сотрудника - Оператор предзаказов",
    preordersStaffMore: "Что бы узнать подробнее о настройках сотрудника для предзаказов ознакомьтесь пожалуйста с разделом РАБОТНИКИ",
    
    // Addresses page
    addressesTitle: "Адреса",
    addressesIntro: "Управляйте адресами доставки клиентов в этом разделе",
    
    // Must Subscribe page
    mustSubscribeTitle: "Обязательная подписка на канал",
    mustSubscribeIntro: "Настройка параметров обязательной подписки пользователей на канал",
  }
};

export default translations;
