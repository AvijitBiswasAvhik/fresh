import React, { useState, useEffect } from "react";
import "../../../../css/component/admin/variable-products.css";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";

export default function VariablesProduct({ data }) {
    let [variations, setVariations] = useState({});
    useEffect(() => {
        const colorPickerElement = document.getElementById(
            `colorPicker` + data.key
        );
        if (colorPickerElement) {
            const colorPicker = Pickr.create({
                el: colorPickerElement,
                theme: "classic",
                swatches: [
                    "rgba(244, 67, 54, 1)",
                    "rgba(233, 30, 99, 0.95)",
                    // Add more swatches as needed
                ],
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                        clear: true,
                        save: true,
                    },
                },
            });

            colorPicker.on("change", (color) => {
                const selectedColor = color.toHEXA().toString();
                document.getElementById(
                    `selectedColor` + data.key
                ).textContent = selectedColor;
                document.body.style.backgroundColor = selectedColor;
                document.getElementById(
                    `showColor` + data.key
                ).style.backgroundColor = selectedColor;
                console.log(document.getElementById(`showColor` + data.key));
                setVariations((oldEl) => {
                    return {
                        ...oldEl,
                        color: { ...oldEl.color, type: selectedColor },
                    };
                });
            });
        }
    }, [variations]);
    console.log(data.validationError)
    return (
        <div className="col-6 p-2" id="ddd">
            <div className="shadow p-2 border border-2 rounded-2">
                <div className="mb-3">
                    <label
                        htmlFor={`create-product-variations` + data.key}
                        className="form-label"
                    >
                        <span className="h5 fw-bold">Product Variations</span>
                    </label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        id={`create-product-variations` + data.key}
                        onChange={(e) => {
                            setVariations({
                                ...variations,
                                [e.target.value]: {},
                            });
                        }}
                    >
                        <option>Open this select menu</option>
                        <option value="size">Size</option>
                        <option value="color">Color</option>
                        <option value="material">Material</option>
                        <option value="flavor">Flavor</option>
                        <option value="capacity">Capacity</option>
                        <option value="weight">Weight</option>
                        <option value="resolation">Resolution</option>
                    </select>
                </div>
                {variations.size && (
                    <fieldset className="border border-2 mb-3 rounded-2 p-1">
                        <legend className="fw-bold h6">Size</legend>
                        <div className="mb-4">
                            <select
                                name="type"
                                id=""
                                className="form-select"
                                onChange={(e) => {
                                    console.log(e.target.getAttribute("name"));

                                    setVariations({
                                        ...variations,
                                        size: {
                                            ...variations.size,
                                            [e.target.getAttribute("name")]:
                                                e.target.value,
                                        },
                                    });
                                }}
                                value={variations.size?.type || ""}
                            >
                                <option value="small">Select Size Type</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor={`vartion-product-length` + data.key}
                                className="form-label"
                            >
                                Length
                            </label>
                            <input
                                type="number"
                                className="form-control size"
                                id={`vartion-product-length` + data.key}
                                placeholder="product length"
                                name="len"
                                onChange={(e) => {
                                    setVariations({
                                        ...variations,
                                        size: {
                                            ...variations.size,
                                            [e.target.name]: e.target.value,
                                        },
                                    });
                                }}
                                value={
                                    variations.size &&
                                    variations.size.len !== undefined
                                        ? variations.size.len
                                        : ""
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor={`vartion-product-height` + data.key}
                                className="form-label"
                            >
                                Height
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`vartion-product-height` + data.key}
                                placeholder="product height"
                                name="height"
                                onChange={(e) => {
                                    setVariations({
                                        ...variations,
                                        size: {
                                            ...variations.size,
                                            [e.target.getAttribute("name")]:
                                                e.target.value,
                                        },
                                    });
                                }}
                                value={
                                    variations.size &&
                                    variations.size.height !== undefined
                                        ? variations.size.height
                                        : ""
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor={`vartion-product-width` + data.key}
                                className="form-label"
                            >
                                Width
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`vartion-product-width` + data.key}
                                placeholder="product width"
                                name="width"
                                onChange={(e) => {
                                    setVariations({
                                        ...variations,
                                        size: {
                                            ...variations.size,
                                            [e.target.getAttribute("name")]:
                                                e.target.value,
                                        },
                                    });
                                }}
                                value={
                                    variations.size &&
                                    variations.size.width !== undefined
                                        ? variations.size.width
                                        : ""
                                }
                            />
                        </div>
                    </fieldset>
                )}
                {variations.weight && (
                    <fieldset className="border border-2 rounded-2 mb-3 p-1">
                        <legend className="fs-6 fw-bold">Weight</legend>
                        <div className="mb-3 pink-600">
                            <label
                                htmlFor={`vartion-product-weight` + data.key}
                                className="form-label"
                            >
                                Product Weight
                            </label>
                            <input
                                type="number"
                                id={`vartion-product-weight` + data.key}
                                placeholder="Weight in gram"
                                className="form-control"
                                onChange={(e) => {
                                    setVariations({
                                        ...variations,
                                        weight: e.target.value,
                                    });
                                }}
                                value={
                                    variations.weight &&
                                    variations.weight !== undefined
                                        ? variations.weight
                                        : ""
                                }
                            />
                        </div>
                    </fieldset>
                )}
                {variations.color && (
                    <fieldset className="border border-2 rounded-2 mb-3 p-1">
                        <legend className="fw-bold h6">Color</legend>
                        <div className="mb-3 pink-600">
                            <div id="colorPickerContainer">
                                <label htmlFor="colorPicker">
                                    Pick a color:
                                </label>
                                {/* The colorPicker div will be dynamically rendered when the button is clicked */}
                                <div id={`colorPicker` + data.key}></div>
                                <div className="d-flex align-items-center justify-content-between mx-auto border border-2 w-50 gap-2 mt-3">
                                    <div id={`selectedColor` + data.key}></div>
                                    <div
                                        id={`showColor` + data.key}
                                        className="w-50"
                                        style={{ height: "40px" }}
                                    ></div>
                                </div>

                                <small className="form-text text-danger">
                                    {data.validationError &&
                                    data.validationError.type}
                                </small>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor={`product-color-name` + data.key}
                                    className="form-label"
                                >
                                    Color name
                                </label>
                                <input
                                    type="text"
                                    name="product-color-name"
                                    className="form-control"
                                    id={`product-color-name` + data.key}
                                    onChange={(e) => {
                                        setVariations({
                                            ...variations,
                                            color: {
                                                ...variations.color,
                                                name: e.target.value,
                                            },
                                        });
                                    }}
                                />
                                <small className="form-text text-danger">
                                    {data.validationError &&
                                    data.validationError.name}
                                </small>
                            </div>
                        </div>
                    </fieldset>
                )}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-6">
                            <label
                                htmlFor={`add-product-price` + data.key}
                                className="form-label"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`add-product-price` + data.key}
                                onChange={(e) => {
                                    setVariations({
                                        ...variations,
                                        price: e.target.value,
                                    });
                                }}
                                value={
                                    variations.price &&
                                    variations.price !== undefined
                                        ? variations.price
                                        : ""
                                }
                                placeholder="price"
                            />
                            <small className="form-text text-danger">
                                    {data.validationError &&
                                    data.validationError.price}
                                </small>
                        </div>
                        <div className="col-6">
                            <label
                                htmlFor={
                                    `add-discount-product-price` + data.key
                                }
                                className="form-label"
                            >
                                Discount Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`add-discount-product-price` + data.key}
                                onChange={(e) => {
                                    setVariations({
                                        ...variations,
                                        discountPrice: e.target.value,
                                    });
                                }}
                                placeholder="discount price"
                                value={
                                    variations.discountPrice &&
                                    variations.discountPrice !== undefined
                                        ? variations.discountPrice
                                        : ""
                                }
                            />
                             <small className="form-text text-danger">
                                    {data.validationError &&
                                    data.validationError.discountPrice}
                                </small>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div
                        className="btn btn-outline-secondary rounded-5 p-1 px-2"
                        onClick={(e) => {
                            data.saveVartions(variations, data.key);
                        }}
                    >
                        Save Vartions
                    </div>
                    <div
                        className="btn btn-outline-secondary rounded-5 p-1 px-2"
                        onClick={(e) => {
                            data.deleteVariations(data.key);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
