
interface TranslationType {
  [key: string]: {
    [key: string]: string;
  };
}

const oneTimeDiscountsTranslations: TranslationType = {
  en: {
    oneTimeDiscounts: "Referral System/Mandatory Subscriptions/One-Time Discounts",
    referralSystem: "Referral System",
    referralSystemDesc: "Our service includes a referral system for your clients. To set it up, go to STORES-ALL STORES, select the store you need, and in the menu that opens, go to the Channel/Referral section.",
    referralProgramTitle: "Referral Program",
    referralProgramDesc: "Here you need to specify if it is active in your store, as well as set the % that your customers will receive for each purchase made by the person they referred, and the maximum payout amount in your store's currency.",
    referralProgramBenefits: "Now you can ask your customers to share their bot with friends to earn together. You can always see the number of referred referrals and the amount of bonuses paid in the client's card next to their main data. If the Referral System is active in your store, information about the conditions will be written for clients in the bot when clicking on the button responsible for Bonuses. To edit the text of the Bonuses page, see the BOT CUSTOMIZATION section",
    
    mandatorySubscription: "Mandatory Channel Subscription",
    mandatorySubRequirements: "To work with this section you will need:",
    step1: "1. Create a bot via @botfather if you don't know how to do this, reread the entire guide again",
    step2: "2. Add the obtained token to the BOT Token field, admin in the group to check the subscription AND DON'T FORGET TO ADD THIS SAME BOT AS AN ADMINISTRATOR TO THE CHAT OR CHANNEL that you want people to subscribe to",
    step3: "3. Now log in to our bot via username and agree to the granted rights.",
    step4: "4. You need to find out the ID of our channel/chat - for this, write to the bot @username_to_id_bot and in the menu select the item - CHANNEL/CHAT/GROUP - whatever you are interested in",
    step5: "5. Then select the desired channel/chat - and get its ID - This is a NEGATIVE long number. It must be inserted in the ID Channel/Group/Chat field for subscription",
    step6: "6. Fill in all items in this section and save. If there are no errors - it means everything is working correctly. When saving, errors may occur if the bot is not added to the channel and cannot access client verification - an error will be indicated. If you yourself do not understand this, then write to the manager indicating the error that the panel returns when trying to save.",
    
    oneTimeDiscountsTitle: "One-Time Discounts",
    oneTimeDiscountsDesc: "The main module is located in the ADDITIONAL-ONE-TIME DISCOUNTS ON GOODS section. We do not recommend working specifically through this menu since this section is created so that one-time discounts work in general, it is easiest to use them by going to the CLIENTS section, opening the card of the desired client and scrolling down to the one-time discounts section where you can easily select the desired product and discount amount.",
    oneTimeDiscountsAlternative: "However, if you want to issue a one-time discount through this module, then just fill in all the fields using the magnifying glass as an adapter for selecting the desired values and save so that the client receives a one-time discount on the product you have chosen.",
    
    firstEntryBonus: "First Entry Bonus",
    firstEntryBonusDesc: "We have also added the ability to set up an additional bonus to the client's balance at the FIRST ENTRY to the store in each bot. That is, if the client has not previously activated any of your bots, then when entering this bot, he will receive a bonus to the balance. The amount of the bonus can be configured inside each bot - it can be any type of bot. The main condition is that the client is new to your store.",
    
    customBot: "BOT CUSTOMIZATION",
    clients: "CLIENTS"
  },
  ru: {
    oneTimeDiscounts: "Реферальная система/Обязательные подписки/Разовые скидки",
    referralSystem: "Реферальная система",
    referralSystemDesc: "В нашем сервисе предусмотрена реферальная система для ваших клиентов, что бы ее настроить перейдите в раздел МАГАЗИНЫ-ВСЕ МАГАЗИНЫ, выберите нужный магазин и в открывшемся меню перейдите в раздел Канал/Рефералка.",
    referralProgramTitle: "Реферальная программа",
    referralProgramDesc: "Тут нужно указать является ли она активной в вашем магазине, а так же установить % который ваши клиенты будут получать за каждую покупку приведенного ими человека и максимальную сумму выплаты в валюте вашего магазина.",
    referralProgramBenefits: "Теперь вы можете просить ваших клиентов делиться своим ботом с друзьями что бы зарабатывать вместе. Количество приведенных рефералов, а так же сумму выплаченных бонусов вы всегда сможете увидеть в карточке клиента рядом с его основными данными. Если Реферальная система активна в вашем магазине то информация об условиях будет прописана для клиентов в боте при нажатии на кнопку отвечающую за Бонусы. Что бы редактировать текст страницы Бонусы смотри раздел КАСТОМИЗАЦИЯ БОТА",
    
    mandatorySubscription: "Обязательная подписка на канал",
    mandatorySubRequirements: "Для работы с этим разделом вам понадобится:",
    step1: "1. Создать бота через @botfather если не знаешь как сделать это перечитай весь справочник заново",
    step2: "2. Полученный токен добавить в поле BOT Token, админ в группе для проверки подписки И НЕ ЗАБЫТЬ ДОБАВИТЬ ЭТОГО ЖЕ БОТА АДМИНИСТРАТОРОМ В ЧАТ ИЛИ КАНАЛ на который хотим что бы люди обязательно подписывались",
    step3: "3. Теперь заходим через юзерннейм в нашего бота и соглашаемся с выданными правами.",
    step4: "4. Необходимо узнать ID нашего канала/чата - для этого напишите боту @username_to_id_bot и в меню выберите пункт - КАНАЛ/ЧАТ/ГРУППА - то что вас интересует",
    step5: "5. Далее выбираете нужный канал/чат - и получаете его ID - Это ОТРИЦАТЕЛЬНОЕ длинное число. Его необходимо вставить в поле ID Канала/Группы/Чата для подписки",
    step6: "6. Заполняем все пункты в данном разделе и сохраняемся. Если не будет никаких ошибок - значит все работает корректно. При сохранении могут возникать ошибки, если бот не добавлен в канал и не может получить доступа к проверке клиентов - будет указана ошибка. Если вы сами не разбираетесь в этом - то пишите менеджеру с указанием ошибки, которую возвращает панель при попытке сохранить.",
    
    oneTimeDiscountsTitle: "Разовые скидки",
    oneTimeDiscountsDesc: "Главный модуль находится в разделе ДОПОЛНИТЕЛЬНО-РАЗОВЫЕ СКИДКИ НА ТОВАРЫ. Не рекомендуем работать конкретно через это меню так как данный раздел создан для того что бы разовые скидки работали в целом, проще всего их использовать заходя в раздел КЛИЕНТЫ, открывая карточку нужного клиента и листая вниз до раздела разовые скидки где вы сможете с легкостью выбрать нужный товар и сумму скидки.",
    oneTimeDiscountsAlternative: "Однако если вы хотите выдать разовую скидку именно через этот модуль то просто заполните все поля используя лупу как переходник для выбора нужных значений и сохраните что бы клиент получил разовую скидку на выбранный вами товар.",
    
    firstEntryBonus: "Бонус при первом заходе",
    firstEntryBonusDesc: "Так же мы добавили возможность настроить в каждом боте дополнительный бонус на баланс клиента при ПЕРВОМ ЗАХОДЕ в магазин. То есть, если клиент ранее не активировал ни одного из ваших ботов - то при заходе в этого бота он получит бонус на баланс. Сумму бонуса можно настроить внутри каждого бота - это может быть любой тип бота. Главное условие - клиент новый для вашего магазина.",
    
    customBot: "КАСТОМИЗАЦИЯ БОТА",
    clients: "КЛИЕНТЫ"
  }
};

export default oneTimeDiscountsTranslations;
