'use client';

import React from "react";
import Welcome from "./Components/Welcome";
import Carousel from "./Components/Carousel";
import Service from "./Components/Service";
import Sermon from "./Components/Sermon";
import Timer from "./Components/Timer";
import Connect from "./Components/Connect";

const Home = () => {
    return (
        <>
            <Timer />
            <Carousel />
            <Welcome />
            <Service />
            <Sermon />
            {/* <Connect /> */}
        </>
  )
}

export default Home