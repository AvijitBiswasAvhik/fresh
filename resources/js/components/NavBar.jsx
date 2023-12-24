import React, { useEffect, useRef } from "react";
import "../../css/component/navbar.css";
export default function NavBar() {
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.id != "sidebar") {
                let sideBar = document.getElementById("sidebar");
                if (!sideBar.contains(e.target)) {
                    sideBar.classList.add("hide");
                }
            }
        });
        let favorite = document.getElementById("favorite");
    }, []);

    let hideSidebar = (e) => {
        e.stopPropagation();
        let sideBar = document.getElementById("sidebar");
        if (!sideBar.classList.contains("hide")) {
            sideBar.classList.add("hide");
            return;
        }

        sideBar.classList.remove("hide");
        sideBar.style.left = e.clientX - 15 + "px";
        sideBar.style.top = e.clientY + 30 + "px";

    };
    let showCart = (e) => {
        e.stopPropagation();
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.add("expand");
    };
    let hideCart = (e) => {
        e.stopPropagation();
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.remove("expand");
    };
    let middleMan = (e) => {
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.add("expand");
    };
    let outCart = () => {
        let popCart = document.getElementById("pop-up-cart-content");
        popCart.classList.remove("expand");
    };

    return (
        <nav className="nav px-lg-4 px-md-4 px-1 py-1" id="nav">
            <div className="nav-item item">
                <div className="brandImage">
                    <a
                        href=""
                        className="brand-image-link text-decoration-none"
                    >
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab3bba3-5b59-43a1-9e2a-e1593d3ca64f/ddsn174-21df4ea8-9aeb-4c9b-aaa4-30852f0d7822.jpg/v1/fill/w_1121,h_713,q_70,strp/little_girl_hugging_lion_art_by_helpful111_ddsn174-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE0IiwicGF0aCI6IlwvZlwvOGFiM2JiYTMtNWI1OS00M2ExLTllMmEtZTE1OTNkM2NhNjRmXC9kZHNuMTc0LTIxZGY0ZWE4LTlhZWItNGM5Yi1hYWE0LTMwODUyZjBkNzgyMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eE5zoy3JXrdzMWLFe_bO-cdZHsEjZIwFigKkLC_Pt3Q"
                            alt=""
                            srcSet=""
                            className="brand-image-element"
                        />
                    </a>
                </div>
            </div>
            <div className="nav-item item d-flex align-items-center p-1">
                <button
                    className="btn d-flex"
                    id="sidebar-toogle-btn"
                    onClick={(e) => {
                        hideSidebar(e);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-list navbar-menu fs-5 "
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                    <span className="d-none d-lg-block">Categories</span>
                </button>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control rounded-start-5 border border-secondary bordered-end-light"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        placeholder="Search what you want"
                        required
                    />
                    <span
                        className="input-group-text d-flex align-items-center justify-content-center rounded-end-5 border border-secondary"
                        id="inputGroupPrepend"
                        style={{ width: "50px" }}
                    >
                        <button className="btn h-25 border-2 d-flex align-items-center justify-content-center mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search navbar-search-icon"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
            <div className="nav-item item">
                <div className="cart-favorite-menu px-1">
                    <div className="sign-in cart-menu-item">
                        <button
                            type="button"
                            className="btn sign-button fw-bold"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="favorite cart-menu-item" id="favo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart heart-icon"
                            viewBox="0 0 16 16"
                        >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </div>
                    <div
                        className="cart cart-menu-item"
                        id="nav-cart-item"
                        onMouseEnter={(e) => showCart(e)}
                        onMouseLeave={(e) => hideCart(e)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart2 cart-icon"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        <span className="cart-count">9</span>
                    </div>
                    <div
                        className="pop-up-cart-content rounded rounded-2 card "
                        id="pop-up-cart-content"
                        onMouseEnter={(e) => middleMan(e)}
                        onMouseLeave={outCart}
                    >
                        <div className="card">
                            <div className="pop-up-cart-content-header p-1 card-header fw-bold">
                                Cart(1 item)
                            </div>
                            <div
                                className="card-body overflow-hidden"
                                style={{ height: "150px" }}
                            >
                                <div className="row h-100 border border-1">
                                    <div className="col border border-1 p-0">
                                        <img
                                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab3bba3-5b59-43a1-9e2a-e1593d3ca64f/ddsn174-21df4ea8-9aeb-4c9b-aaa4-30852f0d7822.jpg/v1/fill/w_1121,h_713,q_70,strp/little_girl_hugging_lion_art_by_helpful111_ddsn174-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE0IiwicGF0aCI6IlwvZlwvOGFiM2JiYTMtNWI1OS00M2ExLTllMmEtZTE1OTNkM2NhNjRmXC9kZHNuMTc0LTIxZGY0ZWE4LTlhZWItNGM5Yi1hYWE0LTMwODUyZjBkNzgyMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eE5zoy3JXrdzMWLFe_bO-cdZHsEjZIwFigKkLC_Pt3Q"
                                            alt=""
                                            className="h-100 w-100"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="col border border-1 lh-1">
                                        <div className="card-title ">
                                            <h5 className="fw-bold">Hello</h5>
                                        </div>
                                        <p
                                            className="card-text font-monospaces"
                                            style={{
                                                marginTop: "-10px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            Some quick example...
                                        </p>
                                        <p
                                            className="d-flex justify-content-between fw-bold"
                                            style={{ fontSize: "12px" }}
                                        >
                                            <span className="">USD</span>{" "}
                                            <span>$100</span>
                                        </p>
                                        <p
                                            className="d-flex justify-content-between fw-medium"
                                            style={{
                                                fontSize: "12px",
                                                marginTop: "-10px",
                                            }}
                                        >
                                            <span>qty</span> <span>3</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer p-2">
                                <div className="card-title fw-bold d-flex justify-content-between">
                                    <h6 className="fw-bold">SubTotal</h6>
                                    <h6 className="fw-bold">USD $100</h6>
                                </div>
                                <div
                                    className="card-text text-muted text-center"
                                    style={{
                                        marginTop: "-15px",
                                        fontSize: "12px",
                                    }}
                                >
                                    exCluding(Shipping tax)
                                </div>
                                <div className="d-grid  mx-auto">
                                    <button
                                        className="btn w-100 btn-secondary rounded rounded-5 fw-bold"
                                        type="button"
                                        style={{ color: "#faa200" }}
                                    >
                                        View cart & check out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item item w-100 d-none d-lg-block p-2">
                <ul className="d-flex gap-5 h-100 list-inline align-items-center justify-content-center">
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Shoe
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Glass
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Woman
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Men
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Beauty
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Shirt
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a className="btn rounded rounded-3 nav-categorise-link">
                            Jewlary
                        </a>
                    </li>
                </ul>{" "}
            </div>
        </nav>
    );
}
