import React, { useEffect, useState } from "react";
import axiosClient from "../../Axios";
import { useStateContext } from "../../ContextProvider";

export default function Cart() {
    let { cart, setCart } = useStateContext();
    let [newCart, setNewCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, []);
    useEffect(() => {
        axiosClient
            .post("cart-data", cart)
            .then((response) => {
                setNewCart(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [cart]);
    function checkCart() {
        axiosClient
            .post("add-to-cart", { user_id: 1, product_id: 3 })
            .then((response) => {
                console.log(response.data); // Logs the response data
            })
            .catch((error) => {
                console.error(
                    error.response ? error.response.data : error.message
                ); // Handles and logs the error
            });
    }

    return (
        <div className="card">
            <div className="pop-up-cart-content-header p-1 card-header fw-bold">
                Cart({newCart && newCart.length} item)
            </div>
            <div className="card-body" style={{}}>
                {newCart &&
                    newCart.map((el, i) => {
                        return (
                            <div
                                className="row h-100 border border-1"
                                key={el.product_image + Math.random() * 10}
                            >
                                <div className="col border border-1 p-0">
                                    <img
                                        src={el.product_image}
                                        alt=""
                                        className="h-100 w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col border border-1 lh-1">
                                    <div className="card-title ">
                                        <h6 className="fw-bold">
                                            {newCart &&
                                                newCart.length > 0 &&
                                                el.title.substr(0, 15)}
                                        </h6>
                                    </div>
                                    <p
                                        className="card-text font-monospaces"
                                        style={{
                                            marginTop: "-6px",
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
                                        <span>
                                            ${" "}
                                            {newCart &&
                                                newCart.length > 0 &&
                                                el.product_items[0]
                                                    .discount_price}
                                        </span>
                                    </p>
                                    <p
                                        className="d-flex justify-content-between fw-medium"
                                        style={{
                                            fontSize: "12px",
                                            marginTop: "-10px",
                                        }}
                                    >
                                        <span>qty</span>{" "}
                                        <span>
                                            {newCart &&
                                                newCart.length > 0 &&
                                                el.product_items[0].quantity}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="card-footer p-2">
                <div className="card-title fw-bold d-flex justify-content-between">
                    <h6 className="fw-bold">SubTotal</h6>
                    <h6 className="fw-bold">
                        USD $
                        {newCart &&
                            newCart.length > 0 &&
                            newCart.reduce((total, current) => {
                                return (
                                    total +
                                    current.product_items[0].discount_price
                                );
                            }, 0)}
                    </h6>
                </div>
                <div
                    className="card-text text-muted text-center"
                    style={{
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
                        onClick={() => {
                            checkCart();
                        }}
                    >
                        View cart & check out
                    </button>
                </div>
            </div>
        </div>
    );
}
