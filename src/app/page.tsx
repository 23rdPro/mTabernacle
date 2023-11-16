
export default function Home() {
  return (
      <>
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem;"}} role="status">
              <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row align-items-center top-bar">
            <div className="col-lg-3 col-md-12 text-center text-lg-start">
                <a href="" className="navbar-brand m-0 p-0">
                    <h1 className="text-primary m-0">Plumberz</h1>
                </a>
            </div>
            <div className="col-lg-9 col-md-12 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    <p className="m-0">123 Street, New York, USA</p>
                </div>
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <i className="far fa-envelope-open text-primary me-2"></i>
                    <p className="m-0">info@example.com</p>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid nav-bar bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
            <a href="" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
                <h1 className="text-primary m-0">Plumberz</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav me-auto">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu fade-up m-0">
                            <a href="booking.html" className="dropdown-item">Booking</a>
                            <a href="team.html" className="dropdown-item">Technicians</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "45px", height: "45px" }}>
                        <i className="fa fa-phone-alt text-primary"></i>
                    </div>
                    <div className="ms-3">
                        <p className="mb-1 text-white">Emergency 24/7</p>
                        <h5 className="m-0 text-secondary">+012 345 6789</h5>
                    </div>
                </div>
            </div>
        </nav>
    </div>
      </>
  )
}
