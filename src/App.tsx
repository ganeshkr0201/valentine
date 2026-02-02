import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ValentineProposal from "./pages/ValentineProposal";
import Index from "./pages/Index";
import LoveLetters from "./pages/LoveLetters";
import Gallery from "./pages/Gallery";
import Gifts from "./pages/Gifts";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import FloatingHearts from "./components/FloatingHearts";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isProposalPage = location.pathname === "/";

  return (
    <>
      <FloatingHearts />
      {!isProposalPage && <Navigation />}
      <Routes>
        <Route path="/" element={<ValentineProposal />} />
        <Route path="/home" element={<Index />} />
        <Route path="/letters" element={<LoveLetters />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gifts" element={<Gifts />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
