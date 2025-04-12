
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Error boundary component
const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-700 mb-4">An error occurred while rendering the application:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto text-sm mb-4">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="bg-flutter-primary hover:bg-flutter-secondary text-white px-4 py-2 rounded"
        >
          Reload page
        </button>
      </div>
    </div>
  );
};

// Wrapping the app with error handling
const App = () => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Caught global error:", event.error);
      setError(event.error);
      event.preventDefault();
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/FFWeb">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
