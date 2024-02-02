import { BIBLEQUOTE, BISHOP, OVERSEER, SERMONTOPIC, sermons } from "@/app/constants/constants";
import Image from "next/image";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const SermonCarousel = ({ carouselId }: { carouselId: number }) => {
    const [swiper, setSwiper] = React.useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const swiperRef = React.useRef<SwiperType | null>(null)

    React.useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', () => {
                setActiveIndex(swiper.realIndex);
            });
        }
    }, [swiper]);

    const handleSwiper = (swiper: SwiperType) => {
        swiperRef.current = swiper;
        setSwiper(swiper);
    };
    return (
        <div  
            className="swiper-carousel wow fadeInUp"
            data-wow-delay="0.1s"
            id={`sermon-carousel-${carouselId}`}
        >
            <Swiper
                navigation
                // pagination={{ clickable: true }}
                onSwiper={handleSwiper}
                slidesPerView={3}
                loop
                autoplay
                modules={[Navigation, Pagination]}
                centeredSlides
            >
                {sermons.map(({ imageSrc, BDD, id }: { imageSrc: string, BDD: string, id: string }, index: number) => (
                    <SwiperSlide 
                        className="text-center slide-wrapper-item" 
                        key={`sermon-slide-${id}`}
                    >
                        <div className={
                            `border-light text-center p-4 mb-4 sermon-box
                            ${activeIndex === index ? 'bg-black' : 'bg-light'}
                            `
                        }>
                            <p className="mb-0">
                                <span>{`${SERMONTOPIC}- `}</span>
                                <span>{BIBLEQUOTE}</span>
                            </p>
                        </div>
                        <Image 
                            className="bg-light rounded-circle p-2 mx-auto mb-2 mt-2"
                            src={imageSrc} 
                            style={{ "width": "80px", "height": "80px" }}
                            alt={BDD}
                        />
                        <div className="mb-2 hover-effect" role="button">
                            <i className="fa-brands fa-soundcloud fa-2xl text-secondary" />
                            <small className="text-secondary"> Listen on Soundcloud</small>
                        </div>
                        <h5 className="mb-1">{BISHOP}</h5>
                        <p className="m-0">{OVERSEER}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="swiper-button-prev" onClick={handlePrevSlide}>
                Prev
            </div>
            <div className="swiper-button-next" onClick={handleNextSlide}>
                Next
            </div> */}
        </div>
    )
}

export default SermonCarousel;
