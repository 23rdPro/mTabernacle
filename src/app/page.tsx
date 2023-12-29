'use client';

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png"
import papa2 from "../../public/img/papa2.jpeg"
import papa4 from "../../public/img/papa4.jpeg"
import bbf from "../../public/img/ppp.png"
import { 
    BISHOP,
    BISHOP3, 
    address, 
    alternateAddress, 
    brief, 
    dayService,
    email, 
    mission1, 
    mission2, 
    mission3, 
    mission4, 
    mobile, 
    specialActivities
} from "./constants";
import Link from "next/link";
import Countdown from "react-countdown";
import { gelasio, playfairDisplay, rosarivo } from "./fonts";
import Welcome from "./Components/Welcome";
import Carousel from "./Components/Carousel";
import Service from "./Components/Service";
import Sermon from "./Components/Sermon";
import Timer from "./Components/Timer";

const Home = () => {
    return (
        <>
            <Timer />
            <Carousel />
            <Welcome />
            <Service />
            <Sermon />
        </>
  )
}

export default Home

{/* <> */}
//         <div className="container-fluid p-0 mb-5">
//           <div className="owl-carousel header-carousel position-relative">
//             <div className="owl-carousel-item position-relative">
                // <Image 
                // className="img-fluid"
                // src={carousel1}
                // alt={alt} 
                // priority={true} 
                // style={{"height": "auto"}} 
                // />
//                 <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
//                     style={{ "background": "rgba(0, 0, 0, .4)"}}
//                 >
//                     <div className="container">
//                         <div className="row justify-content-start">
//                             <div className="col-10 col-lg-8">
//                                 <h5 
//                                     className="text-white text-uppercase mb-3 animated slideInDown"
//                                 >
//                                     Welcome to Church
//                                 </h5>
//                                 <h1 className="display-3 text-white animated slideInDown mb-4">
//                                     Mercy Tabernacle
//                                 </h1>
//                                 <p className="fs-5 fw-medium text-white mb-4 pb-2">
//                                 {mission1}
//                                 </p>
//                                 <a href="" 
//                                     className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                                 >
//                                     Read More
//                                 </a>
//                                 <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
//                                     Join us Live
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="owl-carousel-item position-relative">
//                 <Image 
//                     className="image-fluid"
//                     src={carousel2} 
//                     alt={alt} 
//                     height={1000} 
//                     width={1000} 
//                     style={{"height": "auto"}} 
//                 />
//                 <div 
//                     className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
//                     style={{ "background": "rgba(0, 0, 0, .4)" }}
//                 >
//                     <div className="container">
//                         <div className="row justify-content-start">
//                             <div className="col-10 col-lg-8">
//                                 <h5 
//                                     className="text-white text-uppercase mb-3 animated slideInDown"
//                                 >
//                                     Welcome to Church
//                                 </h5>
//                                 <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
//                                 <p className="fs-5 fw-medium text-white mb-4 pb-2">
//                                     {mission2}
//                                 </p>
//                                 <a 
//                                     href="" 
//                                     className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                                 >
//                                     Read More
//                                 </a>
//                                 <a 
//                                     href="" 
//                                     className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
//                                 >
//                                     Join us Live
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="owl-carousel-item position-relative">
//                 <Image 
//                     className="image-fluid" 
//                     src={carousel3} 
//                     alt={alt} 
//                     height={1000} 
//                     width={1000} 
//                     style={{"height": "auto"}} 
//                 />
//                 <div 
//                     className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
//                     style={{ "background": "rgba(0, 0, 0, .4)" }}
//                 >
//                     <div className="container">
//                         <div className="row justify-content-start">
//                             <div className="col-10 col-lg-8">
//                                 <h5 
//                                     className="text-white text-uppercase mb-3 animated slideInDown"
//                                 >
//                                     Welcome to Church
//                                 </h5>
//                                 <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
//                                 <p className="fs-5 fw-medium text-white mb-4 pb-2">
//                                     {mission3}
//                                 </p>
//                                 <a 
//                                     href="" 
//                                     className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                                 >
//                                     Read More
//                                 </a>
//                                 <a 
//                                     href="" 
//                                     className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
//                                 >
//                                     Join us Live
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//         {/* Hh.......................................................... */}
//         {/* <div className="container-xxl py-5">
//             <div className="container">
//                 <div className="row g-5">
//                     <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
//                         <h6 className="text-secondary text-uppercase">Next</h6>
//                         <h1 className="mb-4">Upcoming Events</h1>
//                         <p className="mb-4">
//                             {mission4}
//                         </p>
//                         <p className="fw-medium text-primary">
//                             <i className="fa fa-check text-success me-3" />
//                             Teachings from the word of God
//                         </p>
//                         <p className="fw-medium text-primary">
//                             <i className="fa fa-check text-success me-3" />
//                             Impartation of the Spirit of God.
//                         </p>
//                         <p className="fw-medium text-primary">
//                             <i className="fa fa-check text-success me-3" />
//                             Prayers and Communion Sessions.
//                         </p>
//                         <div className="bg-primary d-flex justify-content-lg-around align-items-center p-4 mt-5">
//                             <div 
//                                 className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
//                                 style={{ "width": "60px", "height": "60px" }}
//                             >
//                                 <i className="fa fa-calendar fa-2x text-primary" />
//                             </div>
//                             <div className="ms-3">
//                                 <p className="fs-5 fw-medium mb-2 text-white">Next Event</p>
//                                 <h3 className="m-0 text-secondary">
//                                     <Countdown 
//                                         t
//                                     />
//                                 </h3>
//                             </div>
//                             <div className={`${rosarivo.className} align-items-center justify-content-start ms-3`}
//                                 style={rosarivo.style}
//                             >
//                                 <p className="m-0 text-white lead">
//                                     {eventName} <br />{`${eventDay} | `}
//                                     <span className={playfairDisplay.className} style={playfairDisplay.style}>
//                                         {eventTime}
//                                     </span>
//                                 </p>
//                             </div>
                            
