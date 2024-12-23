import React, { useState, useEffect, useRef, cloneElement } from "react";
import VariablesProduct from "./VariablesProduct";
import "../../../../css/component/admin/add-product.css";
import axios from "axios";
import axiosClient from "../../../Axios";
import { useStateContext } from "../../../ContextProvider";
import Variations from "./Variations";

export default function ProductAdd() {
    let [product, setProduct] = useState({
        title: "",
        shortDescription: "",
        description: { feature: {}, descriptionLong: "" },
        firstCategory: "",
        subCategory: "",
        tag: [],
        price: "",
        sku: "",
        quantity: "",
        variations: [],
        variablesLength: 0,
        galleryImage: [],
        image: "",
        discountPrice: "",
    });
    let [productError, setProductError] = useState();
    let [variationsError, setVariationsError] = useState();
    let [tagValue, setTagValue] = useState("");
    let [variations, setVariations] = useState();
    const firstRender = useRef(true);
    const [feature, setFeature] = useState([]);
    const [categories, setCategories] = useState([]);
    let { manageLogin } = useStateContext();
    useEffect(() => {
        axiosClient
            .get("product/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);
    useEffect(() => {
        let galleryContainers = document.querySelectorAll(
            ".product-gallery-image-container"
        );

        let handleResize = () => {
            galleryContainers.forEach((el) => {
                el.style.height = el.offsetWidth * (4 / 5) + "px";
            });
        };

        // Attach the resize event listener
        window.addEventListener("resize", handleResize);

        // Call handleResize initially to set the initial height
        handleResize();

        // Cleanup: Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };

        ///////////////////////////////////////
        /////////////////validate vartions/////
    }, [product.galleryImage]);
    useEffect(() => {
        Array.isArray(variationsError) &&
            setVariations((prevVariations) => {
                const randomNumber = Math.floor(Math.random() * 19000) + 1000;
                console.log(JSON.parse(variationsError));
                let newElements =
                    prevVariations &&
                    prevVariations.map((el, i) => {
                        let errorData = JSON.parse(variationsError);
                        let errors = errorData.filter((eel, i) => {
                            if (eel[el.key] && eel != null) {
                                return { ...eel };
                            }
                            //console.log(eel[el.key]);
                        });
                        console.log(errors);

                        return (
                            <VariablesProduct
                                key={el.key}
                                data={{
                                    key: el.key,
                                    deleteVariations: deleteVariations,
                                    saveVartions: saveVartions,
                                    index: i,
                                    validationError:
                                        errors.length > 0
                                            ? { ...errors[0][el.key] }
                                            : {},
                                }}
                            />
                        );
                    });
                if (prevVariations) {
                    console.log("hello");
                    return [...newElements];
                }
            });
    }, [variationsError]);

    let createProduct = (e) => {
        setProduct({
            ...product,
        });
    };
    let saveVartions = (variation, key) => {
        setProduct((prevEl) => {
            if (prevEl.variations.some((element) => element.sku == key)) {
                let nVariations = prevEl.variations.map((el, i) => {
                    if (el.sku == key) {
                        return { ...el, ...variation };
                    } else {
                        return el;
                    }
                });
                return {
                    ...prevEl,
                    variations: [...nVariations],
                };
            } else {
                return {
                    ...prevEl,
                    variations: [
                        ...prevEl.variations,
                        { ...variation, sku: key },
                    ],
                };
            }
        });
    };

    let createVariableProduct = (e) => {
        setProduct({
            ...product,
            variations: [...product.variations, {}],
            variablesLength: variables.length + 1,
        });
    };

    let addVariation = (ty, validationError) => {
        setVariations((preEl) => {
            const randomNumber = Math.floor(Math.random() * 19000) + 1000;
            let nEl = (
                <VariablesProduct
                    key={randomNumber}
                    data={{
                        key: randomNumber,
                        deleteVariations: deleteVariations,

                        saveVartions: saveVartions,
                        index: variations && variations.length,
                        validationError: {},
                    }}
                />
            );

            if (preEl != null) {
                return [...variations, nEl];
            } else {
                return [nEl];
            }
        });
    };
    let deleteVariations = (key) => {
        setVariations((prevKey) => {
            return prevKey.filter((el, i) => {
                if (el.key != key) {
                    return el;
                }
            });
        });
        setProduct((prevEl) => {
            let nVartions = prevEl.variations.filter((el, i) => {
                if (el.sku != key) return el;
            });
            return { ...prevEl, variations: [...nVartions] };
        });
    };
    //////////////////////////////////////////
    /////////////Handle drop events //////////
    let handleDrop = (e, el) => {
        var myImage = new Image();
        
            
        
        // Assuming you are working with a file input for dropping images
        let file = e.target.files[0];
        console.log(file)
        if (el != true) {
        setProduct((oldEl) => {
            let formData = new FormData();
            formData.append("image", file);
            //  console.log(formData);
            return {
                ...oldEl,
                image: file,
            };
        });}
        if (file) {
            let imgSrc = URL.createObjectURL(file); // Create a temporary URL for the dropped image
            myImage.src = imgSrc;
            console.log(imgSrc);
            myImage.onload = () => {
                const reader = new FileReader();
                let showImage = document.getElementById(
                    "uploaded-product-image"
                );
                if (el && product.galleryImage.length < 4) {
                    setProduct((oldEl) => {
                        return {
                            ...oldEl,
                            galleryImage: [
                                ...oldEl.galleryImage,
                                {
                                    ["gallery-image" +
                                    oldEl.galleryImage.length]: file,
                                    ["gallery-image-src" +
                                    oldEl.galleryImage.length]: imgSrc,
                                    id:
                                        "gallery-image-src" +
                                        oldEl.galleryImage.length,
                                },
                            ],
                        };
                    });
                    return;
                }
                if (el) {
                    return;
                }
                showImage.src = imgSrc;

                reader.onload = function (event) {
                    const binaryData = event.target.result.split(",")[1];
                };
                reader.readAsDataURL(file);
                // Now you can use 'myImage' as the image object
                // Example: document.body.appendChild(myImage);
            };
        }
    };

    //// delete gallery image//
    const deleteGalleryImage = (e, id) => {
        e.stopPropagation(); // Corrected method name
        console.log(id);
        let galleryImage = product.galleryImage.filter((image) => {
            if (image.id != id) {
                return image;
            }
        });
        setProduct({ ...product, galleryImage: galleryImage });
    };
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////// Set features /////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////

    let deleteFeture = (key) => {
        setFeature((preElement) => {
            let nEl = preElement.filter((el) => {
                if (el.key != key) {
                    return el;
                }
            });
            return [...nEl];
        });
        setProduct((prevProduct) => {
            let newDescription = {};
            if (Object.keys(prevProduct.description.feature).length > 0) {
                newDescription = Object.keys(
                    prevProduct.description.feature
                ).reduce((acc, current) => {
                    if (key != current) {
                        acc[current] = prevProduct.description.feature[current];
                    }
                    return acc;
                }, {});
            }
            return {
                ...prevProduct,
                description: {
                    ...prevProduct.description,
                    feature: { ...newDescription },
                },
            };
        });
    };
    let newFeature = (e) => {
        e.stopPropagation();
        setFeature((preEl) => {
            const randomNumber = Math.floor(Math.random() * 19000) + 1000;
            let featureEl = (
                <tr key={randomNumber}>
                    <td scope="col">{preEl.length + 1}</td>
                    <td scope="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Feature Name"
                            onChange={(e) =>
                                setProduct((prevProduct) => {
                                    let existingValue =
                                        prevProduct.description.feature[
                                            randomNumber
                                        ] &&
                                        Object.values(
                                            prevProduct.description.feature[
                                                randomNumber
                                            ]
                                        )[0];
                                    existingValue = existingValue
                                        ? existingValue
                                        : "";
                                    const newKey = e.target.value;

                                    return {
                                        ...prevProduct,
                                        description: {
                                            ...prevProduct.description,
                                            feature: {
                                                ...prevProduct.description
                                                    .feature,
                                                [randomNumber]: {
                                                    [newKey]: existingValue,
                                                },
                                            },
                                        },
                                    };
                                })
                            }
                        />
                    </td>
                    <td scope="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Feature Value"
                            onChange={(e) => {
                                setProduct((prevProduct) => {
                                    let existingKeys =
                                        prevProduct.description.feature[
                                            randomNumber
                                        ] &&
                                        Object.keys(
                                            prevProduct.description.feature[
                                                randomNumber
                                            ]
                                        )[0];
                                    existingKeys = existingKeys
                                        ? existingKeys
                                        : "";
                                    return {
                                        ...prevProduct,
                                        description: {
                                            ...prevProduct.description,
                                            feature: {
                                                ...prevProduct.description
                                                    .feature,
                                                [randomNumber]: {
                                                    [existingKeys]:
                                                        e.target.value,
                                                },
                                            },
                                        },
                                    };
                                });
                            }}
                        />
                    </td>
                    <td scope="col ">
                        <div className="d-flex align-items-center justify-content-around">
                            <div
                                className="btn rounded-5 p-0 d-flex align-items-center justify-content-center"
                                style={{
                                    height: "30px",
                                    width: "30px",
                                }}
                                onClick={(e) => {
                                    newFeature(e);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-plus-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </div>
                            <div
                                className="btn rounded-5 p-0 d-flex align-items-center justify-content-center"
                                style={{
                                    height: "30px",
                                    width: "30px",
                                }}
                                onClick={(e) => {
                                    deleteFeture(randomNumber);
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
                    </td>
                </tr>
            );
            return [...preEl, featureEl];
        });
    };
    //console.log(product);
    let handleSubmit = async (e) => {
        e.preventDefault();
        let data = new FormData();
        for (let key in product) {
            if (key === "description") {
                // Convert the description object to a JSON string and append it
                data.append(key, JSON.stringify(product[key]));
            } else if (key === "galleryImage" && product[key].length > 0) {
                product[key].forEach((el, i) => {
                    let keys = Object.keys(el);
                    data.append(keys[0], el[keys[0]]);
                });
            } else {
                // For other keys, append them normally
                data.append(key, product[key]);
            }
        }

        console.log(data);
        axiosClient
            .post(`admin/product-add`, data)
            .then((response) => {
                console.log("data", response);
                setProductError({});
                setVariationsError(null);
            })
            .catch((error) => {
                let errors = error.response.data.errors;
                setProductError(errors);
                // Check if variations exist and is an array
                //console.log(errors)
                if (
                    Array.isArray(errors.variations) &&
                    errors.variations["0"].length !=
                        "The variations field is required.".length
                ) {
                    setVariationsError(errors.variations);
                } else {
                    setVariationsError({});
                }
            });
    };
    //console.log(manageLogin)
    return (
        <div
            
            className=""
        >
            <div className="mb-3">
                <label htmlFor="crate-prodct-title" className="form-label">
                    Product Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="crate-prodct-title"
                    placeholder="product title"
                    onChange={(e) => {
                        setProduct({ ...product, title: e.target.value });
                    }}
                    value={product.title}
                />
                <small className="form-text text-danger">
                    {productError && productError.title}
                </small>
            </div>
            <div className="mb-3">
                <label
                    htmlFor="crate-product-short-description"
                    className="form-label"
                >
                    Product Short Description
                </label>
                <textarea
                    className="form-control"
                    id="crate-product-short-description"
                    rows="2"
                    placeholder="product short description"
                    maxLength={200}
                    style={{ resize: "none" }}
                    onChange={(e) => {
                        setProduct({
                            ...product,
                            shortDescription: e.target.value,
                        });
                    }}
                    value={product.shortDescription}
                ></textarea>
                <small className="form-text text-danger">
                    {productError && productError.shortDescription}
                </small>
            </div>
            {product.shortDescription && (
                <div className="mb-3">
                    <p className="h6 fw-bold">Short Description live</p>
                    <div
                        className="border border-2 border-warning p-2 shadow rounded-3"
                        dangerouslySetInnerHTML={{
                            __html: product.shortDescription,
                        }}
                    ></div>
                </div>
            )}
            <div className="mb-3">
                <div
                    className="btn btn-outline-secondary"
                    data-bs-toggle="collapse"
                    data-bs-target="#description-type-selector"
                    aria-expanded="false"
                    aria-controls="description-type-selector"
                >
                    Product Description
                </div>
                <div
                    className="row mt-3 collapse"
                    id="description-type-selector"
                >
                    <div className="col-md-3 position-relative">
                        <div className="description-type w-md-50 shadow position-sticky top-0">
                            <div className="list-group">
                                <button
                                    type="button"
                                    className="list-group-item list-group-item-action active"
                                    aria-current="true"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#product-description-text"
                                    aria-expanded="false"
                                    aria-controls="product-description-text"
                                >
                                    Description Text
                                </button>
                                <button
                                    type="button"
                                    className="list-group-item list-group-item-action"
                                    aria-current="true"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#product-description-features"
                                    aria-expanded="false"
                                    aria-controls="product-description-features"
                                >
                                    Description Features
                                </button>
                                <button
                                    type="button"
                                    className="list-group-item list-group-item-action"
                                >
                                    Description List
                                </button>
                                <button
                                    type="button"
                                    className="list-group-item list-group-item-action"
                                >
                                    Description Table
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div
                            className="mb-3 shadow p-1"
                            id="product-description-text"
                        >
                            <label
                                htmlFor="crate-product-description"
                                className="form-label fw-bold"
                            >
                                Product Description Text
                            </label>
                            <textarea
                                className="form-control"
                                id="crate-product-description"
                                rows="3"
                                placeholder="product description"
                                maxLength={500}
                                onChange={(e) => {
                                    setProduct((prevEl) => {
                                        return {
                                            ...prevEl,
                                            description: {
                                                ...prevEl.description,
                                                descriptionLong: e.target.value,
                                            },
                                        };
                                    });
                                }}
                                value={product.description.descriptionLong}
                            ></textarea>
                            <small className="form-text text-danger">
                                {productError &&
                                    productError["description.descriptionLong"]}
                            </small>
                        </div>
                        <div
                            className="collapse mb-3 shadow p-1"
                            id="product-description-features"
                        >
                            <p className="fw-bold">Product Features</p>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Value</th>
                                        <th scope="col">
                                            <div
                                                className="btn rounded-5 p-0 d-flex align-items-center justify-content-center"
                                                style={{
                                                    height: "30px",
                                                    width: "30px",
                                                }}
                                                onClick={(e) => {
                                                    newFeature(e);
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-plus-circle"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                </svg>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>{feature}</tbody>
                            </table>
                            <div className="mb-3">
                                <small className="form-text text-danger">
                                    {productError &&
                                        productError["description.feature"]}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-6">
                    <div className="shadow p-1">
                        <div className="mb-3">
                            <label
                                htmlFor="create-product-category"
                                className="form-label"
                            >
                                Category
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                id="create-product-category"
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        firstCategory: e.target.value,
                                    });
                                }}
                            >
                                <option>Open this select menu</option>
                                {categories.length > 0 &&
                                    categories.map((el, i) => {
                                        return (
                                            <option
                                                value={el.id}
                                                key={el.category}
                                            >
                                                {el.category}
                                            </option>
                                        );
                                    })}
                            </select>
                            <small className="form-text text-danger">
                                {productError && productError.firstCategory}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="create-product-sub-category"
                                className="form-label"
                            >
                                Sub Category
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                id="create-product-sub-category"
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        subCategory: e.target.value,
                                    });
                                }}
                                value={product.subCategory}
                            >
                                <option>Open this select menu</option>
                                {categories.length > 0 &&
                                    categories.map((el, i) => {
                                        return (
                                            <option
                                                value={el.id}
                                                key={el.category + "" + i}
                                            >
                                                {el.category}
                                            </option>
                                        );
                                    })}
                            </select>
                            <small className="form-text text-danger">
                                {productError && productError.subCategory}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="create-product-discount-price"
                                className="form-label"
                            >
                                Discount Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="create-product-discount-price"
                                placeholder="discount product price"
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        discountPrice: e.target.value,
                                    });
                                }}
                                value={product.discountPrice}
                            />
                            <small className="form-text text-danger">
                                {productError && productError.discountPrice}
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="shadow p-1">
                        <div className="mb-3">
                            <label
                                htmlFor="create-product-price"
                                className="form-label"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="create-product-price"
                                placeholder="product price"
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        price: e.target.value,
                                    });
                                }}
                                value={product.price}
                            />
                            <small className="form-text text-danger">
                                {productError && productError.price}
                            </small>
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="create-product-quantity"
                                className="form-label"
                            >
                                Quantity
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="create-product-quantity"
                                placeholder="product quantity"
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        quantity: e.target.value,
                                    });
                                }}
                                value={product.quantity}
                            />
                            <small className="form-text text-danger">
                                {productError && productError.quantity}
                            </small>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="create-product-tag"
                                className="form-label"
                            >
                                Tag Name
                            </label>
                            <div className="d-flex gap-1 align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="create-product-tag"
                                    placeholder="product tag"
                                    onChange={(e) => {
                                        setTagValue(e.target.value);
                                    }}
                                    value={tagValue}
                                />

                                <div
                                    className="btn btn-outline-secondary py-0 rounded-4"
                                    onClick={(e) => {
                                        let tagInput =
                                            document.getElementById(
                                                "create-product-tag"
                                            );

                                        setProduct((prevEl) => {
                                            return {
                                                ...product,
                                                tag: [
                                                    ...product.tag,
                                                    "#" + tagInput.value,
                                                ],
                                            };
                                        });
                                        setTagValue("");
                                    }}
                                >
                                    Create
                                </div>
                                <small className="form-text text-danger">
                                    {productError && productError.tag}
                                </small>
                            </div>
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                {product.tag.length > 0 &&
                                    product.tag.map((el, i) => {
                                        return (
                                            <span
                                                className="text-primary fw-bold"
                                                key={"key" + i}
                                            >
                                                {el}
                                            </span>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 position-relative">
                    <div
                        className="shadow p-2 mb-2 border rounded-2 d-flex align-items-center position-sticky top-0 justify-content-center"
                        id="uploaded-product-image-container"
                    >
                        <label
                            htmlFor="product-image-upload"
                            className="form-label overflow-hidden "
                            id="product-upload-area"
                        >
                            <input
                                type="file"
                                name="product-image-upload"
                                id="product-image-upload"
                                placeholder="Drop File"
                                onChange={(e) => {
                                    handleDrop(e,false);
                                }}
                            />
                            <div
                                className="product-image-hero-content h-100 w-100 position-absolute d-flex align-items-center justify-content-center"
                                id="product-upload-cotainer"
                            >
                                <div>
                                    <div className="mx-auto d-flex justify-content-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="currentColor"
                                            className="bi bi-cloud-arrow-up-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </div>
                                    <p className="h5 text-center">
                                        Drag and drop or
                                        <span className="d-block h-6 fs-6">
                                            click to upload file
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="uploaded-product-image-container h-100 w-100">
                                <img
                                    src=""
                                    alt=""
                                    id="uploaded-product-image"
                                    className="img-fluid"
                                />
                            </div>
                        </label>
                    </div>
                    <small className="form-text text-danger">
                        {productError && productError.image}
                    </small>
                </div>
                <div className="col-12 col-sm-6 position-relative">
                    <div className="position-sticky top-0">
                        <div className="add-gallery-image-input shadow p-1 mb-3 ">
                            <label
                                htmlFor="add-gallery-image"
                                className="btn btn-outline-secondary border border-warning text-danger letter-spaching-2 border-2"
                            >
                                Add Gallery
                            </label>
                            <input
                                type="file"
                                name="add-gallery-image"
                                id="add-gallery-image"
                                className="d-none form-control"
                                onChange={(e) => {
                                    handleDrop(e, true);
                                }}
                            />
                        </div>
                        <div className="bg-white" id="product-gallery-section">
                            <div className="row">
                                {product.galleryImage &&
                                    product.galleryImage.map((el, i) => {
                                        return (
                                            <div className="col-6 mb-2" key={i}>
                                                <div className="shadow rounded-2 product-gallery-image-container p-1 position-relative">
                                                    <img
                                                        src={el[el.id]}
                                                        alt=""
                                                        id={`gallery-image` + i}
                                                        className="product-gallery-image"
                                                    />
                                                    <div
                                                        className="btn rounded-5 d-flex align-items-center justify-content-center position-absolute top-0 end-0 mt-2 me-2 bg-white p-0"
                                                        style={{
                                                            height: "30px",
                                                            width: "30px",
                                                        }}
                                                        onClick={(e) => {
                                                            deleteGalleryImage(
                                                                e,
                                                                el.id
                                                            );
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
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            <small className="form-text text-danger">
                                {productError && productError["gallery-image0"]}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="btn btn-secondary rounded-5 mt-2 text-warning p-1 h-5 mb-2 mt-4"
                type="button"
                onClick={(e) => {
                    addVariation(e);
                }}
            >
                Create Variable Product +
            </button>
            <small className="form-text text-danger d-block">
                {productError &&
                    productError.variations &&
                    productError.variations[0].length < 35 &&
                    productError.variations}
            </small>

            <div className="" id="collapseExample">
                <div
                    className="row position-relative"
                    id="varition-product-create-forms"
                >
                    {variations &&
                        variations.map((element, i) => {
                            //console.log(element);
                            return element;
                        })}
                </div>
            </div>
            <div className="" id="varions-product-place">
                <Variations/>
            </div>

            <div className="mb-3 d-flex justify-content-end"></div>
            <div className="mb-3 p-2 d-flex justify-content-end">
                <button
                    className="btn btn-primary rounded-5 mt-2 text-white p-1 px-2 fs-5 mt-4end-0"
                    style={{ FontFace: "Roboto" }}
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    Create Product
                </button>
            </div>
        </div>
    );
}
