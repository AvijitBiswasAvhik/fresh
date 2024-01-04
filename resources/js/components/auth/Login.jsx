import React from "react";
import "../../../css/component/auth/login.css";

export default function Login(props) {
    let loadRegister = props.load;
    return (
        <div id="login-form">
            <div
                className="d-flex align-items-center justify-content-between "
                style={{ height: "50px" }}
            >
                <h4>Sign in </h4>
                <button
                    className="btn btn-outline-dark rounded rounded-5"
                    onClick={loadRegister}
                >
                    Register
                </button>
            </div>
            <form className="">

                <div className="mb-3 mt-1">
                    <label htmlFor="login-email-input" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="login-email-input"
                        placeholder="name@gmail.com"
                    />
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
                    />
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
