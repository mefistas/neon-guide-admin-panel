
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowToAddCity from "./pages/HowToAddCity";
import HowToAddDistrict from "./pages/HowToAddDistrict";
import HowToAddCourier from "./pages/HowToAddCourier";
import HowToCreateProductGroup from "./pages/HowToCreateProductGroup";
import HowToCreateProductTypes from "./pages/HowToCreateProductTypes";
import HowToAddAddress from "./pages/HowToAddAddress";
import HowToAddBots from "./pages/HowToAddBots";
import CasinoSetup from "./pages/CasinoSetup";
import CardsPayments from "./pages/CardsPayments";
import AskQuestion from "./pages/AskQuestion";
import QuickStart from "./pages/QuickStart";
import BasicSetup from "./pages/BasicSetup";
import Merchants from "./pages/Merchants";
import MasterKlad from "./pages/MasterKlad";
import CustomBot from "./pages/CustomBot";
import Workers from "./pages/Workers";
import Clients from "./pages/Clients";
import Purchases from "./pages/Purchases";
import BalanceTopUps from "./pages/BalanceTopUps";
import Marketing from "./pages/Marketing";
import Messages from "./pages/Messages";
import Web from "./pages/Web";
import Finance from "./pages/Finance";
import CouriersSalary from "./pages/CouriersSalary";
import Usdt from "./pages/Usdt";
import PartnersExchangers from "./pages/PartnersExchangers";
import Mailouts from "./pages/Mailouts";
import AutoForwarding from "./pages/AutoForwarding";
import Promotions from "./pages/Promotions";
import CumulativeDiscounts from "./pages/CumulativeDiscounts";
import PromoCodes from "./pages/PromoCodes";
import OneTimeDiscounts from "./pages/OneTimeDiscounts";
import HappyHours from "./pages/HappyHours";
import WithdrawFunds from "./pages/WithdrawFunds";
import BalanceHistory from "./pages/BalanceHistory";
import Feedback from "./pages/Feedback";
import HelpBots from "./pages/HelpBots";
import InternalChats from "./pages/InternalChats";
import Reviews from "./pages/Reviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quick-start" element={<QuickStart />} />
            <Route path="/how-to-add-city" element={<HowToAddCity />} />
            <Route path="/how-to-add-district" element={<HowToAddDistrict />} />
            <Route path="/how-to-add-courier" element={<HowToAddCourier />} />
            <Route path="/how-to-create-product-group" element={<HowToCreateProductGroup />} />
            <Route path="/how-to-create-product-types" element={<HowToCreateProductTypes />} />
            <Route path="/how-to-add-address" element={<HowToAddAddress />} />
            <Route path="/how-to-add-bots" element={<HowToAddBots />} />
            <Route path="/casino-setup" element={<CasinoSetup />} />
            <Route path="/cards-payments" element={<CardsPayments />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/master-klad" element={<MasterKlad />} />
            <Route path="/custom-bot" element={<CustomBot />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/balance-top-ups" element={<BalanceTopUps />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/mailouts" element={<Mailouts />} />
            <Route path="/auto-forwarding" element={<AutoForwarding />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/cumulative-discounts" element={<CumulativeDiscounts />} />
            <Route path="/promo-codes" element={<PromoCodes />} />
            <Route path="/one-time-discounts" element={<OneTimeDiscounts />} />
            <Route path="/happy-hours" element={<HappyHours />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/web" element={<Web />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/couriers-salary" element={<CouriersSalary />} />
            <Route path="/usdt" element={<Usdt />} />
            <Route path="/partners-exchangers" element={<PartnersExchangers />} />
            <Route path="/withdraw-funds" element={<WithdrawFunds />} />
            <Route path="/balance-history" element={<BalanceHistory />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/help-bots" element={<HelpBots />} />
            <Route path="/internal-chats" element={<InternalChats />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/ask-question" element={<AskQuestion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
