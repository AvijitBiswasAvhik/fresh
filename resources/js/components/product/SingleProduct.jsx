import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../../css/component/product/single-product-top.css";
import axiosClient from "../../Axios";
import "../../../css/component/product/zoom-place.css";
import { useStateContext } from "../../ContextProvider";

export default function SingleProduct() {
    let [products, setProducts] = useState();
    let [galleryImage, setGalleryImage] = useState([]);
    let [relatedProduct, setRelatedProduct] = useState();
    let { addCart } = useStateContext();
    let location = useLocation();
    const lenseRef = useRef(null);
    const zoomRef = useRef(null);
    let [src, setSrc] = useState();
    const params = new URLSearchParams(location.search);
    const skuParam = params.get("sku");
    const otherDataParam = params.get("otherData");
    const [hoverPosition, setHoverPosition] = useState({
        x: 0,
        y: 0,
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        lHeight: 0,
        lWidth: 0,
        px: 0,
        py: 0,
        bgS: { ratioHeight: 0, ratioWidth: 0 },
        leCovered: { x: 0, y: 0 },
    });
    const [isHovered, setIsHovered] = useState(false);
    console.log(products);
    function calculateAspectRatio(width, height) {
        function gcd(a, b) {
            return b === 0 ? a : gcd(b, a % b);
        }

        const divisor = gcd(width, height);
        const ratioWidth = width / 3;
        const ratioHeight = height / 3;

        return { ratioWidth, ratioHeight };
    }
    // Example usage:

    const handleMouseMove = (e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        let lense = lenseRef.current.getBoundingClientRect();
        const maxTop = rect.height; // Replace 'a' with your desired max top value
        const maxLeft = rect.width; // Replace 'b' with your desired max left value
        let zoomRect = zoomRef.current.getBoundingClientRect();
        // Calculate `left` and `top` based on mouse position
        let left = e.clientX - rect.left;
        let top = e.clientY - rect.top;
        // Clamp `left` and `top` values within specified range
        left = Math.max(
            hoverPosition.bgS.ratioWidth / 2,
            Math.min(left, maxLeft - hoverPosition.bgS.ratioWidth / 2)
        );
        top = Math.max(
            hoverPosition.bgS.ratioHeight / 2,
            Math.min(top, maxTop - hoverPosition.bgS.ratioHeight / 2)
        );
        setHoverPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            left: left,
            top: top,
            width: rect.width,
            height: rect.height,
            px: lense.x - rect.x,
            py: lense.y - rect.y,
            bgS: calculateAspectRatio(zoomRect.width, zoomRect.height),
            leCovered: {
                x: (rect.width / lense.width) * 100,
                y: (rect.height / lense.height) * 100,
            },
        });
    };
    //console.log(hoverPosition)
    useEffect(() => {
        // Add event listeners inside the useEffect
        let multiImage = document.querySelectorAll(
            ".single-product-images-image"
        );

        multiImage.forEach((element) => {
            element.addEventListener("click", () => {
                let singleImage = document.querySelector(
                    ".single-product-single-images"
                );

                // singleImage.querySelector("img").src =
                //     element.querySelector("img").src;
                //imageRef.current = element.querySelector("img").src;

                setSrc(element.querySelector("img").src);

                // Add your custom logic here
                // For example, you can update the state or perform any other action.
            });
        });
    }, [products, galleryImage]);

    useEffect(() => {
        axiosClient
            .get(`product-view?sku=${skuParam}`)
            .then((response) => {
                setProducts(response.data);
                setSrc(response.data.product_image);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [skuParam]);
    useEffect(() => {
        if (products && products.category_id) {
            axiosClient
                .get(
                    `related-product?category=${
                        products && products.category_id
                    }`
                )
                .then((response) => {
                    setRelatedProduct(response.data);
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    }, [products, skuParam]);
    useEffect(() => {
        if (products) {
            setGalleryImage(products.gallery_images);
        }
    }, [products]);
    let getImageResolution = (url) => {};

    return (
        <>
            {products && (
                <div id="single-product">
                    
                    <div className="single-product-top-section p-0">
                        <div className="show-image-container">
                            <div
                                className="single-product-top"
                                id="single-product-top-image-container"
                            >
                                <div
                                    id="single-product-images-multi"
                                    className="single-product-images single-product-image"
                                >
                                    <div className="single-product-images-image">
                                        {products && (
                                            <img
                                                src={`${products.product_image}`}
                                                alt=""
                                                className="fit-image active"
                                            />
                                        )}
                                    </div>

                                    {galleryImage &&
                                        galleryImage.map((el, i) => {
                                            return (
                                                <div
                                                    className="single-product-images-image"
                                                    key={
                                                        el.product_gallery_image
                                                    }
                                                >
                                                    <img
                                                        src={`${el.product_gallery_image}`}
                                                        alt=""
                                                        className="fit-image"
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div
                                    className=" d-flex align-items-center justify-content-center single-product-single-images single-product-image"
                                    id="zoom-image"
                                >
                                    <div className="hover-container">
                                        <img
                                            onMouseMove={handleMouseMove}
                                            onMouseEnter={() =>
                                                setIsHovered(true)
                                            }
                                            onMouseLeave={() =>
                                                setIsHovered(false)
                                            }
                                            src={src}
                                            alt="Main"
                                            className="main-image mx-auto"
                                        />
                                        {isHovered && (
                                            <img
                                                src="\site-image\tile._CB483369979_.gif"
                                                alt=""
                                                id="single-product-lense"
                                                style={{
                                                    backgroundColor:
                                                        "#0dcaff33",
                                                    top:
                                                        hoverPosition.top -
                                                        hoverPosition.bgS
                                                            .ratioHeight /
                                                            2,
                                                    left:
                                                        hoverPosition.left -
                                                        hoverPosition.bgS
                                                            .ratioWidth /
                                                            2,
                                                    height: hoverPosition.bgS
                                                        .ratioHeight,
                                                    width: hoverPosition.bgS
                                                        .ratioWidth,
                                                }}
                                                ref={lenseRef}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="single-product-top single-product-top-price-content"
                            id="zoom-place"
                            ref={zoomRef}
                        >
                            {isHovered ? (
                                <div
                                    className="zoomed-image"
                                    id="zoomed-image-box"
                                    style={{
                                        backgroundImage: `url(${src})`,
                                        backgroundSize: `${hoverPosition.leCovered.x}% ${hoverPosition.leCovered.y}%`,
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: `${
                                            (hoverPosition.px /
                                                (hoverPosition.width -
                                                    hoverPosition.bgS
                                                        .ratioWidth -
                                                    10)) *
                                            100
                                        }% ${
                                            (hoverPosition.py /
                                                (hoverPosition.height -
                                                    hoverPosition.bgS
                                                        .ratioHeight)) *
                                            100
                                        }%`,
                                    }}
                                />
                            ) : (
                                <div className="single-product-top single-product-top-price-content p-2">
                                    
                                    <p className="h5 sticky-title">
                                        {products.title}
                                    </p>
                                    <p
                                        className="d-flex align-items-center justify-content-flex-start gap-3"
                                        id="price"
                                    >
                                        <span
                                            id="discount-price"
                                            className="h3 fw-bold"
                                        >
                                            ₹
                                            {
                                                products.product_items[0]
                                                    .discount_price
                                            }
                                        </span>{" "}
                                        <span
                                            id="price"
                                            className="text-decoration-line-through"
                                        >
                                            ₹{products.product_items[0].price}
                                        </span>
                                        <span id="discount-percent">
                                            (
                                            {Math.floor(
                                                ((products.product_items[0]
                                                    .price -
                                                    products.product_items[0]
                                                        .discount_price) *
                                                    100) /
                                                    products.product_items[0]
                                                        .price
                                            )}
                                            % off){" "}
                                        </span>
                                        <button className="btn btn-primary rounded rounded-5">
                                            s
                                        </button>
                                    </p>
                                    <div id="variants" className="row">
                                        <div
                                            id="variants-color"
                                            className="col d-flex gap-5 mb-4"
                                        >
                                            <span className="color fw-bold text-muted">
                                                Color
                                            </span>
                                            <div className="variants-all-color d-flex gap-2">
                                                <span className="rounded rounded-3 p-1 shadow-lg variants-color-red bg-danger">
                                                    Red
                                                </span>
                                                <span className="rounded rounded-3 p-1 shadow-lg variants-color-yellow bg-warning">
                                                    Yellow
                                                </span>
                                                <span className="rounded rounded-3 p-1 shadow-lg variants-color-black bg-dark text-success">
                                                    Black
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            id="variants-storage"
                                            className="col fw-4 fw-bold text-muted d-flex gap-4 mb-4"
                                        >
                                            <span>Storage</span>
                                            <div className="variants-all-storage d-flex gap-1">
                                                <button className="btn btn-outline-secondary">
                                                    256 GB
                                                </button>
                                                <button className="btn btn-outline-secondary">
                                                    512 GB
                                                </button>
                                                <button className="btn btn-outline-secondary">
                                                    1 TB
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <span className="highlight-items fw-bold text-muted">
                                            Highlights
                                        </span>
                                        <ul className="">
                                            <li className="d-flex gap-2">
                                                <span className="variants-name">
                                                    color
                                                </span>
                                                |
                                                <span className="variants-value">
                                                    Red
                                                </span>
                                            </li>
                                            <li className="d-flex gap-2">
                                                <span className="variants-name">
                                                    Ram
                                                </span>
                                                |
                                                <span className="variants-value">
                                                    12 gb
                                                </span>
                                            </li>
                                            <li className="d-flex gap-2">
                                                <span className="variants-name">
                                                    Rom
                                                </span>
                                                |
                                                <span className="variants-value">
                                                    256 gb
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button
                                        className="btn btn-secondary text-warning rounded rounded-5 fw-bold mt-2"
                                        style={{
                                            margin: "0 auto",
                                            width: "200px",
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addCart(products.id);
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                    <h6 className="h5 mt-4">Description</h6>
                                    <div
                                        className="product-description d-flex mt-3"
                                        dangerouslySetInnerHTML={{
                                            __html: products.description,
                                        }}
                                    ></div>
                                    <div className="product-specification">
                                        <h5>Specification</h5>
                                        table
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="single-product-top p-2 mt-3">
                        <div className="row bg-white">
                            <h4>Related Product</h4>
                            {relatedProduct &&
                                relatedProduct.map((el, i) => {
                                    if (el) {
                                        return (
                                            <div
                                                className="col-sm-4 col-6 col-md-3 col-lg-2 related-card-product"
                                                key={i}
                                            >
                                                <div className="card overflow-hidden product-card p-2">
                                                    <img
                                                        src={el.product_image}
                                                        alt=""
                                                        className="card-image-top single-product-related-image rounded rounded-2"
                                                    />
                                                    <div className="card-body p-0 pt-2">
                                                        <div>
                                                            <h4 className="card-title fs-6 text-capitalize">
                                                                <Link
                                                                    to={{
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
                                                                    className="text-decoration-none text-dark fw-bold"
                                                                >
                                                                    {" "}
                                                                    {el.title.substring(
                                                                        0,
                                                                        20
                                                                    )}
                                                                </Link>
                                                            </h4>
                                                            <h6 className="card-subtitle text-muted">
                                                                {
                                                                    el.category
                                                                        .category
                                                                }
                                                            </h6>
                                                            <p className="card-text discount-price h6 fw-bold mt-2">
                                                                ${" "}
                                                                {el
                                                                    .product_items
                                                                    .length > 0
                                                                    ? el
                                                                          .product_items[0]
                                                                          .discount_price
                                                                    : ""}
                                                            </p>
                                                            <p className="card-text price h6 mt-2 text-muted ">
                                                                <span className="text-decoration-line-through">
                                                                    $
                                                                    {el
                                                                        .product_items
                                                                        .length >
                                                                    0
                                                                        ? el
                                                                              .product_items[0]
                                                                              .price
                                                                        : ""}
                                                                </span>
                                                                {el
                                                                    .product_items
                                                                    .length >
                                                                    0 &&
                                                                    ` (off ${Math.floor(
                                                                        ((el
                                                                            .product_items[0]
                                                                            .price -
                                                                            el
                                                                                .product_items[0]
                                                                                .discount_price) *
                                                                            100) /
                                                                            el
                                                                                .product_items[0]
                                                                                .price
                                                                    )}%)`}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <button
                                                        className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                                        style={{
                                                            height: "20px",
                                                            width: "20px",
                                                        }}
                                                        id="product-favorite-btn"
                                                    >
                                                        <div>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                className="bi bi-heart mx-auto my-auto"
                                                                viewBox="0 0 16 16"
                                                                style={{
                                                                    height: "16px",
                                                                    width: "16px",
                                                                }}
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
