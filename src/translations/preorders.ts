
const preorders = {
  en: {
    preorders: "Preorders",
    preordersHeading: "Preorders/Delivery",
    preordersIntro: "To work with pre-orders, you need to have cities and districts created for them.",
    citiesSetupTitle: "Setting up cities for preorders",
    citiesSetupInstructions: "In the Stock - Cities section, create a new city or check that the city/cities you need have the \"Active for pre-order?\" checkbox checked. In the list of cities, we see the checkboxes under the desired column and set or remove the necessary ones. After that, you need to click the \"SAVE\" button at the bottom of the screen.",
    districtsSetupTitle: "Setting up districts for preorders",
    districtsSetupInstructions: "In the Districts section, check for districts for our cities. Similarly, add new ones or set checkmarks for activation for pre-order.",
    preordersRequirement: "For pre-orders to work correctly, you need at least one district to be available for pre-order.",
    productTypesTitle: "Creating Product Types for Pre-order",
    productTypesInstructions: "In the \"Product Types\" section, you need to create SEPARATE product types for pre-order, to which addresses cannot be added. You can use these products ONLY for pre-order, thereby, for example, making a discount for this product or adding separate items that are only available for pre-order. When creating a product type, you need to check the \"Pre-order?\" checkbox and add text that will be issued to the client after purchasing this product. For example, this could be instructions for receiving the product, a link to the operator responsible for this product, or something else.",
    otherProductSettings: "All other \"Product Type\" settings are similar to a regular product.",
    preorderButtonInfo: "After you create cities, districts, and product types available for pre-order - in the main menu of the bot, there will be a menu item - \"PRE-ORDER\". You can change the text of this button in the Store settings. Also, you can add the need for the client, after placing a pre-order, to \"Add delivery address\". To do this, in the store settings, you need to check the box \"Address required for pre-order?\".",
    specialCaseInfo: "For example, there are cases when you don't need the client to select the district they need - in this case, you can simply create a separate City/District for them and make only them available for pre-order. For example, name the district \"Whole city\".",
    processingTitle: "Processing Pre-orders",
    processingInstructions: "When a client places a pre-order and pays for it - this order will appear in the Purchases section.",
    fulfillmentInstructions: "When the pre-order is ready, you need to change the status to completed and give the client their product. To do this, click on the chat icon to the right of the application, enter text with information about the order in the input field, and click the SEND button. The client will receive a message from the bot with information about their order, and the application will be marked as completed.",
    staffAccountsInfo: "There is also the possibility to create an additional account for an employee with access to process pre-orders for a specific district. In this way, you can create several employee accounts and attach them to different districts. At the same time, when creating a pre-order, an employee attached to the corresponding district will receive a notification in the TG bot. Also, through this TG bot, the employee will be able to process the application and send information about the product or about the shipment to the client.",
    staffSetupInstructions: "To do this, go to the \"Employees\" section and click the \"Add employee\" button. Employee type - Pre-order operator",
    learnMorePrompt: "To learn more about employee settings for pre-orders, please check out the WORKERS section"
  },
  ru: {
    preorders: "Предзаказы",
    preordersHeading: "Предзаказы/Доставки",
    preordersIntro: "Для работы с предзаказами необходимо чтобы у вас были созданы города и к ним районы.",
    citiesSetupTitle: "Настройка городов для предзаказов",
    citiesSetupInstructions: "В разделе Склад - Города создаем новый город или проверяем, чтобы у нужного вам города/городов стояла галочка \"Активен для предзаказа?\". В списке городов видим галочки под нужной колонкой и устанавливаем или убираем нужные. После этого, необходимо нажать кнопку \"СОХРАНИТЬ\" внизу экрана.",
    districtsSetupTitle: "Настройка районов для предзаказов",
    districtsSetupInstructions: "В разделе Районы проверяем наличие районов для наших городов. Аналогично, добавляем новые или выставляем галочки на активацию для предзаказа.",
    preordersRequirement: "Для корректной работы предзаказов вам необходимо, чтобы хотя бы один район был доступен для предзаказа.",
    productTypesTitle: "Создание Видов товаров для предзаказа",
    productTypesInstructions: "В разделе \"Виды товаров\" необходимо создать для предзаказа ОТДЕЛЬНЫЕ виды товаров, к которым нельзя будет добавить адреса. Вы можете использовать эти товары ТОЛЬКО для предзаказа тем самым, например, сделать скидку для данного товара или добавить отдельные позиции, которые доступны только для предзаказа. При создании вида товара необходимо установить галочку \"Предзаказ?\" и добавить текст, который будет выдаваться клиенту после покупки данного товара. Например, это может быть инструкция по получению товара, ссылка на оператора, ответственного за данный товар или что-то другое.",
    otherProductSettings: "Все остальные настройки \"Вида товара\" аналогичны обычному товару.",
    preorderButtonInfo: "После того, как вы создадите города, районы и виды товаров, доступные для предзаказа - в главном меню бота появится пункт меню - \"ПРЕДЗАКАЗ\". Текст этой кнопки вы можете поменять в настройках Магазина. Также, вы можете добавить необходимость для клиента, после оформления предзаказа \"Добавить адрес доставки\". Для этого, в настройках магазина необходимо установить галочку \"Требуется адрес по предзаказу?\".",
    specialCaseInfo: "Например, бывают случаи, когда вам не нужно чтобы клиент выбирал нужный ему район - в таком случае, вы можете просто создать отдельный Город/Район для него и сделать доступными для предзаказа только их. Например, район назвать \"Весь город\".",
    processingTitle: "Обработка Предзаказов",
    processingInstructions: "Когда клиент оформит предзаказ и оплатит его - этот заказ появится в разделе Покупки.",
    fulfillmentInstructions: "Когда предзаказ готов вам необходимо перевести статус в выполнено и выдать клиенту его товар. Для этого нажмите на иконку чата справа от заявки впишите текст с информацией о заказе в поле для ввода и нажимайте кнопку ОТПРАВИТЬ. Клиент получит сообщение от бота с информацией о его заказе, а заявка будет помечена как выполненная.",
    staffAccountsInfo: "Также есть возможность создать дополнительный аккаунт для сотрудника с доступом обработки предзаказов на определенный район. Таким образом, вы можете создать несколько учетных записей для сотрудников и прикрепить их к разным районам. При этом, при создании предзаказа сотрудник, прикрепленный к соответствующему району получит уведомление в ТГ-бот. Также, через этот ТГ-бот сотрудник сможет обработать заявку и отправить информацию о товаре или об отправке клиенту.",
    staffSetupInstructions: "Для этого заходим в раздел \"Сотрудники\" и нажимаем кнопку \"Добавить сотрудника\". Тип сотрудника - Оператор предзаказов",
    learnMorePrompt: "Что бы узнать подробнее о настройках сотрудника для предзаказов ознакомьтесь пожалуйста с разделом РАБОТНИКИ"
  }
};

export default preorders;
