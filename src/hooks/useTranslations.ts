
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
  storeSetupDescription: {
    en: string;
    ru: string;
  };
  configurationSteps: {
    en: string;
    ru: string;
  };
  gameChanceInfo: {
    en: string;
    ru: string;
  };
  slotMachineInfo: {
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
    ru: "Настройка Казино в вашем магазине"
  },
  storeSetupDescription: {
    en: "To add a Casino section to your bot menu:",
    ru: "Чтобы добавить раздел Казино в меню вашего бота:"
  },
  configurationSteps: {
    en: "Go to STORES -> ALL STORES -> select a store\nIn the Language/Menu section, add a new item, set the line number, name it CASINO and select casino from the action menu\nAfter creating the button, go to the Casino section and check the games you would like to see in your bot\nIMPORTANT: If at least one game is not selected, the casino will disappear from your bot's menu. You also need to set the minimum and maximum bets.",
    ru: "Переходим в раздел МАГАЗИНЫ -> ВСЕ МАГАЗИНЫ -> выбираем магазин\nВ разделе Язык/Меню добавляем новый пункт, проставляем номер строки, называем КАЗИНО и выбираем из пункта действия казино соответственно\nКогда кнопка создана идем в раздел Казино и ставим галочки напротив игр которые мы бы хотели видеть в нашем боте\nВАЖНО: если галочка не будет стоять хотя бы около одной игры, казино пропадает из меню вашего бота, так же необходимо настроить минимальную и максимальную ставку"
  },
  gameChanceInfo: {
    en: "These games have a 1 in 6 chance of winning. I recommend setting the bonus for winning at x3 - and you will always be in profit.",
    ru: "У этих игр - шанс на победу 1 к 6. Бонус за победу рекомендую ставить х3 - и вы в любом случае будете в плюсе."
  },
  slotMachineInfo: {
    en: "Slot Machines! - Here is the SLOT machine - with a combination of 3 pictures - BAR, LEMON, GRAPE, SEVEN. There are 64 different variations in total - you can assign a multiplier, a fixed prize, and also add an Address as a super prize for any of them. For example, you can make a JACKPOT - for the 777 combination - and give a person a prize of x10 of the bet and a prize - Address for some product in the city. To play SLOT - you need to configure the winning combinations.",
    ru: "Игровые автоматы! - Тут машина SLOT - с комбинацией из 3х картинок - BAR, LEMON, GRAPE, SEVEN. Тут всего 64 различных вариации - на любую из них можно назначить множитель, фиксированный приз а также добавить Адрес как супер приз. Например, вы можете сделать ДЖЕК-ПОТ - на комбинацию 777 - и дать приз человеку х10 от ставки и приз - Адрес на какой-нибудь товар в городе. Для игры в SLOT - необходимо настроить выигрышные комбинации."
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
