import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosClient from "../../Axios";

export default function PaymentMethods({form, setForm}) {
    let [paymentType, setPaymentType] = useState([]);
    let [paymentData, setPaymentData] = useState({
        paymentTypeId: "",
        accountNumber: "",
        expiryDate: "",
        provider: "",
    });
    let [paymentError, setPaymentError] = useState({
        paymentTypeId: "",
        accountNumber: "",
        expiryDate: "",
        provider: "",
    });

    useEffect(() => {
        axiosClient
            .get("users/payment-type")
            .then((response) => {
                let valuesArray = Object.values(response.data);
                setPaymentType([...valuesArray]);
            })
            .catch((error) => {
                console.log(error.response.data.errors);
            });
        
    }, []);
    let saveData = (e) => {
        e.preventDefault();
        axiosClient
            .post("users/payment-data/save", paymentData)
            .then((response) => {
                console.log(response.data);
                setPaymentError({});
                setForm({...form, payment:false})
            })
            .catch((error) => {
                setPaymentError(error.response.data.errors);
            });
    };
    return (
        <div className="payment-form">
            <form onSubmit={(e) => saveData(e)}>
                <div className="mb-4">
                    <label
                        htmlFor="add-payment-account-type"
                        className="form-label"
                    >
                        Account Payment Type
                    </label>
                    <select
                        name=""
                        id="add-payment-account-type"
                        className="form-select"
                        onChange={(e) => {
                            e.preventDefault();
                            setPaymentData({
                                ...paymentData,
                                paymentTypeId: e.target.value,
                            });
                        }}
                    >
                        <option value="false">Selecet a Type</option>
                        {paymentType &&
                            paymentType.map((el, i) => {
                                return (
                                    <option
                                        value={el.id}
                                        className="text-capitalize"
                                        key={el.payment_types}
                                    >
                                        {el.payment_types}
                                    </option>
                                );
                            })}
                    </select>
                    <small
                        className="form-text text-danger"
                        style={{ marginTop: "45px" }}
                    >
                        {paymentError && paymentError.paymentTypeId}
                    </small>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="add-payment-account-provider"
                        className="form-label"
                    >
                        Account Payment Provider
                    </label>
                    <select
                        name=""
                        id="add-payment-account-provider"
                        className="form-select"
                        onChange={(e) => {
                            e.preventDefault();
                            setPaymentData({
                                ...paymentData,
                                provider: e.target.value,
                            });
                        }}
                    >
                        <option value="false">Selecet a Type</option>
                        <option value="visa">Visa</option>
                        <option value="master card" className="text-capitalize">
                            master card
                        </option>
                        <option value="paypal" className="text-capitalize">
                            paypal
                        </option>
                        <option value="stripe" className="text-capitalize">
                            stripe
                        </option>
                    </select>
                    <small
                        className="form-text text-danger"
                        style={{ marginTop: "45px" }}
                    >
                        {paymentError && paymentError.provider}
                    </small>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="add-payment-account-number"
                        className="form-label"
                    >
                        Account Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="add-payment-account-number"
                        placeholder="add account number"
                        onChange={(e) => {
                            e.preventDefault();
                            setPaymentData({
                                ...paymentData,
                                accountNumber: e.target.value,
                            });
                        }}
                        value={paymentData.accountNumber}
                    />
                    <small
                        className="form-text text-danger"
                        style={{ marginTop: "45px" }}
                    >
                        {paymentError && paymentError.accountNumber}
                    </small>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="add-payment-account-expiry-date"
                        className="form-label"
                    >
                        Expiray Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="add-payment-account-expiry-date"
                        onChange={(e) => {
                            e.preventDefault();
                            setPaymentData({
                                ...paymentData,
                                expiryDate: e.target.value,
                            });
                        }}
                        value={paymentData.expiryDate}
                    />
                    <small
                        className="form-text text-danger"
                        style={{ marginTop: "45px" }}
                    >
                        {paymentError && paymentError.expiryDate}
                    </small>
                </div>
                <div className="mb-4">
                    <button className="btn btn-outline-secondary rounded-5">
                        Save Data
                    </button>
                </div>
            </form>
        </div>
    );
}
