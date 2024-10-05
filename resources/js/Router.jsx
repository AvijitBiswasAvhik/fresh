import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPageContent from "./components/landing/LandingPageContent";
import Main from "./main";
import Login from "./components/auth/Login";
import SingleProduct from "./components/product/SingleProduct";
import Products from "./components/product/Products";
import Checkout from "./components/Checkout";
import DashBoard from "./components/admin/DashBoard";
import ProductAdd from "./components/admin/product/ProductAdd";
import ProductList from "./components/admin/product/ProductList";
import Account from "./components/auth/Account&Security";
import CartPage from "./components/CartPage";
import Order from "./components/Order";
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
                path: "/product-view",
                element: <SingleProduct />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/products/:category",
                element: <Products />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/account&security",
                element: <Account />,
            },
            {
                path: "/cart-view",
                element: <CartPage />,
            },
            {
                path: "/order",
                element: <Order />,
            },
        ],
    },
    {
        path: "/admin",
        element: <DashBoard />,
        children: [
            {
                path: "/admin/product-add",
                element: <ProductAdd />,
            },
            {
                path: "/admin/product-list",
                element: <ProductList />,
            }
        ],
    },
]);
export default router;
