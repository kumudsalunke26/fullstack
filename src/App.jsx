import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

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
