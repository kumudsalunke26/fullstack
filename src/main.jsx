import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes.jsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    <AppRoutes />
                </QueryClientProvider>
            </NextUIProvider>
        </BrowserRouter>
    </StrictMode>
);
