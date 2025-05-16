
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Bot, Building, HelpCircle, CreditCard, Dices, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
import { Sheet, SheetContent } from './ui/sheet';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>('detailedGuide');
  const isMobile = useIsMobile();

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

  const sidebarContent = (
    <>
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <Link to="/" className="block">
          <h1 className="text-xl font-semibold text-white">{t('adminPanelTutorial')}</h1>
        </Link>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {/* Quick Start - Direct Link */}
        <Link
          to="/quick-start"
          className={cn(
            "flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors",
            isActive('/quick-start') ? 'bg-gray-800 text-white border-l-2 border-white' : 'text-gray-300'
          )}
          onClick={isMobile ? onClose : undefined}
        >
          <Bot size={20} className="mr-3" />
          {t('quickStart')}
        </Link>

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
                  onClick={isMobile ? onClose : undefined}
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
          onClick={isMobile ? onClose : undefined}
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
          onClick={isMobile ? onClose : undefined}
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
    </>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent side="left" className="w-64 p-0 bg-black border-r border-gray-800 text-white">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop sidebar
  return isOpen ? (
    <div className="h-screen w-64 bg-black border-r border-gray-800 flex flex-col">
      {sidebarContent}
    </div>
  ) : null;
};

export default Sidebar;
