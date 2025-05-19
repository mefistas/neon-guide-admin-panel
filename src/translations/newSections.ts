import happyHoursTranslations from './happyHours';
import helpBotsTranslations from './helpBots';
import mailoutTranslations from './mailouts';
import preordersTranslations from './preorders';
import promotionsTranslations from './promotions';

interface TranslationType {
  [key: string]: {
    [key: string]: string;
  };
}

const newSectionsTranslations: TranslationType = {
  en: {
    happyHours: "Happy Hours",
    happyHoursDesc: "Information on how to set up happy hours",
    preorders: "Preorders",
    preordersDesc: "Information on how to set up preorders",
    helpBots: "Help Bots",
    helpBotsDesc: "Information on how to set up help bots",
    mailouts: "Mailouts",
    mailoutsDesc: "Information on how to set up mailouts",
    promotions: 'Promotions',
    promotionsDesc: 'Information on how to set up promotions',
    autoForwarding: "Auto Forwarding",
    autoForwardingDesc: "Information on how to set up auto forwarding",
    cumulativeDiscounts: "Cumulative Discounts",
    cumulativeDiscountsDesc: "The \"cumulative discount\" system based on the number of purchases.",
    cumulativeDiscountsExplanation: "You can set up a cumulative discount for your store. The scheme works like this: The client makes purchases, and when the number of purchases reaches a certain number, the system automatically sets the desired discount value for the client. In the next purchase, this discount will already be applied. For example, you can set that after 5 purchases the client receives a 1% discount, after 15 purchases - a 2% discount, after 30 purchases - a 3% discount, and so on to the desired limit :)",
    cumulativeDiscountsPath: "This is done in the Marketing -> Cumulative Discounts -> Add discount system",
    cumulativeDiscountsSetupInstructions: "Select the Store, set the number of purchases and specify the discount percentage that will be set for the client.",
    cumulativeDiscountsExample: "Example of a cumulative discount system",
    cumulativeDiscountsPurchases: "Number of purchases",
    cumulativeDiscountsPercent: "Discount percentage",
    cumulativeDiscountsTip: "Cumulative discounts are an excellent tool for encouraging customer loyalty and increasing the frequency of purchases.",
    promoCodes: "Promo Codes",
    promoCodesDesc: "Information on how to set up promo codes",
    oneTimeDiscounts: "One-Time Discounts",
    oneTimeDiscountsDesc: "Information on how to set up one-time discounts",
    mustSubscribe: "Must Subscribe",
    mustSubscribeDesc: "Information on how to set up must subscribe",
  },
  ru: {
    happyHours: "Счастливые часы",
    happyHoursDesc: "Информация о том, как настроить счастливые часы",
    preorders: "Предзаказы",
    preordersDesc: "Информация о том, как настроить предзаказы",
    helpBots: "Помощь боты",
    helpBotsDesc: "Информация о том, как настроить помощь ботов",
    mailouts: "Рассылки",
    mailoutsDesc: "Информация о том, как настроить рассылки",
    promotions: 'Акции',
    promotionsDesc: 'Информация о том, как настроить акции',
    autoForwarding: "Автоматическая пересылка",
    autoForwardingDesc: "Информация о том, как настроить автоматическую пересылку",
    cumulativeDiscounts: "Накопительные скидки",
    cumulativeDiscountsDesc: "Система \"накопительной скидки\" по количеству покупок.",
    cumulativeDiscountsExplanation: "Вы можете настроить накопительную скидку для вашего магазина. Схема работы такая: Клиент совершает покупки, и когда число покупок достигает определенного числа, система автоматически проставляет нужное значение скидки для клиента. В следующую покупку у него уже будет действовать данная скидка. Например, вы можете поставить чтобы после 5 покупок клиент получал скидку 1%, после 15 покупок - скидку в 2%, после 30 покупок - скидку в 3% и тд до нужного предела :)",
    cumulativeDiscountsPath: "Делается это в разделе Маркетинг-> Накопительные скидки -> Добавить система скидок",
    cumulativeDiscountsSetupInstructions: "Выбираете Магазин, устанавливаете количество покупок и указываете процент скидки, который будет устанавливаться клиенту.",
    cumulativeDiscountsExample: "Пример системы накопительных скидок",
    cumulativeDiscountsPurchases: "Количество покупок",
    cumulativeDiscountsPercent: "Процент скидки",
    cumulativeDiscountsTip: "Накопительные скидки - отличный инструмент для поощрения лояльности клиентов и увеличения частоты покупок.",
    promoCodes: "Промокоды",
    promoCodesDesc: "Информация о том, как настроить промокоды",
    oneTimeDiscounts: "Одноразовые скидки",
    oneTimeDiscountsDesc: "Информация о том, как настроить одноразовые скидки",
    mustSubscribe: "Обязательная подписка",
    mustSubscribeDesc: "Информация о том, как настроить обязательную подписку",
  }
};

export default newSectionsTranslations;
