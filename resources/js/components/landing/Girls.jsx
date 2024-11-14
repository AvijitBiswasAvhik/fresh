import React, { useEffect, useState } from "react";
import "../../../css/component/landing/Girls.css";
import axiosClient from "../../Axios";

export default function Girls() {
    let [electronics, setElectronics] = useState([]);
    useEffect(() => {
        axiosClient
            .get(`/product/electronics`)
            .then((response) => {
                console.log(response.data);
                setElectronics(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);
    return (
        <>
            <h3 id="girls-main-title">Electronics</h3>
            <div className="" id="girl-section-content-container">
                {electronics &&
                    electronics.map((item) => {
                        return (
                            <div className="girl-section-content-box" key={item.id}>
                                <img
                                    src={item.product_image}
                                    alt=""
                                    className="fit-image make-image-black aspect-ratio"
                                />
                                <div className="girl-section-content-box-content w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                    <figure className="text-center">
                                        <blockquote className="blockquote">
                                            <p
                                                className="h6"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.description,
                                                }}
                                            >
                                                {/* <span className="d-none d-md-block">
        Crafted with precision and
        style, each bag is a
        statement of sophistication,
        combining fashion and
        function seamlessly
    </span> */}
                                            </p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-warning fs-5">
                                            Luxurious Handbags
                                        </figcaption>
                                    </figure>
                                    <button
                                        className="btn text-info btn-dark ms-0 rounded rounded-5 fw-bold "
                                        style={{ width: "100px" }}
                                    >
                                        Shop now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
