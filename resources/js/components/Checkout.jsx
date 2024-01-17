import React, { useState, useEffect } from "react";
import "../../css/component/checkout.css";

export default function Checkout() {
    let [country, setCountry] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Handle the response data

                let countrySort = data.map((el, i) => {
                    return el.name.common;
                });
                setCountry(countrySort.sort());
            })
            .catch((error) => {
                // Handle errors
                console.error("Error:", error);
            });
        // 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
        //make api requst to chat gpt
    }, []);
    let countryShow;
    if (country.length > 0) {
        countryShow = country.map((el, i) => {
            return (
                <option value={el} key={el}>
                    {el}
                </option>
            );
        });
    }

    return (
        <div className="container px-2" id="checkout-page">
            <div className="row p-0">
                <div className="col-12 col-md-8 p-0 mb-3">
                    <form className="form p-1 px-2 bg-white shadow rounded-2">
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-recipient-name"
                                className="form-label"
                            >
                                Recipient's Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-recipient-name"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-email"
                                className="form-label"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="checkout-email"
                                placeholder="Enter your email address"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-country"
                                className="form-label"
                            >
                                Country:
                            </label>
                            <select name="" id="">
                                {countryShow && countryShow}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-street-address"
                                className="form-label"
                            >
                                Street Address:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-street-address"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-district"
                                className="form-label"
                            >
                                District:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-district"
                                placeholder="Enter vilage /Strete Road"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-post-code"
                                className="form-label"
                            >
                                Postal Code/ZIP Code:
                            </label>
                            <input
                                type=" number"
                                className="form-control"
                                id="checkout-post-code"
                                placeholder="Enter post code"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="checkout-phone-number"
                                className="form-label"
                            >
                                Phone Number:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="checkout-phone-number"
                                placeholder="Enter phone number"
                            />
                        </div>
                    </form>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <div className="pop-up-cart-content-header p-1 card-header fw-bold">
                            Cart(1 item)
                        </div>
                        <div
                            className="card-body overflow-hidden border border-3 shadow-sm mb-2"
                            style={{ height: "180px" }}
                        >
                            <div className="row h-100 ">
                                <div className="col  p-0">
                                    <img
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab3bba3-5b59-43a1-9e2a-e1593d3ca64f/ddsn174-21df4ea8-9aeb-4c9b-aaa4-30852f0d7822.jpg/v1/fill/w_1121,h_713,q_70,strp/little_girl_hugging_lion_art_by_helpful111_ddsn174-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE0IiwicGF0aCI6IlwvZlwvOGFiM2JiYTMtNWI1OS00M2ExLTllMmEtZTE1OTNkM2NhNjRmXC9kZHNuMTc0LTIxZGY0ZWE4LTlhZWItNGM5Yi1hYWE0LTMwODUyZjBkNzgyMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eE5zoy3JXrdzMWLFe_bO-cdZHsEjZIwFigKkLC_Pt3Q"
                                        alt=""
                                        className="h-100 w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col lh-1"> 
                                    <div className="card-title ">
                                        <h5 className="fw-bold">Hello</h5>
                                    </div>
                                    <p
                                        className="card-text font-monospaces"
                                        style={{
                                            marginTop: "-10px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Some quick example...
                                    </p>
                                    <p
                                        className="d-flex justify-content-between fw-bold"
                                        style={{ fontSize: "12px" }}
                                    >
                                        <span className="">USD</span>{" "}
                                        <span>$100</span>
                                    </p>
                                    <p
                                        className="d-flex justify-content-between fw-medium"
                                        style={{
                                            fontSize: "12px",
                                            marginTop: "-10px",
                                        }}
                                    >
                                        <span>qty</span> <span>3</span>
                                    </p>
                                    <p className="d-flex justify-content-between fw-bold">
                                        <button className="btn p-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-plus-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                            </svg>
                                        </button>
                                        <button className="btn">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-dash-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card-body overflow-hidden border border-3 shadow-sm mb-2"
                            style={{ height: "180px" }}
                        >
                            <div className="row h-100 ">
                                <div className="col  p-0">
                                    <img
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab3bba3-5b59-43a1-9e2a-e1593d3ca64f/ddsn174-21df4ea8-9aeb-4c9b-aaa4-30852f0d7822.jpg/v1/fill/w_1121,h_713,q_70,strp/little_girl_hugging_lion_art_by_helpful111_ddsn174-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE0IiwicGF0aCI6IlwvZlwvOGFiM2JiYTMtNWI1OS00M2ExLTllMmEtZTE1OTNkM2NhNjRmXC9kZHNuMTc0LTIxZGY0ZWE4LTlhZWItNGM5Yi1hYWE0LTMwODUyZjBkNzgyMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eE5zoy3JXrdzMWLFe_bO-cdZHsEjZIwFigKkLC_Pt3Q"
                                        alt=""
                                        className="h-100 w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col  lh-1">
                                    <div className="card-title ">
                                        <h5 className="fw-bold">Hello</h5>
                                    </div>
                                    <p
                                        className="card-text font-monospaces"
                                        style={{
                                            marginTop: "-10px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Some quick example...
                                    </p>
                                    <p
                                        className="d-flex justify-content-between fw-bold"
                                        style={{ fontSize: "12px" }}
                                    >
                                        <span className="">USD</span>{" "}
                                        <span>$100</span>
                                    </p>
                                    <p
                                        className="d-flex justify-content-between fw-medium"
                                        style={{
                                            fontSize: "12px",
                                            marginTop: "-10px",
                                        }}
                                    >
                                        <span>qty</span> <span>3</span>
                                    </p>
                                    <p className="d-flex justify-content-between fw-bold">
                                        <button className="btn p-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-plus-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                            </svg>
                                        </button>
                                        <button className="btn">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-dash-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer p-2">
                            <div className="card-title fw-bold d-flex justify-content-between">
                                <h6 className="fw-bold">SubTotal</h6>
                                <h6 className="fw-bold">USD $100</h6>
                            </div>
                            <div
                                className="card-text text-muted text-center"
                                style={{
                                    marginTop: "-15px",
                                    fontSize: "12px",
                                }}
                            >
                                exCluding(Shipping tax)
                            </div>
                            <div className="d-grid  mx-auto">
                                <button
                                    className="btn w-100 btn-secondary rounded rounded-5 fw-bold"
                                    type="button"
                                    style={{ color: "#faa200" }}
                                >
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
