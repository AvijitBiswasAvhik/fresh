import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/component/auth/profile.css";
import { useStateContext } from "../../ContextProvider";
import axiosClient from "../../Axios";
import axios from "axios";
import metaData from "../../MetaData";

export default function Profile() {
    let { manageLogin, setManageLogin,order } = useStateContext();
    let logout = (e) => {
        e.preventDefault();
        axios
            .get(`${metaData.appUrl}api/user/logout`, {
                headers: {
                    Authorization: `Bearer ${manageLogin.authToken}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);
                setManageLogin({
                    ...manageLogin,
                    loginData: {
                        created_at: "",
                        email: "",
                        email_verified_at: null,
                        id: 0,
                        name: "",
                        updated_at: "",
                    },
                    loginNow: false,
                });
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    let hideUnited = (e) => {
        e.preventDefault();
        setManageLogin({ ...manageLogin, united: false });
    };
    let setProfileImage = (e) => {
        let image = new FormData();
        if (e.target.files[0]) {
            image.append("image", e.target.files[0]);
        }
        if (image) {
            axiosClient
                .post(`set-profile-image`, image)
                .then((response) => {
                    setManageLogin({
                        ...manageLogin,
                        loginData: {
                            ...manageLogin.loginData,
                            image: response.data,
                        },
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="card p-2 border-0 shadow-lg">
            <div className="row">
                <div className="col-3">
                    <div className="position-relative">
                        <div
                            className="profile-image position-relative"
                            id="user-profile-image"
                        >
                            {manageLogin.loginData.image ? (
                                <img
                                    className="card-img-top"
                                    src={manageLogin.loginData.image}
                                    alt="Card image cap"
                                />
                            ) : (
                                <input
                                    type="file"
                                    className="h-100 w-100 opacity-0"
                                    onChange={(e) => setProfileImage(e)}
                                ></input>
                            )}
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="white"
                            className="bi bi-camera-fill position-absolute bottom-0 start-50 ms-3 z-1  border-rounded border-secondary"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                        </svg>
                    </div>
                </div>
                <div className="col">
                    <div className="ms-2">
                        <div className="card-title p-0">
                            <h5 className="">{manageLogin.loginData.name}</h5>
                        </div>
                        <div
                            className="card-text p-0"
                            style={{ marginTop: "-10px" }}
                        >
                            <a
                                href="#"
                                className="form-text lh-1 text-primary text-decoration-none"
                            >
                                Edith your profile
                            </a>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex gap-2 p-0 profile-menu px-2 py-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-basket-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
                                </svg>
                                <div>Purchases and reviews</div>
                            </div>
                            <div
                                className="d-flex align-items-center gap-2 profile-menu px-2 py-1"
                                style={{}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-basket-fil"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
                                </svg>
                                <div>Purchases and reviews</div>
                            </div>
                            <div
                                className="d-flex align-items-center gap-2 profile-menu px-2 py-1"
                                style={{}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-gift-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                                </svg>
                                <div>Special offer</div>
                            </div>
                            <div
                                className="d-flex position-relative align-items-center gap-2 profile-menu px-2 py-1"
                                style={{}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-list-stars"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
                                    />
                                    <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194z" />
                                </svg>
                                <div id="profile-order-menu">
                                    <div id="profile-order-count">{order && order.length}</div>
                                    <Link
                                        className="text-decoration-none text-dark"
                                        to={"/order"}
                                        
                                    >
                                        Order
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-center gap-2 profile-menu px-2 py-1 "
                                style={{}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-file-earmark-richtext-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M7 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V9.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V9s1.54-1.274 1.639-1.208M5 11h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1" />
                                </svg>
                                <div>Etsy registry</div>
                            </div>
                            {manageLogin.loginData.user_type == "admin" && (
                                <div
                                    className="d-flex align-items-center gap-2 profile-menu px-2 py-1 "
                                    style={{}}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fillRule="currentColor"
                                        className="bi bi-person-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    <div>
                                        <a
                                            className="text-decoration-none text-dark"
                                            href={`/admin?token=${manageLogin.authToken}`}
                                        >
                                            Admin
                                        </a>
                                    </div>
                                </div>
                            )}
                            <div
                                className="d-flex align-items-center gap-2 profile-menu px-2 py-1 "
                                style={{}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-gear-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                </svg>
                                <div>
                                    <Link
                                        className="text-decoration-none text-dark"
                                        to={"/account&security"}
                                    >
                                        Account & Setting
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-center gap-2 profile-menu px-2 py-1 "
                                style={{}}
                                onClick={(e) => logout(e)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-box-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                                    />
                                </svg>
                                <div>Signout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
