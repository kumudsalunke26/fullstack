import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage.jsx";
import EpisodesPage from "./pages/EpisodesPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import HostsPage from "./pages/HostsPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import ConatctUsPage from "./pages/ConatctUsPage.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import AddBlogPage from "./pages/AddBlogPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/episodes",
                element: <EpisodesPage />,
            },
            {
                path: "/blogs",
                element: <BlogsPage />,
            },
            {
                path: "/about",
                element: <AboutUsPage />,
            },
            {
                path: "/hosts",
                element: <HostsPage />,
            },

            {
                path: "/reviews",
                element: <ReviewsPage />,
            },
            {
                path: "/contact-us",
                element: <ConatctUsPage />,
            },
            {
                path: "/blogs/:id",
                element: <BlogDetailsPage />,
            },
            {
                path: "/addblog",
                element: <AddBlogPage />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to='/' />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </StrictMode>
);
