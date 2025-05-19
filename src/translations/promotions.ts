
const translations = {
  en: {
    // Page title and basics
    promotionsTitle: "Promotions",
    promotionsIntro: "Currently, there are 6 types of promotions that can be launched. Let's look at each in more detail by going to the MARKETING - PROMOTIONS section.",
    
    // Purchase count promotion
    purchaseCountPromoTitle: "Promotion by number of purchases example:",
    purchaseCountPromoDesc: "Choose the promotion we need and the store it relates to. Choose a start date - if you want the promotion to start from today, it's better to take yesterday to avoid problems with different time zones. Set an end date and activate it. Be sure to choose after how many purchases the bot will give a prize to the client, the amount in the store's currency, and save.",
    purchaseCountPromoExample: "Example of notifying clients about the promotion as in the photo: \"Get $20 on balance for every 7th purchase in our store\"",
    
    // Deposit sum promotion
    depositSumPromoTitle: "Promotion by deposit sum example:",
    depositSumPromoDesc: "With such settings, any client whose deposit amount is more than 1000 in the store's currency will receive a bonus of 10 also in the store's currency.",
    depositSumPromoExample: "Example of notifying clients about the promotion as in the photo: In the period from 05/19/2025 to 05/19/2026, deposit 1000 or more dollars and get 10 bucks cashback.",
    
    // One-time deposit promotion
    oneTimeDepositTitle: "Promotion by deposit amount at once:",
    oneTimeDepositDesc: "Note that when using a promotion for a one-time deposit, you need to set 0 in the sections related to reviews and select products that will participate in the promotion itself. In this case, we see that any client who makes a one-time deposit of 100 or more in the store's currency during the period from 05/19 to 05/30 will receive 20 bonuses to their bot balance.",
    
    // Reviews promotion
    reviewsPromoTitle: "Promotion for leaving reviews:",
    reviewsPromoDesc: "Use this promotion to motivate your customers to leave reviews. If the promotion will be permanent, we recommend setting an end date with the year 2050, etc. In this example, the settings are selected so that your client will receive 1 in the store's currency for each review left with at least 5 characters and a rating of at least 3 stars.",
    
    // Next purchase discount
    nextPurchaseTitle: "Discount on next purchase",
    nextPurchaseDesc: "For example, \"In the period from 10/1/2025 to 11/10/2025, buy an iPhone 20 Pro and get a discount on the next purchase of iPhone Pro Max 20%.\"",
    nextPurchaseSteps: "Choose which products participate in the promotion, fill in all the data, save, and go to the promotion card to write the DISCOUNT that the client will receive for the next purchase.",
    nextPurchaseDetails1: "You need to explicitly specify the order of each bonus in the \"Order of issuance\" field. For example, you can create several discount options for \"issue number 1\", in which case the client will receive one randomly selected bonus from those available under number 1.",
    nextPurchaseDetails2: "You can create a whole chain for customers to purchase different products. For example, with the first purchase, they receive a discount on one product. With the second purchase, they receive a discount on another product, with the third purchase, they receive a discount on the product they purchased, and so on.",
    nextPurchaseNotification: "After the promotion is triggered, the store owner will be notified in the notification bot, the client will be notified in the bot where the purchase was made, and an entry will be added to the client's balance change history.",
    nextPurchaseDiscounts: "For the \"next purchase\" promotion, a list of issued discounts will appear, as well as a mark of their use. To cancel a discount, in case you decide not to give the client this discount, you can do so in the client settings. By clicking on the client's username, you will go to the client's page, where you need to check the box next to the unwanted link in the \"Delete\" column and click \"Save\".",
    nextPurchaseMultiple: "You can create several promotions, and each will work independently of the others. For example, you create a promotion for a bonus of 100 rubles for every 2,000 rubles. You also create a bonus of 500 rubles for every 10,000 rubles for the same period. Thus, if a client replenishes with one or several payments for 11,000 rubles, then the first promotion will work 5 times, and the second promotion will work once - that is, the client will receive 500 rubles + 500 rubles - a total of 1,000 bonus rubles.",
    
    // Sale promotion
    salePromoTitle: "Sale promotion",
    salePromoDesc: "Here, everything is quite simple. If you want to make a sale on all products, just put only the discount amount on all products in the field indicated by the blue arrow and don't fill in anything below.",
    salePromoDetails: "If you want specific products to participate in the sale, don't enter a number in Discount%, but instead fill in the Following Discounts section for each product you want to see in the sale.",
    
    // Additional settings
    deleteUnusedDiscounts: "There is a checkbox \"Delete all unused discounts after the end of the promotion\". If you set it, then all one-time discounts that customers did not manage to use before the end of the promotion will expire.",
    followingDiscountsInfo: "When adding \"Following Discounts\", you can choose which product the client will receive a discount on, or, if you leave this field empty, then the client will receive a discount on the product they purchased."
  },
  ru: {
    // Page title and basics
    promotionsTitle: "Промо-акции",
    promotionsIntro: "На данный момент существует 6 типов акций которые можно запустить. Рассмотрим каждую более детально зайдя в раздел МАРКЕТИНГ - ПРОМО-АКЦИИ",
    
    // Purchase count promotion
    purchaseCountPromoTitle: "Акция по количеству покупок пример:",
    purchaseCountPromoDesc: "Выбираем нужную нам акцию и магазин к которому она относится. Выбираем дату начала - если хотим что бы акция запустилась с сегодняшнего дня лучше брать вчерашний день что бы не столкнуться с проблемой разных часовых поясов. Устанавливаем дату окончания и активируем. Обязательно выбираем после какого количества покупок бот выдаст приз клиенту, сумму в валюте магазина и сохраняем.",
    purchaseCountPromoExample: "Пример оповещения клиентов об акции как на фото: \"Получи $20 на баланс за каждую 7ю покупку в нашем магазине\"",
    
    // Deposit sum promotion
    depositSumPromoTitle: "Акция по сумме депозита пример:",
    depositSumPromoDesc: "При подобных настройках любой клиент сумма депозитов которого будет более 1000 в валюте магазина получит бонус в размере 10 так же в валюте магазина.",
    depositSumPromoExample: "Пример оповещения клиентов об акции как на фото: В период с 19.05.2025 по 19.05.2026 пополни на 1000 и более доларов и получи 10 баксов кешбек.",
    
    // One-time deposit promotion
    oneTimeDepositTitle: "Акция по сумме депозита за раз:",
    oneTimeDepositDesc: "Обрати внимание что при использовании акции по сумме депозита за раз нужно поставить 0 в разделах касающихся отзывов и выбрать товары которые будут участвовать в самой акции. В данном случае мы видим что любой клиент совершивший разовый депозит 100 в валюте магазина и более в период с 19.05 по 30.05 получит 20 бонусов на свой баланс бота.",
    
    // Reviews promotion
    reviewsPromoTitle: "Акция за оставленные отзывы:",
    reviewsPromoDesc: "Воспользуйтесь данной акцией что бы мотивировать ваших клиентов оставлять отзывы. В случае если акция будет действовать постоянно рекомендуем установить дату окончания с годом 2050 итд. В данном примере настройки подобраны таким образом что ваш клиент будет получать 1 в валюте магазина за каждый оставленный отзыв от 5ти символов и с рейтингом не менее 3 звезды.",
    
    // Next purchase discount
    nextPurchaseTitle: "Скидка на следующую покупку",
    nextPurchaseDesc: "Например, \"В период с 1.10.2025 по 10.11.2025 купи Iphone 20 Pro и получи скидку на следующую покупку Iphone Pro Max 20%.\"",
    nextPurchaseSteps: "Выбираем какие именно товары участвуют в акции, заполняем все данные, сохраняем и переходим в карточку акции что бы прописать СКИДКУ которую получит клиент на следующую покупку.",
    nextPurchaseDetails1: "Вам необходимо явно указать порядок выдачи каждого бонуса в поле \"Порядок выдачи\". Например, Вы можете создать несколько вариантов скидок для \"выдачи под номером 1\" в этом случае клиент получит один случайно выбранный бонус из доступных под номером 1.",
    nextPurchaseDetails2: "Вы можете создать целую цепочку для клиентов для покупки разных товаров. например при первой покупке - получает скидку на один товар. При второй покупке получает скидку на другой товар, при третей покупке получает скидку на тот товар, на который купил и т.д.",
    nextPurchaseNotification: "После срабатывания акции хозяин магазина будет оповещен в боте оповещений, клиент будет оповещен в боте где совершалась покупка а также будет добавлена запись с историю изменения баланса клиента.",
    nextPurchaseDiscounts: "Для акции \"на следующую покупку\" появится список выданных скидок а также пометка об их использовании. Отменить скидку, в случае если вы решили не давать клиенту данную скидку, можно в настройках клиента. Кликнув на юзернейм клиента вы перейдете на страницу клиента, где вам необходимо установить галочку напротив ненужной ссылки в столбике \"Удалить\" и нажать \"Сохранить\".",
    nextPurchaseMultiple: "Вы можете создать несколько акций, и каждая из них будет действовать независимо от других. Например, Вы создаете акцию на бонус 100 рублей за каждые 2 000 рублей. Также вы создаете бонус 500 рублей за каждые 10 000 рублей на одинаковый период. Тем самым если клиент пополнил одним или несколькими платежами на 11 000 рублей - то первая акция сработает 5 раз, а вторая акция сработает 1 раз - то есть клиент получится 500 рублей + 500 рублей - итого 1 000 рублей бонусных.",
    
    // Sale promotion
    salePromoTitle: "Акция распродажа",
    salePromoDesc: "Тут все довольно просто если вы хотите сделать распродажу на все товары проставьте только сумму скидки на все товары в поле на которое указывает синяя стрелка и не заполняйте ничего снизу.",
    salePromoDetails: "Если же вы хотите что бы в распродаже участвовали определенные товары не вводите число в Скидка%, а заполните вместо этого раздел Следующие скидки по каждому товару который хотите видеть в распродаже.",
    
    // Additional settings
    deleteUnusedDiscounts: "Есть галочка \"Удалить все неиспользованные скидки после окончания акции\" Если ее установить, то все разовые скидки, которые клиенты не успели использовать до окончания акции сгорят.",
    followingDiscountsInfo: "При добавлении \"Следующих скидок\" вы можете выбрать на какой именно товар клиент получит скидку, либо, если оставите это поле пустым - тогда клиент получит скидку на тот товар, который он купил."
  }
};

export default translations;
