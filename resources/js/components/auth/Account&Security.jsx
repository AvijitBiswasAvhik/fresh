import React, { useEffect, useState } from "react";
import { useStateContext } from "../../ContextProvider";
import "../../../css/component/auth/Account&Security.css";
import Address from "./Address";
import axiosClient from "../../Axios";
import PaymentMethods from "./PaymentMethods";

export default function Account() {
    let { manageLogin, setManageLogin } = useStateContext();
    let [paymentMethods, setPaymentMethods] = useState();
    
    let [settingMenu, setSettingMenu] = useState({
        account: true,
        address: false,
        payment: false,
    });
    let [form, setForm] = useState({
        address: true,
        payment: false,
    });
    useEffect(() => {
        let body = document.querySelector("body");
        body.classList.remove("overflow-hidden");
        setManageLogin({ ...manageLogin, united: false });
        axiosClient
            .get("users/payment-data/show")
            .then((response) => {
                if (response.data.payment_method.length > 0) {
                    setPaymentMethods(response.data.payment_method);
                }
                
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [form.payment]);
    let dateObj = new Date(manageLogin.loginData.created_at);

    let createData = (e) => {
        e.preventDefault();
        axiosClient
            .get("/user/data")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
   
    return (
        <div id="account&security" className="row">
            <div className="col-sm-12 col-md-10 col-lg-8  mx-auto">
                <div className="mb-4">
                    {/* <button 
                    onClick={(e)=>{
                        createData(e)
                    }}className="btn rounded-5 btn-outline-primary">
                        Make Json
                    </button> */}
                </div>
                <div className="account-security-header mb-3">
                    <ul
                        className="d-flex justify-content-center gap-2 nav nav-tabs"
                        id=""
                    >
                        <li className="" role="presentation">
                            <button
                                className="nav-link account-security-btn  active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                                onClick={() =>
                                    setSettingMenu({
                                        ...settingMenu,
                                        account: true,
                                        address: false,
                                    })
                                }
                            >
                                Account
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className="nav-link account-security-btn "
                                id="profile-tab"
                                data-bs-toggle="tab"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Security
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className="nav-link account-security-btn "
                                id="contact-tab"
                                data-bs-toggle="tab"
                                type="button"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                                onClick={() =>
                                    setSettingMenu({
                                        ...settingMenu,
                                        account: false,
                                        address: false,
                                        payment: true,
                                    })
                                }
                            >
                                Payment
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className="nav-link account-security-btn "
                                id="privacy-tab"
                                data-bs-toggle="tab"
                                type="button"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                            >
                                Privacy
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className="nav-link account-security-btn "
                                id="address-tab"
                                data-bs-toggle="tab"
                                type="button"
                                role="tab"
                                aria-controls="profile-add-address"
                                aria-selected="false"
                                onClick={() =>
                                    setSettingMenu({
                                        ...settingMenu,
                                        account: false,
                                        address: true,
                                    })
                                }
                            >
                                Address
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className="nav-link account-security-btn "
                                id="email-tab"
                                data-bs-toggle="tab"
                                type="button"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                            >
                                Email
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {settingMenu.account && (
                <div
                    id="profile-account-settings"
                    className="col-sm-12 col-md-10 col-lg-8 mx-auto"
                >
                    <div className="card mb-5">
                        <div className="card-header">
                            <p className="h5 fw-bold">About You</p>
                        </div>
                        <div className="card-body">
                            <h6 className="card-text fw-bold lh-1">Name</h6>
                            <p className="lh-1">{manageLogin.loginData.name}</p>
                            <h6 className="card-text fw-bold lh-1">
                                Member since
                            </h6>
                            <p className="lh-1">{dateObj.toDateString()}</p>
                            <div>
                                <button className="btn btn-outline-dark rounded-5 fw-bold">
                                    Edith Your Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h5 className="fw-bold">Location Settings</h5>
                            <p className="card-text">
                                Set where you live, what language you speak, and
                                the currency you use. <a href="#">Learn more</a>
                                .
                            </p>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <div className="mb-2">
                                    <label
                                        htmlFor="profile-country-select"
                                        className="form-label card-text fw-bold lh-1"
                                    >
                                        Region
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="profile-country-select"
                                    >
                                        <option>Open this select menu</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="profile-country-languages"
                                        className="form-label card-text fw-bold lh-1"
                                    >
                                        Language
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="profile-country-languages"
                                    >
                                        <option>Open this select menu</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="profile-country-curency"
                                        className="form-label card-text fw-bold lh-1"
                                    >
                                        Curency
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="profile-country-curency"
                                    >
                                        <option>Open this select menu</option>
                                    </select>
                                    <div className="mt-3">
                                        <button className="btn btn-outline-dark rounded-5 fw-bold">
                                            Save Setting
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h5 className="fw-bold">Password</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label
                                    htmlFor="profile-current-password"
                                    className="form-label fw-bold"
                                >
                                    Current Password{" "}
                                </label>
                                <input
                                    placeholder="Current password"
                                    type="text"
                                    className="form-control"
                                    id="profile-current-password"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="profile-new-password"
                                    className="form-label fw-bold"
                                >
                                    New Password{" "}
                                </label>
                                <input
                                    placeholder="Current password"
                                    type="text"
                                    className="form-control"
                                    id="profile-new-password"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="profile-confirm-new-password"
                                    className="form-label fw-bold"
                                >
                                    Confirm New Password
                                </label>
                                <input
                                    placeholder="Current password"
                                    type="text"
                                    className="form-control"
                                    id="profile-confirm-new-password"
                                />
                            </div>

                            <div className="text-dark">
                                <span className="fw-bold">
                                    Tips for a strong password{" "}
                                </span>
                                <br />
                                <span className="" style={{ fontSize: "13px" }}>
                                    Don't use a previous password
                                </span>
                                <br />
                                <span className="" style={{ fontSize: "13px" }}>
                                    Don't use your name or email in the password
                                </span>
                                <br />
                                <span className="" style={{ fontSize: "13px" }}>
                                    Use 8 characters (6 characters minimum)
                                </span>
                                <br />
                                <span className="" style={{ fontSize: "13px" }}>
                                    Use a mix of numbers and symbols
                                </span>
                                <br />
                                <div className="mt-3 mb-2">
                                    <button className="btn btn-outline-dark rounded-5 fw-bold">
                                        Change Password
                                    </button>
                                </div>
                                <p>
                                    Need help?{" "}
                                    <a href="#" className="text-dark">
                                        Find answers at the Etsy Help Center
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h5 className="fw-bold">Email</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="fw-bold lh-1">Current Email</h6>
                            <p className="lh-1">
                                {manageLogin.loginData.email}
                            </p>
                            <h6 className="fw-bold lh-1">Status</h6>
                            <p className="lh-1">
                                {manageLogin.loginData && "Conected"}
                            </p>
                            <div className="w-100 border border-1 mb-3"></div>
                            <h5 className="fw-bold">Change your email</h5>
                            <div className="mb-3">
                                <label
                                    htmlFor="profile-new-email"
                                    className="form-label fw-bold"
                                >
                                    New email{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="new email"
                                    className="form-control"
                                    id="profile-new-email"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="profile-confirm-new-email"
                                    className="form-label fw-bold"
                                >
                                    Confirm new email{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="confirm new email"
                                    className="form-control"
                                    id="profile-confirm-new-email"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="profile-confirm-new-email-password"
                                    className="form-label fw-bold"
                                >
                                    Your password{" "}
                                </label>
                                <input
                                    type="password"
                                    placeholder="current password"
                                    className="form-control"
                                    id="profile-confirm-new-email-password"
                                />
                            </div>
                            <div className="mt-3 mb-2">
                                <button className="btn btn-outline-dark rounded-5 fw-bold">
                                    Change Email
                                </button>
                            </div>
                            <p>
                                Your email address will not change until you
                                confirm it via email.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h5 className="fw-bold">Close your account</h5>
                        </div>
                        <div className="card-body">
                            <p className="fw-bold">
                                What happens when you close your account?{" "}
                            </p>
                            <ul>
                                <li>
                                    Your account will be inactive, until you
                                    reopen it.
                                </li>
                                <li>
                                    Your profile will no longer appear anywhere
                                    on Etsy.
                                </li>
                                <li>
                                    We'll close any non-delivery cases you
                                    opened.
                                </li>
                                <li>
                                    Your account settings will remain intact,
                                    and no one will be able to use your
                                    username.
                                </li>
                            </ul>

                            <p>
                                You can reopen your account anytime. Just sign
                                back in to Etsy or{" "}
                                <a href="#" className="text-dark">
                                    contact Etsy support
                                </a>{" "}
                                for help.
                            </p>
                            <p className="fw-bold">
                                Want to permanently delete your account instead?
                                Go to your{" "}
                                <a href="#" className="text-dark">
                                    Privacy Settings
                                </a>{" "}
                                and click "Request deletion of your data."
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {settingMenu.address && (
                <div
                    id="profile-add-address"
                    className="col-"
                    aria-labelledby="profile-add-address"
                    style={{ zIndex: 1000 }}
                >
                    <div className="col-sm-12 col-md-10 col-lg-8  mx-auto">
                        <h5>Your shipping addresses</h5>
                        <button
                            className="btn btn-outline-dark fw-bold rounded-5"
                            onClick={(e) => {
                                e.preventDefault();
                                setManageLogin({
                                    ...manageLogin,
                                    addressForm: true,
                                });
                            }}
                        >
                            Add a new address
                        </button>
                        <p className="mt-3">
                            You don't currently have any shipping addresses.
                        </p>
                        {manageLogin.addressForm && <Address />}
                    </div>
                </div>
            )}
            {settingMenu.payment && (
                <div id="account-payment-methods">
                    <div className="card">
                        <div className="card-header">
                            <p className="h5">Payment Methods</p>
                        </div>
                        <div className="card-body">
                            <div className="card-title mb-4">
                               {paymentMethods.length == 0 && <p>You Dont have any Payments Method have</p>}
                                {paymentMethods && (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Payment Type</th>
                                                <th scope="col">Provider</th>
                                                <th scope="col">Account Number</th>
                                                <th scope="col">Expiry Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paymentMethods.map((el, i) => {
                                                console.log(el);
                                                return (
                                                    <tr key={el.account_number+i}>
                                                        <td>
                                                            {
                                                                el.payment_type
                                                                    .payment_types
                                                            }
                                                        </td>
                                                        <td>{el.provider}</td>
                                                        <td>
                                                            {el.account_number}
                                                        </td>
                                                        <td>
                                                            {el.expiry_date}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                )}
                                <div className="add-new-button">
                                    <button
                                        className="btn btn-outline-primary rounded-5"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setForm({ ...form, payment: true });
                                        }}
                                    >
                                        Add New Payment Method
                                    </button>
                                </div>
                            </div>
                            {form.payment && <PaymentMethods form={form} setForm={setForm} />}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
