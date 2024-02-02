import { PANDC, SERVICES, SPIRIT, TEACH } from "@/app/constants/constants";
import React from "react";


const ServiceCarousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
        centerMode: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
              }
            }
        ]
    };

    return (
        <div className="center position-relative wow fadeInUp" >
            {SERVICES.map(({ name, service, icon }: { name: string, service: string, icon: string }) => (
                <React.Fragment key={name}>
                    <div className="bg-light p-4 text-sm" style={{ margin: "2px" }}>
                        <div 
                            className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
                            style={{"width": "75px", "height": "75px" }}
                        >
                            {icon}
                        </div>
                        <h4 className="mb-3">{service}</h4>
                        <p>{name}</p>
                        <p className="text-primary fw-medium">
                            <i className="fa fa-check text-success me-2"></i>
                            {SPIRIT}
                        </p>
                        <p className="text-primary fw-medium">
                            <i className="fa fa-check text-success me-2"></i> 
                            {TEACH}
                        </p>
                        <p className="text-primary fw-medium">
                            <i className="fa fa-check text-success me-2"></i>
                            {PANDC}
                        </p>
                        <a href="" className="btn bg-white text-primary w-100 mt-2">
                            Read More
                            <i className="fa fa-arrow-right text-secondary ms-2"></i>
                        </a>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default ServiceCarousel;