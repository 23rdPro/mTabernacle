import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { EffectFade } from 'swiper/modules';
import {Swiper} from 'swiper/react';

const Carousel = ({ 
  className, 
  slidesPerView,
  modules,
  autoplay,
  speed,
  spaceBetween,
  navigation,
  pagination,
  onActiveIndexChange,
  fadeEffect,
  effect,
  ...props 
}: any) => {
  return (
        <Swiper
        modules={modules}
        autoplay={autoplay}
        slidesPerView={slidesPerView}
        // navigation={{ 
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev' 
        // }}
        navigation={navigation}
        loop
        speed={speed}
        className={className}
        spaceBetween={spaceBetween}
        pagination={pagination}
        // centeredSlides
        onActiveIndexChange={onActiveIndexChange}
        fadeEffect={fadeEffect}
        effect={effect}
      >
        {props.children}
        {/* <div className="swiper-button-next" role="button" />
        <div className="swiper-button-prev" role="button" /> */}
      </Swiper>
  )
};

export default Carousel 

