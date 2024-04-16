import { SwiperSlide } from "swiper/react";
import Carousel from ".";
import { CHURCHY, REASON, WELCOMEPHRASE, slides } from "../../constants/constants"
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const homeCarousel = (CarouselComponent: typeof Carousel) => {
  const WithCarousel = () => {
    return (
      <div className="container-fluid p-0 mb-5">
        <CarouselComponent 
          className="owl-carousel header-carousel position-relative"
          modules={[Navigation, Autoplay, Pagination]}
          speed={2999}
          slidesPerView={1}
          autoplay={{
            delay: 4499,
            disableOnInteraction: false
          }}
          navigation={false}
          pagination={{ clickable: true }}
        >
          {slides.map((slide: any, index: number) => (
            <SwiperSlide className="owl-carousel-item position-relative" key={index++}>
              <Image src={slide.imageSrc} alt="" className="img-fluid" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, .4)"}}>
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">{WELCOMEPHRASE}</h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">{CHURCHY}</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">{REASON}</p>
                      <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact</a>
                      <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Join Live</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CarouselComponent>
      </div>
    );
  }
  return WithCarousel
}
  
const HomeCarousel = homeCarousel(Carousel)

export default HomeCarousel;