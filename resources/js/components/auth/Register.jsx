import React, { useState, useHistory, useEffect } from "react";
import axiosClient from "../../Axios";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { useStateContext } from "../../ContextProvider";

export default function Register(props) {
    let [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    let [registerError, setRegisterError] = useState({});
    let { manageLogin, setManageLogin, setAuthToken } = useStateContext();

    let navigate = useNavigate();
    useEffect(() => {}, []);

    let createUser = (e) => {
        e.preventDefault();
        axiosClient
            .post("user/create", registerData)
            .then((response) => {
                document.cookie =
                    "auth_token" + "=" + response.data.token.plainTextToken;

                setAuthToken(false, true, false);
                setRegisterError({});
                props.close; // Assuming closeLogin is a function passed as prop
            })
            .catch((error) => {
                setRegisterError(error.response.data.errors);
            });
    };

    // console.log()

    return (
        <div className="register-section py-2 px-2" id="register-form">
            <h3>Create your account</h3>
            <h6>Registration is easy.</h6>
            <form className="" onSubmit={(e) => createUser(e)}>
                <div className="mb-3 mt-1">
                    <label
                        htmlFor="register-input-email"
                        className="form-label"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="register-input-email"
                        placeholder="name@gmail.com"
                        value={registerData.email}
                        onChange={(e) =>
                            setRegisterData({
                                ...registerData,
                                email: e.target.value,
                            })
                        }
                    />
                    <small className="form-text text-danger">
                        {registerError && registerError.email}
                    </small>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="register-input-firstname"
                        className="form-label"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-input-firstname"
                        value={registerData.firstName}
                        onChange={(e) =>
                            setRegisterData({
                                ...registerData,
                                firstName: e.target.value,
                            })
                        }
                    />
                    <small className="form-text text-danger">
                        <small className="form-text text-danger">
                            {registerError && registerError.firstName}
                        </small>
                    </small>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="register-input-firstname"
                        className="form-label"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-input-firstname"
                        value={registerData.lastName}
                        onChange={(e) =>
                            setRegisterData({
                                ...registerData,
                                lastName: e.target.value,
                            })
                        }
                    />
                    <small className="form-text text-danger">
                        {registerError && registerError.lastName}
                    </small>
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
                        value={registerData.password}
                        onChange={(e) =>
                            setRegisterData({
                                ...registerData,
                                password: e.target.value,
                            })
                        }
                    />
                    <small className="form-text text-danger">
                        {registerError && registerError.password}
                    </small>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="checked"
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
                    Create
                </button>
            </form>
        </div>
    );
}
