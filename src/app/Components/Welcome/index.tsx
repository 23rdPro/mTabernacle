import Image from "next/image"
import theme from '../../../../public/theme.png'
import { BISHOP, CHURCH, mission1, mission2 } from "@/app/constants"
import welcome from '../../../../public/welcome.jpg'

const Welcome = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                <div className="col-lg-5 pt-4" style={{"minHeight": "500px"}}>
                        <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                            <Image src={welcome} alt={BISHOP} className="position-absolute img-fluid w-100 h-100" style={{"objectFit": "cover"}} />
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center">
                            <div className="testimonial-text bg-light text-center p-4 mb-4">
                                <Image src={theme} alt={BISHOP} objectFit="contain" width={320} height={60} className="mb-0" />
                            </div>
                            
                        </div>
                        <div className="p-2 row">
                            
                        <p className="mb-4 col-lg-8 offset-lg-2 align-self-center" style={{ "lineHeight": "3" }}>
                            <span className="d-flex flex-shrink-0 align-items-center justify-content-center mb-3" 
                                style={{ "width": "45px", "height": "45px", "backgroundColor": "purple"}}>
                                <i className="fa fa-quote-left text-white"></i>
                            </span>
                            {mission1}
                        </p>
                        <p className="mb-2 col-lg-8 offset-lg-2 align-self-center" style={{ "lineHeight": "3" }}>{mission2}</p>
                        </div>
                        <div className="p-4 mt-2">
                            <div className="text-end d-flex justify-content-end flex-column-reverse">
                                <p className="fs-5 fw-medium mb-2 ml-auto" style={{"color": "purple"}}>{BISHOP}</p>
                                <p className="fs-5 fw-medium mb-2 ml-auto" style={{"color": "purple"}}>{CHURCH}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
