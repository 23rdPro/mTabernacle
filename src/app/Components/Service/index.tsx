import React from "react";
import ServiceCarousel from "../ServiceCarousel";

const Service = () => {
    return (
        <div className="container-fluid py-5 px-4 px-lg-0">
            <div className="row g-0">
                <div className="col-lg-3 d-none d-lg-flex">
                    <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                        <h1 className="display-3 text-white m-0" style={{"transform": "rotate(-90deg)"}}>
                            2 Decades of Service
                        </h1>
                    </div>
                </div>
                <div className="col-md-12 col-lg-9">
                    <div className="ms-lg-5 ps-lg-5">
                        <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-5">Ministries @ The Mercy Tabernacle</h1>
                        </div>
                        {/* <ServiceCarousel /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;