
type Languages = 'en' | 'ru';

type CouriersTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const couriersTranslations: CouriersTranslations = {
  ru: {
    couriers: "КУРЬЕРЫ",
    couriersDescription: "Раздел СКЛАД-КУРЬЕРЫ",
    couriersInfo: "Ваш магазин не начнет свою автоматизированную работу пока вы не создадите хотя бы одного курьера что бы выгружать от его лица адреса в последствии, даже если вы самостоятельно исполняете заказы и у вас нет сотрудников, вывсе равно должны завести хотя бы одну карточку курьер.",
    addCourier: "Нажимаем кнопку Добавить курьер в правом верхнем углу и устанавливаем для него имя.",
    selectShop: "Затем выбираем магазин к которому относится ваш курьер после чего прописываем при необходимости комментарий.",
    dragProducts: "Далее перетягиваем всю необходимую продукцию с которой будет работать наш курьер в правую сторону",
    shortcutTip: "Используйте горячие клавиши для выделения что бы не перетягивать по одному пункту",
    macShortcut: "macOS — удерживай Command (⌘) и кликайте по нужным файлам",
    winShortcut: "Windows — удерживай Ctrl и кликайте по нужным файлам Так же внизу есть удобная кнопка выбрать все что бы разово активировать все товары для курьера",
    balanceInfo: "По умолчанию баланс каждого курьера 0. Баланс может быть как положительным так и отрицательным. Подробнее о начисления и выплатах курьерам можно ознакомиться в разделе",
    couriersSalaryLink: "Начисления/штрафы курьерам",
    botSetup: "Далее вы так же сможете установить токен бота для уведомлений или работы курьера через непосредственно через телеграмм для этого просто вставьте токен в соответствующее поле после чего сохранитесь и перейдите в карточку курьера",
    botUsage: "Теперь вы будете видеть ссылку на бота с уведомлениями которую можно поедать курьеру что бы он мог самостоятельно отслежтвать статусы своих адресов, а так же ссылку на бота для работы курьера через телеграмм!",
    recommendation: "Рекомендуем ознакомиться с разделами",
    workersLink: "Сотрудники"
  },
  en: {
    couriers: "COURIERS",
    couriersDescription: "WAREHOUSE-COURIERS Section",
    couriersInfo: "Your store will not begin its automated operation until you create at least one courier to upload addresses from their face afterwards, even if you carry out orders yourself and have no employees, you still need to create at least one courier card.",
    addCourier: "Click the Add Courier button in the upper right corner and set a name for it.",
    selectShop: "Then select the store to which your courier belongs, after which we write a comment if necessary.",
    dragProducts: "Next, we drag all the necessary products that our courier will work with to the right",
    shortcutTip: "Use keyboard shortcuts for selection so you don't have to drag one item at a time",
    macShortcut: "macOS — hold down Command (⌘) and click on the desired files",
    winShortcut: "Windows — hold down Ctrl and click on the desired files. There's also a convenient select all button at the bottom to activate all products for the courier at once",
    balanceInfo: "By default, each courier's balance is 0. The balance can be either positive or negative. For more information about accruals and payments to couriers, see the section",
    couriersSalaryLink: "Accruals/penalties for couriers",
    botSetup: "Next, you can also install a bot token for notifications or courier work directly through Telegram, for this, simply paste the token in the corresponding field, then save and go to the courier's card",
    botUsage: "Now you will see a link to the notification bot that you can send to the courier so that he can independently track the status of his addresses, as well as a link to the bot for courier work through Telegram!",
    recommendation: "We recommend familiarizing yourself with the sections",
    workersLink: "Employees"
  }
};

export default couriersTranslations;
