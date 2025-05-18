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
    ru: "🎰 Тут машина SLOT - с комбинацией из 3х картинок - BAR, LEMON, GRAPE, SEVEN 🔢 Тут всего 64 различных вариации - на любую из них можно назначить множитель, фиксированный приз а также добавить Адрес как супер приз. 🏆 \nНапример, вы можете сделать ДЖЕК-ПОТ - на комбинацию 777 - и дать приз человеку х10 от ставки и приз - Адрес на какой-нибудь товар в городе.\n🎰 Для игры в SLOT - необходимо настроить выигрышные комбинации."
  },
  casinoHistory: {
    en: "Casino Game History",
    ru: "Ис��ория игр в Казино"
  },
  casinoHistoryInfo: {
    en: "To view the history of your clients' Casino games, go to the ADDITIONAL -> CASINO GAME HISTORY menu",
    ru: "Что бы просмотреть историю игр в Казино ваших клиентов перейдите в меню ДОПОЛНИТЕЛЬНО -> ИСТОРИЯ ИГР В КАЗИНО"
  },
  clientsDescription: {
    en: "Client cards and their editing. Go to the CLIENTS section to see a summary of brief information about each client, as well as the ability to export your client database in one of two formats: CSV or XLS.",
    ru: "Карточки клиентов и их редактирование. Переходим в раздел КЛИЕНТЫ и видим сводку короткой информации о каждом, а так же возможность экспорта базы данных ваших клиентов в одном из двух форматов csv или xls."
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
    ru: "Также, там увидите кнопку \"Пригласить\" - по ней вы сможете получить ссылку-приглашение в чат для любого авторизованного пользователя в сервисе. Например, таким образом, вы можете общаться между магазинами, а не только внутри своих сотрудников."
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
