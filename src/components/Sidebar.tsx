
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Bot, Building, HelpCircle, CreditCard, Dices, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>('detailedGuide');

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const isActive = (path: string) => location.pathname === path;

  // Items for the detailed guide section (previously firstSteps)
  const detailedGuideSubItems = [
    { key: 'howToAddCity', path: '/how-to-add-city', icon: <Building size={18} /> },
    { key: 'howToAddDistrict', path: '/how-to-add-district', icon: <Building size={18} /> },
    { key: 'howToAddCourier', path: '/how-to-add-courier', icon: <Building size={18} /> },
    { key: 'howToCreateProductGroup', path: '/how-to-create-product-group', icon: <Building size={18} /> },
    { key: 'howToCreateProductTypes', path: '/how-to-create-product-types', icon: <Building size={18} /> },
    { key: 'howToAddAddress', path: '/how-to-add-address', icon: <Building size={18} /> },
    { key: 'howToAddBots', path: '/how-to-add-bots', icon: <Bot size={18} /> },
  ];

  // Quick start items
  const quickStartSubItems = [
    { key: 'quickStartOverview', path: '/quick-start-overview', icon: <Building size={18} /> },
    { key: 'basicSetup', path: '/basic-setup', icon: <Building size={18} /> },
  ];

  return (
    <div className="h-screen w-64 bg-black border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <Link to="/" className="block">
          <h1 className="text-xl font-semibold text-white">{t('adminPanelTutorial')}</h1>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {/* Quick Start menu - New */}
        <div>
          <button
            onClick={() => toggleMenu('quickStart')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-800/50 transition-colors",
              expandedMenu === 'quickStart' ? 'text-white font-medium' : 'text-gray-300'
            )}
          >
            <span className="flex items-center gap-2">
              <Bot size={20} />
              {t('quickStart')}
            </span>
            {expandedMenu === 'quickStart' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedMenu === 'quickStart' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-black/30">
              {quickStartSubItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors",
                    isActive(item.path) ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-400 hover:text-white'
                  )}
                >
                  {item.icon}
                  <span>{t(item.key)}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Detailed Guide menu (formerly First Steps) */}
        <div>
          <button
            onClick={() => toggleMenu('detailedGuide')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-800/50 transition-colors",
              expandedMenu === 'detailedGuide' ? 'text-white font-medium' : 'text-gray-300'
            )}
          >
            <span className="flex items-center gap-2">
              <Bot size={20} />
              {t('detailedGuide')}
            </span>
            {expandedMenu === 'detailedGuide' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedMenu === 'detailedGuide' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-black/30">
              {detailedGuideSubItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors",
                    isActive(item.path) ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-400 hover:text-white'
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
            isActive('/casino-setup') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300'
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
            isActive('/cards-payments') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300'
          )}
        >
          <CreditCard size={20} className="mr-3" />
          {t('cardsPayments')}
        </Link>

        {/* Ask a Question - External Link */}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
        >
          <HelpCircle size={20} className="mr-3" />
          {t('askQuestion')}
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
