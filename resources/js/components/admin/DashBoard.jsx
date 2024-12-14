import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../css/component/admin/dashboard.css";
import Navbar from "./Navbar";
import { useStateContext } from "../../ContextProvider";

const Dashboard = () => {
    let { manageLogin } = useStateContext();
    // console.log(manageLogin.authToken)
    useEffect(() => {
        let allMenu = document.querySelectorAll(".dashboard-sidebar-menu");
        allMenu.forEach((el, i) => {
            el.classList.remove("active");
            el.addEventListener("click", (e) => {
                // let grandParent = e.target.parentNode;
                if (
                    el.contains(e.target) &&
                    e.target.classList.contains("click-able")
                ) {
                    allMenu.forEach((nEl) => {
                        nEl.classList.remove("active");
                    });
                    el.classList.add("active");
                }
            });
        });
    }, []);
    return (
        <div
            className="container p-0"
            id="admin-dashboard"

        >
            <Navbar />
            <div className="row w-100 mx-auto" id="admin-dashboard-container">
                <div
                    className="col-lg-2 col-md-3 d-md-block d-none p-0 position-relative"
                    id="admin-dashboard-sidebar"
                >
                    <ul
                        className="dashboard-menu-list bg-white p-1 shadow rounded-1 w-100 position-sticky top-0"
                        style={{ listStyleType: "none" }}
                    >
                        <li></li>

                        <li className="dashboard-sidebar-menu">
                            <a
                                className="nav-link text-decoration-none rounded-2"
                                data-bs-toggle="collapse"
                                href="#collapse-product-menu"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample2"
                            >
                                Products
                            </a>
                            <ul
                                className="collapse dashboard-sidebar-menu-collapse"
                                id="collapse-product-menu"
                                style={{ listStyleType: "none" }}
                            >
                                <li>
                                    <Link
                                        to={`/admin/product-add?token=${manageLogin.authToken}`}
                                        className="click-able"
                                    >
                                        Product Add
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/admin/product-list?token=${manageLogin.authToken}`}
                                        className="click-able"
                                    >
                                        Product List
                                    </Link>
                                </li>
                                <li>hello</li>
                            </ul>
                        </li>
                        <li className="menu-collapse dashboard-sidebar-menu ">
                            <a
                                className="nav-link text-decoration-none rounded-2"
                                data-bs-toggle="collapse"
                                href="#collapseExample2"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample2"
                            >
                                User
                            </a>
                            <ul
                                className="collapse dashboard-sidebar-menu-collapse"
                                id="collapseExample2"
                                style={{ listStyleType: "none" }}
                            >
                                <li>
                                    <Link
                                        to={`/admin/user-list?token=${manageLogin.authToken}`}
                                        className="click-able"
                                    >
                                        User List
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/admin/product-list?token=${manageLogin.authToken}`}
                                        className="click-able"
                                    >
                                        Product List
                                    </Link>
                                </li>
                                <li>hello</li>
                            </ul>
                        </li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=""></li>
                    </ul>
                </div>
                <div
                    className="col-lg-10 col-md-9 col-12 pe-md-0"
                    id="admin-dashboard-body"
                >
                    <div className="shadow h-100 rounded-1 w-100 bg-white p-1 px-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
