import React, { useEffect, useRef, useState } from "react";
import "../../../css/component/product/single-product-top.css";

export default function SingleProduct() {
    let [imageResultion, setImageResulation] = useState();
    const imageRef = useRef(null);
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

        zoomImage.addEventListener("mouseleave", () => {
            zoomPlaced.classList.remove("show");
        });

        zoomImage.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX - zoomImage.getBoundingClientRect().left;
            let mouseY = e.clientY - zoomImage.getBoundingClientRect().top;
            let clientWidth = zoomImage.clientWidth;
            let clientHeight = zoomImage.clientHeight;
            let scaleX = (198.5 / clientWidth) * mouseX;
            let scaleY = (158.75 / clientHeight) * mouseY;

            zoomPlaced.querySelector("img").style.transform = `translate3d(-${
                scaleX * 12
            }px, -${scaleY * 12}px, 0)`;
            zoomPlaced.classList.add("show");
        });

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
    }, []);

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
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://res.heraldm.com/content/image/2014/08/12/20140812000757_0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
                            <div className="single-product-images-image">
                                <img
                                    src="https://i.etsystatic.com/22775504/r/il/8395a2/5289075280/il_794xN.5289075280_t2y0.jpg"
                                    alt=""
                                    className="fit-image"
                                />
                            </div>
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
                                src="https://i.etsystatic.com/22775504/r/il/f5c641/5289127644/il_794xN.5289127644_1jy0.jpg"
                                alt=""
                                className="fit-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="" id="zoom-place">
                    <img
                        src="https://i.etsystatic.com/22775504/r/il/f5c641/5289127644/il_794xN.5289127644_1jy0.jpg"
                        alt=""
                        className=""
                    />
                </div>
                <div className="single-product-top single-product-top-price-content p-2">
                    <p className="h5 sticky-title">
                        SAMSUNG Galaxy S23 Ultra 5G (Phantom Black, 256 GB) (12
                        GB RAM)#
                    </p>
                    <p
                        className="d-flex align-items-center justify-content-flex-start gap-3"
                        id="price"
                    >
                        <span id="discount-price" className="h3 fw-bold">
                            ₹1,24,999
                        </span>{" "}
                        <span
                            id="price"
                            className="text-decoration-line-through"
                        >
                            ₹1,49,999
                        </span>
                        <span id="discount-percent">16% off</span>
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
                                <span className="variants-name">color</span>|
                                <span className="variants-value">Red</span>
                            </li>
                            <li className="d-flex gap-2">
                                <span className="variants-name">Ram</span>|
                                <span className="variants-value">12 gb</span>
                            </li>
                            <li className="d-flex gap-2">
                                <span className="variants-name">Rom</span>|
                                <span className="variants-value">256 gb</span>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="btn btn-secondary text-warning rounded rounded-5 fw-bold mt-2"
                        style={{ margin: "0 auto", width: "200px" }}
                    >
                        Add to cart
                    </button>
                    <div className="product-description d-flex mt-3">
                        <span>Description</span>
                        <ul>
                            <li>
                                <h5 className="description-type">
                                    Unmatched Display:
                                </h5>
                                <p>
                                    Immerse yourself in the brilliance of a
                                    6.2-inch Dynamic AMOLED 2X display, boasting
                                    a mesmerizing Quad HD+ resolution. The
                                    Galaxy S20's Infinity-O display delivers
                                    true-to-life colors, deep blacks, and a
                                    buttery-smooth 120Hz refresh rate, ensuring
                                    every swipe and scroll is a visual delight.
                                </p>
                            </li>
                            <li>
                                <h5 className="description-type">
                                    Pro-Grade Camera System:
                                </h5>
                                <p>
                                    Capture moments like never before with the
                                    Galaxy S20's pro-grade camera system. The
                                    64MP telephoto lens, 12MP wide-angle lens,
                                    and 12MP ultra-wide lens work seamlessly
                                    together to deliver stunning images in any
                                    lighting condition. Take your photography
                                    skills to the next level with features like
                                    Space Zoom, Single Take, and Night Mode,
                                    ensuring you never miss the perfect shot.
                                </p>
                            </li>
                            <li>
                                <h5 className="description-type">
                                    Revolutionary 8K Video Recording:
                                </h5>
                                <p>
                                    Bring your videos to life with
                                    groundbreaking 8K video recording. The
                                    Galaxy S20 transforms your memories into
                                    cinematic masterpieces, allowing you to
                                    shoot, edit, and share your content in
                                    stunning clarity. Experience a new era of
                                    mobile videography with unrivaled quality
                                    and detail.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="product-specification">
                        <h5>Specification</h5>
                        table
                    </div>
                </div>
            </div>
            <div className="single-product-top p-2 mt-3">
                <div className="row bg-white">
                    <h4>Related Product</h4>
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://i.etsystatic.com/38592789/r/il/15ed75/4545197125/il_794xN.4545197125_ih3w.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYlbC0_wMZgQ2krSLVFK5lghCoO7waVGlJmbwHDipK7pbpyH8QvzMkVA3egyt5jAUgfQ&usqp=CAU"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                    <div className="col-sm-4 col-md-3 col-lg-2 related-card-product">
                        {" "}
                        <div className="card overflow-hidden product-card p-2">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg"
                                alt=""
                                className="card-image-top rounded rounded-2"
                            />
                            <div className="card-body p-0 pt-2">
                                <div>
                                    <h4 className="card-title fs-6 text-capitalize">
                                        Cow boy hat{" "}
                                    </h4>
                                    <h6 className="card-subtitle text-muted">
                                        strezal hat
                                    </h6>
                                    <p className="card-text discount-price h6 fw-bold mt-2">
                                        $USD 200
                                    </p>
                                    <p className="card-text price h6 mt-2 text-muted ">
                                        <span className="text-decoration-line-through">
                                            $USD 250
                                        </span>
                                        (10% off)
                                    </p>
                                </div>
                            </div>

                            <button
                                className="btn bg-white rounded rounded-5 p-3 position-absolute end-0 align-items-center justify-content-center mt-2 me-3"
                                style={{ height: "20px", width: "20px" }}
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
                </div>
            </div>
        </div>
    );
}
