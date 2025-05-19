
const preorders = {
  en: {
    // Preorders translations
    preorders: "Preorders/Deliveries",
    preordersDesc: "Process preorders and deliveries",
    preordersTitle: "Preorders/Deliveries",
    preordersPageDescription: "To work with preorders, you need to have cities and districts created.",
    citiesSetupTitle: "1) Set up cities for preorders",
    citiesSetupDescription: "In the Warehouse - Cities section, create a new city or check that the city you need has the \"Active for preorder?\" checkbox enabled. You can see checkboxes in the city list under the required column and set or remove them as needed. After that, you need to click the \"SAVE\" button at the bottom of the screen.",
    districtsSetupTitle: "2) Set up districts for preorders",
    districtsSetupDescription: "In the Districts section, check for districts for your cities. Similarly, add new ones or set checkboxes to activate for preorder.",
    districtsRequirement: "For preorders to work correctly, you need at least one district to be available for preorder.",
    productTypesTitle: "Creating Product Types for Preorder",
    productTypesDescription: "In the \"Product Types\" section, you need to create SEPARATE product types for preorder, to which addresses cannot be added. You can use these products ONLY for preorder, thus, for example, make a discount for this product or add separate items that are available only for preorder.",
    productTypeCreation: "When creating a product type, you need to check the \"Preorder?\" checkbox and add text that will be displayed to the client after purchasing this product. For example, it could be instructions on how to get the product, a link to the operator responsible for this product, or something else.",
    productTypeSettings: "All other settings for the \"Product Type\" are similar to a regular product.",
    botMenuSetup: "After you create cities, districts, and product types available for preorder - the \"PREORDER\" menu item will appear in the main menu of the bot. You can change the text of this button in the Store settings. Also, you can add the need for the client to \"Add delivery address\" after placing a preorder. To do this, in the store settings, you need to check the \"Address required for preorder?\" checkbox.",
    cityDistrictExample: "For example, there are cases when you do not need the client to select the district they need - in this case, you can simply create a separate City/District for them and make only them available for preorder. For example, name the district \"Entire city\".",
    processingPreordersTitle: "Processing Preorders",
    processingPreordersDescription: "When a client places a preorder and pays for it - this order will appear in the Purchases section.",
    processingInstructions: "When the preorder is ready, you need to change the status to completed and give the client their product. To do this, click on the chat icon to the right of the application, enter text with information about the order in the input field, and click the SEND button. The client will receive a message from the bot with information about their order, and the application will be marked as completed.",
    employeeAccountsTitle: "Additional Employee Accounts",
    employeeAccountsDescription: "There is also the ability to create an additional account for an employee with access to process preorders for a specific district. This way, you can create several accounts for employees and attach them to different districts. At the same time, when creating a preorder, the employee attached to the corresponding district will receive a notification in the TG bot. Also, through this TG bot, the employee will be able to process the application and send information about the product or shipment to the client.",
    employeeCreation: "To do this, go to the \"Employees\" section and click the \"Add employee\" button. Employee type - Preorder Operator",
    employeeSettings: "To learn more about employee settings for preorders, please refer to the",
    workers: "WORKERS",
    preordersOperator: "Preorder Operator"
  },
  ru: {
    preorders: "Предзаказы/Доставки",
    preordersDesc: "Обработка предзаказов и доставок",
    preordersTitle: "Предзаказы/Доставки",
    preordersPageDescription: "Для работы с предзаказами необходимо чтобы у вас были созданы города и к ним районы.",
    citiesSetupTitle: "1) в разделе Склад - Города",
    citiesSetupDescription: "создаем новый город или проверяем, чтобы у нужного вам города/городов стояла галочка \"Активен для предзаказа?\". В списке городов видим галочки под нужной колонкой и устанавливаем или убираем нужные. После этого, необходимо нажать кнопку \"СОХРАНИТЬ\" внизу экрана.",
    districtsSetupTitle: "2) В разделе Районы",
    districtsSetupDescription: "проверяем наличие районов для наших городов. Аналогично, добавляем новые или выставляем галочки на активацию для предзаказа.",
    districtsRequirement: "Для корректной работы предзаказов вам необходимо, чтобы хотя бы один район был доступен для предзаказа.",
    productTypesTitle: "Создание Видов товаров для предзаказа",
    productTypesDescription: "В разделе \"Виды товаров\" необходимо создать для предзаказа ОТДЕЛЬНЫЕ виды товаров, к которым нельзя будет добавить адреса. Вы можете использовать эти товары ТОЛЬКО для предзаказа тем самым, например, сделать скидку для данного товара или добавить отдельные позиции, которые доступны только для предзаказа.",
    productTypeCreation: "При создании вида товара необходимо установить галочку \"Предзаказ?\" и добавить текст, который будет выдаваться клиенту после покупки данного товара. Например, это может быть инструкция по получению товара, ссылка на оператора, ответственного за данный товар или что-то другое.",
    productTypeSettings: "Все остальные настройки \"Вида товара\" аналогичны обычному товару.",
    botMenuSetup: "После того, как вы создадите города, районы и виды товаров, доступные для предзаказа - в главном меню бота появится пункт меню - \"ПРЕДЗАКАЗ\". Текст этой кнопки вы можете поменять в настройках Магазина. Также, вы можете добавить необходимость для клиента, после оформления предзаказа \"Добавить адрес доставки\". Для этого, в настройках магазина необходимо установить галочку \"Требуется адрес по предзаказу?\".",
    cityDistrictExample: "Например, бывают случаи, когда вам не нужно чтобы клиент выбирал нужный ему район - в таком случае, вы можете просто создать отдельный Город/Район для него и сделать доступными для предзаказа только их. Например, район назвать \"Весь город\".",
    processingPreordersTitle: "Обработка предзаказов",
    processingPreordersDescription: "Когда клиент оформит предзаказ и оплатит его - этот заказ появится в разделе Покупки.",
    processingInstructions: "Когда предзаказ готов вам необходимо перевести статус в выполнено и выдать клиенту его товар. Для этого нажмите на иконку чата справа от заявки впишите текст с информацией о заказе в поле для ввода и нажимайте кнопку ОТПРАВИТЬ. Клиент получит сообщение от бота с информацией о его заказе, а заявка будет помечена как выполненная.",
    employeeAccountsTitle: "Также есть возможность создать дополнительный аккаунт для сотрудника",
    employeeAccountsDescription: "с доступом обработки предзаказов на определенный район. Таким образом, вы можете создать несколько учетных записей для сотрудников и прикрепить их к разным районам. При этом, при создании предзаказа сотрудник, прикрепленный к соответствующему району получит уведомление в ТГ-бот. Также, через этот ТГ-бот сотрудник сможет обработать заявку и отправить информацию о товаре или об отправке клиенту.",
    employeeCreation: "Для этого заходим в раздел \"Сотрудники\" и нажимаем кнопку \"Добавить сотрудника\". Тип сотрудника - Оператор предзаказов",
    employeeSettings: "Что бы узнать подробнее о настройках сотрудника для предзаказов ознакомьтесь пожалуйста с разделом",
    workers: "РАБОТНИКИ",
    preordersOperator: "Оператор предзаказов"
  }
};

export default preorders;
