
import { useLanguage } from '@/contexts/LanguageContext';
import { createTranslator } from '@/utils/translations';

type LocalTranslations = {
  back: {
    en: string;
    ru: string;
  };
  casino: {
    en: string;
    ru: string;
  };
  configureGames: {
    en: string;
    ru: string;
  };
  diceGame: {
    en: string;
    ru: string;
  };
  dartsGame: {
    en: string;
    ru: string;
  };
  bowlingGame: {
    en: string;
    ru: string;
  };
  slotGame: {
    en: string;
    ru: string;
  };
  minBet: {
    en: string;
    ru: string;
  };
  maxBet: {
    en: string;
    ru: string;
  };
  casinoInstructions: {
    en: string;
    ru: string;
  };
  storeSetupTitle: {
    en: string;
    ru: string;
  };
  casinoSteps: {
    en: string;
    ru: string;
  };
  availableGames: {
    en: string;
    ru: string;
  };
  gamesList: {
    en: string;
    ru: string;
  };
  gameChanceInfo: {
    en: string;
    ru: string;
  };
  slotMachines: {
    en: string;
    ru: string;
  };
  slotMachineInfo: {
    en: string;
    ru: string;
  };
  casinoHistory: {
    en: string;
    ru: string;
  };
  casinoHistoryInfo: {
    en: string;
    ru: string;
  };
  clientsDescription: {
    en: string;
    ru: string;
  };
  clientsSearch: {
    en: string;
    ru: string;
  };
  clientsCardTitle: {
    en: string;
    ru: string;
  };
  clientsCardDescription: {
    en: string;
    ru: string;
  };
  clientsImage1: {
    en: string;
    ru: string;
  };
  clientsImage2: {
    en: string;
    ru: string;
  };
  clientsImage3: {
    en: string;
    ru: string;
  };
  clientsImage4: {
    en: string;
    ru: string;
  };
  feedbackTitle: {
    en: string;
    ru: string;
  };
  feedbackDescription: {
    en: string;
    ru: string;
  };
  feedbackInstruction: {
    en: string;
    ru: string;
  };
  sendingMessageTitle: {
    en: string;
    ru: string;
  };
  sendingMessageInstruction: {
    en: string;
    ru: string;
  };
  internalChatsTitle: {
    en: string;
    ru: string;
  };
  internalChatsMenuPath: {
    en: string;
    ru: string;
  };
  internalChatsAddBranch: {
    en: string;
    ru: string;
  };
  internalChatsDescription: {
    en: string;
    ru: string;
  };
  internalChatsInviteButton: {
    en: string;
    ru: string;
  };
  internalChatsOwnerCapabilities: {
    en: string;
    ru: string;
  };
  internalChatsDescription2: {
    en: string;
    ru: string;
  };
  internalChatsChannelOption: {
    en: string;
    ru: string;
  };
  internalChatsGroupOption: {
    en: string;
    ru: string;
  };
  internalChatsEncryption: {
    en: string;
    ru: string;
  };
  internalChatsEncryptionDetails: {
    en: string;
    ru: string;
  };
  internalChatsServerStorage: {
    en: string;
    ru: string;
  };
  internalChatsPasswordSharing: {
    en: string;
    ru: string;
  };
  internalChatsAutoDeletion: {
    en: string;
    ru: string;
  };
  purchasesTitle: {
    en: string;
    ru: string;
  };
  purchasesSubtitle: {
    en: string;
    ru: string;
  };
  purchasesClientOptions: {
    en: string;
    ru: string;
  };
  purchasesSection: {
    en: string;
    ru: string;
  };
  purchasesFlowDescription: {
    en: string;
    ru: string;
  };
  purchasesDisputeInfo: {
    en: string;
    ru: string;
  };
  purchasesStatistics: {
    en: string;
    ru: string;
  };
  purchasesStatusColumn: {
    en: string;
    ru: string;
  };
  purchasesFilters: {
    en: string;
    ru: string;
  };
  purchasesDisputeOperator: {
    en: string;
    ru: string;
  };
  purchasesOperatorActions: {
    en: string;
    ru: string;
  };
  purchasesFullRefund: {
    en: string;
    ru: string;
  };
  purchasesCloseForStore: {
    en: string;
    ru: string;
  };
  purchasesHelpBots: {
    en: string;
    ru: string;
  };
  purchasesBalanceRecommendation: {
    en: string;
    ru: string;
  };
  helpBotsLink: {
    en: string;
    ru: string;
  };
  balanceTopUpsLink: {
    en: string;
    ru: string;
  };
  "Disputes in the Purchases section": {
    en: string;
    ru: string;
  };
  "Purchase status with reviews": {
    en: string;
    ru: string;
  };
  "Filters in purchases section": {
    en: string;
    ru: string;
  };
  "Creating dispute operator": {
    en: string;
    ru: string;
  };
  "Dispute resolution options": {
    en: string;
    ru: string;
  };
  "Full refund interface": {
    en: string;
    ru: string;
  };
  "Close in favor of store interface": {
    en: string;
    ru: string;
  };
  telegramOperatorTitle: {
    en: string;
    ru: string;
  };
  telegramOperatorInstruction: {
    en: string;
    ru: string;
  };
  usdtTitle: {
    en: string;
    ru: string;
  };
  usdtPayments: {
    en: string;
    ru: string;
  };
  usdtSetupInstructions: {
    en: string;
    ru: string;
  };
  usdtAdditionalMenu: {
    en: string;
    ru: string;
  };
  usdtAddWallet: {
    en: string;
    ru: string;
  };
  balanceTopUpsTitle: {
    en: string;
    ru: string;
  };
  balanceTopUpsSubtitle: {
    en: string;
    ru: string;
  };
  balanceTopUpsDescription: {
    en: string;
    ru: string;
  };
  balanceTopUpsImage: {
    en: string;
    ru: string;
  };
  balanceTopUpsMostCommonIssue: {
    en: string;
    ru: string;
  };
  balanceTopUpsServicePayment: {
    en: string;
    ru: string;
  };
  balanceTopUpsCheckTransaction: {
    en: string;
    ru: string;
  };
  balanceTopUpsOpenDispute: {
    en: string;
    ru: string;
  };
  balanceTopUpsDisputeImage: {
    en: string;
    ru: string;
  };
  balanceTopUpsUsdtPayment: {
    en: string;
    ru: string;
  };
  balanceTopUpsCheckUsdtTransaction: {
    en: string;
    ru: string;
  };
  balanceTopUpsProcessApplication: {
    en: string;
    ru: string;
  };
  balanceTopUpsCarouselImage1: {
    en: string;
    ru: string;
  };
  balanceTopUpsCarouselImage2: {
    en: string;
    ru: string;
  };
  balanceTopUpsRecommendation: {
    en: string;
    ru: string;
  };
  balanceTopUpsFilters: {
    en: string;
    ru: string;
  };
  balanceTopUpsFiltersImage: {
    en: string;
    ru: string;
  };
  balanceTopUpsBalanceHistory: {
    en: string;
    ru: string;
  };
  // New translations for Couriers Salary page
  couriersSalaryTitle: {
    en: string;
    ru: string;
  };
  couriersSalaryDescription1: {
    en: string;
    ru: string;
  };
  couriersSalaryDescription2: {
    en: string;
    ru: string;
  };
  couriersSalaryDescription3: {
    en: string;
    ru: string;
  };
  couriersSalaryDescription4: {
    en: string;
    ru: string;
  };
  couriersSalaryDescription5: {
    en: string;
    ru: string;
  };
  couriersSalaryDescription6: {
    en: string;
    ru: string;
  };
  couriersSalaryProductTypeAlt: {
    en: string;
    ru: string;
  };
  couriersSalarySettingsAlt: {
    en: string;
    ru: string;
  };
  courierSalaryBalanceAlt: {
    en: string;
    ru: string;
  };
  courierSalaryLogsAlt: {
    en: string;
    ru: string;
  };
};

