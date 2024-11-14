import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import axiosClient from "../Axios";
import "../../css/component/order.css";

function Order() {
    const { order, setOrder, setOr } = useStateContext();
    const [hasMore, setHasMore] = useState(true);

    const fetchData = () => {
        // Simulating an API call to fetch more data
        if (order.length >= 20) {
            setHasMore(false);
            return;
        }

        // Fetch more data from the API using offset
        setTimeout(() => {
            axiosClient
                .get(`order?offset=${order.length}`)
                .then((response) => {
                    // Check if the response has data and if there's more data
                    if (response.data.length > 0) {
                        setOrder((prev) => [...prev, ...response.data]); // Append new data
                    } else {
                        setHasMore(false); // No more items to load
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }, 1000);
    };

    // Only run once when the component mounts
    return (
        <div className="d-dlex bg-white align-item-center justify-content-center">
            {order && (
                <InfiniteScroll
                    dataLength={order.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            No more items to load.
                        </p>
                    } // Message when no more items
                >
                    {order.map((item) => (
                        <div
                            className="card mb-3 w-100 mx-0 shadow-md overflow-hidden overflow-hidden p-1"
                            key={item.id}
                        >
                            {" "}
                            {/* Use item.id for keys */}
                            <div className="row">
                                <div className="col-12 mb-2 mb-sm-0 col-sm-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-center">
                                    <div className="order-image-container">
                                        {item.product_item &&
                                            item.product_item.product_image && (
                                                <img
                                                    src={
                                                        item.product_item
                                                            .product_image
                                                    }
                                                    alt=""
                                                    className="order-image"
                                                />
                                            )}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-8 col-md-9 col-lg-10">
                                    <h4 className="order-product-title">
                                        {item.product_item && <Link to={`/product-view?sku=${item.product_item.sku}`} className="nav-link">{item.product_name}</Link>}
                                    </h4>
                                    <table className="table">
                                        <thead className="">
                                            <tr>
                                                <th scope="col">Property</th>
                                                <th scope="col">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <tr>
                                                <th scope="row">Quantity</th>
                                                <td>{item.quantity}</td>
                                            </tr>
                                            
                                            <tr>
                                                <th scope="row">Unit Price</th>
                                                <td>${item.unit_price}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total Price</th>
                                                <td>${item.total_price}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Status</th>
                                                <td>{item.order.status}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Payment Status</th>
                                                <td>{item.order.payment_status}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            )}
        </div>
    );
}

export default Order;
