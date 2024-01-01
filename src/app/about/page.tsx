import { ABOUT, ABOUTHEAD, mobile } from "../constants"

const About = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase">About Us</h6>
                        <h1 className="mb-4">{ABOUTHEAD}</h1>
                        <p className="mb-4">{ABOUT}</p>
                        <div className="bg-primary d-flex align-items-center p-4 mt-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{"width": "60px", "height": "60px"}}>
                                <i className="fa fa-phone-alt fa-2x text-primary"></i>
                            </div>
                            <div className="ms-3">
                                <p className="fs-5 fw-medium mb-2 text-white">Get in touch 24/7</p>
                                <h3 className="m-0 text-secondary">{mobile}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4" style={{"minHeight": "500px"}}>
                        <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="position-absolute img-fluid w-100 h-100" src="img/about-1.jpg" style={{"objectFit": "cover", "padding": "0 0 50px 100px"}} alt="" />
                            <img className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50" src="img/about-2.jpg" style={{"objectFit": "cover"}} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About