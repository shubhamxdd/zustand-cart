import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster />
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);
