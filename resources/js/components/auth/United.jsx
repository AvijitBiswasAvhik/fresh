import React, { useState } from "react";
import "../../../css/component/auth/auth.css";
import Login from "./Login";
import Register from "./Register";
import { useStateContext } from "../../ContextProvider";
import Profile from "./Profile";

export default function United() {
    let [load, setLoad] = useState(true);
    let { manageLogin, setManageLogin } = useStateContext();
    let closeLogin = (e) => {
        if (e != null) {
            e.stopPropagation();
        }
        let body = document.querySelector("body");
        body.classList.remove("overflow-hidden");
        setManageLogin({
            ...manageLogin,
            united: false,
            register: false,
            login: true,
        });
        // let loginPage = document.getElementById("auth-page");
        // loginPage.classList.remove("show");
        // document.body.style = "overflow: auto";
        // let registerForm = document.getElementById("register-form");
        // registerForm.classList.remove('show')
    };
    let loadRegister = (e) => {
        e.stopPropagation();

        let loginForm = document.getElementById("login-form");
        loginForm.classList.remove("show");
        let registerForm = document.getElementById("register-form");
        registerForm.classList.add("show");
    };
    return (
        <div id="auth-page" className="collaps" style={{}}>
            <div id="login-page-content" className="mx-auto">
                {manageLogin.loginNow ? (
                    <>
                        <Profile />
                        <div>
                            <button
                                type="button"
                                id="login-close-btn"
                                className="close d-flex align-items-center justify-content-center p-1"
                                onClick={(e) => closeLogin(e)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-x-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </svg>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="px-2">
                        {manageLogin.login && (
                            <Login
                                load={loadRegister}
                                closeLogin={closeLogin}
                            />
                        )}
                        {manageLogin.register && (
                            <Register close={closeLogin} />
                        )}
                        <div className="d-flex justify-content-center mt-4 align-items-center">
                            <div className="loging-page-divider"></div>
                            or
                            <div className="loging-page-divider"></div>
                        </div>
                        <button className="btn btn-outline-dark w-100 rounded rounded-5 mb-3">
                            Continue with Google
                        </button>
                        <button className="btn btn-outline-dark w-100 rounded rounded-5 mb-3">
                            Continue with Facebook
                        </button>
                        <button className="btn btn-outline-dark w-100 rounded rounded-5 mb-3">
                            Continue with Apple
                        </button>
                        <div className="login-page-footer">
                            <p>
                                By clicking Continue with Google, Facebook, or
                                Apple, you agree to Etsy's{" "}
                                <a href="#">Terms of Use</a> and{" "}
                                <a href="#">Privacy Policy</a>.
                            </p>
                            <p>
                                Etsy may send you communications; you may change
                                your preferences in your account settings. We'll
                                never post without your permission.{" "}
                            </p>
                        </div>
                        <div>
                            <button
                                type="button"
                                id="login-close-btn"
                                className="close d-flex align-items-center justify-content-center p-1"
                                onClick={(e) => closeLogin(e)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-x-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
