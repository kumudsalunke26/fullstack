import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-background text-white overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
