import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreditoPessoal from "./pages/CreditoPessoal";
import CreditoConsignado from "./pages/CreditoConsignado";
import CreditoGarantia from "./pages/CreditoGarantia";
import AniversarioFGTS from "./pages/AniversarioFGTS";
import LimpaNome from "./pages/LimpaNome";
import CreditoEmpresarial from "./pages/CreditoEmpresarial";
import CreditoBNDES from "./pages/CreditoBNDES";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/credito-pessoal" element={<CreditoPessoal />} />
          <Route path="/credito-consignado" element={<CreditoConsignado />} />
          <Route path="/credito-garantia" element={<CreditoGarantia />} />
          <Route path="/saque-aniversario-fgts" element={<AniversarioFGTS />} />
          <Route path="/limpa-nome" element={<LimpaNome />} />
          <Route path="/credito-empresarial" element={<CreditoEmpresarial />} />
          <Route path="/credito-bndes" element={<CreditoBNDES />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
