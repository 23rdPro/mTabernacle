"use client";

import React from "react";
import Welcome from "./Components/Welcome";
import Timer from "./Components/Timer";
import HomeCarousel from "./Components/Carousel/homeCarousel";
import ServiceCarousel from "./Components/Carousel/serviceCarousel";
import SermonCarousel from "./Components/Carousel/sermonCarousel";

const Home = () => {
  return (
    <>  
      <Timer />
      <HomeCarousel />
      <Welcome />
      <ServiceCarousel />
      <SermonCarousel />
    </>
  )
}

export default Home
