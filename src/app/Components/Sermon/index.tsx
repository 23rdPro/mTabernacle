import { CHURCH } from "@/app/constants/constants"
import SermonCarousel from "../SermonCarousel"

const Sermon = () => {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="text-secondary text-uppercase">What's new  @</h6>
                    <h1 className="mb-5">{CHURCH}</h1>
                </div>
                <SermonCarousel carouselId={1} />
            </div>
        </div>
    )
}

export default Sermon
