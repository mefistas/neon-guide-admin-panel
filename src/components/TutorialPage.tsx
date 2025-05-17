
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
        {children}
      </div>
    </Layout>
  );
};

export default TutorialPage;
