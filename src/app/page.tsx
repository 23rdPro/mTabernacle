import Image from "next/image";
import logo from "../../public/logo.jpeg"
import novo from "../../public/img/novo19_4.jpg"
import novo2 from "../../public/img/novo19_15.jpg"


import carousel1 from "../../public/img/IMG_5435.jpg"
import carousel2 from "../../public/img/novo19_2.jpg"
import carousel3 from "../../public/img/novo19_8.jpg"
import carousel4 from "../../public/img/bible1.jpeg"

export default function Home() {
    const alt = "mercy-tabernacle"
    const carousels = {
        images: [
            carousel1,
            carousel2,
            carousel3, 
            carousel4
        ],
        alternate: alt,
        header: "Welcome to Church",
        subHeader: "Welcome to Church",
        mission: `Upholding exemplary Christianity in integrity, service to God, and humanity, 
        righteous living, upright family values, success in life and uncompromised fear of God.`,
        readMore: {
            text: "Read More",
            href: ""
        },
        joinLive: {
            text: "Join us Live",
            href: ""
        }

    }

  return (
      <>
        <div className="container-fluid bg-light d-none d-lg-block">
          <div className="row align-items-center top-bar">
              <div className="col-lg-3 col-md-12 text-center text-lg-start">
                  <a href="/" className="navbar-brand m-0 p-0 d-inline-flex align-items-start">
                      <h4 className="text-primary me-2">Mercy Tabernacle</h4>
                      <div role="button" className="rounded-md">
                        <Image src={logo} height={43} width={42} alt="mercy-tabernacle" />
                      </div>
                  </a>
              </div>
              <div className="col-lg-9 col-md-12 text-end">
                  <div className="h-100 d-inline-flex align-items-center me-4">
                      <i className="fa fa-map-marker-alt text-primary me-2"></i>
                      <p className="m-0">100 Ajayi Road, Modupe Roundabout Oke Ira Ogba, Lagos</p>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center me-4">
                      <i className="far fa-envelope-open text-primary me-2"></i>
                      <p className="m-0">info@mercy-tabernacle.com</p>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center">
                      <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn btn-sm-square bg-white text-primary me-0" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                  </div>
              </div>
          </div>
        </div>

        <div className="container-fluid nav-bar bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
                <a href="" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
                    <h1 className="text-primary m-0">Mercy Tabernacle</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav me-auto">
                        <a href="" className="nav-item nav-link active">Home</a>
                        <a href="" className="nav-item nav-link">About</a>
                        <a href="" className="nav-item nav-link">Worship</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Disciple</a>
                            <div className="dropdown-menu fade-up m-0">
                                <a href="" className="dropdown-item">Booking</a>
                                <a href="" className="dropdown-item">Technicians</a>
                                <a href="" className="dropdown-item">Testimonial</a>
                                <a href="" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="" className="nav-item nav-link">Serve</a>
                        <a href="" className="nav-item nav-link">Giving</a>
                    </div>
                    <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "45px", height: "45px" }}>
                            <i className="fa fa-phone-alt text-primary"></i>
                        </div>
                        <div className="ms-3">
                            <p className="mb-1 text-white">Emergency 24/7</p>
                            <h5 className="m-0 text-secondary">+234</h5>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div className="container-fluid p-0 mb-5">
          <div className="owl-carousel header-carousel position-relative">
              <div className="owl-carousel-item position-relative">
                  {/* <img className="img-fluid" src="img/bible1.jpeg" alt="" /> */}
                  <Image className="img-fluid" src={carousel1} alt={alt} />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ "background": "rgba(0, 0, 0, .4)"}}>
                      <div className="container">
                          <div className="row justify-content-start">
                              <div className="col-10 col-lg-8">
                                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome to Church</h5>
                                  <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
                                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                    Upholding exemplary Christianity in integrity, service to God, and humanity, righteous living, 
                                    upright family values, success in life and uncompromised fear of God.
                                  </p>
                                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join us Live</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="owl-carousel-item position-relative">
                  {/* <img className="img-fluid" src="img/boble2.jpeg" alt="" /> */}
                  <Image className="image-fluid" src={carousel2} alt={alt} height={1000} width={1000} />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ "background": "rgba(0, 0, 0, .4)" }}>
                      <div className="container">
                          <div className="row justify-content-start">
                              <div className="col-10 col-lg-8">
                                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome to Church</h5>
                                  <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
                                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                    Upholding exemplary Christianity in integrity, service to God, and humanity, righteous living, 
                                    upright family values, success in life and uncompromised fear of God.
                                  </p>
                                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join us Live</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="owl-carousel-item position-relative">
                  {/* <img className="img-fluid" src="img/boble2.jpeg" alt="" /> */}
                  <Image className="image-fluid" src={carousel3} alt={alt} height={1000} width={1000} />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ "background": "rgba(0, 0, 0, .4)" }}>
                      <div className="container">
                          <div className="row justify-content-start">
                              <div className="col-10 col-lg-8">
                                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome to Church</h5>
                                  <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
                                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                    Upholding exemplary Christianity in integrity, service to God, and humanity, righteous living, 
                                    upright family values, success in life and uncompromised fear of God.
                                  </p>
                                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join us Live</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase">NEXT</h6>
                    <h1 className="mb-4">Upcoming Events</h1>
                    <p className="mb-4">
                        Our Vision is to Impact, Heal and Liberate mankind from poverty and pain, to Transform and Conform lives to Christ 
                        Image and Likeness, Raising Pacesetters, Role models and Achievers in life through Jesus Christ.
                    </p>
                    <p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Teachings from the word of God</p>
                    <p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Impartation of the Spirit of God.</p>
                    <p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Prayers and Communion Sessions.</p>
                    <div className="bg-primary d-flex align-items-center p-4 mt-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ "width": "60px", "height": "60px" }}>
                            <i className="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <div className="ms-3">
                            <p className="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p>
                            <h3 className="m-0 text-secondary">+012 345 6789</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pt-4" style={{ "minHeight": "500px" }}>
                    <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                        {/* <img className="position-absolute img-fluid w-100 h-100" src="img/novo19_4.jpg" style={{ "objectFit": "cover", "padding": "0 0 50px 100px" }} alt="" /> */}
                        <Image className="position-absolute img-fluid w-100 h-100" src={novo} layout="fill" style={{ "objectFit": "contain", "padding": "0 0 50px 100px" }} alt="mercy-tabernacle" />
                        {/* <img className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50" src="img/about-2.jpg" style={{ "objectFit": "cover" }} alt="" /> */}
                        <Image 
                            className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50" 
                            src={novo2}
                            style={{ "objectFit": "cover" }} alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}
