import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage.jsx";
import EpisodesPage from "./pages/EpisodesPage.jsx";

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
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </StrictMode>
);
