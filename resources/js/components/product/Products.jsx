import React, { useEffect } from "react";
import "../../../css/component/product/products.css";
import { useParams } from "react-router-dom";

export default function Products() {
    let {category} = useParams();
    useEffect(() => {
        let getproductContainerWidth = document.getElementById(
            "products-product-show-section-product"
        );

        let productContainer = document.querySelectorAll(
            ".products-product-show-section-products-image"
        );
        productContainer.forEach((element) => {
            let clientWidth = getproductContainerWidth.clientWidth;
            let clientHeight = (clientWidth * 5) / 4;
            element.style = `height: ${clientHeight}px`;
            window.addEventListener("resize", (e) => {
                let clientWidth = getproductContainerWidth.clientWidth;
                let clientHeight = (clientWidth * 5) / 4;
                element.style = `height: ${clientHeight}px`;
            });
        });
    });
    let remainFilterBox = (e) => {
        let filterBox = document.getElementById("product-filter-box");
        filterBox.classList.add("show");
    };
    let hideFilterBox = (e) => {
        let filterBox = document.getElementById("product-filter-box");

        filterBox.classList.remove("show");
        //}, [2000]);

        // add event listener to all products iamge to maintain responsive height and width//
    };
    return (
        <div id="product" className="bg-white">
            <div className="product-nav p-1 d-flex align-items-center justify-content-between mb-3 shadow-sm">
                <p className="text-muted product-nav-result-count my-auto">
                    Showing <strong>499</strong> results for
                    <strong className="text-uppercase"> {category}</strong>
                </p>
                <div className="product-filter d-flex align-items-center gap-1">
                    <label htmlFor="product-sort-by" className="">
                        Sort By :
                    </label>
                    <select
                        className="form-select w-50"
                        id="product-sort-by"
                        aria-label="Default select example"
                    >
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button
                        className="btn p-0"
                        id="product-filter-btn"
                        onMouseEnter={(e) => remainFilterBox(e)}
                        onMouseLeave={(e) => {
                            hideFilterBox(e);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-filter-right d-md-none"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
                        </svg>
                    </button>
                    <div
                        className="product-filter-box d-md-none"
                        id="product-filter-box"
                        onMouseLeave={(e) => hideFilterBox(e)}
                        onMouseEnter={(e) => {
                            remainFilterBox(e);
                        }}
                    >
                        <div id="product-filter-box-children">
                            <h5>Filter</h5>
                            <ul
                                id="product-pop-up-category"
                                className="categorise"
                            >
                                <h6>Category</h6>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Bags
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckShirt"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckShirt"
                                    >
                                        Shoe
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckElectronics"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckElectronics"
                                    >
                                        Sarees
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheck"
                                    >
                                        Cosmatic
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckGirls"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckGirls"
                                    >
                                        Clock
                                    </label>
                                </li>
                            </ul>
                            <ul
                                id="product-pop-up-category"
                                className="categorise"
                            >
                                <h6>Brands</h6>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Gucchi
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckShirt"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckShirt"
                                    >
                                        Rolex
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckElectronics"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckElectronics"
                                    >
                                        Raymond
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheck"
                                    >
                                        Easy Brand
                                    </label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckGirls"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckGirls"
                                    >
                                        Lotto
                                    </label>
                                </li>
                            </ul>
                            <ul className="product-filter-price-range">
                                <h6>Price Range</h6>
                                <li
                                    className="d-flex alignitems-center gap-2"
                                    style={{ listStyleType: "none" }}
                                >
                                    <label
                                        htmlFor="customRange1"
                                        className="form-label"
                                    >
                                        min:
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="customRange1"
                                        style={{
                                            color: "grey",
                                            width: "200px",
                                        }}
                                        min="0"
                                        max="5"
                                        step="0.5"
                                    />
                                </li>
                                <li
                                    className="d-flex alignitems-center gap-2"
                                    style={{ listStyleType: "none" }}
                                >
                                    <label
                                        htmlFor="customRange1"
                                        className="form-label"
                                    >
                                        max:
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="customRange1"
                                        style={{
                                            color: "grey",
                                            width: "200px",
                                        }}
                                        min="0"
                                        max="5"
                                        step="0.5"
                                    />
                                </li>
                                <p className="d-flex gap-2">
                                    <span className="min">
                                        min:<strong>1000</strong>
                                    </span>
                                    <span className="max">
                                        max:<strong> 10000</strong>
                                    </span>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="products-show-section">
                <div className="col-md-3 col-lg-2 d-none d-md-block">
                    <div className="shadow " id="products-show-sidebar">
                        <h5 className="px-1">Filter</h5>
                        <ul id="product-pop-up-category" className="categorise">
                            <h6>Category</h6>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    Bags
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckShirt"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckShirt"
                                >
                                    Shoe
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckElectronics"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckElectronics"
                                >
                                    Sarees
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheck"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheck"
                                >
                                    Cosmatic
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckGirls"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckGirls"
                                >
                                    Clock
                                </label>
                            </li>
                        </ul>
                        <ul id="product-pop-up-category" className="categorise">
                            <h6>Brands</h6>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    Gucchi
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckShirt"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckShirt"
                                >
                                    Rolex
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckElectronics"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckElectronics"
                                >
                                    Raymond
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheck"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheck"
                                >
                                    Easy Brand
                                </label>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <input
                                    className="form-checkbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckGirls"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckGirls"
                                >
                                    Lotto
                                </label>
                            </li>
                        </ul>
                        <ul className="product-filter-price-range w-100">
                            <h6>Price Range</h6>
                            <li
                                className="d-flex alignitems-center gap-2"
                                style={{ listStyleType: "none" }}
                            >
                                <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                >
                                    min:
                                </label>
                                <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                    style={{
                                        color: "grey",
                                    }}
                                    min="0"
                                    max="5"
                                    step="0.5"
                                />
                            </li>
                            <li
                                className="d-flex alignitems-center gap-2"
                                style={{ listStyleType: "none" }}
                            >
                                <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                >
                                    max:
                                </label>
                                <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                    style={{
                                        color: "grey",
                                    }}
                                    min="0"
                                    max="5"
                                    step="0.5"
                                />
                            </li>
                            <p className="">
                                <span className="min">
                                    min:<strong>1000</strong>
                                </span>
                                <span className="max">
                                    max:<strong> 10000</strong>
                                </span>
                            </p>
                        </ul>
                        <ul
                            className="product-filter-avilabilty-filter"
                            style={{ listStyleType: "none" }}
                        >
                            <li>
                                <div className="form-check form-switch">
                                    <label
                                        className="form-check-label"
                                        htmlFor="products-availability"
                                    >
                                        availability
                                    </label>
                                    <input
                                        className="form-check-input bg-secondary"
                                        type="checkbox"
                                        id="products-availability"
                                    />
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <div className="d-flex gap-2">
                                <label
                                    htmlFor="products-discount-range"
                                    className=""
                                >
                                    Discount:
                                </label>
                                <input
                                    type="range"
                                    className="form-range"
                                    id="products-discount-range"
                                />
                            </div>
                            <p className="product-discount-amount">
                                <span>amount:</span>{" "}
                                <span>
                                    <strong>300</strong>
                                </span>
                            </p>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-10">
                    <div className="shadow bg-white h-100 p-1">
                        <div className="row bg-white">
                            <div
                                className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2"
                                id="products-product-show-section-product"
                            >
                                <div className="card p-0 shadow border border-0 position-relative products-product-show-section-products">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body p-1 pb-0">
                                        <div className="card-title h6 fw-bold text-muted">
                                            Ai is the Future
                                        </div>
                                        <div className="card-text">
                                            <p className="">
                                                <span className="text-decoration-line-through h6 text-muted" style={{fontSize: '14px' }}>
                                                    $100 
                                                </span> 
                                                <span className="h6 mx-2" style={{fontSize: '16px', fontWeight: 'bold', fontFamily: 'monospace' }}>
                                                    $90
                                                </span>
                                                <button className="btn btn-dark rounded-5">Add To Cart</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="products-product-show-section-products-heart position-absolute end-0 mt-1 me-2 bg-white rounded-5 align-items-center justify-content-center"
                                        style={{
                                            height: "30px",
                                            width: "30px",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-heart"
                                            viewBox="0 0 16 16"
                                            style={{ strokeWidth: "2px" }}
                                        >
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2">
                                <div className="card shadow border border-0">
                                    <img
                                        src="https://content.app-sources.com/s/36089249486403308/uploads/03_Blog_post_images/25_stellasky_A_beautiful_woman_short_red_hair_green_eyes_pale_ski_e7597bd7-da95-4e95-b548-d9351cc6a64f-5840206.png?format=webp"
                                        className="card-img-top products-product-show-section-products-image"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <div className="card-title"></div>
                                        <div className="card-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
