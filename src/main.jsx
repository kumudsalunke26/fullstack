import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import BlogDetailsPage from './pages/BlogDetailsPage.jsx';
import BlogsPage from './pages/BlogsPage.jsx';
import ConatctUsPage from './pages/ConatctUsPage.jsx';
import EpisodesPage from './pages/EpisodesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import Stories from './pages/Stories.jsx';
import Admin from './pages/Admin.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/episodes',
                element: <EpisodesPage />,
            },
            {
                path: '/blogs',
                element: <BlogsPage />,
            },
            {
                path: '/reviews',
                element: <ReviewsPage />,
            },
            {
                path: '/contact-us',
                element: <ConatctUsPage />,
            },
            {
                path: '/blogs/:id',
                element: <BlogDetailsPage />,
            },
            {
                path: '/stories',
                element: <Stories/>,
            },
            {
                path: '/admin',
                element: <Admin/>,
            }
        ],
    },
    {
        path: '/*',
        element: <Navigate to="/" />,
    },
]);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </NextUIProvider>
    </StrictMode>
);
