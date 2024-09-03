import React, { useState, useEffect } from "react";
import "../../../css/component/auth/login.css";
import { useStateContext } from "../../ContextProvider";
import axios from "axios";
import metaData from "../../MetaData";

export default function Login({closeLogin}) {
    let { manageLogin, setManageLogin, setAuthToken } = useStateContext();
    let [loginData, setLoginData] = useState({ email: "", password: "" });
    let [loginErrors, setLoginErrors] = useState({ email: "", password: "" });
    //let loadRegister = props.load;
    let loadRegister = (e) => {
        e.preventDefault();
        setManageLogin({ ...manageLogin, register: true, login: false });
    };

    let makeLogin = (e) => {
        e.preventDefault();
        axios
            .post(`${metaData.appUrl}api/user/login`, loginData)
            .then((response) => {
                //console.log(response.data);
                var expirationDate = new Date();
                let exDate = new Date(
                    expirationDate.setDate(expirationDate.getDate() + 1)
                ).toUTCString();
                document.cookie =
                    "auth_token" +
                    "=" +
                    response.data.plainTextToken +
                    "; expires=" +
                    exDate +
                    "; path=/";
                setManageLogin({
                    ...manageLogin,
                    authToken: response.data.plainTextToken,
                    loginNow: true,
                });
                setAuthToken(false, true, false);
                setLoginErrors({ email: "", password: "" });
                closeLogin(null);
            })
            .catch((error) => {
                console.log(error);
                setLoginErrors(error.response.data.errors);
            });
    };
    return (
        <div id="login-form" className="px-2">
            <div
                className="d-flex align-items-center justify-content-between "
                style={{ height: "50px" }}
            >
                <h4>Sign in </h4>
                <button
                    className="btn btn-outline-dark rounded rounded-5"
                    onClick={(e) => loadRegister(e)}
                >
                    Register
                </button>
            </div>
            <div className="mb-2">
                <small
                    className="form-text text-danger"
                    style={{ marginTop: "45px" }}
                >
                    {loginErrors && loginErrors.loginFailed}
                </small>
            </div>
            <form className="" onSubmit={(e) => makeLogin(e)}>
                <div className="mb-3 mt-1">
                    <label htmlFor="login-email-input" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="login-email-input"
                        placeholder="name@gmail.com"
                        value={loginData.email}
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                email: e.target.value,
                            })
                        }
                    />
                    <small className="form-text text-danger">
                        {loginErrors && loginErrors.email}
                    </small>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="login-email-password"
                        className="form-label"
                    >
                        Password
                    </label>
                    <div className="input-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            id="login-email-password"
                            value={loginData.password}
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    password: e.target.value,
                                })
                            }
                        />
                        <span
                            className="input-group-text login-password-input"
                            id="basic-addon1"
                            onClick={(e) => {
                                e.preventDefault();
                                let pass = document.querySelector(
                                    "#login-email-password"
                                );

                                if (pass.type == "text") {
                                    pass.type = "password";
                                } else if (pass.type == "password") {
                                    pass.type = "text";
                                }
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>
                        </span>
                    </div>

                    <small
                        className="form-text text-danger"
                        style={{ marginTop: "45px" }}
                    >
                        {loginErrors && loginErrors.password}
                    </small>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="login-input-checked"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="login-input-checked"
                        >
                            Stay signed in
                        </label>
                    </div>
                    <a href="/forgot-password?email" className=" text-dark">
                        Forgot your password?
                    </a>
                </div>
                <button className="btn btn-dark w-100 rounded rounded-5 fs-5">
                    Sign in
                </button>
            </form>
        </div>
    );
}