// Local translations that don't require modifying the language files
const localTranslations: LocalTranslations = {
  back: {
    en: "Back",
    ru: "Назад"
  },
  casino: {
    en: "Casino",
    ru: "Казино"
  },
  configureGames: {
    en: "Configure Games",
    ru: "Настроить игры"
  },
  diceGame: {
    en: "Dice - 'Guess the number'",
    ru: "Кости - 'Угадай число'"
  },
  dartsGame: {
    en: "Darts - 'Hit the bullseye'",
    ru: "Дартс - 'Попади в яблочко'"
  },
  bowlingGame: {
    en: "Bowling - 'Get a strike'",
    ru: "Боулинг - 'Выбей страйк'"
  },
  slotGame: {
    en: "Slot Machine",
    ru: "Игровой автомат"
  },
  minBet: {
    en: "Minimum Bet",
    ru: "Минимальная ставка"
  },
  maxBet: {
    en: "Maximum Bet",
    ru: "Максимальная ставка"
  },
  casinoInstructions: {
    en: "Now you can open a real casino in your store! Money for bets is deducted from the client's balance. This means the client can spend the remainder of their balance on casino games!",
    ru: "Теперь вы можете в своем магазине открыть настоящее казино! Деньги на ставки списываются с баланса клиента. То есть клиент может тратить остатки своего баланса на казино!"
  },
  storeSetupTitle: {
    en: "Setting up Casino in your store",
    ru: "Настройка казино в вашем магазине"
  },
  casinoSteps: {
    en: "- Go to STORES -> ALL STORES -> select your store\n- In the Language/Menu section, add a new item, set the line number, name it CASINO and select the casino button action accordingly\n- After creating the button, go to the Casino section and check the games you would like to see in your bot\nIMPORTANT: If at least one game is not selected, the casino will disappear from your bot's menu. You also need to set the minimum and maximum bets.",
    ru: "- Переходим в раздел МАГАЗИНЫ -> ВСЕ МАГАЗИНЫ -> выбираем наш магазин\n- В разделе Язык/Меню добавляем новый пункт, проставляем номер строки, называем КАЗИНО и выбираем действие кнопки казино соответственно\n- Когда кнопка создана идем в раздел Казино и ставим галочки напро��ив игр которые мы бы хотели видеть в нашем боте\nВАЖНО: если галочка не будет стоять хотя бы около одной игры, казино пропадает из меню вашего бота так же необходимо настроить минимальную и максимальную ставку"
  },
  availableGames: {
    en: "Available Games:",
    ru: "Игры на выбор:"
  },
  gamesList: {
    en: "🎲 Dice - 'Guess the number'. The client chooses a number from 1 to 6 and rolls the dice. If the client guesses the number, they receive a bonus.\n🎯 Darts - 'Hit the bullseye'. Throws a dart and if it hits the center of the target, receives a bonus.\n🎳 Bowling - 'Get a strike'. The client rolls the ball and if they get a strike, they receive a bonus.",
    ru: "🎲 Кости - \"угадай число\". Клиент выбирает от 1 до 6 и бросает кубик. Если клиент угадал число, то он получает бонус.\n🎯 Дартс - \"Попади в яблочко\". Кидает дротик и если попал в центр мишени - то получает бонус.\n🎳 Боулинг - \"Выбей страйк\". Клиент катит шар и если выбивает страйк, то получает бонус."
  },
  gameChanceInfo: {
    en: "🍀 These games have a 1 in 6 chance of winning. I recommend setting the bonus for winning at x3 - and you will always be in profit.",
    ru: "🍀 У этих игр - шанс на победу 1 к 6. Бонус за победу рекомендую ставить х3 - и вы в любом случае будете в плюсе."
  },
  slotMachines: {
    en: "Slot Machines!",
    ru: "Игровые автоматы!"
  },
  slotMachineInfo: {
    en: "🎰 Here is the SLOT machine - with a combination of 3 pictures - BAR, LEMON, GRAPE, SEVEN. 🔢 There are 64 different variations in total - you can assign a multiplier, a fixed prize, and also add an Address as a super prize for any of them. 🏆 For example, you can make a JACKPOT - for the 777 combination - and give a person a prize of x10 of the bet and a prize - Address for some product in the city.\n🎰 To play SLOT - you need to configure the winning combinations.",
    ru: "🎰 Тут машина SLOT - с комбинацией из 3х картинок - BAR, LEMON, GRAPE, SEVEN 🔢 Тут всего 64 различных вариации - на любую из них можно назначить множитель, фиксированный приз а также добавить Адрес как супер приз. 🏆 \nНапример, вы можете сделать ДЖЕК-ПОТ - на комбинацию 777- и дать приз человеку х10 от ставки и приз - Адрес на какой-нибудь товар в городе. \n🎰 Для игры в SLOT - необходимо настроить выигрышные комбинации.\nЕсли не знаешь, как настроить слоты казино, чтобы не быть в убытке, то вот тебе простая и понятная формула 😘\n✅ Пример расчёта:\nМинимальная ставка составляет 100₽, а общее количество комбинаций в слоте — 64. Значит, максимальная сумма всех возможных призов не должна превышать 100₽ × 64 = 6400₽. Это твой потолок — чтобы казино оставалось прибыльным.\nТеперь эти 6400₽ нужно правильно распределить на выигрышные комбинации.\nПример настройки:\n• BAR-BAR-BAR — x3 к ставке (приз 300₽)\n• LEMON-LEMON-LEMON — фиксированный приз 200₽\n• GRAPE-GRAPE-GRAPE — адрес/товар без выплаты\n• SEVEN-SEVEN-SEVEN — Джекпот: x10 от ставки + адрес (1000₽ + приз)\n• Остальные 60 комбинаций — без выигрыша\nИтоговая сумма всех потенциальных выигрышей — примерно 1500–2000₽, что значительно ниже лимита в 6400₽. Это значит, что ты всегда будешь в плюсе.\nВероятность выигрыша — 1 к 64 на каждую комбинацию, и в среднем выпадает 3–4 приза за 64 броска. Игроки довольны, а ты в прибыли 🧠💸"
  },
  casinoHistory: {
    en: "Casino Game History",
    ru: "Истоория игр в Казино"
  },
  casinoHistoryInfo: {
    en: "To view the history of your clients' Casino games, go to the ADDITIONAL -> CASINO GAME HISTORY menu",
    ru: "Что бы просмотреть историю игр в Казино ваших клиентов перейдите в меню ДОПОЛНИТЕЛЬНО -> ИСТОРИЯ ИГР В КАЗИНО"
  },
  clientsDescription: {
    en: "Client cards and their editing. Go to the CLIENTS section to see a summary of brief information about each client, as well as the ability to export your client database in one of two formats: CSV or XLS.",
    ru: "Карточки клиентов и их редактирование. Переходим в раздел КЛИЕНТЫ и видим сводку короткой информации о каждом, а так же возможность экспорта базы данных ваших клиентов в одном из двух форматов csv или xls."
  },

  clientsDescription1:{
    en:  "вввв" ,
    ru: "Когда клиент пишет в бот - мы создаем карточку клиента в панели. В разделе Клиенты вы можете посмотреть список всех ваших клиентов, которые когда-либо активировали ваш магазин. \n Помимо персональных данных - юзернейма/имени и тд есть еще: Баланс (Текущий баланс клиента в валюте магазина) n\ Скидка (Скидка действующая на всю продукцию в магазине, может быть и отрицательная, тогда цена на товары будет увеличена), n\ Галочка Заблокирован? (Установите галочку и клиент не сможет покупать в вашем магазине), n\ Пригласитель, Получает Рассылку, Получает ОС(Пометка для операторов магазина, этот аккаунт будет получать системные уведомления и тестовые рассылки), n\ Статистика (Кол-во приглашенных, кол-во выполненных пополнений, кол-во покупок), n\ Комментарий (вы можете оставлять любые коментарии по клиенту), Последняя история общения. \ Также есть поле Сообщение (Во вкладке РАЗГОВОР), написав текст туда и нажав кнопку СОХРАНИТЬ, пользователь получит ваше сообщение от имени бота. n\ После успешно выполненной заявки на пополнение мы начисляем сумму на баланс клиента. Также в этот момент мы сохраняем информацию об этом в общую историю изменений по клиенту. Ее посмотреть можно нажав на кнопку ИСТОРИЯ в вверхнем правом углу страницы клиента."
  },
  
  clientsSearch: {
    en: "You can use the search bar to quickly find a client. The search works by the client's Telegram account name, do not confuse it with the username!",
    ru: "Можно воспользоваться поисковой строкой для быстрого поиска клиента, поиск работает по имени телеграмм акаунта, не путайте с username!"
  },
  clientsCardTitle: {
    en: "Open any client card by clicking on their ID",
    ru: "Открываем любую карточку клиента нажатием на его ID"
  },
  clientsCardDescription: {
    en: "Here you can edit each client's access, as well as change their discounts and balances. The most convenient way to refund or quickly credit a client if you don't have an open dispute is in this section (Balance/Discount - Change)",
    ru: "Здесь можно редактировать доступы каждого клиента, а так же менять их скидки и балансы, самый удобный способ возврата или же быстрого начисления клиенту средств в случае если у вас нет открытого диспута происходит как раз в данном разделе (Баланс/Скидка - Изменить)"
  },
  clientsImage1: {
    en: "Business woman with laptop",
    ru: "Деловая женщина с ноутбуком"
  },
  clientsImage2: {
    en: "Business man with laptop",
    ru: "Деловой мужчина с ноутбуком"
  },
  clientsImage3: {
    en: "Business woman on phone",
    ru: "Деловая женщина с телефоном"
  },
  clientsImage4: {
    en: "Business man on phone",
    ru: "Деловой мужчина с телефоном"
  },
  feedbackTitle: {
    en: "Feedback",
    ru: "Обратная связь"
  },
  feedbackDescription: {
    en: "Communication with clients through the bot admin panel",
    ru: "Связь с клиентами через админ-панель бота"
  },
  feedbackInstruction: {
    en: "To set up communication with your clients, add a Support or Submit Request button to one of your menu items. If you're not sure how to do this, re-read the Bot Customization section. If you have connected this button to your menu, clients will be able to leave you messages which will be displayed in the FEEDBACK section.",
    ru: "Для того что бы настроить связь и комуникации с вашими клиентами добавьте в одно из пунктов меню кнопку Поддержка, оставить заявку, если вы не уверены как это сделать перечитайте раздел Кастомизация Бота. Если же вы подключили данную кнопку для вашего меню, клиенты смогут оставлять вам сообщения которые будут показываться у вас в разделе ОБРАТНАЯ СВЯЗЬ"
  },
  sendingMessageTitle: {
    en: "Sending a message to a client",
    ru: "Отправка сообщения клиенту"
  },
  sendingMessageInstruction: {
    en: "- If you don't have a message history with the client you want to message, find them in the CLIENTS menu and click the blue \"Write Message\" button.\n- Use the \"Send\" and \"Write More\" buttons if you don't want to close the dialog window with the client.",
    ru: "- Если у вас еще нет сообщений с клиентом которому вы хотите написать просто найдите его в меню КЛИЕНТЫ и нажмите на синюю кнопку (Написать Сообщение)\n- Используйте кнопку отправить и написать еще если не хотите закрывать окно диалога с клиентом"
  },
  internalChatsTitle: {
    en: "New Feature - Internal Encrypted Chats!",
    ru: "Появилась функция - Внутренние зашифрованные чаты!"
  },
  internalChatsMenuPath: {
    en: "In the menu under ADDITIONAL section, there is now an INTERNAL CHATS option.",
    ru: "В меню в разделе ДОПОЛНИТЕЛЬНО - появился пункт ВНУТРЕННИЕ ЧАТЫ"
  },
  internalChatsAddBranch: {
    en: "Click on ADD MY BRANCH on the right",
    ru: "нажимаем на ДОБАВИТЬ МОЯ ВЕТКА СПРАВА"
  },
  internalChatsDescription: {
    en: "In these chats, you can create a conversation and add your employees to communicate within the panel. While it's not Telegram, you can still communicate effectively. Currently, text messages and images are supported.",
    ru: "в них вы можете создать чат и добавить туда своих сотрудников, с которыми сможете общаться внутри панели. Конечно, это не телеграм, но все таки общаться можно. на данный момент поддерживаются текстовые сообщения и изображения"
  },
  internalChatsInviteButton: {
    en: "You'll also see an \"Invite\" button - this allows you to get an invitation link for any authorized user in the service. For example, this way you can communicate between different stores, not just among your own employees.",
    ru: "Также, там увидите кнопку \"Пригласить\" - по ней вы сможете получить ссылку-приглашение в чат для любого авторизованного пользователя в сервисе. Например, таким образом, вы можете общаться между магазинами, �� не только внутри своих сотрудников."
  },
  internalChatsOwnerCapabilities: {
    en: "The chat creator can always delete it, clear history, or change the name/description.",
    ru: "Создатель чата может всегда удалить его, очистить историю или изменить название/описание."
  },
  internalChatsDescription2: {
    en: "The chat includes a \"Description\" field where you can upload information, similar to a \"Thread in a forum\".",
    ru: "В чате предусмотрено поле с \"Описанием\" - туда вы можете залить какую-то информацию как \"Ветка в форуме\""
  },
  internalChatsChannelOption: {
    en: "You can create such a thread and prohibit communication in it, thus creating a \"Channel\" like in Telegram with news. The creator of such a channel will be able to write comments there. At the same time, you can set the \"send notifications\" checkbox, and when sending a message to the channel, all participants who have a Telegram account connected will receive a notification.",
    ru: "Вы можете создать такую ветку - и запретить в ней общение - таким образом, создав \"Канал\" как в ТГ с новостями. Создатель такого канала сможет писать туда коментарии. При этом, можно установить галочку \"отправлять уведомления\" и при отправке сообщения в канал всем участникам, если у них подключен ТГ-аккаунт будет отправлено уведомление."
  },
  internalChatsGroupOption: {
    en: "In a \"regular group\" where all participants can communicate, the channel creator can notify everyone via Telegram so they read the messages in the chat.",
    ru: "В \"обычной группе\", с возможностью общения всем участникам - создатель канала может уведомить всех по ТГ, для того чтобы они прочитали сообщения в чате."
  },
  internalChatsEncryption: {
    en: "And also, a unique feature - message encryption. The chat/channel creator can encrypt it with their password (I recommend creating long passwords that are impossible to guess).",
    ru: "А также, уникальный функционал - шифрование сообщений. Создатель чата/канала может зашифровать его своим паролем (рекомендую создавать длинные пароли, чтобы их невозможно было подобрать)"
  },
  internalChatsEncryptionDetails: {
    en: "At the same time, your password is not sent to the server but is only used to encrypt messages before sending and decrypt after receiving.",
    ru: "При этом - ваш пароль не отправляется на сервер, а используется лишь для зашифровки сообщений перед отправкой и расшифровки после получения."
  },
  internalChatsServerStorage: {
    en: "All messages are stored on the server in encrypted form! No one, not even the service administrator, can read them.",
    ru: "Все сообщения хранятся на сервере в зашифрованном виде! Никто, даже администратор сервиса, не может прочитать их."
  },
  internalChatsPasswordSharing: {
    en: "After encryption, you need to share your password with other chat participants so they can decrypt and read messages, as well as send them.",
    ru: "После шифрования - вам необходимо передать свой пароль другим участникам чата, для того чтобы они смогли расшифровать его и прочитать сообщения, а также отправлять."
  },
  internalChatsAutoDeletion: {
    en: "The chat has an auto-deletion feature for messages after a certain number of days. I do not recommend using these chats for storing important data, although in the case of encrypted messages, you can store them for as long as you want. The maximum number of days can be set to 300.",
    ru: "В чате предусмотрена функция автоудаления сообщений через определенное кол-во дней. Рекомендую не использовать эти чаты для хранения каких-то важных данных, хотя в случае с зашифрованными сообщениями - можно и хранить сколько угодно. Максимальное кол-во дней можно установить 300."
  },
  purchasesTitle: {
    en: "Processing Orders and Purchases",
    ru: "Обработка заявок и покупок"
  },
  purchasesSubtitle: {
    en: "In this section we will discuss how to work with the PURCHASES section and how to process disputes",
    ru: "В этом разделе поговорим о том как работать в разделе ПОКУПКИ и как обрабатывать диспуты"
  },
  purchasesClientOptions: {
    en: "When a client wants to buy something in your store, they can either top up their balance (in which case the funds will be credited to their internal bot account which they can subsequently spend on your products and casino), or they can select the product they need and pay for it directly.",
    ru: "Когда клиент хочет что то купить в вашем магазине он может либо пополнить баланс и в этом случае средства будут начислены на его внутренний счет бота которые он в последствии сможет тратить на ваши товары и казино, либо он может выбрать нужный ему товар и оплатить его напрямую"
  },
  purchasesSection: {
    en: "PURCHASES:",
    ru: "ПОКУПКИ:"
  },
  purchasesFlowDescription: {
    en: "After topping up the balance, the client makes purchases in your store and the bot accordingly sends them the products. Store employees have access to process only client purchases. Employees can read messages from the client and respond to them through the administrative panel, or through a connected Telegram bot, for employees with the access level 'Dispute Operator'.",
    ru: "После пополнения баланса клиент совершает покупки в вашем магазине и бот соответственно присылает ему продукцию. У сотрудников магазина есть доступ обрабатывать только покупки клиентов. Сотрудники могут читать сообщения от клиента и отвечать ему через административную панель, либо через подключенного тг-бота, для сотрудника с уровнем доступа \"Оператор диспутов\"."
  },
  purchasesDisputeInfo: {
    en: "The client can open a dispute regarding a purchase and provide information about their problem: Disputes are displayed in the 'Purchases' section of the panel's main menu as 'DISPUTE OPENED'.",
    ru: "Клиент может открыть спор по покупке и предоставить информацию по своей проблеме: Споры отображаются в разделе \"Покупки\" главного меню панели. ОТКРЫТ СПОР."
  },
  purchasesStatistics: {
    en: "The statistics show the number of requests, as well as returned requests and rejected disputes. Disputes rejected means that the client opened a dispute, but the operators refused to give them a refund. Returns are disputes that were resolved in the client's favor, with the balance returned to the client's account allowing them to make another purchase with it.",
    ru: "В статистике указано кол-во заявок, а также возвращенные заявки и отклоненные споры. Споров отклонено - это значит, что клиент открыл спор, но операторы отказали ему в возврате. Возвраты - это споры, которые решились в пользу клиента, клиенту вер��улся баланс на счет и он может совершить на него покупку."
  },
  purchasesStatusColumn: {
    en: "In the STATUS column of a purchase, you can immediately see the review and rating that the client left for the purchase.",
    ru: "В колонке СТАТУС покупки можно сразу увидеть отзыв и рейтинг, который оставил клиент за покупку."
  },
  purchasesFilters: {
    en: "There is a filter block in the Purchases section. You can filter purchases by courier, thus viewing their work statistics, as well as client reviews of their work. There are filters by districts, cities, and product types. An important filter is 'operator response required' - this will only show purchases where the client is waiting for a decision from the operator.",
    ru: "В разделе Покупки есть блок фильтров. Вы можете отфильтровать покупки по курьеру, тем самым посмотреть статистику его работы, а так же отзывы от клиентов на ему работу. Есть фильтр по районам, городам, по видам товаров. Важный фильтр \"требуется ответ оператора\" - при э��ом будут показаны только те покупки, по которым клиент ожидает решения от оператора."
  },
  purchasesDisputeOperator: {
    en: "To process purchase disputes, there is an employee access type called 'Dispute Operator'. You can create this in the Employees section of the main menu panel. You need to select the employee type, specify the login and password. You also need to select a city or multiple cities for which the operator will work. Purchase disputes will only come to the operator from the cities that are selected for the operator.",
    ru: "Для обработки споров по покупкам существует вид доступа для сотрудника \"Оператор диспутов\". Создать его можно в разделе Сотрудники, главного меню панели. Необходимо выбрать тип сотрудника, указать логин и пароль. Также необходимо выбрать город или несколько городов, по которым оператор будет работать. Споры по покупкам будут приходить оператору только из тех городов, которые выбраны у оператора."
  },
  purchasesOperatorActions: {
    en: "In the 'dispute opened' section, the operator can interact with the client and also make decisions regarding disputes as shown in the image below.\nArrow 1 - chat\nArrow 2 - full refund\nArrow 3 - close the dispute in favor of the store",
    ru: "В разделе открыт спор оператор может взаимодействовать с клиентом а так же выносить решения касательно диспутов как на фото ниже\nСтрелка 1 - чат\nСтрелка 2 - полный возврат \nСтрелка 3 - закрыть спор в пользу магазина"
  },
  purchasesFullRefund: {
    en: "FULL REFUND - if you have previously filled in penalties and weights in PRODUCT TYPES; the system will automatically apply the penalty you previously set to the courier and return the full cost of the order to the client. The courier's penalty can be changed.",
    ru: "ПОЛНЫЙ ВОЗВРАТ - в случае если вы заранее заполнили штрафы и веса в ВИДЫ ТОВАРОВ; система автоматически выдаст проставленный вами заранее штраф курьеру и вернет полную стоимость заказа клиенту. Штраф курьера можно менять."
  },
  purchasesCloseForStore: {
    en: "CLOSE IN FAVOR OF THE STORE - if you choose this option, you close the dispute in your favor but can also issue a promo code to the client or impose a penalty on your courier, after closing in this way the client can still leave a review.",
    ru: "ЗАКРЫТЬ В ПОЛЬЗУ МАГАЗИНА - в случае выбора данной опции вы закрываете диспут в вашу пользу но так же можете выдать промокод клиенту или же наложить штраф на вашего курьера, после закрытия таким образом клиент все еще может оставить отзыв"
  },
  purchasesHelpBots: {
    en: "To process disputes directly from the Telegram bot, see the section",
    ru: "Для обработки диспутов прямо из телеграмм бота смотри раздел"
  },
  purchasesBalanceRecommendation: {
    en: "We also recommend familiarizing yourself with the section if you are an administrator",
    ru: "Так же рекомендуем ознакомиться с обработкой заявок на пополнение если вы администратор в"
  },
  helpBotsLink: {
    en: "HELPER BOTS",
    ru: "БОТЫ ПОМОЩНИКИ"
  },
  balanceTopUpsLink: {
    en: "BALANCE TOP-UPS",
    ru: "ПОПОЛНЕНИЯ БАЛАНСОВ"
  },
  "Disputes in the Purchases section": {
    en: "Disputes in the Purchases section",
    ru: "Споры в разделе Покупки"
  },
  "Purchase status with reviews": {
    en: "Purchase status with reviews",
    ru: "Статус покупки с отзывами"
  },
  "Filters in purchases section": {
    en: "Filters in purchases section",
    ru: "Фильтры в разделе покупок"
  },
  "Creating dispute operator": {
    en: "Creating dispute operator",
    ru: "Создание оператора диспутов"
  },
  "Dispute resolution options": {
    en: "Dispute resolution options",
    ru: "Варианты решения спора"
  },
  "Full refund interface": {
    en: "Full refund interface",
    ru: "Интерфейс полного возврата"
  },
  "Close in favor of store interface": {
    en: "Close in favor of store interface",
    ru: "Интерфейс закрытия в пользу магазина"
  },
  telegramOperatorTitle: {
    en: "Connecting via Telegram Operator",
    ru: "Связь через телеграмм аккаунт оператора"
  },
  telegramOperatorInstruction: {
    en: "You can also add a button in your bot that links to your operator's Telegram account to maintain communication with your clients outside of the admin panel.",
    ru: "Так же у вас есть возможность добавить кнопку в боте ведущую на телеграмм аккаунт оператора что бы иметь связь со своими клиентами вне панели администратора"
  },
  usdtTitle: {
    en: "USDT",
    ru: "USDT"
  },
  usdtPayments: {
    en: "USDT Payments",
    ru: "Оплаты в USDT"
  },
  usdtSetupInstructions: {
    en: "To enable USDT payments in your store, you need to go to the STORES-ALL STORES section, select your store, go to the EXCHANGER SETTINGS menu and check the box next to USDT as a payment method.",
    ru: "Чо бы в вашем магазине работала оплата в USDT необходимо зайти в раздел МАГАЗИНЫ-ВСЕ МАГАЗИНЫ, выбрать, перейти в меню НАСТРОЙКИ ОБМЕННИКА и поставить галочку около USDT как способа оплаты"
  },
  usdtAdditionalMenu: {
    en: "After that, go to the ADDITIONAL - USDT TRC20 menu as shown in the photo.",
    ru: "После этого чпереходим в меню ДОПОЛНИТЕЛЬНО - USDT TRC20 как на фото"
  },
  usdtAddWallet: {
    en: "In this section, click ADD in the upper right corner of the page and fill in all the information as shown in the photos. After that, all your USDT wallets will be displayed in this section:",
    ru: "В данном разделе нажимаем ДОБАВИТЬ сверху справа страницы и заполняем все данные как показано на фото после чего все ваши USDT кошельки будут отображаться в данном разделе:"
  },
  // New translations for the Balance Top-Ups page
  balanceTopUpsTitle: {
    en: "Balance Top-Ups",
    ru: "Пополнения Баланса"
  },
  balanceTopUpsSubtitle: {
    en: "In this section, you will receive notifications about all top-ups from your clients",
    ru: "В данный раздел будут приходить уведомления о всех пополнениях от ваших клиентов"
  },
  balanceTopUpsDescription: {
    en: "On the left side, you will see all the information about the client who creates a top-up request, and on the right side of the screen, you will see the status and possible dispute for this request.",
    ru: "Слева вы будете видеть всю информацию о клиенте который создает заявку на пополнение, а в правой части экрана будет как раз статус и возможный диспут по данной заявке"
  },
  balanceTopUpsImage: {
    en: "Balance top-up interface",
    ru: "Интерфейс пополнения баланса"
  },
  balanceTopUpsMostCommonIssue: {
    en: "The most common problem in the BALANCE TOP-UPS section is requests that were paid with an incorrect amount. If this happens, the request will not be completed, and the client will likely notify you through feedback. In this case, you need to follow a few simple steps:",
    ru: "Самая частая проблема в разделе ПОПОЛНЕНИЯ БАЛАНСОВ это заявки которые были оплачены неверной суммой, если такое происходит заявка не выполнится и клиент скорее всего оповестит вас через обратную связь В данном случае нужно выполнить несколько простых шагов:"
  },
  balanceTopUpsServicePayment: {
    en: "If the client made a top-up using the service details - LTC, BTC / some cards, you need to:",
    ru: "Если клиент совершал пополнение используя реквизиты сервиса - LTC BTC / некоторые карты вам необходимо"
  },
  balanceTopUpsCheckTransaction: {
    en: "Check that the client is not lying and their transaction is visible in the blockchain network with the incorrect amount. For this, you can click directly in the bot on the details the client paid with.",
    ru: "Проверить что клиент не врет и его транзакция видна в сети blockchain с неверной суммой для этого вы можете нажать прямо в боте на реквизиты по которым оплачивал клиент"
  },
  balanceTopUpsOpenDispute: {
    en: "Open a dispute for this request",
    ru: "Открыть диспут по данной заявке"
  },
  balanceTopUpsDisputeImage: {
    en: "Open dispute interface",
    ru: "Интерфейс открытия диспута"
  },
  balanceTopUpsUsdtPayment: {
    en: "If the client paid for the request using USDT, you must:",
    ru: "Если же клиент оплачивал заявку используя USDT вы должны"
  },
  balanceTopUpsCheckUsdtTransaction: {
    en: "Check the receipt on your wallet and make sure that the client sent the incorrect amount, and is not trying to deceive you.",
    ru: "Проверить поступление на свой кошелек и убедиться что клиент отправил неверную сумму, а не хочет вас наебать"
  },
  balanceTopUpsProcessApplication: {
    en: "In the balance top-up section, find the needed request and either process it manually if the difference in amounts is minimal and acceptable to you (green arrow), or open the request (red arrow) and change the amount inside as shown in the second screenshot, then process it manually.",
    ru: "В разделе пополнения баланса найти нужную заявку и либо провести руками если разница в суммах минимальная и вас все устраивает - зеленая стрелка либо открыть заявку - красная стрелка и поменять внутри сумму как показано на втором скриншоте после чего провести руками"
  },
  balanceTopUpsCarouselImage1: {
    en: "Process request interface",
    ru: "Интерфейс обработки заявки"
  },
  balanceTopUpsCarouselImage2: {
    en: "Change amount interface",
    ru: "Интерфейс изменения суммы"
  },
  balanceTopUpsRecommendation: {
    en: "We recommend familiarizing yourself with the following section for connecting ",
    ru: "Советуем ознакомиться со следующим разделом для подключения оплат в "
  },
  balanceTopUpsFilters: {
    en: "To search for the request you need, you can use convenient filters",
    ru: "Для поиска нужной вам заявки можно воспользоваться удобными фильтрами"
  },
  balanceTopUpsFiltersImage: {
    en: "Request filters interface",
    ru: "Интерфейс фильтров заявок"
  },
  balanceTopUpsBalanceHistory: {
    en: "There is also a convenient section where information about any changes in client balances is logged. The section is located in ADDITIONAL - BALANCE CHANGE HISTORY.",
    ru: "Так же существует удобный раздел в который логируется информация о любых изменениях в балансах клиентов раздел находится в ДОПОЛНИТЕЛЬНО - ИСТОРИЯ ИЗМЕНЕНИЯ БАЛАНСОВ."
  },
  // New translations for Couriers Salary page
  couriersSalaryTitle: {
    en: "Salary/Penalties",
    ru: "Начисления/Штрафы"
  },
  couriersSalaryDescription1: {
    en: "For each courier, you can create an employee with access to the panel and/or to the TG helper bot. Also, for each product type, you can configure the Salary and Penalty for the courier by default. WAREHOUSE - PRODUCT TYPES - open any and go to the Courier/Profit section",
    ru: "Для каждого курьера вы можете создать сотрудника с доступом в панель и/или к ТГ-боту помощнику. Так же для каждого вида товаров вы можете настроить Зарплату и Штраф для курьера по умолчанию. СКЛАД - ВИДЫ ТОВАРОВ - открываем любой и идем в раздел Курьер/Прибыль"
  },
  couriersSalaryDescription2: {
    en: "Also in the Couriers section, within each courier, you can configure specific Salary/Penalty settings for the desired product type for this courier.",
    ru: "Также в разделе Курьеры, внутри каждого курьера вы можете настроить для нужного вида товаров свои определенные настройки Зарплаты/Штрафа для данного курьера."
  },
  couriersSalaryDescription3: {
    en: "For each completed purchase, the courier will be credited to their account. If operators resolve a dispute in favor of the client and choose to penalize the courier, then this amount will be deducted from the account.",
    ru: "За каждую выполненную покупку курьеру будет производится начисление на его счет. Если операторы решают спор в пользу клиента и выбирают штраф курьеру - тогда эта сумма будет списана со счета."
  },
  couriersSalaryDescription4: {
    en: "In the Couriers section, you can view the current balances of couriers and also withdraw or credit funds to their account with a comment.",
    ru: "В разделе Курьеры можно посмотреть текущие балансы курьеров а также произвести списание или начисление средств на его счет с указанием комментария."
  },
  couriersSalaryDescription5: {
    en: "When withdrawing funds from a courier's account, you need to send the funds to the courier yourself. This accounting system only calculates the profit - you will have to make the payment yourself in any convenient currency.",
    ru: "При списании средств со счета курьера, сами средства вам необходимо самостоятельно отправить курьеру. Данная система учета лишь считает прибыль - отправку производить вам придется самим любой удобной валютой."
  },
  couriersSalaryDescription6: {
    en: "To pay salaries to couriers in RUB, you can use our \"Withdraw in RUB\" module on the main page of the panel.",
    ru: "Для выплаты курьерам зарплаты в РУБ вы можете воспользоваться нашим модулем \"Вывод в RUB\" на главной странице панели."
  },
  couriersSalaryProductTypeAlt: {
    en: "Courier profit settings in product types",
    ru: "Настройки прибыли курьера в видах товаров"
  },
  couriersSalarySettingsAlt: {
    en: "Courier specific salary and penalty settings",
    ru: "Специфические настройки зарплаты и штрафа курьера"
  },
  courierSalaryBalanceAlt: {
    en: "Courier balance management interface",
    ru: "Интерфейс управления балансом курьера"
  },
  courierSalaryLogsAlt: {
    en: "Courier payment logs",
    ru: "Логи платежей курьера"
  }
};

/**
 * Custom hook to use both the original translations from LanguageContext,
 * the new translations from translations.ts, and local translations
 * 
 * Usage:
 * const { t, tNew, tLocal, language } = useTranslations();
 * 
 * t() - Original translation function from LanguageContext
 * tNew() - New translation function from translations.ts
 * tLocal() - Local translation function for component-specific translations
 */
export const useTranslations = () => {
  const { t, language } = useLanguage();
  
  // Create a translator with the current language
  const tNew = createTranslator(language);
  
  // Local translation function
  const tLocal = (key: keyof LocalTranslations) => {
    return localTranslations[key][language] || key;
  };
  
  return {
    t,       // Original translation function
    tNew,    // New translation function
    tLocal,  // Local translation function
    language // Current language
  };
};

export default useTranslations;
