
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import BasicSetup from '@/pages/BasicSetup';
import HowToAddBots from '@/pages/HowToAddBots';
import HowToAddCity from '@/pages/HowToAddCity';
import HowToAddCourier from '@/pages/HowToAddCourier';
import HowToAddDistrict from '@/pages/HowToAddDistrict';
import HowToCreateProductGroup from '@/pages/HowToCreateProductGroup';
import HowToCreateProductTypes from '@/pages/HowToCreateProductTypes';
import HowToAddAddress from '@/pages/HowToAddAddress';
import QuickStart from '@/pages/QuickStart';
import QuickStartOverview from '@/pages/QuickStartOverview';
import Reviews from '@/pages/Reviews';
import Merchants from '@/pages/Merchants';
import MasterKlad from '@/pages/MasterKlad';
import Web from '@/pages/Web';
import Messages from '@/pages/Messages';
import Marketing from '@/pages/Marketing';
import MarketingPage from '@/pages/MarketingPage';
import CardsPayments from '@/pages/CardsPayments';
import Finance from '@/pages/Finance';
import CustomBot from '@/pages/CustomBot';
import AskQuestion from '@/pages/AskQuestion';
import WithdrawFunds from '@/pages/WithdrawFunds';
import HappyHours from '@/pages/HappyHours';
import Purchases from '@/pages/Purchases';
import PromoCodes from '@/pages/PromoCodes';
import CasinoSetup from '@/pages/CasinoSetup';
import CumulativeDiscounts from '@/pages/CumulativeDiscounts';
import OneTimeDiscounts from '@/pages/OneTimeDiscounts';
import Promotions from '@/pages/Promotions';
import BalanceTopUps from '@/pages/BalanceTopUps';
import CouriersSalary from '@/pages/CouriersSalary';
import AutoForwarding from '@/pages/AutoForwarding';
import Usdt from '@/pages/Usdt';
import BtcCashout from '@/pages/BtcCashout';
import PartnersExchangers from '@/pages/PartnersExchangers';
import HelpBots from '@/pages/HelpBots';
import Workers from '@/pages/Workers';
import Clients from '@/pages/Clients';
import InternalChats from '@/pages/InternalChats';
import Feedback from '@/pages/Feedback';
import Mailouts from '@/pages/Mailouts';
import Preorders from '@/pages/Preorders';
import Addresses from '@/pages/Addresses';
import MustSubscribe from '@/pages/MustSubscribe';
import PreordersRu from '@/pages/PreordersRu';
import AddressesRu from '@/pages/AddressesRu';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './App.css';

function App() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Auto redirect based on language
  useEffect(() => {
    const path = location.pathname;
    
    // Only redirect for preorders and addresses paths
    if (path === '/preorders') {
      if (language === 'ru') {
        navigate('/preorders-ru');
      }
    } else if (path === '/preorders-ru') {
      if (language === 'en') {
        navigate('/preorders');
      }
    } else if (path === '/addresses') {
      if (language === 'ru') {
        navigate('/addresses-ru');
      }
    } else if (path === '/addresses-ru') {
      if (language === 'en') {
        navigate('/addresses');
      }
    }
  }, [language, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/quickstart" element={<QuickStart />} />
      <Route path="/quickstart-overview" element={<QuickStartOverview />} />
      <Route path="/basic-setup" element={<BasicSetup />} />
      <Route path="/how-to-add-bots" element={<HowToAddBots />} />
      <Route path="/how-to-add-city" element={<HowToAddCity />} />
      <Route path="/how-to-add-courier" element={<HowToAddCourier />} />
      <Route path="/how-to-add-district" element={<HowToAddDistrict />} />
      <Route path="/how-to-create-product-group" element={<HowToCreateProductGroup />} />
      <Route path="/how-to-create-product-types" element={<HowToCreateProductTypes />} />
      <Route path="/how-to-add-address" element={<HowToAddAddress />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/merchants" element={<Merchants />} />
      <Route path="/master-klad" element={<MasterKlad />} />
      <Route path="/web" element={<Web />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/marketing-page" element={<MarketingPage />} />
      <Route path="/cards-payments" element={<CardsPayments />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/custom-bot" element={<CustomBot />} />
      <Route path="/ask-question" element={<AskQuestion />} />
      <Route path="/withdraw-funds" element={<WithdrawFunds />} />
      <Route path="/happy-hours" element={<HappyHours />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/promo-codes" element={<PromoCodes />} />
      <Route path="/casino-setup" element={<CasinoSetup />} />
      <Route path="/cumulative-discounts" element={<CumulativeDiscounts />} />
      <Route path="/one-time-discounts" element={<OneTimeDiscounts />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/balance-top-ups" element={<BalanceTopUps />} />
      <Route path="/couriers-salary" element={<CouriersSalary />} />
      <Route path="/auto-forwarding" element={<AutoForwarding />} />
      <Route path="/usdt" element={<Usdt />} />
      <Route path="/btc-cashout" element={<BtcCashout />} />
      <Route path="/partners-exchangers" element={<PartnersExchangers />} />
      <Route path="/help-bots" element={<HelpBots />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/internal-chats" element={<InternalChats />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/mailouts" element={<Mailouts />} />
      <Route path="/preorders" element={<Preorders />} />
      <Route path="/preorders-ru" element={<PreordersRu />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="/addresses-ru" element={<AddressesRu />} />
      <Route path="/must-subscribe" element={<MustSubscribe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
