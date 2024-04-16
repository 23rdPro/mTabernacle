import JitsuForm from "../Components/Form";
import { SERVE } from "../constants/constants";

const Serve = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
          <div className="row g-4">
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Get In Touch</h6>
                <h1 className="mb-4">Contact For Any Query</h1>
                <p className="mb-4">{SERVE}</p>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.012060755177!2d3.3402966749086866!3d6.645423093349192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93fe85790bef%3A0x2701e0648c3a0c19!2sMercy%20Tabernacle!5e0!3m2!1sen!2sng!4v1708174189530!5m2!1sen!2sng" 
                  width="600" 
                  className="position-relative w-100"
                  height="450" 
                  style={{ height: "300px", border: "0" }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  frameBorder="0"
                  aria-hidden="false"
                  tabIndex={0}
                >
                </iframe>
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <JitsuForm className="bg-light p-5 h-100 d-flex align-items-center" />
              </div>
          </div>
      </div>
    </div>
  )
};

export default Serve;
