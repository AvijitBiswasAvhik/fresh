import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPageContent from "./components/landing/LandingPageContent";
import Main from "./main";
Main
const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children:[{
        path:'/',
        element: <LandingPageContent />,
    }]
}])
export default router;