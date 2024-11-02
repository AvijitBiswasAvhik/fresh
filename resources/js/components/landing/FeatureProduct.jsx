import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/component/landing/FeatureProduct.css";
import axiosClient from "../../Axios"; // Ensure axiosClient is configured correctly
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/grid";
import { useStateContext } from "../../ContextProvider";
// Main component

export default function FeatureProduct() {
    const [feature, setFeature] = useState([]); // Initialize as an empty array
    let { addCart } = useStateContext();
    // Fetch top products on component mount
    useEffect(() => {
        axiosClient
            .get("feature-product")
            .then((response) => {
                console.log(response.data);
                setFeature(response.data); // Set fetched data to state
            })
            .catch((error) => {
                console.log(error.message); // Log any errors
            });
    }, []);

    return (
        <div className="feature-product py-2">
            <h3 className="section-title py-3">Feature Product</h3>

            <>
                <Swiper
                    modules={[Grid, Pagination]}
                    slidesPerView={2}
                    grid={{
                        rows: 2,
                        fill: "row", // Can be 'row' or 'column'
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {feature &&
                        feature.map((item) => {
                            return (
                                <SwiperSlide key={item.sku}>
                                    <div className="feature-products-single-carusel-item">
                                        <div
                                            className="feature-product-image-container d-flex justify-content-center"
                                            style={{ position: "relative" }}
                                        >
                                            <button className="position-absolute rounded rounded-5 add-to-favorite ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-heart"
                                                    viewBox="0 0 16 16"
                                                    style={{
                                                        backgroundColor: "red",
                                                    }}
                                                >
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                </svg>
                                            </button>
                                            <div className="fature-product-image-box">
                                                <img
                                                    src={item.product_image}
                                                    alt=""
                                                    className="fit-image fature-product-image"
                                                />
                                            </div>
                                            <button
                                                className="rounded rounded-3 feature-product-btn"
                                                onClick={(e) => {
                                                addCart(item.product_id);
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                        <div className="feature-product-content py-1">
                                            <h6
                                                className="text-center"
                                                style={{ lineHeight: "14px" }}
                                            >
                                                <Link
                                                    to={`/product-view?sku=${item.sku}`}
                                                    className="nav-link text-primary"
                                                >
                                                    {" "}
                                                    {item.product.title
                                                        .split(" ")
                                                        .slice(0, 5)
                                                        .join(" ")}
                                                </Link>
                                            </h6>
                                            <p
                                                className="h6 text-center fw-bold"
                                                style={{
                                                    fontSize: "12px",
                                                    lineHeight: "8px",
                                                }}
                                            >
                                                From ${item.discount_price}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </>
        </div>
    );
}
