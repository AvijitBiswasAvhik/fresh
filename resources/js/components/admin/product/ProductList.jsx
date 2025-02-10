import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../../css/component/product/products.css";
import axiosClient from "../../../Axios";

export default function ProductList() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axiosClient
            .get(`/product`)
            .then((response) => {
                // Check if the response has data and if there's more data
                if (response.data.length > 0) {
                    //setFilter((pre)=>{return{...pre,offset:products.length}})
                    setProducts((prev) => [...prev, ...response.data]); // Append new data
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    console.log(products);
    return (
        <div className="row mx-sm-1 mx-3">
            {products &&
                products.map((el, i) => {
                    console.log(el)
                    return (
                        <div className="col-sm-4 col-md-3 col-6 col-lg-2 p-1 mb-2" key={el?.id * Math.random(0,1)}>
                            <div className="card shadow border-0 position-relative">
                                <div className="product-image-container">
                                    <img
                                        src={el?.product_image}
                                        className="card-img-top"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body p-1 pb-0">
                                    <div className="card-title h6 fw-bold text-muted text-wrap">
                                        <Link
                                            to={`/product-view?sku=${el?.product_items[0].sku}`}
                                            className="text-decoration-none"
                                        >
                                            {el?.title.split(' ')}
                                        </Link>
                                    </div>
                                    <div className="card-text">
                                        <p>
                                            <span
                                                className="h6"
                                                style={{
                                                    fontSize: "16px",
                                                    fontWeight: "bold",
                                                    fontFamily: "monospace",
                                                }}
                                            >
                                                $99.99
                                            </span>
                                            <span
                                                className="text-decoration-line-through h6 mx-2"
                                                style={{ fontSize: "14px" }}
                                            >
                                                $129.99
                                            </span>
                                            <button className="btn btn-primary rounded-5 py-0">
                                                Add To Cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="position-absolute end-0 mt-1 me-2 bg-white rounded-5"
                                    style={{ height: "30px", width: "30px" }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-heart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
