"use client";
import React from 'react';
import Carousel from '.';
import { PANDC, SERVICES, SPIRIT, TEACH } from '@/app/constants/constants';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

const serviceCarousel = (CarouselComponent: typeof Carousel) => {
  const WithCarousel = () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return (
     <div className="container-fluid py-5 px-4 px-lg-0">
      <div className="row g-0">
        <div className="col-lg-3 d-none d-lg-flex">
          <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
            <h1 className="display-3 text-white m-0" style={{ transform: "rotate(-90deg)" }}>
              2 Decades of Service
            </h1>
          </div>
        </div>
        <div className="col-md-12 col-lg-9">
          <div className="ms-lg-5 ps-lg-5">
            <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase">Ministries</h6>
              <h1 className="mb-5">Ministries @ The Mercy Tabernacle</h1>
            </div>
            <CarouselComponent 
              className="owl-carousel service-carousel position-relative wow fadeInUp" 
              data-wow-delay="0.1s"
              modules={[Autoplay, Pagination]}
              speed={2999}
              slidesPerView={isDesktop ? 3 : (isTablet ? 2 : 1)}
              autoplay={{
                delay: 4499,
                disableOnInteraction: false
              }}
              spaceBetween={10}
              pagination={{ clickable: true }}
            >
              {SERVICES.map(({name, service, icon, checks}: any, index: number) => (
                <SwiperSlide className="bg-light p-4" key={index++}>
                  <div 
                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                    style={{ width: "75px", height: "75px" }}
                  >
                    {icon}
                  </div>
                  <h4 className="mb-3">{service}</h4>
                  <p>{name}</p>
                  {checks.map((check: any, index: number) => (
                    <p className="text-primary fw-medium" style={{ textTransform: "capitalize"}} key={index}>
                      <i className="fa fa-check text-success me-2"></i>
                      {check}
                    </p>
                  ))}
                  <a href="" className="btn bg-white text-primary w-100 mt-2">
                    Read More
                    <i className="fa fa-arrow-right text-secondary ms-2"></i>
                  </a>
                </SwiperSlide>
              ))}
            </CarouselComponent>
          </div>
        </div>
      </div>
     </div>
    );
  }
  return WithCarousel
}
  
const ServiceCarousel = serviceCarousel(Carousel)

export default ServiceCarousel;