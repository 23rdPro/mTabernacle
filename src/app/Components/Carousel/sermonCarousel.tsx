import { BIBLEQUOTE, BISHOP, OVERSEER, SERMONS } from "@/app/constants/constants";
import Carousel from ".";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import papa from "../../../../public/img/ppp.png"
import { Autoplay, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import React from "react";

const sermonCarousel = (CarouselComponent: typeof Carousel) => {
  const WithCarousel = () => {
    const slides = SERMONS.length
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const [activeIndex, setActiveIndex] = React.useState(0)
    const onActiveIndexChange = (e: any) => setActiveIndex(e.realIndex)
    const midIndex = Math.floor(3/2)
    const realIndex = (activeIndex+midIndex) % slides
    const onClick = (_e: any, url: string) => window.location.href = url
    return (
      <div 
        className="container-xxl py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Messages</h6>
            <h1 className="mb-5">Listen to Bishop Bankole Jefferson</h1>
          </div>
          <CarouselComponent
            className="owl-carousel testimonial-carousel position-relative wow fadeInUp"
            data-wow-delay="0.1s"
              modules={[Autoplay, Pagination]}
              speed={1999}
              slidesPerView={isDesktop ? 3 : (isTablet ? 2 : 1)}
              autoplay={{
                delay: 3499,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              onActiveIndexChange={onActiveIndexChange}
          >
            {SERMONS.map((sermon: any, index: number) => (
              <SwiperSlide key={index++} className="testimonial-item text-center">
                <div className={`testimonial-text ${(index + slides - realIndex) % slides === 0 ? 'bg-primary text-white' : 'bg-light'} text-center p-4 mb-4`}>
                  <p className="mb-0">{BIBLEQUOTE}</p>
                </div>
                <Image 
                  className="bg-light rounded-circle p-2 mx-auto mb-2" 
                  style={{ width: "80px", height: "80px" }}
                  src={papa} 
                  alt={BISHOP}
                />
                <div className="mb-2 hover-effect" role="button" tabIndex={0} onClick={(e) => onClick(e, sermon.url)}>
                  <i className="fa-brands fa-soundcloud fa-2xl text-secondary" />
                  <small className="text-secondary"> Listen on Soundcloud</small>
                </div>
                <h5 className="mb-1">{BISHOP}</h5>
                <p className="m-0">{OVERSEER}</p>
              </SwiperSlide>
            ))}
          </CarouselComponent>
        </div>
      </div>
    )
  }
  return WithCarousel;
};

const SermonCarousel = sermonCarousel(Carousel)
export default SermonCarousel
