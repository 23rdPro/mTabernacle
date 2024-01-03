import Image from "next/image"
import papa from "../../../../public/img/ppp.png"
import { BDD, BIBLEQUOTE, BISHOP, CHURCH, OVERSEER, SERMONTOPIC } from "@/app/constants"
import { Carousel } from 'react-responsive-carousel';

const Sermon = () => {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="text-secondary text-uppercase">What's new  @</h6>
                    <h1 className="mb-5">{CHURCH}</h1>
                </div>
                <Carousel 
                    className="owl-carousel testimonial-carousel position-relative wow fadeInUp"
                    data-wow-delay="0.1s"
                    autoPlay
                    infiniteLoop
                    interval={1500}
                >
                    <div className="testimonial-item text-center">
                        <div className="testimonial-text bg-light text-center p-4 mb-4">
                            <p className="mb-0">
                                <span>{`${SERMONTOPIC}- `}</span>
                                <span>{BIBLEQUOTE}</span>
                            </p>
                        </div>
                        <Image 
                            className="bg-light rounded-circle p-2 mx-auto mb-2"
                            src={papa} 
                            style={{ "width": "80px", "height": "80px" }}
                            alt={BDD}
                        />
                        <div className="mb-2 hover-effect" role="button">
                            <i className="fa-brands fa-soundcloud fa-2xl text-secondary" />
                            <small className="text-secondary"> Listen on Soundcloud</small>
                        </div>
                        <h5 className="mb-1">{BISHOP}</h5>
                        <p className="m-0">{OVERSEER}</p>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-text bg-light text-center p-4 mb-4">
                            <p className="mb-0">
                                <span>{`${SERMONTOPIC}- `}</span>
                                <span>{BIBLEQUOTE}</span>
                            </p>
                        </div>
                        <Image 
                            className="bg-light rounded-circle p-2 mx-auto mb-2"
                            src={papa} 
                            style={{ "width": "80px", "height": "80px" }}
                            alt={BDD}
                        />
                        <div className="mb-2 hover-effect" role="button">
                            <i className="fa-brands fa-soundcloud fa-2xl text-secondary" />
                            <small className="text-secondary"> Listen on Soundcloud</small>
                        </div>
                        <h5 className="mb-1">{BISHOP}</h5>
                        <p className="m-0">{OVERSEER}</p>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-text bg-light text-center p-4 mb-4">
                            <p className="mb-0">
                                <span>{`${SERMONTOPIC}- `}</span>
                                <span>{BIBLEQUOTE}</span>
                            </p>
                        </div>
                        <Image 
                            className="bg-light rounded-circle p-2 mx-auto mb-2"
                            src={papa} 
                            style={{ "width": "80px", "height": "80px" }}
                            alt={BDD}
                        />
                        <div className="mb-2 hover-effect" role="button">
                            <i className="fa-brands fa-soundcloud fa-2xl text-secondary" />
                            <small className="text-secondary"> Listen on Soundcloud</small>
                        </div>
                        <h5 className="mb-1">{BISHOP}</h5>
                        <p className="m-0">{OVERSEER}</p>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-text bg-light text-center p-4 mb-4">
                            <p className="mb-0">
                                <span>{`${SERMONTOPIC}- `}</span>
                                <span>{BIBLEQUOTE}</span>
                            </p>
                        </div>
                        <Image 
                            className="bg-light rounded-circle p-2 mx-auto mb-2"
                            src={papa} 
                            style={{ "width": "80px", "height": "80px" }}
                            alt={BDD}
                        />
                        <div className="mb-2 hover-effect" role="button">
                            <i className="fa-brands fa-soundcloud fa-2xl text-secondary" />
                            <small className="text-secondary"> Listen on Soundcloud</small>
                        </div>
                        <h5 className="mb-1">{BISHOP}</h5>
                        <p className="m-0">{OVERSEER}</p>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Sermon
