
import React from 'react';
import Sidebar from './Sidebar';
import LanguageSwitcher from './LanguageSwitcher';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-darkBg text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-end px-6 border-b border-gray-800">
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
