import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/component/landing/TopSliderSection.css";
import axiosClient from "../../Axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useStateContext } from "../../ContextProvider";

export default function TopSliderSection() {
    const [top, setTop] = useState();
    const [responsive, setReponsive] = useState();
    const { saveFilter, filter} = useStateContext();
    useEffect(() => {
        axiosClient
            .get("top-product")
            .then((response) => {
                
                setTop(response.data); // Set fetched data to state
            })
            .catch((error) => {
                console.log(error.message); // Log any errors
            });
        // Add event listener for window resize
    }, []);
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
                spaceBetween={30} // Space between slides
                // Number of slides to show at once
                loop={true} // Enable looping
                autoplay={{
                    delay: 2500, // 2.5-second delay
                    disableOnInteraction: false, // Allow autoplay even after interaction
                }}
                navigation // Enable navigation arrows
                pagination={{ clickable: true }} // Enable clickable pagination
                // Enable draggable scrollbar
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
                {top &&
                    top.map((product) => (
                        <SwiperSlide key={product.id}>
                            {" "}
                            {/* Ensure each slide has a unique key */}
                            <div
                                className="card shadow-lg overflow-hidden"
                                id="top-product-card"
                            >
                                <div id="top-slider-image-container">
                                    <img
                                        className="top-slider-image-container-image"
                                        src={product.product_image}
                                        alt={product.name}
                                    />{" "}
                                    {/* Assuming product has an image and name */}
                                </div>
                                <div className="top-product-body">
                                    <button id="top-product-button">
                                        <Link
                                            to={"/products"}
                                            className="nav-link"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                saveFilter(
                                                    product.product.category
                                                        .category
                                                );
                                            }}
                                        >
                                            {product.product.category.category}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}
