/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./bootstrap";
import { ContextProvider } from "./ContextProvider";

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Main from "./main";

if (document.getElementById("react-app")) {
    const Index = ReactDOM.createRoot(document.getElementById("react-app"));

    Index.render(
        <React.StrictMode>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </React.StrictMode>
    );
    
}
