
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
        <h1 className="text-3xl text-white font-bold mb-6 pl-4 border-l-4 border-[#5eaaa8]">{title}</h1>
        {children}
      </div>
    </Layout>
  );
};

export default TutorialPage;
