import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import "../css/component/main.css";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import United from "./components/auth/United";
import { useStateContext } from "./ContextProvider";
import Address from "./components/auth/Address";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function Main() {
    let {manageLogin} = useStateContext();
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            // if (window.scrollY > 200) {
            //     let header = document.getElementById("header");
            //     header.classList.add("sticky");
            // } else {
            //     let header = document.getElementById("header");
            //     header.classList.remove("sticky");
            // }
        });
    }, []);
    return (
        <div  className="bg-white">
            <header id="header" className="">
                <NavBar />
            </header>
            <section id="sidebar" className="hide px-0">
                <SideBar />
            </section>
            <main className="px-md-4 px-2 py-2" id="content">
                <Outlet />
            </main>
            <footer className="" id="footer">
                <Footer />
            </footer>
            <section className="py-2" id="auth-section">
            {manageLogin.united && <United />}
            
            </section>
        </div>
    );
}

export default Main;
