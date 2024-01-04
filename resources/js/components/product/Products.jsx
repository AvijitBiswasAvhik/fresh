import React, { useEffect } from "react";
import "../../../css/component/product/products.css";

export default function Products() {
    useEffect(() => {});
    let remainFilterBox = (e) => {
        let filterBox = document.getElementById("product-filter-box");
        filterBox.classList.add("show");
    };
    let hideFilterBox = (e) => {
        let filterBox = document.getElementById("product-filter-box");

        filterBox.classList.remove("show");
        //}, [2000]);
    };
    return (
        <div id="product" className="bg-white">
            <div className="product-nav p-1 d-flex align-items-center justify-content-between">
                <p className="text-muted product-nav-result-count my-auto">
                    Showing <strong>499</strong> results for
                    <strong className="text-uppercase"> sarre</strong>
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
                            <p className="min">
                                min:<strong>1000</strong>
                            </p>
                            <p className="max">
                                max:<strong> 10000</strong>
                            </p>
                        </p>
                    </ul>
                    <ul
                        className="product-filter-avilabilty-filter"
                        style={{ listStyleType: "none" }}
                    >
                        <li>
                            <div class="form-check form-switch">
                                <label
                                    class="form-check-label"
                                    for="products-availability"
                                >
                                    availability
                                </label>
                                <input
                                    class="form-check-input bg-secondary"
                                    type="checkbox"
                                    id="products-availability"
                                />
                            </div>
                        </li>
                    </ul>
                    
                    <ul>
                    <div class="d-flex gap-2">
                        <label for="products-discount-range" class="">
                            Discount:
                        </label>
                        <input
                            type="range"
                            class="form-range"
                            id="products-discount-range"
                        />
                        
                    </div>
                    <p className="product-discount-amount"><span>amount:</span> <span><strong>300</strong></span></p>
                    </ul>
                </div>
                <div className="col-12 col-md-9 bg-primary"></div>
            </div>
        </div>
    );
}
