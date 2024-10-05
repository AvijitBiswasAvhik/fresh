import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../../css/component/product/single-product-top.css";
import axiosClient from "../../Axios";
import "../../../css/component/product/zoom-place.css";

export default function SingleProduct() {
    let [imageResultion, setImageResulation] = useState();
    let [products, setProducts] = useState();
    let [galleryImage, setGalleryImage] = useState([]);
    let [relatedProduct, setRelatedProduct] = useState();
    let location = useLocation();
    const imageRef = useRef(null);
    const params = new URLSearchParams(location.search);
    const skuParam = params.get("sku");
    const otherDataParam = params.get("otherData");
    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize);

        if (imageRef.current) {
            resizeObserver.observe(imageRef.current);
        }

        // Add event listeners inside the useEffect
        let multiImage = document.querySelectorAll(
            ".single-product-images-image"
        );

        multiImage.forEach((element) => {
            var img = new Image();
            element.addEventListener("click", () => {
                let singleImage = document.querySelector(
                    ".single-product-single-images"
                );

                img.onload = function () {
                    var resolution = {
                        width: img.width,
                        height: img.height,
                    };

                    singleImage.setAttribute(
                        "data-myobject",
                        JSON.stringify(resolution)
                    );
                    singleImage.querySelector("img").src =
                        element.querySelector("img").src;
                    let zoomPlaced = (document
                        .getElementById("zoom-place")
                        .querySelector("img").src =
                        element.querySelector("img").src);

                    let nHeight =
                        singleImage.clientWidth *
                        (resolution.height / resolution.width);
                    let multiImage = document.getElementById(
                        "single-product-images-multi"
                    );
                    multiImage.style.maxHeight = nHeight + "px";
                    singleImage.style.maxHeight = nHeight + "px";
                };
                img.src = element.querySelector("img").src;

                // Add your custom logic here
                // For example, you can update the state or perform any other action.
            });
        });
        // create a hover effect for a product//
        let zoomImage = document.getElementById("zoom-image");
        let zoomPlaced = document.getElementById("zoom-place");
        if (zoomImage) {
            zoomImage.addEventListener("mouseleave", () => {
                zoomPlaced.classList.remove("show");
            });

            zoomImage.addEventListener("mousemove", (e) => {
                let mouseX = e.clientX - zoomImage.getBoundingClientRect().left;
                let mouseY = e.clientY - zoomImage.getBoundingClientRect().top;
                let clientWidth = zoomImage.clientWidth;
                let clientHeight = zoomImage.clientHeight;
                //let scaleX = (198.5 / clientWidth) * mouseX;
                //let scaleY = (158.75 / clientHeight) * mouseY;

                zoomPlaced.style.height = clientHeight;
                zoomPlaced.style.width = clientWidth;
                var canvas = zoomPlaced.querySelector("canvas");
                var ctx = imageCanvas.getContext("2d");
                var x = 100; // x-coordinate of the part to extract
                var y = 200; // y-coordinate of the part to extract
                var width = 400; // Width of the part to extract
                var height = 450;
                canvas.width = clientWidth;
                canvas.height = clientHeight;
                var sourceImage = zoomImage.querySelector("img");
                // Draw the specified part of the image onto the canvas

                ctx.drawImage(
                    sourceImage,
                    mouseX,
                    mouseY,
                    200,
                    200,
                    0,
                    0,
                    400,
                    400
                );

                zoomPlaced.classList.add("show");
            });
        }
        // Cleanup function
        return () => {
            resizeObserver.disconnect();

            // Remove event listeners in the cleanup function
            multiImage.forEach((element) => {
                element.removeEventListener("click", () => {
                    console.log("Clicked on an image:", element);
                });
            });
        };
    }, [products, galleryImage]);

    useEffect(() => {
        axiosClient
            .get(`product-view?sku=${skuParam}`)
            .then((response) => {
                setProducts(response.data);
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
    const handleResize = (entries) => {
        //console.log('Element height:', entries);
        let singleImage = document.querySelector(
            ".single-product-single-images"
        );
        let multiImage = document.getElementById("single-product-images-multi");
        var img = new Image();
        for (const entry of entries) {
            const { target } = entry;
            img.onload = function () {
                var resolution = {
                    width: img.width,
                    height: img.height,
                };
                let nResulation = target.dataset.myobject
                    ? JSON.parse(target.dataset.myobject)
                    : resolution;
                let nHeight =
                    target.clientWidth *
                    (nResulation.height / nResulation.width);

                if (window.innerWidth > 760) {
                    multiImage.style.maxHeight = nHeight + "px";
                    singleImage.style.maxHeight = nHeight + "px";
                }
            };
            img.src = target.querySelector("img").src;
        }
    };
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
                                    <div
                                        className="single-product-images-image"
                                        ref={imageRef}
                                    >
                                        <img
                                            src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                            alt=""
                                            className="fit-image"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="single-product-single-images single-product-image"
                                    ref={imageRef}
                                    id="zoom-image"
                                >
                                    <img
                                        src={`${products.product_image}`}
                                        alt=""
                                        className="fit-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden" id="zoom-place">
                            <canvas id="imageCanvas"></canvas>
                        </div>
                        <div className="single-product-top single-product-top-price-content p-2">
                            <p className="h5 sticky-title">{products.title}</p>
                            <p
                                className="d-flex align-items-center justify-content-flex-start gap-3"
                                id="price"
                            >
                                <span
                                    id="discount-price"
                                    className="h3 fw-bold"
                                >
                                    ₹{products.product_items[0].discount_price}
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
                                        ((products.product_items[0].price -
                                            products.product_items[0]
                                                .discount_price) *
                                            100) /
                                            products.product_items[0].price
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
                                style={{ margin: "0 auto", width: "200px" }}
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
                    </div>
                    <div className="single-product-top p-2 mt-3">
                        <div className="row bg-white">
                            <h4>Related Product</h4>
                            {relatedProduct &&
                                relatedProduct.map((el, i) => {
                                    if (el) {
                                        return (
                                            <div
                                                className="col-sm-4 col-md-3 col-lg-2 related-card-product"
                                                key={i}
                                            >
                                                <div className="card overflow-hidden product-card p-2">
                                                    <img
                                                        src={el.product_image}
                                                        alt=""
                                                        className="card-image-top rounded rounded-2"
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
