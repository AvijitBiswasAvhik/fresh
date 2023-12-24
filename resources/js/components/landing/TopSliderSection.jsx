import React from "react";
import "../../../css/component/landing/TopSliderSection.css";

export default function TopSliderSection() {
    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide overflow-hidden"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div
                    className="carousel-inner overflow-hidden"
                    
                >
                    <div
                        className="carousel-item active"
                        style={{ height: "300px" }}
                    >
                        <div className="row h-100">
                            <div className="col col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://www.instyle.com/thmb/4JZWPxnRCwAm3Slx-2GjVZGYNeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-539573922-2000-a03885527cf14bb9b1719a5812fb1d26.jpg"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-warning  text-decorate" style={{fontWeight: 'bolder'}}>Premium Suit & Pants</h5>
                                                <h5 className="text-center w-50 mx-auto fw-bold text-decorate">Mens only</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-warning">View Collection</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col d-sm-none d-lg-block col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://www.polar-quest.com/media/1320/img_0904.jpg?rnd=636226613550000000&crop=0,0,0,0&cropmode=percentage&center=&width=1600&height=666&mode=crop&upscale=true&quality=84"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-white  text-decorate" style={{fontWeight: 'bolder'}}>Premium Suit & Pants</h5>
                                                <h5 className="text-center w-50 mx-auto text-info fw-bold text-decorate">With Gucci</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-white">Explor Gucci</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://www.kickscrew.com/cdn/shop/articles/Nike_Air_Max_Day-2_1200x.jpg?v=1643944253"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-warning  text-decorate" style={{fontWeight: 'bolder'}}>Make life easy</h5>
                                                <h5 className="text-center w-50 mx-auto text-danger fw-bold text-decorate">Got Nike</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-warning">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://ts2.space/wp-content/uploads/2023/12/compressed_img-fKiIpFAOdvL313Jy6hJpsT0e-1024x585.png"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-warning  text-decorate" style={{fontWeight: 'bolder'}}>Beauty of Rolex</h5>
                                                <h5 className="text-center w-50 mx-auto fw-bold text-decorate">Mens</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-warning">Collection</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="carousel-item active"
                        style={{ height: "300px" }}
                    >
                        <div className="row h-100">
                            <div className="col col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://www.instyle.com/thmb/4JZWPxnRCwAm3Slx-2GjVZGYNeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-539573922-2000-a03885527cf14bb9b1719a5812fb1d26.jpg"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-warning  text-decorate" style={{fontWeight: 'bolder'}}>Premium Suit & Pants</h5>
                                                <h5 className="text-center w-50 mx-auto fw-bold text-decorate">Mens only</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-warning">View Collection</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col d-sm-none d-lg-block col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://www.polar-quest.com/media/1320/img_0904.jpg?rnd=636226613550000000&crop=0,0,0,0&cropmode=percentage&center=&width=1600&height=666&mode=crop&upscale=true&quality=84"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-white  text-decorate" style={{fontWeight: 'bolder'}}>Premium Suit & Pants</h5>
                                                <h5 className="text-center w-50 mx-auto text-info fw-bold text-decorate">With Gucci</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-white">Explor Gucci</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://www.kickscrew.com/cdn/shop/articles/Nike_Air_Max_Day-2_1200x.jpg?v=1643944253"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-warning  text-decorate" style={{fontWeight: 'bolder'}}>Make life easy</h5>
                                                <h5 className="text-center w-50 mx-auto text-danger fw-bold text-decorate">Got Nike</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-warning">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col col-6 col-sm-4 col-lg-3 h-100 border border-2 p-0">
                                <a href="#">
                                    <div className="card overflow-hidden h-100">
                                        <img
                                            src="https://ts2.space/wp-content/uploads/2023/12/compressed_img-fKiIpFAOdvL313Jy6hJpsT0e-1024x585.png"
                                            alt=""
                                            className="fit-image make-image-black"
                                        />
                                        <div className="slider-card-content">
                                            <div className="card-title mt-5">
                                                <h5 className="text-center text-warning  text-decorate" style={{fontWeight: 'bolder'}}>Beauty of Rolex</h5>
                                                <h5 className="text-center w-50 mx-auto fw-bold text-decorate">Mens</h5>

                                            </div>
                                            <div className="card-body d-flex justify-content-center mt-5">
                                                <button className="btn btn-dark fw-bold rounded rounded-5 mt-4 text-warning">Collection</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel-item active" style={{height: "300px"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Okonjima_Lioness.jpg/800px-Okonjima_Lioness.jpg"
                            className=""
                            style={{height:'100%', width:'100%', objectFit: 'cover'}}
                            alt="..."
                        />
                        <div className="carousel-caption h-100 d-md-block">
                            <h5>Second slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                second slide.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item h-100" style={{height: "300px"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Asiatic_lion_01.jpg/1024px-Asiatic_lion_01.jpg"
                            className=""
                            style={{height:'100%', width:'100%', objectFit: 'cover'}}
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                third slide.
                            </p>
                        </div>
                    </div>*/}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
