import React from "react";

export default function Register() {
    return (
        <div className="register-section py-2" id="register-form">
            <h3>Create your account</h3>
            <h6>Registration is easy.</h6>
            <form className="">
                <div className="mb-3 mt-1">
                    <label htmlFor="register-input-email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="register-input-email"
                        placeholder="name@gmail.com"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="register-input-firstname"
                        className="form-label"
                    >
                        First names
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-input-firstname"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="register-input-password"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="register-input-password"
                    />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="register-input-checked"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="register-input-checked"
                        >
                            Stay signed in
                        </label>
                    </div>
                </div>
                <button className="btn btn-dark w-100 rounded rounded-5 fs-5">
                    Sign in
                </button>
            </form>
        </div>
    );
}
