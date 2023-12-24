import React from "react";
import NavBar from "./components/NavBar";
import "../css/component/main.css";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router";


function Main() {
    return (
        <>
            <header id="header" className="">
                <NavBar />
            </header>
            <section id="sidebar" className="hide px-0">
                <SideBar />
            </section>
            <main className="px-md-4 px-2 py-2" id="content">
               <Outlet />
            </main>
            <footer id="footer"></footer>
        </>
    );
}

export default Main;
