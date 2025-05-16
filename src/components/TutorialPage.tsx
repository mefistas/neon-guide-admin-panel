import React from 'react';
import Layout from '@/components/Layout';

interface TutorialPageProps {
  title: string;
  children: React.ReactNode;
}

const TutorialPage: React.FC<TutorialPageProps> = ({ title, children }) => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-white font-bold mb-6">{title}</h1>
        <div className="bg-gray-900/70 p-6 rounded-lg formal-border">
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default TutorialPage;

