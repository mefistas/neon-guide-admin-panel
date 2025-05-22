
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowToAddCourier from "./pages/HowToAddCourier";
import HowToAddBots from "./pages/HowToAddBots";
import CasinoSetup from "./pages/CasinoSetup";
import CardsPayments from "./pages/CardsPayments";
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
import Web from "./pages/Web";
import Finance from "./pages/Finance";
import CouriersSalary from "./pages/CouriersSalary";
import Usdt from "./pages/Usdt";
import Mailouts from "./pages/Mailouts";
import AutoForwarding from "./pages/AutoForwarding";
import Promotions from "./pages/Promotions";
import CumulativeDiscounts from "./pages/CumulativeDiscounts";
import PromoCodes from "./pages/PromoCodes";
import OneTimeDiscounts from "./pages/OneTimeDiscounts";
import HappyHours from "./pages/HappyHours";
import WithdrawFunds from "./pages/WithdrawFunds";
import Feedback from "./pages/Feedback";
import HelpBots from "./pages/HelpBots";
import InternalChats from "./pages/InternalChats";
import Reviews from "./pages/Reviews";
import Preorders from "./pages/Preorders";
import Addresses from "./pages/Addresses";
import DetailedGuide from "./pages/DetailedGuide";
import Stock from "./pages/Stock";
import MainStats from './pages/MainStats';
import ChatsChannels from './pages/ChatsChannels';
import AllStores from './pages/AllStores';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quick-start" element={<QuickStart />} />
              <Route path="/how-to-add-courier" element={<HowToAddCourier />} />
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
              <Route path="/web" element={<Web />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/couriers-salary" element={<CouriersSalary />} />
              <Route path="/usdt" element={<Usdt />} />
              <Route path="/withdraw-funds" element={<WithdrawFunds />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/help-bots" element={<HelpBots />} />
              <Route path="/internal-chats" element={<InternalChats />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/preorders" element={<Preorders />} />
              <Route path="/addresses" element={<Addresses />} />
              <Route path="/detailed-guide" element={<DetailedGuide />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/main-stats" element={<MainStats />} />
              <Route path="/chats-chan" element={<ChatsChannels />} />
              <Route path="/allstores" element={<AllStores />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
