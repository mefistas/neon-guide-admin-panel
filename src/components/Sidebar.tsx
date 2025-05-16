
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Bot, Building, HelpCircle, CreditCard, Dices } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>('firstSteps');

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const isActive = (path: string) => location.pathname === path;

  const firstStepsSubItems = [
    { key: 'howToAddCity', path: '/how-to-add-city', icon: <Building size={18} /> },
    { key: 'howToAddDistrict', path: '/how-to-add-district', icon: <Building size={18} /> },
    { key: 'howToAddCourier', path: '/how-to-add-courier', icon: <Building size={18} /> },
    { key: 'howToCreateProductGroup', path: '/how-to-create-product-group', icon: <Building size={18} /> },
    { key: 'howToCreateProductTypes', path: '/how-to-create-product-types', icon: <Building size={18} /> },
    { key: 'howToAddAddress', path: '/how-to-add-address', icon: <Building size={18} /> },
    { key: 'howToAddBots', path: '/how-to-add-bots', icon: <Bot size={18} /> },
  ];

  return (
    <div className="h-screen w-64 bg-black/50 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <Link to="/" className="block">
          <h1 className="text-xl font-semibold neon-text">{t('adminPanelTutorial')}</h1>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {/* First Steps menu with dropdown */}
        <div>
          <button
            onClick={() => toggleMenu('firstSteps')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-800/50 transition-colors",
              expandedMenu === 'firstSteps' ? 'text-neonBlue' : 'text-gray-300'
            )}
          >
            <span className="flex items-center gap-2">
              <Bot size={20} />
              {t('firstSteps')}
            </span>
            {expandedMenu === 'firstSteps' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedMenu === 'firstSteps' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-black/30">
              {firstStepsSubItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors",
                    isActive(item.path) ? 'sidebar-active' : 'text-gray-400 hover:text-white'
                  )}
                >
                  {item.icon}
                  <span>{t(item.key)}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Casino Setup */}
        <Link
          to="/casino-setup"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/casino-setup') ? 'sidebar-active' : 'text-gray-300'
          )}
        >
          <Dices size={20} className="mr-3" />
          {t('casinoSetup')}
        </Link>

        {/* Cards Payment */}
        <Link
          to="/cards-payments"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/cards-payments') ? 'sidebar-active' : 'text-gray-300'
          )}
        >
          <CreditCard size={20} className="mr-3" />
          {t('cardsPayments')}
        </Link>

        {/* Ask a Question */}
        <Link
          to="/ask-question"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/ask-question') ? 'sidebar-active' : 'text-gray-300'
          )}
        >
          <HelpCircle size={20} className="mr-3" />
          {t('askQuestion')}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
