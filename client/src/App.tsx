import { useState } from 'react';
import { Route, Router } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  const [location, setLocation] = useState(window.location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Route path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Route>
            {() => <NotFound />}
          </Route>
        </div>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;