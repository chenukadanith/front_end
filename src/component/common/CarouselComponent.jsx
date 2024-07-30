import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CarouselComponent.css";
const CarouselComponent = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mt-5 " data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{height: '600px'}}>
                <div className="carousel-item active">
                    <img
                        className="d-block w-100 img-fluid"
                        style={{objectFit: "cover", height: "100%", width: "auto"}}
                        src={`${process.env.PUBLIC_URL}/carosel_1.jpg`}
                        alt="First slide"
                    />
                    <div className="carousel-caption d-none d-lg-block">
                        <h5>First Slide</h5>
                        <p>Some descriptive text for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        style={{objectFit: "cover", height: "100%", width: "auto"}}
                        src={`${process.env.PUBLIC_URL}/carosel_2.jpg`}
                        alt="Second slide"
                    />
                    <div className="carousel-caption d-none d-lg-block">
                        <h5>Second Slide</h5>
                        <p>Some descriptive text for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100 img-fluid"
                        style={{objectFit: "cover", height: "100%", width: "auto"}}
                        src={`${process.env.PUBLIC_URL}/carosel_3.jpg`}
                        alt="Third slide"
                    />
                    <div className="carousel-caption d-none d-lg-block">
                        <h5>Third Slide</h5>
                        <p>Some descriptive text for the third slide.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                {/*<span className="sr-only">Previous</span>*/}
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                {/*<span className="sr-only">Next</span>*/}
            </a>
        </div>
    );
};

export default CarouselComponent;
