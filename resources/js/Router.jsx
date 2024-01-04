import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPageContent from "./components/landing/LandingPageContent";
import Main from "./main";
import Login from "./components/auth/Login";
import SingleProduct from "./components/product/SingleProduct";
import Products from "./components/product/Products";
Main;
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <LandingPageContent />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: '/product-view',
                element: <SingleProduct />,
            },
            {
                path: '/products',
                element: <Products />,
            },
        ],
    },
]);
export default router;
