
interface TranslationType {
  [key: string]: {
    [key: string]: string;
  };
}

export const cumulativeDiscountsTranslations: TranslationType = {
  en: {
    cumulativeDiscounts: "Cumulative Discounts",
    cumulativeDiscountsDesc: "The \"cumulative discount\" system based on the number of purchases.",
    cumulativeDiscountsExplanation: "You can set up a cumulative discount for your store. The scheme works like this: The client makes purchases, and when the number of purchases reaches a certain number, the system automatically sets the desired discount value for the client. In the next purchase, this discount will already be applied. For example, you can set that after 5 purchases the client receives a 1% discount, after 15 purchases - a 2% discount, after 30 purchases - a 3% discount, and so on to the desired limit :)",
    cumulativeDiscountsPath: "This is done in the Marketing -> Cumulative Discounts -> Add discount system",
    cumulativeDiscountsSetupInstructions: "Select the Store, set the number of purchases and specify the discount percentage that will be set for the client."
  },
  ru: {
    cumulativeDiscounts: "Накопительные скидки",
    cumulativeDiscountsDesc: "Система \"накопительной скидки\" по количеству покупок.",
    cumulativeDiscountsExplanation: "Вы можете настроить накопительную скидку для вашего магазина. Схема работы такая: Клиент совершает покупки, и когда число покупок достигает определенного числа, система автоматически проставляет нужное значение скидки для клиента. В следующую покупку у него уже будет действовать данная скидка. Например, вы можете поставить чтобы после 5 покупок клиент получал скидку 1%, после 15 покупок - скидку в 2%, после 30 покупок - скидку в 3% и тд до нужного предела :)",
    cumulativeDiscountsPath: "Делается это в разделе Маркетинг-> Накопительные скидки -> Добавить система скидок",
    cumulativeDiscountsSetupInstructions: "Выбираете Магазин, устанавливаете количество покупок и указываете процент скидки, который будет устанавливаться клиенту."
  }
};

export default cumulativeDiscountsTranslations;
