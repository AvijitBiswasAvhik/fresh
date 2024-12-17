import React, { useState, useEffect } from "react";
import "../../../../css/component/admin/variations.css";
import { formToJSON } from "axios";
export default function Variations() {
    let [showItem, setShowItem] = useState({
        general: false,
        inventory: false,
        shiping: false,
        link_product: false,
        atribute: false,
        advance: false,
        get_more_options: false,
        pintres: false,
    });
    useEffect(() => {
        // console.log(showItem);
    }, [showItem]);
    let handleClick = (e, key) => {
        e.stopPropagation();
        // for (let key in showItem) {
        //     if (key == "general") {
        //         console.log(key);
        //         showItem[key] = true;
        //     } else {
        //         showItem[key] = false;
        //     }
        // }
        // setShowItem({ ...showItem });
        let updateShowItem = Object.keys(showItem).reduce((acc, currentKey) => {
            acc[currentKey] = currentKey === key;
            return acc;
        }, {});
        setShowItem(updateShowItem);
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
                                        defaultValue="variable"
                                    >
                                        <optgroup label="product type">
                                            <option value="simple">
                                                Simple product
                                            </option>
                                            <option
                                                value="grouped"
                                                defaultValue="grouped"
                                            >
                                                Grouped product
                                            </option>
                                            <option value="external">
                                                External/Affiliate product
                                            </option>
                                            <option value="variable">
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
                        <div className="col-4">
                            <ul className="product-data-from-list-container">
                                {Object.keys(showItem).map((key) => {
                                    let st = key
                                        .split("")
                                        .reduce((acc, crr, i) => {
                                            if (crr == "_") {
                                                acc += " ";

                                                return acc;
                                            }else if(i == 0){
                                                acc += crr.toUpperCase();
                                                return acc;
                                            }else {
                                                acc += crr;
                                                return acc;
                                            }
                                        }, "");
                                    return (
                                        <li
                                            key={key}
                                            onClick={(e) => {
                                                handleClick(e, key);
                                                console.log(key.search("_"));
                                            }}
                                            className={`product-data-list ${
                                                showItem[key] === true
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {st}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="col-8">
                            {showItem.general && (
                                <div id="product-general-data" className="px-2">
                                    <div className="product-data-input-field py-3">
                                        <label htmlFor="product-data-regular-price">
                                            Regular price (<span>৳ </span>)
                                        </label>
                                        <input
                                            type="text"
                                            className="genterl-input-field"
                                            id="product-data-regular-price"
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
                                        />
                                    </div>
                                </div>
                            )}
                            <div id="product-inventory-data" className="px-2">
                                <div className="product-data-input-field py-3 d-sm-flex d-block">
                                    <label htmlFor="product-data-inventory-sku">
                                        SKU
                                    </label>
                                    <input
                                        type="text"
                                        className="genterl-input-field"
                                        id="product-data-inventory-sku"
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
                                    />
                                    <span className="product-data-inventory-stock-management-description">
                                        Track stock quantity for this product
                                    </span>
                                </div>
                                <div className="product-data-input-field py-3  d-sm-flex d-block">
                                    <label htmlFor="product-data-inventory-stock-quantity">
                                        Quantity
                                    </label>
                                    <input
                                        type="text"
                                        className="genterl-input-field"
                                        id="product-data-inventory-stock-quantity"
                                    />
                                </div>
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
                                                />
                                                On backorder
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-data-input-field py-3  d-sm-flex d-block">
                                    <label htmlFor="product-data-inventory-sold-indvidual">
                                        Sold individually
                                    </label>
                                    <input
                                        type="checkbox"
                                        className="genterl-input-field"
                                        id="product-data-inventory-sold-indvidual"
                                    />
                                    <span className="product-data-inventory-sold-indvidual px-2">
                                        Limit purchases to 1 item per order
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
