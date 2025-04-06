
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LoadingProvider, useLoading } from "./components/LoadingProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Router component to handle route transitions
const AppRoutes = () => {
  const location = useLocation();
  const { showLoading, hideLoading } = useLoading();
  
  useEffect(() => {
    // Show loading on route change
    showLoading();
    
    // Hide loading after a small delay to simulate page transition
    const timer = setTimeout(() => {
      hideLoading();
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.pathname, showLoading, hideLoading]);
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/FFWeb">
          <AppRoutes />
        </BrowserRouter>
      </LoadingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
