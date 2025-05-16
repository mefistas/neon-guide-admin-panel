
import React from 'react';
import Layout from './Layout';
import { cn } from '@/lib/utils';

interface TutorialPageProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TutorialPage: React.FC<TutorialPageProps> = ({ title, children, className }) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 neon-text">{title}</h1>
        <div className={cn("bg-black/40 p-6 rounded-lg neon-border", className)}>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default TutorialPage;
