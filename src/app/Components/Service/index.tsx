import { CHILDRENMIN, MENMIN, PANDC, PRAYER, SPIRIT, TEACH, WOMENMIN, YOUTHMIN } from "@/app/constants"

const Service = () => {
    return (
        <div className="container-fluid py-5 px-4 px-lg-0">
            <div className="row g-0">
                <div className="col-lg-2 d-none d-lg-flex">
                    <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                        <h1 className="display-5 text-white m-0" style={{"transform": "rotate(-90deg)"}}>
                            2 Decades of Service
                        </h1>
                    </div>
                </div>
                <div className="col-md-12 col-lg-10">
                    <div className="ms-lg-5 ps-lg-5">
                        <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-5">Ministries @ The Mercy Tabernacle</h1>
                        </div>
                        <div 
                            className="owl-carousel service-carousel position-relative wow fadeInUp" 
                            data-wow-delay="0.1s"
                        >
                            <div className="bg-light p-4">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-users fa-2x text-primary" />
                                </div>
                                <h4 className="mb-3">Prayer Ministry</h4>
                                <p>{PRAYER}</p>
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
                            <div className="bg-light p-4">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-child fa-2x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Children Ministry</h4>
                                <p>{CHILDRENMIN}</p>
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
                            <div className="bg-light p-4">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-male fa-2x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Men Ministry</h4>
                                <p>{MENMIN}</p>
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
                            <div className="bg-light p-4">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-female fa-2x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Women Ministry</h4>
                                <p>{WOMENMIN}</p>
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
                            <div className="bg-light p-4">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-users fa-2x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Youth Ministry</h4>
                                <p>{YOUTHMIN}</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service