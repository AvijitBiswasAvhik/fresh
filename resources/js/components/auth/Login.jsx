import React, { useState, useEffect } from "react";
import "../../../css/component/auth/login.css";
import { useStateContext } from "../../ContextProvider";
import axios from "axios";

export default function Login(props) {
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
            .post("/api/user/login", loginData)
            .then((response) => {
                var expirationDate = new Date();
                let exDate = new Date(
                    expirationDate.setDate(expirationDate.getDate() + 1)
                ).toUTCString();
                document.cookie =
                    "auth_token=" +
                    response.data.plainTextToken +
                    "; expires=" +
                    exDate +
                    "; path=/";

                //setManageLogin({...manageLogin, authToken: response.data});
               // setAuthToken(false, true, false);

                //setManageLogin({...makeLogin, loginData: response.data})
                setLoginErrors({ email: "", password: "" });
            })
            .catch((error) => {
                setLoginErrors(error.response.data.errors);
            });
    };
    return (
        <div id="login-form">
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
                    <input
                        type="password"
                        className="form-control"
                        id="login-email-password"
                        value={loginData.password}
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                password: e.target.value,
                            })
                        }
                    />
                    <small className="form-text text-danger">
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
