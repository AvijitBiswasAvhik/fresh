import React from "react";

export default function ProductAdd() {
    return (
        <form>
            <div className="mb-3">
                <label
                    htmlFor="crate-prodct-title"
                    className="form-label"
                >
                    Product Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="crate-prodct-title"
                    placeholder="product title"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="crate-product-description" className="form-label">
                    Product Description
                </label>
                <textarea
                    className="form-control"
                    id="crate-product-description"
                    rows="3"
                    placeholder="product description"
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="create-product-price" className="form-label">
                    Price
                </label>
                <input
                    className="form-control"
                    id="create-product-price"
                    placeholder="product description"
                />
            </div>
        </form>
    );
}