//                         </div>
//                     </div>
//                     <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
//                         <h6 className="text-secondary text-uppercase">Recent</h6>
//                         <h1 className="mb-4">Sermons</h1>
//                         <div className="container">
//                             <div className="row g-4">
//                                 <div className="col-lg-6 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.1s">
//                                     <div className="overflow-hidden">
//                                         <Image className="img-fluid w-100 h-100" alt={BISHOP} src={bbf}  />
//                                     </div>
//                                     <div className="d-flex align-items-center justify-content-between bg-light p-4">
//                                         <p className="me-1 mb-0">God of Settlement</p>
//                                         <a 
//                                             className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" 
//                                             href=""
//                                         >
//                                             <i className="fa fa-arrow-right" />
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.3s">
//                                     <div className="overflow-hidden">
//                                         <Image className="img-fluid w-100 h-100" alt={BISHOP} src={bbf}  />
//                                     </div>
//                                     <div className="d-flex align-items-center justify-content-between bg-light p-4">
//                                         <p className="text-truncate me-3 mb-0">God of Settlement</p>
//                                         <a 
//                                             className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
//                                             href=""
//                                         >
//                                             <i className="fa fa-arrow-right" />
//                                         </a>
//                                     </div>
//                                 </div>
                        
//                             </div>
//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         </div> */}

// <div className="container-fluid py-5 px-4 px-lg-0">
//             <div className="row g-0">
//                 <div className="col-lg-4 d-none d-lg-flex">
//                     <div className="m-4 bg-white w-100 h-100">
//                         {/* <h1 
//                             // className="display-3 text-black m-3" 
//                             className="text-black m-3"
//                             // style={{"transform": "rotate(-90deg)"}}
//                         >
//                                 Upcoming Events
//                         </h1> */}
//                         <p className={`${gelasio.className} mb-4 p-4 bg-primary text-white`}>
//                             {mission4}
//                         </p>
//                         <p className="fw-medium text-primary">
//                             <i className="fa fa-check text-success me-3" />
//                             Teachings from the word of God
//                         </p>
//                         <p className="fw-medium text-primary">
//                             <i className="fa fa-check text-success me-3" />
//                             Impartation of the Spirit of God.
//                         </p>
//                         <p className="fw-medium text-primary">
//                             <i className="fa fa-check text-success me-3" />
//                             Prayers and Communion Sessions.
//                         </p>
//                         <div className="bg-light d-flex justify-content-lg-around align-items-center p-4 mt-5">
//                             <div 
//                                 className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
//                                 style={{ "width": "60px", "height": "60px" }}
//                             >
//                                 <i className="fa fa-calendar fa-2x text-primary" />
//                             </div>
//                             <div className="ms-3">
//                                 <p className="fs-5 fw-medium mb-2 text-black">Next Event</p>
//                                 <h3 className="m-0 text-secondary">
//                                     <Countdown 
//                                         date={date}
//                                         precision={3}
//                                         onComplete={onCountdownComplete} 
//                                         key={date}
//                                     />
//                                 </h3>
//                             </div>
//                             <div className={`${rosarivo.className} align-items-center justify-content-start ms-3`}
//                                 style={rosarivo.style}
//                             >
//                                 <p className="m-0 text-black lead">
//                                     {eventName} <br />{`${eventDay} | `}
//                                     <span className={playfairDisplay.className} style={playfairDisplay.style}>
//                                         {eventTime}
//                                     </span>
//                                 </p>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-12 col-lg-8">
//                     <div className="ms-lg-5 ps-lg-5">
//                         <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
//                             {/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
//                             <h1 className="mb-5">Latest Sermons</h1>
//                         </div>
//                         <div 
//                             className="owl-carousel service-carousel position-relative wow fadeInUp" 
//                             data-wow-delay="0.1s"
//                         >
//                             <div className="bg-light p-4 h-auto">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-user fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">New in Christ?</h4>
//                                 <p>
//                                     Just made a decision for Christ?
//                                 </p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a 
//                                     href="" 
//                                     className="btn bg-white text-primary w-100 mt-2"
//                                 >
//                                     Fill This Form
//                                     <i className="fa fa-arrow-right text-secondary ms-2" />
//                                 </a>
//                             </div>
//                             <div className="bg-light p-4">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-users fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">Prayers</h4>
//                                 <p>
//                                     Prayer changes you, and then changes things! 
//                                 </p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a href="" className="btn bg-white text-primary w-100 mt-2">Find out More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
//                             </div>
//                             <div className="bg-light p-4 h-auto">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-home fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">New in Church?</h4>
//                                 <p>
//                                     We are glad to have you join our service online.</p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a 
//                                     href="" 
//                                     className="btn bg-white text-primary w-100 mt-2"
//                                 >
//                                     Become a member
//                                     <i className="fa fa-arrow-right text-secondary ms-2" />
//                                 </a>
//                             </div>
//                             <div className="bg-light p-4 h-auto">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-child fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">Kids Church</h4>
//                                 <p>
//                                     We present God to kids in a fun 
//                                 </p>
//                                 <a 
//                                     href="" 
//                                     className="btn bg-white text-primary w-100 mt-2"
//                                 >
//                                     Find out More
//                                     <i className="fa fa-arrow-right text-secondary ms-2" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* ............................................................ */}
//         <div className="container-fluid py-5 px-4 px-lg-0">
//             <div className="row g-0">
//                 <div className="col-lg-3 d-none d-lg-flex">
//                     <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
//                         <h1 
//                             className="display-3 text-white m-3" 
//                             // style={{"transform": "rotate(-90deg)"}}
//                         >
//                                 27 Years Service
//                         </h1>
//                     </div>
//                 </div>
//                 <div className="col-md-12 col-lg-9">
//                     <div className="ms-lg-5 ps-lg-5">
//                         <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
//                             {/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
//                             <h1 className="mb-5">Our Services</h1>
//                         </div>
//                         <div 
//                             className="owl-carousel service-carousel position-relative wow fadeInUp" 
//                             data-wow-delay="0.1s"
//                         >
//                             <div className="bg-light p-4 h-auto">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-user fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">New in Christ?</h4>
//                                 <p>
//                                     Just made a decision for Christ? This is the best decision you will 
//                                     ever make! Next that you are saved, It's time for you to experience 
//                                     new life on earth in Christ.
//                                 </p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a 
//                                     href="" 
//                                     className="btn bg-white text-primary w-100 mt-2"
//                                 >
//                                     Fill This Form
//                                     <i className="fa fa-arrow-right text-secondary ms-2" />
//                                 </a>
//                             </div>
//                             <div className="bg-light p-4">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-users fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">Prayers</h4>
//                                 <p>
//                                     Prayer changes you, and then changes things! Contact 6 is our sessional,
//                                     effectual, fervent, non stop & congregational prayers for 6 hours. 
//                                     It's always a refreshing time.
//                                 </p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a href="" className="btn bg-white text-primary w-100 mt-2">Find out More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
//                             </div>
//                             <div className="bg-light p-4 h-auto">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-home fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">New in Church?</h4>
//                                 <p>
//                                     We are glad to have you join our service online. You are in the right place
//                                     &amp; so we would like to meet you! God bless you as you fellowship with us!</p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a 
//                                     href="" 
//                                     className="btn bg-white text-primary w-100 mt-2"
//                                 >
//                                     Become a member
//                                     <i className="fa fa-arrow-right text-secondary ms-2" />
//                                 </a>
//                             </div>
//                             <div className="bg-light p-4 h-auto">
//                                 <div 
//                                     className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
//                                     style={{"width": "75px", "height": "75px"}}
//                                 >
//                                     <i className="fa fa-child fa-2x text-primary" />
//                                 </div>
//                                 <h4 className="mb-3">Kids Church</h4>
//                                 <p>
//                                     We present God to kids in a fun and creative way for transformation in Christ.
//                                     We have prepared some fun activities & capable teachers to teach & take care of them.
//                                 </p>
//                                 {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
//                                 <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
//                                 <a 
//                                     href="" 
//                                     className="btn bg-white text-primary w-100 mt-2"
//                                 >
//                                     Find out More
//                                     <i className="fa fa-arrow-right text-secondary ms-2" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="container-xxl py-5">
//             <div className="container">
//                 <div className="row g-5">
//                     <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
//                         <h6 className="text-secondary text-uppercase">Bishop</h6>
//                         <h1 className="mb-4">{BISHOP3}</h1>
//                         <p className="mb-4">
//                             {brief}
//                         </p>
//                         <Link href="" className="hover:underline">
//                             <p className="fw-medium text-primary">
//                                 <i className="fab fa-facebook-f text-success me-3" />
//                                 Connect on facebook
//                             </p>
//                         </Link>
//                         <Link href="" className="hover:underline">
//                             <p className="fw-medium text-primary">
//                                 <i className="fab fa-linkedin text-success me-3" />
//                                 Connect on LinkedIn
//                             </p>
//                         </Link>
//                         <Link href="" className="hover:underline hover:underline-offset-1">
//                             <p 
//                                 className="fw-medium text-primary"
//                             >
//                                 <i className="fab fa-instagram text-success me-3" />
//                                 Connect on Instagram
//                             </p>
//                         </Link>
//                         <div className="bg-light d-flex align-items-center p-4 mt-5">
//                             <div 
//                                 className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
//                                 style={{ "width": "60px", "height": "60px" }}
//                             >
//                                 <i className="fa fa-home fa-2x text-primary" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 pt-4" style={{ "minHeight": "500px" }}>
//                         <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
//                             <Image 
//                                 className="position-absolute img-fluid w-100 h-100" 
//                                 src={papa2} 
//                                 style={{ "objectFit": "contain", "padding": "0 0 50px 100px" }} 
//                                 alt="mercy-tabernacle" 
//                                 fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             />
//                             <Image 
//                                 className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 pb-2 w-50 h-50" 
//                                 src={papa4}
//                                 style={{ "objectFit": "cover" }} alt=""
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </>