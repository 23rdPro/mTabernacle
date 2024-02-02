import React from "react"
import Image from "next/image"
import { CHURCHY, WELCOMEPHRASE, alt, slides } from "../../constants/constants"

// const NextCarousel = () => {
//     return (
//         <i 
//             className="arrows bi bi-chevron-right" 
//             onClick={onClick} 
//             role="button" 
//             style={style}
//         />
//     )
// }

const SliderCarousel = () => {
    let settings = {
        autoplay: true,
        infinite: true,
        fade: true,
        // arrows: false,
        // adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        // nextArrow: <NextCarousel />
    }

    return (
        <div className="container-fluid p-0 mb-5">
            <div  className="header-carousel position-relative" >
                {slides.map(({ imageSrc, id }: { imageSrc: string, id: string }) => (
                    <React.Fragment key={id}>
                        <div className="position-relative">
                            <Image 
                                className="img-fluid"
                                src={imageSrc}
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
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SliderCarousel;
