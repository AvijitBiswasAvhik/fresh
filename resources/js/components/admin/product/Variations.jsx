import React, { useState, useEffect, useCallback } from "react";
import "../../../../css/component/admin/variations.css";
import { formToJSON } from "axios";
export default function Variations() {
    let [showItem, setShowItem] = useState({
        general: { show: true, item: false, product_type: ["simple_product"] },
        inventory: {
            show: false,
            item: false,
            product_type: [
                "simple_product",
                "grouped_product",
                "variable_product",
                "external_product",
            ],
        },
        shiping: {
            show: false,
            item: false,
            product_type: [
                "simple_product",
                "grouped_product",
                "variable_product",
            ],
        },
        link_product: {
            show: false,
            item: false,
            product_type: [
                "simple_product",
                "grouped_product",
                "variable_product",
                "external_product",
            ],
        },
        atribute: {
            show: false,
            item: false,
            product_type: [
                "simple_product",
                "grouped_product",
                "variable_product",
                "external_product",
            ],
        },
        advance: {
            show: false,
            item: false,
            product_type: [
                "simple_product",
                "grouped_product",
                "variable_product",
                "external_product",
            ],
        },
        get_more_options: {
            show: false,
            item: false,
            product_type: [
                "simple_product",
                "grouped_product",
                "variable_product",
                "external_product",
            ],
        },
        pinterest: {
            show: false,
            item: false,
            product_type: ["simple_product", "variable_product"],
        },
        variations: {
            show: false,
            item: false,
            isAtribute: false,
            product_type: ["variable_product"],
        },
        vartions_box: {
            show: false,
            product_type: [],
        },
    });
    let [svgEl, setSvgEl] = useState({
        general: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-wrench-adjustable"
                viewBox="0 0 16 16"
            >
                <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" />
                <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
            </svg>
        ),
        inventory: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard-data-fill"
                viewBox="0 0 16 16"
            >
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" />
            </svg>
        ),
        shiping: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-truck"
                viewBox="0 0 16 16"
            >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
        ),
        link_product: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
            >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
        ),
        atribute: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-diagram-2"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                />
            </svg>
        ),
        advance: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear"
                viewBox="0 0 16 16"
            >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
        ),
        get_more_options: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plug-fill"
                viewBox="0 0 16 16"
            >
                <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0" />
            </svg>
        ),
        pinterest: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pinterest"
                viewBox="0 0 16 16"
            >
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
            </svg>
        ),
        variations: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-border-all"
                viewBox="0 0 16 16"
            >
                <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z" />
            </svg>
        ),
    });

    let [att, setAtt] = useState({ atribute_input: false });

    let [productData, setProductData] = useState({
        product_type: "simple_product",
        general: { regular_price: 0, sale_price: 0 },
        inventory: {
            sku: "",
            upc: "",
            stock_management: { quantity: 0, show: true },
            stock_status: "in stock",
            sold_individually: true,
        },
        shiping: {
            weight: "",
            dimentions: { length: "", width: "", height: "" },
        },
        link_product: { cross_sell: "", up_sell: "" },
        atribute: {},
        advance: { purchese_note: "", menu_order: 0, enable_review: false },
        pinterest: { condition: "", google_category: "" },
        variations: {},
    });
    useEffect(() => {
        console.log(productData);
    }, [productData]);
    let handleClick = (e, key) => {
        e.stopPropagation();

        let updateShowItem = Object.keys(showItem).reduce((acc, currentKey) => {
            acc[currentKey] = {
                ...showItem[currentKey],
                show: currentKey === key,
            };
            return acc;
        }, {});
        console.log(updateShowItem, "hh");
        setShowItem(updateShowItem);
    };
    let handleValue = (e, name, key, stock) => {
        e.stopPropagation();
        setProductData((pre) => {
            if (key == "stock_management") {
                return {
                    ...pre,
                    [name]: {
                        ...pre[name],
                        [key]: {
                            ...pre[name].stock_management,
                            [stock]:
                                stock == "show"
                                    ? e.target.checked
                                    : e.target.value,
                        },
                    },
                };
            }
            return {
                ...pre,
                [name]: { ...pre[name], [key]: e.target.value },
            };
        });
    };
    let checkVal = (e, key, sub, subKey) => {
        e.stopPropagation();
        setProductData((pre) => {
            return {
                ...pre,
                variations: {
                    ...pre.variations,
                    [key]: {
                        ...pre.variations[key],
                        [sub]: {
                            ...pre.variations[key][sub],
                            [subKey]: e.target.checked,
                        },
                    },
                },
            };
        });
    };
    let storeVartions = (e, name, key, sub, subKey, exSub, exSubKey) => {
        e.stopPropagation();
        setProductData((pre) => {
            if (exSub) {
                return {
                    ...pre,
                    variations: {
                        ...pre.variations,
                        [key]: {
                            ...pre.variations[key],
                            [sub]: {
                                ...pre.variations[key][sub],
                                [exSub]: {
                                    ...pre.variations[key][sub][exSub],
                                    [exSubKey]: e.target.value,
                                },
                            },
                        },
                    },
                };
            } else if (sub) {
                return {
                    ...pre,
                    variations: {
                        ...pre.variations,
                        [key]: {
                            ...pre.variations[key],
                            [sub]: {
                                ...pre.variations[key][sub],
                                [subKey]: e.target.value,
                            },
                        },
                    },
                };
            }
            return {
                ...pre,
                variations: {
                    ...pre.variations,
                    [key]: {
                        ...pre.variations[key],
                        [name]: e.target.value,
                    },
                },
            };
        });
    };

    return (
        <div className="row" id="variations-header">
            <div className="col-12">
                <div id="product-data-section">
                    <div id="product-data-top-section">
                        <h2 id="product-data-top-header">
                            Product data -
                            <span id="product-data-top-selection">
                                <label htmlFor="product-top-section-type">
                                    <select
                                        name="product-top-section-type"
                                        id="product-top-section-type"
                                        onChange={(e) => {
                                            setProductData((pre) => {
                                                return {
                                                    ...pre,
                                                    product_type:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                        value={productData.product_type}
                                    >
                                        <optgroup label="product type">
                                            <option value="simple_product">
                                                Simple product
                                            </option>
                                            <option
                                                value="grouped_product"
                                                defaultValue="grouped_product"
                                            >
                                                Grouped product
                                            </option>
                                            <option value="external_product">
                                                External/Affiliate product
                                            </option>
                                            <option value="variable_product">
                                                Variable product
                                            </option>
                                        </optgroup>
                                    </select>
                                    <span
                                        className="product-type-tip"
                                        tabIndex="0"
                                        aria-label="Grouped – a collection of related products that can be purchased individually and only consist of simple products. For example, a set of six drinking glasses."
                                    ></span>
                                </label>
                            </span>
                        </h2>
                        <div className="product-data-fild-on-off"></div>
                    </div>
                </div>
                <div id="product-data-from-container">
                    <div className="row">
                        <div className="col-2 col-sm-1 col-md-3">
                            <ul className="product-data-from-list-container">
                                {Object.keys(showItem)
                                    .filter((key) =>
                                        showItem[key].product_type.includes(
                                            productData.product_type
                                        )
                                    )
                                    .map((key) => {
                                        let st = key
                                            .split("")
                                            .reduce((acc, crr, i) => {
                                                if (crr == "_") {
                                                    acc += " ";

                                                    return acc;
                                                } else if (i == 0) {
                                                    acc += crr.toUpperCase();
                                                    return acc;
                                                } else {
                                                    acc += crr;
                                                    return acc;
                                                }
                                            }, "");
                                        return (
                                            <li
                                                key={key}
                                                onClick={(e) => {
                                                    handleClick(e, key);
                                                    console.log(
                                                        key.search("_")
                                                    );
                                                }}
                                                className={`product-data-list ${
                                                    showItem[key].show === true
                                                        ? "active"
                                                        : ""
                                                } `}
                                            >
                                                <div className="d-flex gap-1 ">
                                                    <div className="text-primary">
                                                        {svgEl[key]}
                                                    </div>
                                                    <div className="text-primary d-none d-md-block">
                                                        {st}
                                                    </div>{" "}
                                                </div>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div className="col-10 col-sm-11 col-md-9 d-flex justify-content-start">
                            {showItem.general.show && (
                                <div
                                    id="product-general-data"
                                    className="px-2 border border-2"
                                >
                                    <div className="product-data-input-field py-3">
                                        <label htmlFor="product-data-regular-price">
                                            Regular price (<span>৳ </span>)
                                        </label>
                                        <input
                                            type="text"
                                            className="genterl-input-field"
                                            id="product-data-regular-price"
                                            value={
                                                productData.general
                                                    .regular_price
                                            }
                                            onChange={(e) => {
                                                handleValue(
                                                    e,
                                                    "general",
                                                    "regular_price"
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="product-data-input-field py-3">
                                        <label htmlFor="product-data-sale-price">
                                            Sale price (<span>৳</span> )
                                        </label>
                                        <input
                                            type="text"
                                            className="genterl-input-field"
                                            id="product-data-sale-price"
                                            value={
                                                productData.general.sale_price
                                            }
                                            onChange={(e) => {
                                                handleValue(
                                                    e,
                                                    "general",
                                                    "sale_price"
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {showItem.inventory.show && (
                                <div
                                    id="product-inventory-data"
                                    className="px-2"
                                >
                                    <div className="product-data-input-field py-3 d-sm-flex d-block">
                                        <label htmlFor="product-data-inventory-sku">
                                            SKU
                                        </label>
                                        <input
                                            type="text"
                                            className="genterl-input-field"
                                            id="product-data-inventory-sku"
                                            value={productData.inventory.sku}
                                            onChange={(e) => {
                                                handleValue(
                                                    e,
                                                    "inventory",
                                                    "sku"
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="product-data-input-field py-3  d-sm-flex d-block">
                                        <label htmlFor="product-data-inventory-gtin">
                                            GTIN, UPC, EAN, or ISBN
                                        </label>
                                        <input
                                            type="text"
                                            className="genterl-input-field"
                                            id="product-data-inventory-gtin"
                                            value={productData.inventory.upc}
                                            onChange={(e) => {
                                                handleValue(
                                                    e,
                                                    "inventory",
                                                    "upc"
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="product-data-input-field py-3  d-sm-flex d-block">
                                        <label htmlFor="product-data-inventory-stock-management">
                                            Stock management
                                        </label>
                                        <input
                                            type="checkbox"
                                            className="genterl-input-field"
                                            id="product-data-inventory-stock-management"
                                            checked={
                                                productData.inventory
                                                    .stock_management.show
                                            }
                                            onChange={(e) => {
                                                handleValue(
                                                    e,
                                                    "inventory",
                                                    "stock_management",
                                                    "show"
                                                );
                                            }}
                                        />
                                        <span className="product-data-inventory-stock-management-description">
                                            Track stock quantity for this
                                            product
                                        </span>
                                    </div>
                                    {productData.inventory.stock_management
                                        .show && (
                                        <div className="product-data-input-field py-3  d-sm-flex d-block">
                                            <label htmlFor="product-data-inventory-stock-quantity">
                                                Quantity
                                            </label>
                                            <input
                                                type="text"
                                                className="genterl-input-field"
                                                id="product-data-inventory-stock-quantity"
                                                value={
                                                    productData.inventory
                                                        .stock_management
                                                        .quantity
                                                }
                                                onChange={(e) => {
                                                    handleValue(
                                                        e,
                                                        "inventory",
                                                        "stock_management",
                                                        "quantity"
                                                    );
                                                }}
                                            />
                                        </div>
                                    )}
                                    {!productData.inventory.stock_management
                                        .show && (
                                        <div className="product-data-input-field py-3  d-sm-flex d-block">
                                            <label htmlFor="product-data-inventory-stock-management">
                                                Stock status
                                            </label>
                                            <ul className="product-data-from-list-stock-status">
                                                <li className="product-data-list">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="genterl-input-field"
                                                            value="In Stock"
                                                            name="_inventory-stock-status"
                                                            onChange={(e) => {
                                                                handleValue(
                                                                    e,
                                                                    "inventory",
                                                                    "stock_status"
                                                                );
                                                            }}
                                                        />
                                                        In stock
                                                    </label>
                                                </li>
                                                <li className="product-data-list">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="genterl-input-field"
                                                            value="Out Stock"
                                                            name="_inventory-stock-status"
                                                            onChange={(e) => {
                                                                handleValue(
                                                                    e,
                                                                    "inventory",
                                                                    "stock_status"
                                                                );
                                                            }}
                                                        />
                                                        Out of stock
                                                    </label>
                                                </li>
                                                <li className="product-data-list">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="genterl-input-field"
                                                            value="On Order"
                                                            name="_inventory-stock-status"
                                                            onChange={(e) => {
                                                                handleValue(
                                                                    e,
                                                                    "inventory",
                                                                    "stock_status"
                                                                );
                                                            }}
                                                        />
                                                        On backorder
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                    <div className="product-data-input-field py-3  d-sm-flex d-block">
                                        <label htmlFor="product-data-inventory-sold-indvidual">
                                            Sold individually
                                        </label>
                                        <input
                                            type="checkbox"
                                            className="genterl-input-field"
                                            id="product-data-inventory-sold-indvidual"
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                setProductData((pre) => {
                                                    return {
                                                        ...pre,
                                                        inventory: {
                                                            ...pre.inventory,
                                                            sold_individually:
                                                                e.target
                                                                    .checked,
                                                        },
                                                    };
                                                });
                                            }}
                                        />
                                        <span className="product-data-inventory-sold-indvidual px-2">
                                            Limit purchases to 1 item per order
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showItem.shiping.show && (
                                <div className="product-shiping-data px-2">
                                    <div className="product-data-input-field py-3 d-sm-flex d-block">
                                        <div className="row w-100">
                                            <div className="col-md-4 col-12">
                                                <label htmlFor="product-data-shiping-kg">
                                                    Weight (kg)
                                                </label>
                                            </div>
                                            <div className="col-md-8 col-12 d-flex">
                                                <input
                                                    type="text"
                                                    className="genterl-input-field"
                                                    id="product-data-shiping-kg"
                                                    placeholder="0"
                                                    value={
                                                        productData.shiping
                                                            .weight
                                                    }
                                                    onChange={(e) => {
                                                        handleValue(
                                                            e,
                                                            "shiping",
                                                            "weight"
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-data-input-field py-3 d-sm-flex d-block">
                                        <div className="row">
                                            <div className="col-md-4 col-12">
                                                <label>Dimensions (cm)</label>
                                            </div>
                                            <div className="col-md-8 col-12 d-flex">
                                                <input
                                                    type="text"
                                                    className="shiping-product-data-input"
                                                    placeholder="Length"
                                                    value={
                                                        productData.shiping
                                                            .dimentions.length
                                                    }
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        setProductData(
                                                            (pre) => {
                                                                return {
                                                                    ...pre,
                                                                    shiping: {
                                                                        ...pre.shiping,
                                                                        dimentions:
                                                                            {
                                                                                ...pre
                                                                                    .shiping
                                                                                    .dimentions,
                                                                                length: e
                                                                                    .target
                                                                                    .value,
                                                                            },
                                                                    },
                                                                };
                                                            }
                                                        );
                                                    }}
                                                />

                                                <input
                                                    type="text"
                                                    className="shiping-product-data-input"
                                                    placeholder="Width"
                                                    value={
                                                        productData.shiping
                                                            .dimentions.width
                                                    }
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        setProductData(
                                                            (pre) => {
                                                                return {
                                                                    ...pre,
                                                                    shiping: {
                                                                        ...pre.shiping,
                                                                        dimentions:
                                                                            {
                                                                                ...pre
                                                                                    .shiping
                                                                                    .dimentions,
                                                                                width: e
                                                                                    .target
                                                                                    .value,
                                                                            },
                                                                    },
                                                                };
                                                            }
                                                        );
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    className="shiping-product-data-input"
                                                    placeholder="Height"
                                                    value={
                                                        productData.shiping
                                                            .dimentions.height
                                                    }
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        setProductData(
                                                            (pre) => {
                                                                return {
                                                                    ...pre,
                                                                    shiping: {
                                                                        ...pre.shiping,
                                                                        dimentions:
                                                                            {
                                                                                ...pre
                                                                                    .shiping
                                                                                    .dimentions,
                                                                                height: e
                                                                                    .target
                                                                                    .value,
                                                                            },
                                                                    },
                                                                };
                                                            }
                                                        );
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        fontSize: "9px",
                                                        backgroundColor: "grey",
                                                        height: "10px",
                                                        width: "10px",
                                                    }}
                                                    className="my-auto mx-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                >
                                                    ?
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {showItem.link_product.show && (
                                <div id="product-link-data" className="px-2">
                                    <div className="row py-2">
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="product-relate-data-upsel">
                                                Upsells
                                            </label>
                                        </div>
                                        <div className="col-12 col-md-8 d-flex gap-1">
                                            <input
                                                type="text"
                                                className="genterl-input-field"
                                                id="product-relate-data-upsel"
                                                placeholder="Search for a product"
                                                value={
                                                    productData.link_product
                                                        .up_sell
                                                }
                                                onChange={(e) =>
                                                    handleValue(
                                                        e,
                                                        "link_product",
                                                        "up_sell"
                                                    )
                                                }
                                            />
                                            <span
                                                style={{
                                                    fontSize: "9px",
                                                    backgroundColor: "grey",
                                                    height: "10px",
                                                    width: "10px",
                                                }}
                                                className="my-auto mx-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                            >
                                                ?
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="product-relate-data-cross-sel">
                                                Cross-sells
                                            </label>
                                        </div>
                                        <div className="col-12 col-md-8 d-flex gap-1">
                                            <input
                                                type="text"
                                                className="genterl-input-field"
                                                id="product-relate-data-cross-sel"
                                                placeholder="Search for a product"
                                                value={
                                                    productData.link_product
                                                        .cross_sell
                                                }
                                                onChange={(e) =>
                                                    handleValue(
                                                        e,
                                                        "link_product",
                                                        "cross_sell"
                                                    )
                                                }
                                            />

                                            <span
                                                style={{
                                                    fontSize: "9px",
                                                    backgroundColor: "grey",
                                                    height: "10px",
                                                    width: "10px",
                                                }}
                                                className="my-auto mx-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                            >
                                                ?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {showItem.atribute.show && (
                                <div
                                    id="product-link-data"
                                    className="px-2 w-100"
                                >
                                    <div className="row py-2 d-flex align-items-start">
                                        <div className="col-12 col-md-4 mb-1">
                                            <div
                                                className="btn btn-outline-secondary"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (
                                                        Object.keys(
                                                            productData.atribute
                                                        ).length >= 5
                                                    ) {
                                                        return;
                                                    }
                                                    setProductData((pre) => {
                                                        let atributeLength =
                                                            Object.keys(
                                                                pre.atribute
                                                            );
                                                        let key = `atribute_${
                                                            atributeLength.length >
                                                            0
                                                                ? Number(
                                                                      atributeLength[
                                                                          atributeLength.length -
                                                                              1
                                                                      ].match(
                                                                          /\d+$/
                                                                      )[0]
                                                                  ) + 1
                                                                : 1 // If atributeLength is empty, start from 1
                                                        }`;

                                                        return {
                                                            ...pre,
                                                            atribute: {
                                                                ...pre.atribute,
                                                                [key]: {
                                                                    name: "",
                                                                    visible_on_product: false,
                                                                    used_for_variation: false,
                                                                    value: "",
                                                                    span_view: true,
                                                                    
                                                                },
                                                                varitions_show:true,
                                                            },
                                                        };
                                                    });
                                                }}
                                            >
                                                Add new
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col d-flex align-items-center">
                                            <span
                                                id="atribute-creating-field"
                                                className="d-flex flex-column align-items-center"
                                            >
                                                <span
                                                    onClick={(e) =>
                                                        setAtt({
                                                            ...att,
                                                            atribute_input:
                                                                !att.atribute_input,
                                                        })
                                                    }
                                                    className="d-flex align-items-center w-100 px-1 d-flex justify-content-between"
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "rgb(128, 124, 124)",
                                                        }}
                                                    >
                                                        Add existing
                                                    </span>
                                                    <span className="">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-caret-down-fill"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                {att.atribute_input && (
                                                    <span className="after-add-existing-atribute-product-data">
                                                        <input
                                                            type="text"
                                                            className="w-100"
                                                        />
                                                        <ul className="list-style-type-none p-0">
                                                            <li
                                                                style={{
                                                                    fontWeight:
                                                                        "bold",
                                                                    color: "rgb(128, 124, 124)",
                                                                }}
                                                            >
                                                                Color
                                                            </li>
                                                            <li
                                                                style={{
                                                                    fontWeight:
                                                                        "bold",
                                                                    color: "rgb(128, 124, 124)",
                                                                }}
                                                            >
                                                                weight
                                                            </li>
                                                        </ul>
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                        <div className="col-12 col-md-4 d-flex">
                                            <span className="text-primary">
                                                Expand
                                            </span>
                                            /
                                            <span className="text-primary">
                                                Close
                                            </span>
                                        </div>
                                    </div>
                                    {Object.keys(productData.atribute).map(
                                        (key) => {
                                            return (
                                                <div
                                                    className="card rounded-0 mb-4 w-100"
                                                    key={key}
                                                >
                                                    <div className="card-header">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="fw-bold">
                                                                {key}
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="btn text-danger"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation();

                                                                        setProductData(
                                                                            (
                                                                                prev
                                                                            ) => {
                                                                                const {
                                                                                    [key]: _,
                                                                                    ...rest
                                                                                } =
                                                                                    prev.atribute; // Remove the `key` dynamically
                                                                                return {
                                                                                    ...prev,
                                                                                    atribute:
                                                                                        rest,
                                                                                        varitions_show:false, // Update `atribute` without the removed key
                                                                                };
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    Remove
                                                                </div>
                                                                <div className="btn">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        fill="currentColor"
                                                                        className="bi bi-list"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div
                                                                    className={`indicator-atribute btn ${
                                                                        productData
                                                                            .atribute[
                                                                            key
                                                                        ]
                                                                            .span_view
                                                                            ? "view-indicator-atribute"
                                                                            : ""
                                                                    }`}
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation();
                                                                        setProductData(
                                                                            (
                                                                                pre
                                                                            ) => {
                                                                                return {
                                                                                    ...pre,
                                                                                    atribute:
                                                                                        {
                                                                                            ...pre.atribute,
                                                                                            [key]: {
                                                                                                ...pre
                                                                                                    .atribute[
                                                                                                    key
                                                                                                ],
                                                                                                span_view:
                                                                                                    !pre
                                                                                                        .atribute[
                                                                                                        key
                                                                                                    ]
                                                                                                        .span_view,
                                                                                            },
                                                                                        },
                                                                                };
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        fill="currentColor"
                                                                        className="bi bi-caret-down-fill"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {productData.atribute[key]
                                                        .span_view && (
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="form-group mb-2">
                                                                        <label>
                                                                            Name:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            aria-describedby="emailHelp"
                                                                            placeholder="e.g. length or weight"
                                                                            style={{
                                                                                border: "1px solid grey",
                                                                            }}
                                                                            onChange={(
                                                                                e
                                                                            ) => {
                                                                                e.stopPropagation();
                                                                                setProductData(
                                                                                    (
                                                                                        pre
                                                                                    ) => {
                                                                                        return {
                                                                                            ...pre,
                                                                                            atribute:
                                                                                                {
                                                                                                    ...pre.atribute,
                                                                                                    [key]: {
                                                                                                        ...pre
                                                                                                            .atribute[
                                                                                                            key
                                                                                                        ],
                                                                                                        name: e
                                                                                                            .target
                                                                                                            .value,
                                                                                                    },
                                                                                                },
                                                                                        };
                                                                                    }
                                                                                );
                                                                            }}
                                                                            value={
                                                                                productData
                                                                                    .atribute[
                                                                                    key
                                                                                ]
                                                                                    .name
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="form-check form-check-inline mb-2">
                                                                        <label>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                style={{
                                                                                    border: "1px solid grey",
                                                                                }}
                                                                                checked={
                                                                                    productData
                                                                                        .atribute[
                                                                                        key
                                                                                    ]
                                                                                        .visible_on_product
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) => {
                                                                                    e.stopPropagation();
                                                                                    setProductData(
                                                                                        (
                                                                                            pre
                                                                                        ) => {
                                                                                            return {
                                                                                                ...pre,
                                                                                                atribute:
                                                                                                    {
                                                                                                        ...pre.atribute,
                                                                                                        [key]: {
                                                                                                            ...pre
                                                                                                                .atribute[
                                                                                                                key
                                                                                                            ],
                                                                                                            visible_on_product:
                                                                                                                e
                                                                                                                    .target
                                                                                                                    .checked,
                                                                                                        },
                                                                                                    },
                                                                                            };
                                                                                        }
                                                                                    );
                                                                                }}
                                                                            />
                                                                            Visible
                                                                            on
                                                                            the
                                                                            product
                                                                            page
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline mb-2">
                                                                        <label>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                value="option2"
                                                                                style={{
                                                                                    border: "1px solid grey",
                                                                                }}
                                                                                checked={
                                                                                    productData
                                                                                        .atribute[
                                                                                        key
                                                                                    ]
                                                                                        .used_for_variation
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) => {
                                                                                    e.stopPropagation();
                                                                                    setProductData(
                                                                                        (
                                                                                            pre
                                                                                        ) => {
                                                                                            return {
                                                                                                ...pre,
                                                                                                atribute:
                                                                                                    {
                                                                                                        ...pre.atribute,
                                                                                                        [key]: {
                                                                                                            ...pre
                                                                                                                .atribute[
                                                                                                                key
                                                                                                            ],
                                                                                                            used_for_variation:
                                                                                                                e
                                                                                                                    .target
                                                                                                                    .checked,
                                                                                                        },
                                                                                                    },
                                                                                            };
                                                                                        }
                                                                                    );
                                                                                }}
                                                                            />
                                                                            Used
                                                                            for
                                                                            variations
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label>
                                                                            Value(s)::
                                                                        </label>
                                                                        <textarea
                                                                            type="text"
                                                                            className="form-control"
                                                                            aria-describedby="emailHelp"
                                                                            placeholder="Enter options for customers to choose from, f.e. “Blue” or “Large”. Use “|” to separate different options."
                                                                            style={{
                                                                                border: "1px solid grey",
                                                                                minHeight:
                                                                                    "200px",
                                                                            }}
                                                                            value={
                                                                                productData
                                                                                    .atribute[
                                                                                    key
                                                                                ]
                                                                                    .value
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) => {
                                                                                e.stopPropagation();
                                                                                setProductData(
                                                                                    (
                                                                                        pre
                                                                                    ) => {
                                                                                        return {
                                                                                            ...pre,
                                                                                            atribute:
                                                                                                {
                                                                                                    ...pre.atribute,
                                                                                                    [key]: {
                                                                                                        ...pre
                                                                                                            .atribute[
                                                                                                            key
                                                                                                        ],
                                                                                                        value: e
                                                                                                            .target
                                                                                                            .value,
                                                                                                    },
                                                                                                },
                                                                                        };
                                                                                    }
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}

                                    <div
                                        id="product-link-data"
                                        className="my-2 p-1"
                                    >
                                        <div className="btn btn-outline-secondary">
                                            Save Atribute
                                        </div>
                                    </div>
                                </div>
                            )}
                            {showItem.advance.show && (
                                <div
                                    id="product-link-data"
                                    className="px-2 w-100"
                                >
                                    <label className="d-block">
                                        <div className="row py-2 d-flex align-items-start">
                                            <div className="col-md-5 col">
                                                Purchase note
                                            </div>
                                            <div className="col col-md-7">
                                                <textarea
                                                    onChange={(e) => {
                                                        handleValue(
                                                            e,
                                                            "advance",
                                                            "purchese_note"
                                                        );
                                                    }}
                                                    value={
                                                        productData.advance
                                                            .purchese_note
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </label>
                                    <label className="d-block">
                                        <div className="row py-2 d-flex align-items-start">
                                            <div className="col-md-5 col">
                                                Menu order
                                            </div>
                                            <div className="col col-md-7">
                                                <input
                                                    type="number"
                                                    onChange={(e) => {
                                                        handleValue(
                                                            e,
                                                            "advance",
                                                            "menu_order"
                                                        );
                                                    }}
                                                    value={
                                                        productData.advance
                                                            .menu_order
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </label>
                                    <label className="d-block">
                                        <div className="row py-2 d-flex align-items-start">
                                            <div className="col-md-5 col">
                                                Enable reviews
                                            </div>
                                            <div className="col col-md-7">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => {
                                                        setProductData(
                                                            (pre) => {
                                                                return {
                                                                    ...pre,
                                                                    advance: {
                                                                        ...pre.advance,
                                                                        enable_review:
                                                                            !pre
                                                                                .advance
                                                                                .enable_review,
                                                                    },
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    checked={
                                                        productData.advance
                                                            .enable_review
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}
                            {showItem.pinterest.show && (
                                <div
                                    id="product-link-data"
                                    className="px-2 w-100"
                                >
                                    <div className="row py-2 d-flex align-items-start">
                                        <div className="col fw-bold">
                                            Product attributes
                                        </div>
                                    </div>

                                    <label className="d-block">
                                        <div className="row py-2 d-flex align-items-start">
                                            <div className="col-md-5 col">
                                                Condition
                                            </div>
                                            <div className="col col-md-7">
                                                <select
                                                    id="pinterest_attributes_condition"
                                                    name="pinterest_attributes[condition]"
                                                    className="select short w-50"
                                                    onChange={(e) => {
                                                        handleValue(
                                                            e,
                                                            "pinterest",
                                                            "condition"
                                                        );
                                                    }}
                                                    value={
                                                        productData.pinterest
                                                            .condition
                                                    }
                                                >
                                                    <option value="">
                                                        Default
                                                    </option>
                                                    <option value="new">
                                                        New
                                                    </option>
                                                    <option value="refurbished">
                                                        Refurbished
                                                    </option>
                                                    <option value="used">
                                                        Used
                                                    </option>{" "}
                                                </select>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="d-block">
                                        <div className="row py-2 d-flex align-items-start">
                                            <div className="col-md-5 col-4">
                                                Google Category
                                            </div>
                                            <div className="col col-md-7 d-flex align-items-center">
                                                <span
                                                    id="atribute-creating-field"
                                                    className="d-flex flex-column align-items-center"
                                                >
                                                    <span
                                                        onClick={(e) =>
                                                            setAtt({
                                                                ...att,
                                                                atribute_input:
                                                                    !att.atribute_input,
                                                            })
                                                        }
                                                        className="d-flex align-items-center w-100 px-1 d-flex justify-content-between"
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "12px",
                                                                color: "rgb(128, 124, 124)",
                                                            }}
                                                        >
                                                            Add existing
                                                        </span>
                                                        <span className="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                className="bi bi-caret-down-fill"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    {att.atribute_input && (
                                                        <span className="after-add-existing-atribute-product-data">
                                                            <input
                                                                type="text"
                                                                className="w-100"
                                                            />
                                                            <ul className="list-style-type-none p-0">
                                                                <li
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        color: "rgb(128, 124, 124)",
                                                                    }}
                                                                    data-value="color"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        setProductData(
                                                                            (
                                                                                pre
                                                                            ) => {
                                                                                return {
                                                                                    ...pre,
                                                                                    pinterest:
                                                                                        {
                                                                                            ...pre.pinterest,
                                                                                            google_category:
                                                                                                e
                                                                                                    .target
                                                                                                    .dataset
                                                                                                    .value,
                                                                                        },
                                                                                };
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    Color
                                                                </li>
                                                                <li
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        color: "rgb(128, 124, 124)",
                                                                    }}
                                                                >
                                                                    weight
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}
                            {showItem.variations.show && (
                                <>
                                    {productData.atribute.varitions_show && (
                                        <div
                                            id="product-link-data"
                                            className="p-2 w-100"
                                        >
                                            {Object.keys(
                                                productData.atribute
                                            ) && (
                                                <>
                                                    <div className="row mb-2">
                                                        <div className="col-12 d-flex gap-2 mb-3">
                                                            <span className="my-auto">
                                                                Default Form
                                                                Values:
                                                            </span>
                                                            <select
                                                                name=""
                                                                id=""
                                                                className="form-control w-50 vorder border-2"
                                                            >
                                                                {Object.keys(
                                                                    productData.atribute
                                                                )
                                                                    .filter(
                                                                        (
                                                                            key
                                                                        ) => {
                                                                            if(key != 'varitions_show'){
                                                                            return (
                                                                                productData
                                                                                    .atribute[
                                                                                    key
                                                                                ]
                                                                                    .name
                                                                                    .length >
                                                                                0
                                                                            );}
                                                                        }
                                                                    )
                                                                    .map(
                                                                        (
                                                                            key
                                                                        ) => {
                                                                            return (
                                                                                <option value="">
                                                                                    {
                                                                                        productData
                                                                                            .atribute[
                                                                                            key
                                                                                        ]
                                                                                            .name
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        }
                                                                    )}
                                                            </select>
                                                            <span
                                                                style={{
                                                                    fontSize:
                                                                        "9px",
                                                                    backgroundColor:
                                                                        "grey",
                                                                    height: "10px",
                                                                    width: "10px",
                                                                }}
                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                            >
                                                                ?
                                                            </span>
                                                        </div>
                                                        <div className="col-12 gap-2 d-flex">
                                                            <div className="btn btn-outline-primary">
                                                                Generate
                                                                variations
                                                            </div>
                                                            <div
                                                                className="btn btn-outline-success "
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.stopPropagation();
                                                                    setProductData(
                                                                        (
                                                                            pre
                                                                        ) => {
                                                                            let keys =
                                                                                Object.keys(
                                                                                    pre.variations
                                                                                );
                                                                            let nKey =
                                                                                keys.length
                                                                                    ? Number(
                                                                                          keys[
                                                                                              keys.length -
                                                                                                  1
                                                                                          ]
                                                                                      ) +
                                                                                      1
                                                                                    : 1;
                                                                            return {
                                                                                ...pre,
                                                                                variations:
                                                                                    {
                                                                                        ...pre.variations,
                                                                                        [nKey]: {
                                                                                            img: "",
                                                                                            gtin: "",
                                                                                            enable: "",
                                                                                            download_able:
                                                                                                "",
                                                                                            virtual:
                                                                                                "",
                                                                                            manage_stock:
                                                                                                {
                                                                                                    stock_quaninty:
                                                                                                        "",
                                                                                                    allow_backorder:
                                                                                                        "",
                                                                                                    low_stock:
                                                                                                        "",
                                                                                                    show: false,
                                                                                                },

                                                                                            regular_price:
                                                                                                "",
                                                                                            sale_price:
                                                                                                "",
                                                                                            stock_status:
                                                                                                "in stock",

                                                                                            shiping:
                                                                                                {
                                                                                                    weight: "",
                                                                                                    dimentions:
                                                                                                        {
                                                                                                            length: "",
                                                                                                            width: "",
                                                                                                            height: "",
                                                                                                        },
                                                                                                    shiping_class:
                                                                                                        "same as parent",
                                                                                                },
                                                                                            description:
                                                                                                "",
                                                                                            downloadable_file:
                                                                                                {
                                                                                                    name: "",
                                                                                                    url: "",
                                                                                                    file: "",
                                                                                                    download_limit:
                                                                                                        "",
                                                                                                    download_expirity:
                                                                                                        "",
                                                                                                    show: false,
                                                                                                },
                                                                                        },
                                                                                    },
                                                                            };
                                                                        }
                                                                    );
                                                                }}
                                                            >
                                                                Add manually
                                                            </div>
                                                            <div className="btn btn-outline-secondary">
                                                                bulk actions
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {Object.keys(
                                                        productData.variations
                                                    ).length > 0 &&
                                                        Object.keys(
                                                            productData.variations
                                                        ).map((key) => {
                                                            return (
                                                                <div
                                                                    className="card"
                                                                    key={key}
                                                                >
                                                                    <div
                                                                        className="card-header"
                                                                        style={{
                                                                            cursor: "pointer",
                                                                        }}
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.stopPropagation();
                                                                            setProductData(
                                                                                (
                                                                                    pre
                                                                                ) => {
                                                                                    return {
                                                                                        ...pre,
                                                                                        variations:
                                                                                            {
                                                                                                ...pre.variations,
                                                                                                [key]: {
                                                                                                    ...pre
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ],
                                                                                                    show: !pre
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ]
                                                                                                        .show,
                                                                                                },
                                                                                            },
                                                                                    };
                                                                                }
                                                                            );
                                                                        }}
                                                                    >
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d-flex align-items-center gap-1">
                                                                                <span>
                                                                                    #
                                                                                    {
                                                                                        key
                                                                                    }
                                                                                </span>

                                                                                <select
                                                                                    name=""
                                                                                    id=""
                                                                                    className="form-control"
                                                                                >
                                                                                    <option value="">
                                                                                        Any
                                                                                        color
                                                                                    </option>
                                                                                    <option value="green">
                                                                                        green
                                                                                    </option>
                                                                                    <option value="red">
                                                                                        red
                                                                                    </option>
                                                                                </select>
                                                                                <select
                                                                                    name=""
                                                                                    id=""
                                                                                    className="form-control"
                                                                                >
                                                                                    <option value="">
                                                                                        Any
                                                                                        weight
                                                                                    </option>
                                                                                    <option value="100">
                                                                                        100
                                                                                    </option>
                                                                                    <option value="200">
                                                                                        200
                                                                                    </option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="d-flex align-items-center gap-2">
                                                                                <span
                                                                                    className="text-danger"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.stopPropagation();
                                                                                        setProductData(
                                                                                            (
                                                                                                pre
                                                                                            ) => {
                                                                                                const updatedVariations =
                                                                                                    {
                                                                                                        ...pre.variations,
                                                                                                    };

                                                                                                // Delete the specific key
                                                                                                delete updatedVariations[
                                                                                                    key
                                                                                                ];

                                                                                                return {
                                                                                                    ...pre,
                                                                                                    variations:
                                                                                                        {
                                                                                                            ...updatedVariations,
                                                                                                        },
                                                                                                };
                                                                                            }
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    Remove
                                                                                </span>
                                                                                <span className="text-primary">
                                                                                    Edith
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {productData
                                                                        .variations[
                                                                        key
                                                                    ].show && (
                                                                        <div className="card-body">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    {!productData
                                                                                        .variations[
                                                                                        key
                                                                                    ]
                                                                                        .img && (
                                                                                        <label
                                                                                            style={{
                                                                                                height: "100px",
                                                                                                width: "100px",
                                                                                                cursor: "pointer",
                                                                                            }}
                                                                                        >
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="16"
                                                                                                height="16"
                                                                                                fill="blue"
                                                                                                className="bi bi-card-image"
                                                                                                viewBox="0 0 16 16"
                                                                                                style={{
                                                                                                    height: "100%",
                                                                                                    width: "100%",
                                                                                                    objectFit:
                                                                                                        "cover",
                                                                                                }}
                                                                                            >
                                                                                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                                                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                                                                                            </svg>
                                                                                            <input
                                                                                                onChange={(
                                                                                                    e
                                                                                                ) => {
                                                                                                    let file =
                                                                                                        e
                                                                                                            .target
                                                                                                            .files[0];

                                                                                                    if (
                                                                                                        file
                                                                                                    ) {
                                                                                                        const reader =
                                                                                                            new FileReader();
                                                                                                        reader.onload =
                                                                                                            (
                                                                                                                event
                                                                                                            ) => {
                                                                                                                setProductData(
                                                                                                                    (
                                                                                                                        pre
                                                                                                                    ) => {
                                                                                                                        return {
                                                                                                                            ...pre,
                                                                                                                            variations:
                                                                                                                                {
                                                                                                                                    ...pre.variations,
                                                                                                                                    [key]: {
                                                                                                                                        ...pre
                                                                                                                                            .variations[
                                                                                                                                            key
                                                                                                                                        ],
                                                                                                                                        img: event
                                                                                                                                            .target
                                                                                                                                            .result,
                                                                                                                                    },
                                                                                                                                },
                                                                                                                        };
                                                                                                                    }
                                                                                                                );
                                                                                                            };
                                                                                                        reader.readAsDataURL(
                                                                                                            file
                                                                                                        );
                                                                                                    }
                                                                                                }}
                                                                                                type="file"
                                                                                                style={{
                                                                                                    visibility:
                                                                                                        "hidden",
                                                                                                    height: "0",
                                                                                                    width: "0",
                                                                                                }}
                                                                                                accept="image/*"
                                                                                            />
                                                                                        </label>
                                                                                    )}

                                                                                    {productData
                                                                                        .variations[
                                                                                        key
                                                                                    ]
                                                                                        .img && (
                                                                                        <div
                                                                                            style={{
                                                                                                height: "100px",
                                                                                                width: "100px",
                                                                                                position:
                                                                                                    "relative",
                                                                                            }}
                                                                                            className="d-flex align-items-center justify-content-center fw-bold"
                                                                                        >
                                                                                            <div
                                                                                                style={{
                                                                                                    height: "30px",
                                                                                                    width: "30px",
                                                                                                    position:
                                                                                                        "absolute",
                                                                                                    cursor: "pointer",
                                                                                                }}
                                                                                                onClick={(
                                                                                                    e
                                                                                                ) => {
                                                                                                    e.stopPropagation();
                                                                                                    setProductData(
                                                                                                        (
                                                                                                            pre
                                                                                                        ) => {
                                                                                                            const updatedVariations =
                                                                                                                pre.variations;
                                                                                                            delete updatedVariations[
                                                                                                                key
                                                                                                            ]
                                                                                                                .img;
                                                                                                            return {
                                                                                                                ...pre,
                                                                                                                variations:
                                                                                                                    {
                                                                                                                        ...updatedVariations,
                                                                                                                    },
                                                                                                            };
                                                                                                        }
                                                                                                    );
                                                                                                }}
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    width="40"
                                                                                                    height="40"
                                                                                                    fill="red"
                                                                                                    className="bi bi-x-lg"
                                                                                                    viewBox="3 3 16 16"
                                                                                                >
                                                                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                                                                                </svg>
                                                                                            </div>
                                                                                            <img
                                                                                                src={
                                                                                                    productData
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ]
                                                                                                        .img
                                                                                                }
                                                                                                alt=""
                                                                                                style={{
                                                                                                    height: "100%",
                                                                                                    width: "100%",
                                                                                                    objectFit:
                                                                                                        "cover",
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div className="mb-3">
                                                                                        <label
                                                                                            htmlFor="varations-product-name"
                                                                                            className="form-label d-flex justify-content-between w-100 "
                                                                                        >
                                                                                            <span>
                                                                                                SKU{" "}
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            id="varations-product-name"
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                storeVartions(
                                                                                                    e,
                                                                                                    "sku",
                                                                                                    key
                                                                                                );
                                                                                            }}
                                                                                            value={
                                                                                                productData
                                                                                                    .variations[
                                                                                                    key
                                                                                                ]
                                                                                                    .sku
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                    <div className="mb-3">
                                                                                        <label
                                                                                            htmlFor="varations-product-gtin"
                                                                                            className="form-label d-flex justify-content-between w-100"
                                                                                        >
                                                                                            <span>
                                                                                                GTIN,
                                                                                                UPC,
                                                                                                EAN,
                                                                                                or
                                                                                                ISBN{" "}
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            id="varations-product-gtin"
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                storeVartions(
                                                                                                    e,
                                                                                                    "gtin",
                                                                                                    key
                                                                                                );
                                                                                            }}
                                                                                            value={
                                                                                                productData
                                                                                                    .variations[
                                                                                                    key
                                                                                                ]
                                                                                                    .gtin
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12">
                                                                                    <div className="row">
                                                                                        <div className="col">
                                                                                            <label>
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    className="form-controlform-check-input"
                                                                                                />{" "}
                                                                                                Enabled
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <label>
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    className="form-controlform-check-input"
                                                                                                    onChange={(
                                                                                                        e
                                                                                                    ) => {
                                                                                                        checkVal(
                                                                                                            e,
                                                                                                            key,
                                                                                                            "downloadable_file",
                                                                                                            "show"
                                                                                                        );
                                                                                                    }}
                                                                                                    checked={
                                                                                                        productData
                                                                                                            .variations[
                                                                                                            key
                                                                                                        ]
                                                                                                            .downloadable_file
                                                                                                            .show
                                                                                                    }
                                                                                                />{" "}
                                                                                                Downloadable
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <label>
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    className="form-controlform-check-input"
                                                                                                />{" "}
                                                                                                Virtual
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <label>
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    className="form-controlform-check-input"
                                                                                                    onChange={(
                                                                                                        e
                                                                                                    ) => {
                                                                                                        checkVal(
                                                                                                            e,
                                                                                                            key,
                                                                                                            "manage_stock",
                                                                                                            "show"
                                                                                                        );
                                                                                                    }}
                                                                                                    checked={
                                                                                                        productData
                                                                                                            .variations[
                                                                                                            key
                                                                                                        ]
                                                                                                            .manage_stock
                                                                                                            .show
                                                                                                    }
                                                                                                />{" "}
                                                                                                Manage
                                                                                                stock?{" "}
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-6 py-3">
                                                                                    <div className="">
                                                                                        <label
                                                                                            htmlFor="varations-product-regular-price"
                                                                                            className="form-label d-flex justify-content-between w-100 "
                                                                                        >
                                                                                            <span>
                                                                                                Regular
                                                                                                price
                                                                                                (৳
                                                                                                )
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            id="varations-product-regular-price"
                                                                                            placeholder="Variation price (required)"
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                storeVartions(
                                                                                                    e,
                                                                                                    "regular_price",
                                                                                                    key
                                                                                                );
                                                                                            }}
                                                                                            value={
                                                                                                productData
                                                                                                    .variations[
                                                                                                    key
                                                                                                ]
                                                                                                    .regular_price
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-6 py-3">
                                                                                    <div className="">
                                                                                        <label
                                                                                            htmlFor="varations-product-sale-price"
                                                                                            className="form-label d-flex justify-content-between w-100 "
                                                                                        >
                                                                                            <span>
                                                                                                Sale
                                                                                                price
                                                                                                (৳
                                                                                                )
                                                                                                Schedule
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            id="varations-product-sale-price"
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                storeVartions(
                                                                                                    e,
                                                                                                    "sale_price",
                                                                                                    key
                                                                                                );
                                                                                            }}
                                                                                            value={
                                                                                                productData
                                                                                                    .variations[
                                                                                                    key
                                                                                                ]
                                                                                                    .sale_price
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {!productData
                                                                                    .variations[
                                                                                    key
                                                                                ]
                                                                                    .manage_stock
                                                                                    .show && (
                                                                                    <div className="col-12 py-2">
                                                                                        <div className="">
                                                                                            <label
                                                                                                htmlFor="varations-product-stock-status"
                                                                                                className="form-label d-flex justify-content-between w-100 "
                                                                                            >
                                                                                                <span>
                                                                                                    Stock
                                                                                                    status
                                                                                                </span>
                                                                                                <span
                                                                                                    style={{
                                                                                                        fontSize:
                                                                                                            "9px",
                                                                                                        backgroundColor:
                                                                                                            "grey",
                                                                                                        height: "10px",
                                                                                                        width: "10px",
                                                                                                    }}
                                                                                                    className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                >
                                                                                                    ?
                                                                                                </span>
                                                                                            </label>
                                                                                            <select
                                                                                                className="form-control"
                                                                                                id="varations-product-stock-status"
                                                                                                onChange={(
                                                                                                    e
                                                                                                ) => {
                                                                                                    storeVartions(
                                                                                                        e,
                                                                                                        "stock_status",
                                                                                                        key
                                                                                                    );
                                                                                                }}
                                                                                                value={
                                                                                                    productData
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ]
                                                                                                        .stock_status
                                                                                                }
                                                                                            >
                                                                                                <option value="in_stock">
                                                                                                    In
                                                                                                    stock
                                                                                                </option>
                                                                                                <option value="out_of_stock">
                                                                                                    Out
                                                                                                    of
                                                                                                    stock
                                                                                                </option>
                                                                                                <option value="on_back-order">
                                                                                                    On
                                                                                                    back
                                                                                                    order
                                                                                                </option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                                {productData
                                                                                    .variations[
                                                                                    key
                                                                                ]
                                                                                    .manage_stock
                                                                                    .show && (
                                                                                    <div className="col-12">
                                                                                        <div className="row">
                                                                                            <div className="col-6 py-2">
                                                                                                <div>
                                                                                                    <label
                                                                                                        htmlFor="variation-product-stock-quantity"
                                                                                                        className="form-label d-flex justify-content-between"
                                                                                                    >
                                                                                                        <span>
                                                                                                            {" "}
                                                                                                            Stock
                                                                                                            quantity
                                                                                                        </span>
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize:
                                                                                                                    "9px",
                                                                                                                backgroundColor:
                                                                                                                    "grey",
                                                                                                                height: "10px",
                                                                                                                width: "10px",
                                                                                                            }}
                                                                                                            className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                        >
                                                                                                            ?
                                                                                                        </span>
                                                                                                    </label>
                                                                                                    <input
                                                                                                        type="number"
                                                                                                        className="form-control"
                                                                                                        id="variation-product-stock-quantity"
                                                                                                        onChange={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            storeVartions(
                                                                                                                e,
                                                                                                                "stock_quantity",
                                                                                                                key
                                                                                                            );
                                                                                                        }}
                                                                                                        value={
                                                                                                            productData
                                                                                                                .variations[
                                                                                                                key
                                                                                                            ]
                                                                                                                .stock_quantity
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-6 py-2">
                                                                                                <div>
                                                                                                    <label
                                                                                                        htmlFor="variation-product-stock-allow-backorder"
                                                                                                        className="form-label d-flex justify-content-between"
                                                                                                    >
                                                                                                        <span>
                                                                                                            {" "}
                                                                                                            Allow
                                                                                                            backorders?
                                                                                                        </span>
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize:
                                                                                                                    "9px",
                                                                                                                backgroundColor:
                                                                                                                    "grey",
                                                                                                                height: "10px",
                                                                                                                width: "10px",
                                                                                                            }}
                                                                                                            className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                        >
                                                                                                            ?
                                                                                                        </span>
                                                                                                    </label>
                                                                                                    <select
                                                                                                        className="form-control"
                                                                                                        id="variation-product-stock-allow-backorder"
                                                                                                        onChange={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            storeVartions(
                                                                                                                e,
                                                                                                                "allow_backorder",
                                                                                                                key
                                                                                                            );
                                                                                                        }}
                                                                                                        value={
                                                                                                            productData
                                                                                                                .variations[
                                                                                                                key
                                                                                                            ]
                                                                                                                .allow_backorder
                                                                                                        }
                                                                                                    >
                                                                                                        <option value="not_allow">
                                                                                                            Do
                                                                                                            not
                                                                                                            allow
                                                                                                        </option>
                                                                                                        <option value="allow_notify_customer">
                                                                                                            Allow,but
                                                                                                            notify
                                                                                                            customer
                                                                                                        </option>
                                                                                                        <option value="allow">
                                                                                                            Allow
                                                                                                        </option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-12 py-2">
                                                                                                <div>
                                                                                                    <label
                                                                                                        htmlFor="variation-product-low-stock-therehold"
                                                                                                        className="form-label d-flex justify-content-between"
                                                                                                    >
                                                                                                        <span>
                                                                                                            {" "}
                                                                                                            Low
                                                                                                            stock
                                                                                                            threshold
                                                                                                        </span>
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize:
                                                                                                                    "9px",
                                                                                                                backgroundColor:
                                                                                                                    "grey",
                                                                                                                height: "10px",
                                                                                                                width: "10px",
                                                                                                            }}
                                                                                                            className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                        >
                                                                                                            ?
                                                                                                        </span>
                                                                                                    </label>
                                                                                                    <input
                                                                                                        type="number"
                                                                                                        className="form-control"
                                                                                                        id="variation-product-low-stock-therehold"
                                                                                                        placeholder="Store-wide threshold (2)"
                                                                                                        step="0"
                                                                                                        onChange={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            storeVartions(
                                                                                                                e,
                                                                                                                "low_stock",
                                                                                                                key
                                                                                                            );
                                                                                                        }}
                                                                                                        value={
                                                                                                            productData
                                                                                                                .variations[
                                                                                                                key
                                                                                                            ]
                                                                                                                .low_stock
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                                <div className="col-6 py-2">
                                                                                    <div className="">
                                                                                        <label
                                                                                            htmlFor="varations-product-weight-kg"
                                                                                            className="form-label d-flex justify-content-between w-100 "
                                                                                        >
                                                                                            <span>
                                                                                                Weight
                                                                                                (kg)
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            id="varations-product-weight-kg"
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                storeVartions(
                                                                                                    e,
                                                                                                    "shiping",
                                                                                                    key,
                                                                                                    "shiping",
                                                                                                    "weight"
                                                                                                );
                                                                                            }}
                                                                                            value={
                                                                                                productData
                                                                                                    .variations[
                                                                                                    key
                                                                                                ]
                                                                                                    .shiping
                                                                                                    .weight
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-6 py-2">
                                                                                    <div className="">
                                                                                        <label className="form-label d-flex justify-content-between w-100 ">
                                                                                            <span>
                                                                                                Dimensions
                                                                                                (L×W×H)
                                                                                                (cm)
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>
                                                                                        <div className="d-flex gap-2">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control d-inline"
                                                                                                id="varations-product-weight-kg"
                                                                                                placeholder="Length"
                                                                                                onChange={(
                                                                                                    e
                                                                                                ) => {
                                                                                                    storeVartions(
                                                                                                        e,
                                                                                                        "",
                                                                                                        key,
                                                                                                        "shiping",
                                                                                                        "",
                                                                                                        "dimentions",
                                                                                                        "length"
                                                                                                    );
                                                                                                }}
                                                                                                value={
                                                                                                    productData
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ]
                                                                                                        .shiping
                                                                                                        .dimentions
                                                                                                        .length
                                                                                                }
                                                                                            />
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control"
                                                                                                id="varations-product-weight-kg"
                                                                                                placeholder="width"
                                                                                                onChange={(
                                                                                                    e
                                                                                                ) => {
                                                                                                    storeVartions(
                                                                                                        e,
                                                                                                        "",
                                                                                                        key,
                                                                                                        "shiping",
                                                                                                        "",
                                                                                                        "dimentions",
                                                                                                        "width"
                                                                                                    );
                                                                                                }}
                                                                                                value={
                                                                                                    productData
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ]
                                                                                                        .shiping
                                                                                                        .dimentions
                                                                                                        .width
                                                                                                }
                                                                                            />
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control"
                                                                                                id="varations-product-weight-kg"
                                                                                                placeholder="Height"
                                                                                                onChange={(
                                                                                                    e
                                                                                                ) => {
                                                                                                    storeVartions(
                                                                                                        e,
                                                                                                        "",
                                                                                                        key,
                                                                                                        "shiping",
                                                                                                        "",
                                                                                                        "dimentions",
                                                                                                        "height"
                                                                                                    );
                                                                                                }}
                                                                                                value={
                                                                                                    productData
                                                                                                        .variations[
                                                                                                        key
                                                                                                    ]
                                                                                                        .shiping
                                                                                                        .dimentions
                                                                                                        .height
                                                                                                }
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col py-2">
                                                                                    <div className="">
                                                                                        <label
                                                                                            className="form-label d-flex justify-content-between w-100 "
                                                                                            htmlFor="varations-product-shiping-class"
                                                                                        >
                                                                                            <span>
                                                                                                Shipping
                                                                                                class
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>

                                                                                        <select
                                                                                            className="form-control"
                                                                                            id="varations-product-shiping-class"
                                                                                        >
                                                                                            <option value="same_as_parent">
                                                                                                same
                                                                                                as
                                                                                                parent
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12 py-2">
                                                                                    <div className="">
                                                                                        <label
                                                                                            className="form-label d-flex justify-content-between w-100 "
                                                                                            htmlFor="varations-product-description"
                                                                                        >
                                                                                            <span>
                                                                                                Description
                                                                                            </span>
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize:
                                                                                                        "9px",
                                                                                                    backgroundColor:
                                                                                                        "grey",
                                                                                                    height: "10px",
                                                                                                    width: "10px",
                                                                                                }}
                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                            >
                                                                                                ?
                                                                                            </span>
                                                                                        </label>

                                                                                        <textarea
                                                                                            className="form-control"
                                                                                            id="varations-product-description"
                                                                                            placeholder="description"
                                                                                            onChange={(
                                                                                                e
                                                                                            ) => {
                                                                                                storeVartions(
                                                                                                    e,
                                                                                                    "description",
                                                                                                    key
                                                                                                );
                                                                                            }}
                                                                                            value={
                                                                                                productData
                                                                                                    .variations[
                                                                                                    key
                                                                                                ]
                                                                                                    .description
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>

                                                                                {productData
                                                                                    .variations[
                                                                                    key
                                                                                ]
                                                                                    .downloadable_file
                                                                                    .show && (
                                                                                    <div className="col-12 py-2">
                                                                                        <div className="row">
                                                                                            <div className="col-12">
                                                                                                <label className="form-label d-flex justify-content-between w-100 lh-0">
                                                                                                    <span>
                                                                                                        Downloadable
                                                                                                        files
                                                                                                    </span>
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize:
                                                                                                                "9px",
                                                                                                            backgroundColor:
                                                                                                                "grey",
                                                                                                            height: "10px",
                                                                                                            width: "10px",
                                                                                                        }}
                                                                                                        className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                    >
                                                                                                        ?
                                                                                                    </span>
                                                                                                </label>

                                                                                                <div className="card p-1">
                                                                                                    <div className="row">
                                                                                                        <div className="col-5 py-2 d-flex justify-content-between">
                                                                                                            <label htmlFor="varations-product-downloadable-name">
                                                                                                                File
                                                                                                                name
                                                                                                            </label>
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize:
                                                                                                                        "9px",
                                                                                                                    backgroundColor:
                                                                                                                        "grey",
                                                                                                                    height: "10px",
                                                                                                                    width: "10px",
                                                                                                                }}
                                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                            >
                                                                                                                ?
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div className="col-5 py-2 d-flex justify-content-between">
                                                                                                            <label htmlFor="varations-product-downloadable-url">
                                                                                                                File
                                                                                                                URL
                                                                                                            </label>
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize:
                                                                                                                        "9px",
                                                                                                                    backgroundColor:
                                                                                                                        "grey",
                                                                                                                    height: "10px",
                                                                                                                    width: "10px",
                                                                                                                }}
                                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                            >
                                                                                                                ?
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div className="col-5 py-2">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                                placeholder="File name"
                                                                                                                id="varations-product-downloadable-name"
                                                                                                            />
                                                                                                        </div>
                                                                                                        <div className="col-5 py-2">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                                placeholder="file name"
                                                                                                                id="varations-product-downloadable-url"
                                                                                                            />
                                                                                                        </div>
                                                                                                        <div className="col-2 py-2 d-flex gap-2">
                                                                                                            <label>
                                                                                                                <input
                                                                                                                    type="file"
                                                                                                                    accept="image/*"
                                                                                                                    className=""
                                                                                                                    style={{
                                                                                                                        visibility:
                                                                                                                            "hidden",
                                                                                                                        height: "0",
                                                                                                                        width: "0",
                                                                                                                    }}
                                                                                                                />
                                                                                                                <div className="btn btn-outline-primary">
                                                                                                                    Choose
                                                                                                                    file
                                                                                                                </div>
                                                                                                            </label>

                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize:
                                                                                                                        "9px",
                                                                                                                    backgroundColor:
                                                                                                                        "grey",
                                                                                                                    height: "10px",
                                                                                                                    width: "10px",
                                                                                                                }}
                                                                                                                className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                            >
                                                                                                                x
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div className="col-12 py-2">
                                                                                                            <div className="btn btn-outline-primary">
                                                                                                                Add
                                                                                                                file
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="card p-1"></div>
                                                                                            </div>

                                                                                            <div className="col-6 py-2">
                                                                                                <div className="d-flex justify-content-between">
                                                                                                    <label
                                                                                                        className="d-inline-block form-label"
                                                                                                        htmlFor="product-variations-downloadable-times"
                                                                                                    >
                                                                                                        Download
                                                                                                        limit{" "}
                                                                                                    </label>
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize:
                                                                                                                "9px",
                                                                                                            backgroundColor:
                                                                                                                "grey",
                                                                                                            height: "10px",
                                                                                                            width: "10px",
                                                                                                        }}
                                                                                                        className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                    >
                                                                                                        x
                                                                                                    </span>
                                                                                                </div>
                                                                                                <input
                                                                                                    id="product-variations-downloadable-times"
                                                                                                    type="number"
                                                                                                    placeholder="unlimited"
                                                                                                    className="form-control"
                                                                                                />
                                                                                            </div>
                                                                                            <div className="col-6 py-2">
                                                                                                <div className="d-flex justify-content-between">
                                                                                                    <label
                                                                                                        className="d-inline-block form-label"
                                                                                                        htmlFor="product-variations-downloadable-expiry"
                                                                                                    >
                                                                                                        Download
                                                                                                        expiry
                                                                                                    </label>
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize:
                                                                                                                "9px",
                                                                                                            backgroundColor:
                                                                                                                "grey",
                                                                                                            height: "10px",
                                                                                                            width: "10px",
                                                                                                        }}
                                                                                                        className="my-auto p-2 text-white rounded-5 d-flex align-items-center justify-content-center"
                                                                                                    >
                                                                                                        x
                                                                                                    </span>
                                                                                                </div>
                                                                                                <input
                                                                                                    id="product-variations-downloadable-expiry"
                                                                                                    type="number"
                                                                                                    placeholder="expirity"
                                                                                                    className="form-control"
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                </>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
