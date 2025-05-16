
import React from 'react';
import Sidebar from './Sidebar';
import LanguageSwitcher from './LanguageSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex h-screen overflow-hidden bg-darkBg text-white">
      {/* Conditionally render sidebar based on mobile state */}
      <Sidebar isOpen={!isMobile || sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white"
            >
              <Menu size={24} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          <div className="flex-1" />
          <LanguageSwitcher />
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
