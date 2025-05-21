
type Languages = 'en' | 'ru';

type MainStatsTranslations = {
  [key in Languages]: {
    [key: string]: string;
  };
};

const mainStatsTranslations: MainStatsTranslations = {
  ru: {
    mainStats: "ГЛАВНАЯ/СТАТИСТИКА",
    mainStatsDescription: "На данную страницу мы вынесли всю необходимую информацию что бы вы могли держать под полным и стабильным контролем свой бизнес!",
    withdrawFundsInfo: "Сверху находится вывод средств на рублевые карты с помощью п2п для ознакомления с этой функцией перейдите в раздел",
    withdrawFundsLink: "ВЫВОД СРЕДСТВ",
    dragDropInfo: "Обратите внимание что в данном разделе вы можете перетаскивать и менять последовательность блоков как угодно что бы адаптировать раздел под свои нужды",
    newsInfo: "Здесь вы не только сможете отслеживать свою статистику, но и узнавать обо всех новостях нашего сервиса что бы не пропустить ни одного обновления для улучшения своего бизнеса",
    ourMotto: "Мы не добавляем лишнего, мы отбираем лучшее!"
  },
  en: {
    mainStats: "MAIN/STATISTICS",
    mainStatsDescription: "On this page, we have presented all the necessary information so that you can keep your business under complete and stable control!",
    withdrawFundsInfo: "At the top is the withdrawal of funds to ruble cards using P2P, to learn about this function, go to the section",
    withdrawFundsLink: "WITHDRAW FUNDS",
    dragDropInfo: "Please note that in this section you can drag and change the sequence of blocks as you wish to adapt the section to your needs",
    newsInfo: "Here you will not only be able to track your statistics, but also learn about all the news of our service so as not to miss a single update to improve your business",
    ourMotto: "We don't add anything extra, we select the best!"
  }
};

export default mainStatsTranslations;
