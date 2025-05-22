
import React from 'react';
import Sidebar from './Sidebar';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import SearchBar from './SearchBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-blue-50/50 dark:bg-background text-gray-800 dark:text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-end gap-2 px-6 border-b border-blue-100 dark:border-border bg-white dark:bg-background shadow-sm">
          <SearchBar />
          <ThemeSwitcher />
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
