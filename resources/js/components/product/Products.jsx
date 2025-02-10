import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../../css/component/product/products.css";
import { useParams } from "react-router-dom";
import axiosClient from "../../Axios";
import { useStateContext } from "../../ContextProvider";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Products() {
    let { category } = useParams();
    let [products, setProducts] = useState();
    const [hasMore, setHasMore] = useState(true);
    let { cart, setCart, addCart, filter, setFilter } = useStateContext();

    let [sidebar, setSidebar] = useState(
        <div className="shadow " id="">
            <h5 className="px-1">Filters</h5>
            <ul id="product-pop-up-category" className="categorise">
                <h6>Category</h6>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="electronics"
                        id="flexCheckDefault"
                        onChange={(e) => categoryF(e)}
                    />

                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Electronics
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="glass"
                        id="flexCheckShoe"
                        onChange={(e) => {
                            categoryF(e);
                        }}
                    />
                    <label className="form-check-label" htmlFor="flexCheckShoe">
                        Glass
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="Clothing & Apparel"
                        id="flexCheckElectronics"
                        onChange={(e) => {
                            categoryF(e);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckElectronics"
                    >
                        Clothing & Apparel
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="Craft & DIY Supplies 	"
                        id="flexCheckCosmatic"
                        onChange={(e) => {
                            categoryF(e);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckCosmatic"
                    >
                        Craft & DIY Supplies
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="watch"
                        id="flexCheckWatch"
                        onChange={(e) => {
                            categoryF(e);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckWatch"
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
                        value="gucchi"
                        id="flexCheckGucchi"
                        onChange={(e) => {
                            brand(e);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckGucchi"
                    >
                        Gucchi
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="rolex"
                        id="flexCheckRolex"
                        onChange={(e) => {
                            brand(e);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckRolex"
                    >
                        Rolex
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="Raymond"
                        id="flexCheckElectronics"
                        onChange={(e) => {
                            brand(e);
                        }}
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
                        value="omega "
                        id="flexCheckOmega"
                        onChange={(e) => {
                            brand(e);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckOmega"
                    >
                        Omega
                    </label>
                </li>
                <li className="d-flex align-items-center gap-1">
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        value="loto"
                        id="flexCheckLotto"
                        onChange={(e) => {
                            brand(e);
                        }}
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
                    <label htmlFor="customRange1" className="form-label">
                        min:
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        id="customRangeMinPrice"
                        style={{
                            color: "grey",
                        }}
                        min="1"
                        max="100"
                        step="1"
                        onChange={(e) => {
                            setFilter((prev) => ({
                                ...prev,
                                price_min: Number(e.target.value), // Ensure the value is treated as a number
                            }));
                        }}
                    />
                </li>
                <li
                    className="d-flex alignitems-center gap-2"
                    style={{ listStyleType: "none" }}
                >
                    <label htmlFor="customRange1" className="form-label">
                        max:
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        id="customRangePriceMax"
                        style={{
                            color: "grey",
                        }}
                        min="500"
                        max="10000"
                        step="500"
                        onChange={(e) => {
                            setFilter((prev) => ({
                                ...prev,
                                price_max: Number(e.target.value), // Ensure the value is treated as a number
                            }));
                        }}
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
                            checked={filter.availability}
                            onChange={(e) => {
                                e.stopPropagation();
                                const { checked, value } = e.target;

                                setFilter((prev) => {
                                    // Check if category is already selected

                                    return {
                                        ...prev,
                                        availability: e.target.checked,
                                    };
                                });
                            }}
                        />
                    </div>
                </li>
            </ul>

            <ul>
                <div className="d-flex gap-2">
                    <label htmlFor="products-discount-range" className="">
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
                        <strong>3000</strong>
                    </span>
                </p>
            </ul>
        </div>
    );
    const categoryF = (e) => {
        // e.stopPropagation();
        const { checked, value } = e.target;
        setFilter((prev) => {
            const isCategorySelected = prev.category.includes(value);
            const updatedCategory = checked
                ? isCategorySelected
                    ? prev.category // No change if already selected
                    : [...prev.category, value] // Add new category
                : prev.category.filter((cat) => cat !== value); // Remove category if unchecked

            console.log("Updated category array:", updatedCategory);
            return {
                ...prev,
                category: updatedCategory,
            };
        });
        //setSidebar(sidebar)
    };
    let brand = (e) => {
        e.stopPropagation();
        const { checked, value } = e.target;

        setFilter((prev) => {
            // Check if category is already selected
            const isBrandSelected = prev.brand.includes(value);

            // If checked, add to category; if unchecked, remove from category
            const updatedBrand = checked
                ? isBrandSelected
                    ? prev.brand
                    : [...prev.brand, value]
                : prev.brand.filter((cat) => cat !== value);

            return {
                ...prev,
                brand: updatedBrand,
            };
        });
    };
    useEffect(() => {
        let getproductContainerWidth = document.getElementById(
            "products-product-show-section-product"
        );

        let productContainer = document.querySelectorAll(
            ".products-product-show-section-products-image"
        );
        if (getproductContainerWidth && productContainer) {
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
        }
    }, [products]);
    // useEffect(() => {
    //     console.log(category);
    //     axiosClient
    //         .post(`/product`, { category: category, offset: 0 })
    //         .then((response) => {
    //             console.log(response.data);
    //             setProducts(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [category]);
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

    const fetchData = () => {
        // Simulating an API call to fetch more data
        if (products.length >= 100) {
            setHasMore(false);
            return;
        }

        // Fetch more data from the API using offset
        setTimeout(() => {
            axiosClient
                .post(`/product`, {
                    ...filter,
                    offset: products && products.length,
                })
                .then((response) => {
                    // Check if the response has data and if there's more data
                    if (response.data.length > 0) {
                        //setFilter((pre)=>{return{...pre,offset:products.length}})
                        setProducts((prev) => [...prev, ...response.data]); // Append new data
                        if (response.data.length < 15) {
                            setHasMore(false);
                        }
                    } else {
                        setHasMore(false); // No more items to load
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }, 1000);
    };
    useEffect(() => {
        
        axiosClient
            .post(`/product`, filter)
            .then((response) => {
                console.log(response.data);
                if (response.data.length < 50) {
                    setHasMore(false);
                }
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filter, !filter.offset]);

    return (
        <div id="product" className="bg-white">
            <div className="product-nav p-1 d-flex align-items-center justify-content-between mb-3 shadow-sm">
                {filter.category.length > 0 && (
                    <p className="text-muted product-nav-result-count my-auto">
                        Showing <strong>499</strong> results for
                        {filter.category.map((el) => {
                            return (
                                <strong className="text-uppercase text-primary mx-1">
                                    <span className="text-danger"></span>
                                    {el}
                                    <span className="text-danger">,</span>
                                </strong>
                            );
                        })}
                    </p>
                )}
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
                        {sidebar}
                    </div>
                </div>
            </div>
            <div
                className="row w-100 mx-auto justify-content-center"
                id="roducts-show-section"
            >
                <div
                    className="col-md-3 col-lg-2 d-none d-md-block"
                    id="products-show-sidebar-box"
                >
                    <div id="products-show-sidebar">{sidebar}</div>
                    
                </div>
                <div className="col-12 col-md-9 col-lg-10 p-0">
                    {products && (
                        <InfiniteScroll
                            dataLength={products.length}
                            next={fetchData}
                            hasMore={hasMore}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    No more items to load.
                                </p>
                            } // Message when no more items
                        >
                            <div className="row bg-white w-100 mx-auto">
                                {products &&
                                    products.map((el, i) => {
                                        return (
                                            <div
                                                className="col-sm-4 col-md-3 col-6 col-lg-2 products-product-show-section-products p-1 mb-2"
                                                id="products-product-show-section-product"
                                                key={el.id * Math.random()}
                                            >
                                                <div className="card shadow border border-0 position-relative products-product-show-section-products">
                                                    <div className="product-image-container">
                                                        <img
                                                            src={
                                                                el.product_image
                                                            }
                                                            className="card-img-top products-product-show-section-products-image"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="card-body p-1 pb-0">
                                                        <div className="card-title h6 fw-bold text-muted text-wrap">
                                                            <Link
                                                                to={{
                                                                    pathname: `/product-view`,
                                                                    search: `?sku=${
                                                                        el
                                                                            .product_items
                                                                            .length >
                                                                        0
                                                                            ? el
                                                                                  .product_items[0]
                                                                                  .sku
                                                                            : ""
                                                                    }`,
                                                                }}
                                                                className="text-decoration-none"
                                                            >
                                                                {el.title.substr(
                                                                    0,
                                                                    20
                                                                )}
                                                                ...
                                                            </Link>
                                                        </div>
                                                        <div className="card-text">
                                                            <p className="">
                                                                <span
                                                                    className="h6"
                                                                    style={{
                                                                        fontSize:
                                                                            "16px",
                                                                        fontWeight:
                                                                            "bold",
                                                                        fontFamily:
                                                                            "monospace",
                                                                    }}
                                                                >
                                                                    {el
                                                                        .product_items
                                                                        .length >
                                                                    0
                                                                        ? el
                                                                              .product_items[0]
                                                                              .discount_price
                                                                        : ""}
                                                                </span>
                                                                <span
                                                                    className="text-decoration-line-through h6 mx-2"
                                                                    style={{
                                                                        fontSize:
                                                                            "14px",
                                                                    }}
                                                                >
                                                                    {el
                                                                        .product_items
                                                                        .length >
                                                                    0
                                                                        ? el
                                                                              .product_items[0]
                                                                              .price
                                                                        : ""}
                                                                </span>
                                                                <button
                                                                    className="btn btn-primary rounded-5 py-0"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                        if (
                                                                            el
                                                                                .product_items
                                                                                .length >
                                                                            0
                                                                        ) {
                                                                            addCart(
                                                                                el.id
                                                                            );
                                                                        }
                                                                    }}
                                                                >
                                                                    Add To Cart
                                                                </button>
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
                                                            style={{
                                                                strokeWidth:
                                                                    "2px",
                                                            }}
                                                        >
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </InfiniteScroll>
                    )}
                </div>
            </div>
        </div>
    );
}