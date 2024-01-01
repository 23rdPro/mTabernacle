const Connect = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.1s">
                        <div className="overflow-hidden">
                            {/* <img className="img-fluid w-100 h-100" src="img/service-1.jpg" alt="" /> */}
                            <iframe 
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fmercy.tabernacle.9%2F&tabs=timeline%2C%20event&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=393794029775592"
                                width="0" height="0" style={{"border":"none", "overflow":"hidden"}} scrolling="no" frameBorder="0" 
                                allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light p-4">
                            <h5 className="text-truncate me-3 mb-0">Residential Plumbing</h5>
                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.3s">
                        <div className="overflow-hidden">
                            <img className="img-fluid w-100 h-100" src="img/service-2.jpg" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light p-4">
                            <h5 className="text-truncate me-3 mb-0">Commercial Plumbing</h5>
                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.5s">
                        <div className="overflow-hidden">
                            <img className="img-fluid w-100 h-100" src="img/service-3.jpg" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light p-4">
                            <h5 className="text-truncate me-3 mb-0">Emergency Servicing</h5>
                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect