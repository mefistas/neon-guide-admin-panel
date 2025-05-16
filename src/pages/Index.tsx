
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 neon-text">{t('welcome')}</h1>
        <div className="bg-black/40 p-8 rounded-lg neon-border">
          <p className="text-xl">{t('selectTopic')}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
