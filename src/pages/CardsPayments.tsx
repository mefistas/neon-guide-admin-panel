
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import useTranslations from '@/hooks/useTranslations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CardsPayments = () => {
  const { language } = useLanguage();
  const { t, tNew } = useTranslations();

  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-3xl text-white font-bold mb-8 pl-4 border-l-4 border-[#7E69AB]">
          {t('cardsPayments')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-gray-700 transition-all hover:border-[#7E69AB]">
            <CardHeader>
              <CardTitle>
                <Link 
                  to="/merchants" 
                  className="text-white hover:text-[#7E69AB] flex flex-row items-center cursor-pointer"
                >
                  {t('merchants')}
                </Link>
              </CardTitle>
              <CardDescription>
                {t('merchantsDesc')}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800 border-gray-700 transition-all hover:border-[#7E69AB]">
            <CardHeader>
              <CardTitle>
                <Link 
                  to="/master-klad" 
                  className="text-white hover:text-[#7E69AB] flex flex-row items-center cursor-pointer"
                >
                  {t('masterKlad')}
                </Link>
              </CardTitle>
              <CardDescription>
                {t('masterKladDesc')}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800 border-gray-700 transition-all hover:border-[#7E69AB]">
            <CardHeader>
              <CardTitle>
                <Link 
                  to={language === 'ru' ? "/preorders-ru" : "/preorders"} 
                  className="text-white hover:text-[#7E69AB] flex flex-row items-center cursor-pointer"
                >
                  {tNew('preorders')}
                </Link>
              </CardTitle>
              <CardDescription>
                {tNew('preordersDesc')}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800 border-gray-700 transition-all hover:border-[#7E69AB]">
            <CardHeader>
              <CardTitle>
                <Link 
                  to={language === 'ru' ? "/addresses-ru" : "/addresses"} 
                  className="text-white hover:text-[#7E69AB] flex flex-row items-center cursor-pointer"
                >
                  {tNew('addresses')}
                </Link>
              </CardTitle>
              <CardDescription>
                {tNew('addressesDesc')}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          {t('faq')}
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-gray-700 rounded-lg bg-gray-800 px-6">
            <AccordionTrigger className="text-white hover:text-[#7E69AB]">
              {t('faqQuestion1')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {t('faqAnswer1')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-700 rounded-lg bg-gray-800 px-6">
            <AccordionTrigger className="text-white hover:text-[#7E69AB]">
              {t('faqQuestion2')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {t('faqAnswer2')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-700 rounded-lg bg-gray-800 px-6">
            <AccordionTrigger className="text-white hover:text-[#7E69AB]">
              {t('faqQuestion3')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {t('faqAnswer3')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default CardsPayments;
