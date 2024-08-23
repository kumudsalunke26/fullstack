import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage.jsx";
import EpisodesPage from "./pages/EpisodesPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import ConatctUsPage from "./pages/ConatctUsPage.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";

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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </StrictMode>
);
