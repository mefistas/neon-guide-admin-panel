
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
            <Route path="/ask-question" element={<AskQuestion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
