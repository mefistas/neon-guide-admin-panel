import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Bot, Building, HelpCircle, Headset, Dices, ExternalLink, Menu, Tag, Bitcoin, History, MessageSquare, Star, TrendingUp, Wallet } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import useTranslations from '@/hooks/useTranslations';

const Sidebar = () => {
  const { t } = useLanguage();
  const { tNew } = useTranslations();
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>('detailedGuide');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  // Items for the detailed guide section
  const detailedGuideSubItems = [
    { key: 'howToAddCity', path: '/how-to-add-city', icon: <Building size={18} /> },
    { key: 'howToAddDistrict', path: '/how-to-add-district', icon: <Building size={18} /> },
    { key: 'howToAddCourier', path: '/how-to-add-courier', icon: <Building size={18} /> },
    { key: 'howToCreateProductGroup', path: '/how-to-create-product-group', icon: <Building size={18} /> },
    { key: 'howToCreateProductTypes', path: '/how-to-create-product-types', icon: <Building size={18} /> },
    { key: 'howToAddAddress', path: '/how-to-add-address', icon: <Building size={18} /> },
    { key: 'howToAddBots', path: '/how-to-add-bots', icon: <Bot size={18} /> },
    { key: 'oneTimeDiscounts', path: '/one-time-discounts', icon: <Tag size={18} /> },
    { key: 'btcCashout', path: '/btc-cashout', icon: <Bitcoin size={18} /> },
    { key: 'balanceHistory', path: '/balance-history', icon: <History size={18} /> },
    { key: 'internalChats', path: '/internal-chats', icon: <MessageSquare size={18} /> },
    { key: 'reviews', path: '/reviews', icon: <Star size={18} /> },
    { key: 'masterKlad', path: '/master-klad', icon: <Building size={18} /> },
    { key: 'workers', path: '/workers', icon: <Building size={18} /> },
    { key: 'clients', path: '/clients', icon: <Building size={18} /> },
    { key: 'purchases', path: '/purchases', icon: <Building size={18} /> },
    { key: 'balanceTopUps', path: '/balance-top-ups', icon: <Building size={18} /> },
    { key: 'messages', path: '/messages', icon: <Building size={18} /> },
    { key: 'web', path: '/web', icon: <Building size={18} /> },
    { key: 'couriersSalary', path: '/couriers-salary', icon: <Building size={18} /> },
    { key: 'usdt', path: '/usdt', icon: <Building size={18} /> },
    { key: 'partnersExchangers', path: '/partners-exchangers', icon: <Building size={18} /> },
  ];

  return (
    <div className={cn(
      "relative h-screen border-r border-gray-800 flex flex-col transition-all duration-300",
      sidebarOpen ? "w-64" : "w-16"
    )}>
      {/* Toggle button for sidebar */}
      <button 
        onClick={toggleSidebar} 
        className="absolute -right-3 top-4 bg-gray-800 rounded-full p-1 text-white shadow-lg z-10"
      >
        <Menu size={16} />
      </button>

      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        {sidebarOpen ? (
          <Link to="/" className="block">
            <h1 className="text-xl font-semibold text-white">{t('adminPanelTutorial')}</h1>
          </Link>
        ) : (
          <Link to="/" className="block mx-auto">
            <Bot size={24} className="text-white" />
          </Link>
        )}
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {/* Quick Start - Direct Link */}
        <Link
          to="/quick-start"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/quick-start') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <Bot size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && t('quickStart')}
        </Link>

        {/* Custom Bot - Direct link */}
        <Link
          to="/custom-bot"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/custom-bot') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <Bot size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && tNew('customBotTitle')}
        </Link>

        {/* Finance - Moved up in the order */}
        <Link
          to="/finance"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/finance') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <Wallet size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && tNew('financeTitle')}
        </Link>

        {/* Marketing - Moved up in the order */}
        <Link
          to="/marketing"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/marketing') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <TrendingUp size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && tNew('marketingTitle')}
        </Link>

        {/* Operator Work - Changed icon to HeadsetHelp */}
        <Link
          to="/cards-payments"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/cards-payments') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <Headset size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && tNew('operatorWorkTitle')}
        </Link>

        {/* Casino Setup - Moved down in the order */}
        <Link
          to="/casino-setup"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/casino-setup') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <Dices size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && t('casinoSetup')}
        </Link>

        {/* Detailed Guide menu */}
        <div>
          <button
            onClick={() => toggleMenu('detailedGuide')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-800/50 transition-colors",
              expandedMenu === 'detailedGuide' ? 'text-white font-medium' : 'text-gray-300',
              !sidebarOpen && "justify-center"
            )}
          >
            <span className="flex items-center gap-2">
              <Bot size={20} />
              {sidebarOpen && t('detailedGuide')}
            </span>
            {sidebarOpen && (expandedMenu === 'detailedGuide' ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
          </button>
          {expandedMenu === 'detailedGuide' && sidebarOpen && (
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

        {/* Ask a Question - External Link */}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors",
            !sidebarOpen && "justify-center"
          )}
        >
          <HelpCircle size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && (
            <>
              {t('askQuestion')}
              <ExternalLink size={16} className="ml-2" />
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
