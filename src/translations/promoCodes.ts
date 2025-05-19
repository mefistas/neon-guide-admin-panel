
interface TranslationType {
  [key: string]: {
    [key: string]: string;
  };
}

export const promoCodesTranslations: TranslationType = {
  en: {
    promoCodes: "Promo Codes",
    promoCodesDesc: "Marketing -> Promo Codes section. You can create promo codes and distribute them to users. Promo codes are created for a specific amount that will be added to the client's balance. If a store has at least one unused promo code, then in the REPLENISH BALANCE section, the 'promo code' option will be available. After successfully entering a promo code, the balance is credited to the client's account and an entry is added to the client's change history (see CLIENTS section).",
    promoCodesGeneration: "You can generate several promo codes at once, up to 100 pieces at a time for the same denomination. To do this, in the promo code addition form, fill in the 'denomination' field and the number of promo codes you need (in my case, 25) and click the Save button.",
    promoCodesUsage: "After successfully generating promo codes, you can distribute them to clients, organize a giveaway, or add them, for example, to a random address.",
    clients: "CLIENTS",
    tip: "Tip"
  },
  ru: {
    promoCodes: "Промокоды",
    promoCodesDesc: "Раздел Маркетинг -> Промокоды. Вы можете создать промокоды и выдавать их пользователям. Промокоды создаются на определенную сумму, которая будет добавлена клиенту на баланс. Если у магазина есть хотя бы один неиспользованный промокод - тогда в разделе ПОПОЛНИТЬ БАЛАНС будет доступен выбор \"промокод\". После успешного ввода промокода, клиенту начисляется баланс на счет и добавляется запись в истории изменений клиента (см раздел КЛИЕНТЫ).",
    promoCodesGeneration: "Вы можете сгенерировать сразу несколько промокодов до 100 шт за раз на один и тот же номинал. Для этого в форме добавления промокода заполните поле \"номинал\" и кол-во нужных вам промокодов (у меня 25) и нажать кнопку Сохранить.",
    promoCodesUsage: "После успешной генерации промокодов вы можете раздать их клиентам, устроить розыгрыш или добавить, например, в случайный адрес.",
    clients: "КЛИЕНТЫ",
    tip: "Совет"
  }
};

export default promoCodesTranslations;
