import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import Abteilungen from "./pages/Abteilungen";
import AbteilungDetail from "./pages/AbteilungDetail";
import News from "./pages/News";
import Termine from "./pages/Termine";
import Kontakt from "./pages/Kontakt";
import Mitgliedschaft from "./pages/Mitgliedschaft";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/abteilungen" element={<Abteilungen />} />
            <Route path="/abteilungen/:slug" element={<AbteilungDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/termine" element={<Termine />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/mitgliedschaft" element={<Mitgliedschaft />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
