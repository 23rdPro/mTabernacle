"use client";

import { alternateAddress, mobile } from "@/app/constants/constants"
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link"
import logo from "../../../../public/logo.png"

const Navbar = () => {
    const pathname = usePathname()
    return (
        <>
        <div className="container-fluid bg-light d-none d-lg-block">
          <div className="row align-items-center top-bar">
            <div className="col-lg-3 col-md-12 text-center text-lg-start">
                <a href="/" className="navbar-brand m-0 p-0 d-inline-flex align-items-start">
                    <div role="button" className="rounded-md me-2">
                        <Image src={logo} height={43} width={42} alt="mercy-tabernacle" />
                    </div>
                    <h4 className="text-primary me-2">Mercy Tabernacle</h4>
                </a>
            </div>
            <div className="col-lg-9 col-md-12 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    <p className="m-0">{alternateAddress}</p>
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav me-auto">
                        <Link href="/" className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link href="/about" className={`nav-item nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <Link href="/discipleship" className={`nav-item nav-link ${pathname === '/discipleship' ? 'active' : ''}`}>Discipleship</Link>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Discipleship</a>
                            <div className="dropdown-menu fade-up m-0">
                                <a href="" className="dropdown-item">Booking</a>
                                <a href="" className="dropdown-item">Technicians</a>
                                <a href="" className="dropdown-item">Testimonial</a>
                                <a href="" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                        <Link href="/serve" className={`nav-item nav-link ${pathname === '/serve' ? 'active' : ''}`}>Serve</Link>
                        <Link href="/give" className={`nav-item nav-link ${pathname === '/give' ? 'active' : ''}`}>Give</Link>
                    </div>
                    <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" 
                            style={{ "width": "45px", "height": "45px" }}>
                            <i className="fa fa-phone-alt text-primary"></i>
                        </div>
                        <div className="ms-3">
                            <p className="mb-1 text-white">Prayer & Counselling Line</p>
                            <h5 className="m-0 text-secondary">{mobile}</h5>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar