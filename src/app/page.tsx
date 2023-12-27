'use client';

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png"
import carousel1 from "../../public/img/IMG_5435.jpg"
import carousel2 from "../../public/img/novo19_2.jpg"
import carousel3 from "../../public/img/novo19_8.jpg"
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
import { playfairDisplay, rosarivo } from "./fonts";

const Home = () => {
    const [date, setDate] = React.useState(Number)
    const [eventName, setEventName] = React.useState('')
    const [eventTime, setEventTime] = React.useState('')
    const [eventDay, setEventDay] = React.useState('')
    const events: any = {3:18, 4:9, 5:8, 0:8}
    const eventNames: any = {
        3: 'COMMUNION SERVICE',
        4: 'TRANSFORMED EVE',
        5: 'HEALING SERVICE',
        0: 'SUPER SERVICE'
    }
    const keys = Object.keys(events)

    const isFirst = ({ d: current }: { d: Date }
        ) => current.getDate() === 1 && current.getHours() <= 9

    const isLast = ({ d: current }: { d: Date}) => {
        const month = current.getMonth()
        const year = current.getFullYear()
        let tmp = new Date(current.getTime())
        tmp.setFullYear(year, month+1, 0) //
        const loop = () => {
            if (tmp.getDay() !== 5) {
                tmp = new Date(tmp.setDate(tmp.getDate()-1))
            }
            if (tmp.getDay() != 5) setTimeout(loop, 0)
        }
        loop();
        tmp = new Date(tmp.setDate(tmp.getDate()-1))  // edge case
        return current.getDay() === tmp.getDay()
    }

    const others  = ({ d: current }: { d: Date }) => ( 
        (keys.includes(`${current.getDay()}`)) &&
         (current.getHours() <= events[current.getDay()])
    )

    const formatAMPM = (d: Date) => {
        let hour = events[d.getDay()]
        let minute = '0'
        let ampm = hour >= 12 ? 'PM' : 'AM'
        hour = hour % 12
        hour = hour ? hour : 12  // not 0
        minute = parseFloat(minute) < 10 ? '0'+minute : minute
        const strTime = hour+':'+minute+' '+ampm
        return strTime
    }

    const onCountdownComplete = () => {
        let event: Array<Date> = []  // one event at a time
        let current = new Date()
        const loop = () => {
            if (!event.length) {
                event = (
                    isFirst({ d: current }) ||
                    others({ d: current }) || 
                    isLast({ d: current })) 
                        ? [...event, current] 
                        : []
                if (!event.length) current = new Date(
                        current.setDate(current.getDate() + 1)
                    )
            }
            if (!event.length) setTimeout(loop, 0)
        }
        loop();
        let tmp1 = new Date(current.getTime())
        setDate(tmp1.setHours(events[tmp1.getDay()], 0, 0, 0))
        let eName = ''
        const day = dayService[current.getDay()][0]
        const eTime = formatAMPM(current)
        if (isFirst({ d: current })) eName = specialActivities.first
        else if (others({ d: current })) eName = dayService[current.getDay()][1].toUpperCase()
        else if (isLast({ d: current })) eName = specialActivities.last
        setEventDay(day)
        setEventTime(eTime)
        setEventName(eName)
    }

    const alt = "mercy-tabernacle"
    
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
                        <a href="" className="nav-item nav-link active">Home</a>
                        <Link href="/about" className="nav-item nav-link">About</Link>
                        <a href="" className="nav-item nav-link">Worship</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Discipleship</a>
                            <div className="dropdown-menu fade-up m-0">
                                {/* <a href="" className="dropdown-item">Booking</a>
                                <a href="" className="dropdown-item">Technicians</a>
                                <a href="" className="dropdown-item">Testimonial</a>
                                <a href="" className="dropdown-item">404 Page</a> */}
                            </div>
                        </div>
                        <a href="" className="nav-item nav-link">Serve</a>
                        <a href="" className="nav-item nav-link">Giving</a>
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
        <div className="container-fluid p-0 mb-5">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <Image 
                className="img-fluid"
                src={carousel1}
                alt={alt} 
                priority={true} 
                style={{"height": "auto"}} 
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
                    style={{ "background": "rgba(0, 0, 0, .4)"}}
                >
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 
                                    className="text-white text-uppercase mb-3 animated slideInDown"
                                >
                                    Welcome to Church
                                </h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">
                                    Mercy Tabernacle
                                </h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                {mission1}
                                </p>
                                <a href="" 
                                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                >
                                    Read More
                                </a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                                    Join us Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <Image 
                    className="image-fluid"
                    src={carousel2} 
                    alt={alt} 
                    height={1000} 
                    width={1000} 
                    style={{"height": "auto"}} 
                />
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
                    style={{ "background": "rgba(0, 0, 0, .4)" }}
                >
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 
                                    className="text-white text-uppercase mb-3 animated slideInDown"
                                >
                                    Welcome to Church
                                </h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                    {mission2}
                                </p>
                                <a 
                                    href="" 
                                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                >
                                    Read More
                                </a>
                                <a 
                                    href="" 
                                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                >
                                    Join us Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <Image 
                    className="image-fluid" 
                    src={carousel3} 
                    alt={alt} 
                    height={1000} 
                    width={1000} 
                    style={{"height": "auto"}} 
                />
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
                    style={{ "background": "rgba(0, 0, 0, .4)" }}
                >
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 
                                    className="text-white text-uppercase mb-3 animated slideInDown"
                                >
                                    Welcome to Church
                                </h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Mercy Tabernacle</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                    {mission3}
                                </p>
                                <a 
                                    href="" 
                                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                >
                                    Read More
                                </a>
                                <a 
                                    href="" 
                                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                >
                                    Join us Live
                                </a>
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
                        <h6 className="text-secondary text-uppercase">Next</h6>
                        <h1 className="mb-4">Upcoming Events</h1>
                        <p className="mb-4">
                            {mission4}
                        </p>
                        <p className="fw-medium text-primary">
                            <i className="fa fa-check text-success me-3" />
                            Teachings from the word of God
                        </p>
                        <p className="fw-medium text-primary">
                            <i className="fa fa-check text-success me-3" />
                            Impartation of the Spirit of God.
                        </p>
                        <p className="fw-medium text-primary">
                            <i className="fa fa-check text-success me-3" />
                            Prayers and Communion Sessions.
                        </p>
                        <div className="bg-primary d-flex justify-content-lg-around align-items-center p-4 mt-5">
                            <div 
                                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                                style={{ "width": "60px", "height": "60px" }}
                            >
                                <i className="fa fa-calendar fa-2x text-primary" />
                            </div>
                            <div className="ms-3">
                                <p className="fs-5 fw-medium mb-2 text-white">Next Event</p>
                                <h3 className="m-0 text-secondary">
                                    <Countdown 
                                        date={date}
                                        precision={3}
                                        onComplete={onCountdownComplete} 
                                        key={date}
                                    />
                                </h3>
                            </div>
                            <div className={`${rosarivo.className} align-items-center justify-content-start ms-3`}
                                style={rosarivo.style}
                            >
                                <p className="m-0 text-white lead">
                                    {eventName} <br />{`${eventDay} | `}
                                    <span className={playfairDisplay.className} style={playfairDisplay.style}>
                                        {eventTime}
                                    </span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase">Recent</h6>
                        <h1 className="mb-4">Sermons</h1>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="overflow-hidden">
                                        <Image className="img-fluid w-100 h-100" alt={BISHOP} src={bbf}  />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between bg-light p-4">
                                        <p className="me-1 mb-0">God of Settlement</p>
                                        <a 
                                            className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" 
                                            href=""
                                        >
                                            <i className="fa fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="overflow-hidden">
                                        <Image className="img-fluid w-100 h-100" alt={BISHOP} src={bbf}  />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between bg-light p-4">
                                        <p className="text-truncate me-3 mb-0">God of Settlement</p>
                                        <a 
                                            className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
                                            href=""
                                        >
                                            <i className="fa fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className="container-fluid py-5 px-4 px-lg-0">
            <div className="row g-0">
                <div className="col-lg-3 d-none d-lg-flex">
                    <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                        <h1 
                            className="display-3 text-white m-3" 
                            // style={{"transform": "rotate(-90deg)"}}
                        >
                                27 Years Service
                        </h1>
                    </div>
                </div>
                <div className="col-md-12 col-lg-9">
                    <div className="ms-lg-5 ps-lg-5">
                        <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                            {/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
                            <h1 className="mb-5">Our Services</h1>
                        </div>
                        <div 
                            className="owl-carousel service-carousel position-relative wow fadeInUp" 
                            data-wow-delay="0.1s"
                        >
                            <div className="bg-light p-4 h-auto">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-user fa-2x text-primary" />
                                </div>
                                <h4 className="mb-3">New in Christ?</h4>
                                <p>
                                    Just made a decision for Christ? This is the best decision you will 
                                    ever make! Next that you are saved, It's time for you to experience 
                                    new life on earth in Christ.
                                </p>
                                {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
                                <a 
                                    href="" 
                                    className="btn bg-white text-primary w-100 mt-2"
                                >
                                    Fill This Form
                                    <i className="fa fa-arrow-right text-secondary ms-2" />
                                </a>
                            </div>
                            <div className="bg-light p-4">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-users fa-2x text-primary" />
                                </div>
                                <h4 className="mb-3">Prayers</h4>
                                <p>
                                    Prayer changes you, and then changes things! Contact 6 is our sessional,
                                    effectual, fervent, non stop & congregational prayers for 6 hours. 
                                    It's always a refreshing time.
                                </p>
                                {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
                                <a href="" className="btn bg-white text-primary w-100 mt-2">Find out More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                            </div>
                            <div className="bg-light p-4 h-auto">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-home fa-2x text-primary" />
                                </div>
                                <h4 className="mb-3">New in Church?</h4>
                                <p>
                                    We are glad to have you join our service online. You are in the right place
                                    &amp; so we would like to meet you! God bless you as you fellowship with us!</p>
                                {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
                                <a 
                                    href="" 
                                    className="btn bg-white text-primary w-100 mt-2"
                                >
                                    Become a member
                                    <i className="fa fa-arrow-right text-secondary ms-2" />
                                </a>
                            </div>
                            <div className="bg-light p-4 h-auto">
                                <div 
                                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" 
                                    style={{"width": "75px", "height": "75px"}}
                                >
                                    <i className="fa fa-child fa-2x text-primary" />
                                </div>
                                <h4 className="mb-3">Kids Church</h4>
                                <p>
                                    We present God to kids in a fun and creative way for transformation in Christ.
                                    We have prepared some fun activities & capable teachers to teach & take care of them.
                                </p>
                                {/* <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p> */}
                                <a 
                                    href="" 
                                    className="btn bg-white text-primary w-100 mt-2"
                                >
                                    Find out More
                                    <i className="fa fa-arrow-right text-secondary ms-2" />
                                </a>
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
                        <h6 className="text-secondary text-uppercase">Bishop</h6>
                        <h1 className="mb-4">{BISHOP3}</h1>
                        <p className="mb-4">
                            {brief}
                        </p>
                        <Link href="" className="hover:underline">
                            <p className="fw-medium text-primary">
                                <i className="fab fa-facebook-f text-success me-3" />
                                Connect on facebook
                            </p>
                        </Link>
                        <Link href="" className="hover:underline">
                            <p className="fw-medium text-primary">
                                <i className="fab fa-linkedin text-success me-3" />
                                Connect on LinkedIn
                            </p>
                        </Link>
                        <Link href="" className="hover:underline hover:underline-offset-1">
                            <p 
                                className="fw-medium text-primary"
                            >
                                <i className="fab fa-instagram text-success me-3" />
                                Connect on Instagram
                            </p>
                        </Link>
                        <div className="bg-light d-flex align-items-center p-4 mt-5">
                            <div 
                                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                                style={{ "width": "60px", "height": "60px" }}
                            >
                                <i className="fa fa-home fa-2x text-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4" style={{ "minHeight": "500px" }}>
                        <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                            <Image 
                                className="position-absolute img-fluid w-100 h-100" 
                                src={papa2} 
                                style={{ "objectFit": "contain", "padding": "0 0 50px 100px" }} 
                                alt="mercy-tabernacle" 
                                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <Image 
                                className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 pb-2 w-50 h-50" 
                                src={papa4}
                                style={{ "objectFit": "cover" }} alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
      </>
  )
}

export default Home