import Image from "next/image"
import carousel1 from '../../../../public/img/carousel1.jpg'
import carousel2 from '../../../../public/img/carousel2.jpg'
import carousel3 from '../../../../public/img/carousel3.jpg'
import { CHURCHY, WELCOMEPHRASE, alt } from "@/app/constants"

const Carousel = () => {
    return (
        <div className="container-fluid p-0 mb-5">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <Image 
                        className="img-fluid"
                        src={carousel1}
                        alt={alt} 
                        priority={true} 
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ "background": "rgba(0, 0, 0, .4)" }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">{WELCOMEPHRASE}</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">{CHURCHY}</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join us Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <Image 
                        className="img-fluid"
                        src={carousel2}
                        alt={alt} 
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ "background": "rgba(0, 0, 0, .4)" }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">{WELCOMEPHRASE}</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">{CHURCHY}</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join us Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <Image 
                        className="img-fluid"
                        src={carousel3}
                        alt={alt}  
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ "background": "rgba(0, 0, 0, .4)" }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">{WELCOMEPHRASE}</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">{CHURCHY}</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join us Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel