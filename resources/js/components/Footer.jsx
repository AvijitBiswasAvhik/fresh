import React from "react";
import "../../css/component/footer.css";
import FooterCollapse from "./footer/FooterCollapse";
export default function Footer() {
    return (
        <>
            <div
                id="footer-email-send"
                className="align-items-center justify-content-center px-2"
            >
                <p id="footer-email-header" className="text-center">
                    Yes! Send me exclusive offers, unique gift ideas, and
                    personalized tips for shopping and selling on LPbrand.
                </p>
                <div id="footer-email">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control rounded-start-5"
                            placeholder="Your email address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                            <span
                                className="input-group-text  rounded-end-5"
                                id="footer-email-submit"
                            >
                                Subscribe
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-content-box">
                <div className="containe px-md-3 px-lg-5 ">
                    <div className="row mx-0 w-100 mx-auto">
                        <div className="col d-none d-md-block col-md-3 footer-brand-image">
                            <div className="mx-auto py-2 footer-brnad-image-container">
                                <img
                                    className=" card-img-top brand-image-element"
                                    src="\storage\site-image.gif"
                                    alt="Card image cap"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 footer-content p-0">
                            <div className="footer-brnad-image-container mx-auto">
                                <FooterCollapse />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-end row text-white bg-dark w-100 mx-auto">
                    <div className="col-12 mx-auto  col-md-4 px-3 d-flex align-items-center justify-content-center gap-2">
                        <a
                            href="#"
                            className="btn btn-outline-secondary text-white footer-btn-anglo rounded-5"
                        >
                            <span className="my-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-globe-americas"
                                >
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                                </svg>
                            </span>
                            <span className="my-auto text-white">
                                Angola | English (US) | $ (USD)
                            </span>
                        </a>
                    </div>
                    <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                        <span>© 2024 Etsy, Inc. </span>
                        <ul className="footer-end-list my-auto">
                            <li>
                                {" "}
                                <a href="#" className="text-white">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Privacy</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Interest-based ads</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Regions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
