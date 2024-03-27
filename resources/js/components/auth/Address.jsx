import React, { useState, useEffect } from "react";
import { useStateContext } from "../../ContextProvider";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";

export default function Address() {
    let { manageLogin } = useStateContext();
    let [address, setAdrees] = useState({
        region: "",
        streetNumber: "",
        addressLine1: "",
        addressLine2: "",
        aptSuite: "",
        city: "",
        postalCode: "",
        countryId: "",
    });
    let [addressError, setAdreesError] = useState({
        region: "",
        streetNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postalCode: "",
        countryId: "",
    });
    let navigate = useNavigate();
    useEffect(() => {
        setAdrees({ ...address, name: manageLogin.loginData.name });
    }, []);
    let submitAdress = (e) => {
        e.preventDefault();
        axios
            .post(`/user/submit-address`, address, {
                headers: {
                    Authorization: `Bearer ${manageLogin.authToken}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setAdreesError({});
                navigate(`/`)
            })
            .catch((error) => {
                setAdreesError({ ...error.response.data.errors });
                console.log(error.response.data.errors);
            });
    };
    console.log(address);
    return (
        <div className="d-flex align-items-center justify-content-center h-100 shadow-lg rounded-2 overflow-auto">
            <div className="row w-100">
                <form className="col-sm-10 col-md-10 col-lg-8 p-2 mx-auto">
                    <div className="mb-3">
                        <h4 className="fw-bold">Enter an address</h4>
                        <div className="mb-3">
                            <label
                                htmlFor="profile-add-country"
                                className="form-label fw-bold"
                            >
                                Region
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                id="profile-add-country"
                                onChange={(e) => {
                                    setAdrees({
                                        ...address,
                                        region: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Open this select menu</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="china">China</option>
                                <option value="japan">Japan</option>
                            </select>
                            <small className="form-text text-danger">
                                {addressError && addressError.region}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="profile-add-country"
                                className="form-label fw-bold"
                            >
                                Street Number
                            </label>
                            <input
                                className="form-control"
                                id="profile-add-name"
                                value={address.streetNumber}
                                onChange={(e) =>
                                    setAdrees({
                                        ...address,
                                        streetNumber: e.target.value,
                                    })
                                }
                            />
                            <small className="form-text text-danger">
                                {addressError && addressError.streetNumber}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="profile-add-street-address"
                                className="form-label fw-bold"
                            >
                                First Address Line
                            </label>
                            <input
                                className="form-control"
                                id="profile-add-street-address"
                                placeholder="add street address"
                                onChange={(e) =>
                                    setAdrees({
                                        ...address,
                                        addressLine1: e.target.value,
                                    })
                                }
                                value={address.addressLine1}
                            />
                            <small className="form-text text-danger">
                                {addressError && addressError.addressLine1}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="profile-add-street-address"
                                className="form-label fw-bold"
                            >
                                Second Address Line
                            </label>
                            <input
                                className="form-control"
                                id="profile-add-street-address"
                                placeholder="add street address"
                                onChange={(e) =>
                                    setAdrees({
                                        ...address,
                                        addressLine2: e.target.value,
                                    })
                                }
                                value={address.addressLine2}
                            />
                            <small className="form-text text-danger">
                                {addressError && addressError.addressLine2}
                            </small>
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="profile-add-city"
                                className="form-label fw-bold"
                            >
                                City
                            </label>
                            <input
                                className="form-control"
                                id="profile-add-city"
                                placeholder="add city"
                                onChange={(e) =>
                                    setAdrees({
                                        ...address,
                                        city: e.target.value,
                                    })
                                }
                                value={address.city}
                            />
                            <small className="form-text text-danger">
                                {addressError && addressError.city}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="profile-add-postal-code"
                                className="form-label fw-bold"
                            >
                                Postal Code{" "}
                                <span className="text-muted fw-normal">
                                    (optional)
                                </span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="profile-add-postal-code"
                                placeholder="post code"
                                onChange={(e) =>
                                    setAdrees({
                                        ...address,
                                        postalCode: e.target.value,
                                    })
                                }
                                value={address.postalCode}
                            />
                            <small className="form-text text-danger">
                                {addressError && addressError.postalCode}
                            </small>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <button className="btn btn-outline-danger rounded-5">
                            Cancel
                        </button>
                        <button
                            className="btn btn-outline-dark rounded-5"
                            onClick={(e) => submitAdress(e)}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
