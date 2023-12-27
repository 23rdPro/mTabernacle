import { address, email, mobile } from "@/app/constants";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Address</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{address}</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{mobile}</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>{email}</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Opening Hours</h4>
                        <h6 className="text-light">Monday - Friday:</h6>
                        <p className="mb-4">10:00 AM - 05:00 PM</p>
                        <h6 className="text-light">Saturday - Sunday:</h6>
                        <p className="mb-0">08:00 AM - 11:30 PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Instagram</h4>
                        {/* <a className="btn btn-link" href="">Drain Cleaning</a>
                        <a className="btn btn-link" href="">Sewer Line</a>
                        <a className="btn btn-link" href="">Water Heating</a>
                        <a className="btn btn-link" href="">Toilet Cleaning</a>
                        <a className="btn btn-link" href="">Broken Pipe</a> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>Add your email below for our weekly newsletter</p>
                        <div className="position-relative mx-auto" style={{"maxWidth": "400px"}}>
                            <input 
                                className="form-control border-0 w-100 py-3 ps-4 pe-5" 
                                type="text" 
                                placeholder="Your email" 
                            />
                            <button 
                                type="button" 
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; 
                            <a className="border-bottom" href="#">
                                Mercy Tabernacle
                            </a> 
                            | All Right Reserved.
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;