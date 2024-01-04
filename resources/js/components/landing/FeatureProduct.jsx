import React from "react";
import "../../../css/component/landing/FeatureProduct.css";

export default function FeatureProduct() {
    return (
        <>
            <h3 className="section-title py-3">Feature Product</h3>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="feature-products-single-carusel">
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
                                            style={{backgroundColor:'red'}}
                                        >
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                    </button>
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />

                                    <button className="rounded rounded-3 feature-product-btn">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="feature-product-content py-1">
                                    <h6
                                        className="text-center"
                                        style={{ lineHeight: "14px" }}
                                    >
                                        Jewlary & arts
                                    </h6>
                                    <p
                                        className="h6 text-center fw-bold"
                                        style={{
                                            fontSize: "12px",
                                            lineHeight: "8px",
                                        }}
                                    >
                                        From $10
                                    </p>
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div
                                    className="feature-product-image-container d-flex justify-content-center"
                                    style={{ position: "relative" }}
                                >
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />

                                    <button className="rounded rounded-3 feature-product-btn">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="feature-product-content py-1">
                                    <h6
                                        className="text-center"
                                        style={{ lineHeight: "14px" }}
                                    >
                                        Jewlary & arts
                                    </h6>
                                    <p
                                        className="h6 text-center fw-bold"
                                        style={{
                                            fontSize: "12px",
                                            lineHeight: "8px",
                                        }}
                                    >
                                        From $10
                                    </p>
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/free-photo/beautiful-woman-face-with-fashion-green-make-up-jewelry-hand_186202-7077.jpg?w=740&t=st=1703481071~exp=1703481671~hmac=97ecc43dc0ba0845e48450b3be5ebf9349a748ce347a894bb8be4e2b9a3e766d"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-sm-block">
                                7
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-sm-block">
                                8
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-md-block">
                                9
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-md-block">
                                10
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="feature-products-single-carusel">
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                                <div className="feature-product-content py-1">
                                    <h6
                                        className="text-center"
                                        style={{ lineHeight: "14px" }}
                                    >
                                        Jewlary & arts
                                    </h6>
                                    <p
                                        className="h6 text-center fw-bold"
                                        style={{
                                            fontSize: "12px",
                                            lineHeight: "8px",
                                        }}
                                    >
                                        From $10
                                    </p>
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/free-photo/beautiful-woman-face-with-fashion-green-make-up-jewelry-hand_186202-7077.jpg?w=740&t=st=1703481071~exp=1703481671~hmac=97ecc43dc0ba0845e48450b3be5ebf9349a748ce347a894bb8be4e2b9a3e766d"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item">
                                <div className="feature-product-image-container">
                                    <img
                                        src="https://img.freepik.com/premium-photo/beautiful-jewellery-girls-model-indian-woman-model-with-jewelry-set-bride-model_717991-211.jpg?w=740"
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-sm-block">
                                7
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-sm-block">
                                8
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-md-block">
                                9
                            </div>
                            <div className="feature-products-single-carusel-item d-none d-md-block">
                                10
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev my-auto slider-btn"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next slider-btn my-auto"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
