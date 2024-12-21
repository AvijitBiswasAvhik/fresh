import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/component/navbar.css";
import "../../css/component/cart.css";
import { useStateContext } from "../ContextProvider";
import Cart from "./product/Cart";

export default function NavBar() {
    let cartList = useRef();
    let { manageLogin, setManageLogin, cartItems } = useStateContext();
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.id != "sidebar") {
                let sideBar = document.getElementById("sidebar");
                if (!sideBar.contains(e.target)) {
                    sideBar.classList.add("hide");
                }
            }
        });

        let favorite = document.getElementById("favorite");
    }, []);

    let hideSidebar = (e) => {
        e.stopPropagation();
        let sideBar = document.getElementById("sidebar");
        if (!sideBar.classList.contains("hide")) {
            sideBar.classList.add("hide");
            return;
        }

        sideBar.classList.remove("hide");
        sideBar.style.left = e.clientX - 15 + "px";
        sideBar.style.top = e.clientY + 30 + "px";
    };
    let showCart = (e) => {
        e.stopPropagation();
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.add("show");
        let reactApp = document.getElementById("react-app");

        document.body.addEventListener("click", (e) => {
            e.stopPropagation();
            let popCart = document.getElementById("pop-up-cart-content");

            if (!popCart.contains(e.target)) {
                popCart.classList.remove("show");
            }
        });
    };
    let middleMan = (e) => {
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.add("expand");
    };
    let outCart = () => {
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.remove("expand");
    };
    let showHideAuth = (e) => {
        e.preventDefault();
        let body = document.querySelector("body");
        body.classList.add("overflow-hidden");
        setManageLogin({ ...manageLogin, united: true });
    };

    return (
        <nav className="nav px-lg-4 px-md-4 px-1 py-1" id="nav">
            <div className="nav-item item">
                <div className="brandImage">
                    <a
                        href="/"
                        className="brand-image-link text-decoration-none"
                    >
                        <img
                            className="card-img-top brand-image-element"
                            src="\storage\site-image.gif"
                            alt="Card image cap"
                        />
                    </a>
                </div>
            </div>
            <div className="nav-item item d-flex align-items-center p-1">
                <button
                    className="btn d-flex"
                    id="sidebar-toogle-btn"
                    onClick={(e) => {
                        hideSidebar(e);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-list navbar-menu fs-5 "
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                    <span className="d-none d-lg-block">Categories</span>
                </button>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control rounded-start-5 border border-secondary bordered-end-light"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        placeholder="Search what you want"
                        required
                    />
                    <span
                        className="input-group-text d-flex align-items-center justify-content-center rounded-end-5 border border-secondary"
                        id="inputGroupPrepend"
                        style={{ width: "50px" }}
                    >
                        <button className="btn h-25 border-2 d-flex align-items-center justify-content-center mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search navbar-search-icon"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
            <div className="nav-item item">
                <div className="cart-favorite-menu px-1">
                    <div className="sign-in">
                        <button
                            type="button"
                            className="btn sign-button fw-bold"
                            // data-bs-toggle="collapse"
                            // data-bs-target="#auth-page"
                            aria-expanded="false"
                            aria-controls="auth-page"
                            onClick={(e) => showHideAuth(e)}
                        >
                            {manageLogin.loginNow ? (
                                <div
                                    id="nav-profile-container"
                                    className="d-flex align-items-center gap-2"
                                >
                                    <div id="nav-profile-photo">
                                        {manageLogin.loginData.image ? (
                                            <img
                                                className="card-img-top brand-image-element"
                                                src={
                                                    manageLogin.loginData.image
                                                }
                                                alt="Card image cap"
                                            />
                                        ) : (
                                            <img
                                                className="card-img-top brand-image-element"
                                                src=""
                                                alt="Card image cap"
                                            />
                                        )}
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-caret-down-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </div>
                    <div className="favorite cart-menu-item" id="favo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart heart-icon"
                            viewBox="0 0 16 16"
                        >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </div>
                    <div
                        className="cart cart-menu-item"
                        id="nav-cart-item"
                        onClick={(e) => showCart(e)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart2 cart-icon"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        <span className="cart-count">
                            {cartItems && cartItems.cartData.length}
                        </span>
                    </div>
                    {/* <div
                        className="rounded rounded-2 card "
                        id=""
                        // onMouseEnter={(e) => middleMan(e)}
                        // onMouseLeave={outCart}
                    > */}
                    <Cart />
                    {/* </div> */}
                </div>
            </div>
            <div className="nav-item item w-100 d-none d-lg-block p-2">
                <ul className="d-flex gap-5 h-100 list-inline align-items-center justify-content-center">
                    <li className="list-group-item">
                        <Link
                            to={"/products/shoe"}
                            className="btn rounded rounded-3 nav-categorise-link"
                        >
                            Shoe
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to={"/products/glass"}
                            className="btn rounded rounded-3 nav-categorise-link"
                        >
                            Glass
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Woman
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Men
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Beauty
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Shirt
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Jewlary
                        </a>
                    </li>
                </ul>{" "}
            </div>
        </nav>
    );
}
