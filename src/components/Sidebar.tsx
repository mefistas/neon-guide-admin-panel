
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Building, HelpCircle, Headset, Dices, ExternalLink, Menu, Tag, MessageSquare, Star, TrendingUp, Wallet, Book } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import useTranslations from '@/hooks/useTranslations';

const Sidebar = () => {
  const { t } = useLanguage();
  const { tNew } = useTranslations();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path: string) => location.pathname === path;

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

        {/* Detailed Guide - Direct link */}
        <Link
          to="/detailed-guide"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/detailed-guide') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300',
            !sidebarOpen && "justify-center"
          )}
        >
          <Book size={20} className={cn("mr-3", !sidebarOpen && "mr-0")} />
          {sidebarOpen && t('detailedGuide')}
        </Link>

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
