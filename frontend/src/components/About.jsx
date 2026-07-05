import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutImg from '../assets/images/about_image.png';
import { useEffect } from "react";


function About() {
  useEffect(() => {
    document.title = "About";
  }, []);


  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container flex-grow-1 py-5 fade-in-up">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-warning rounded-4" style={{ transform: 'translate(-15px, 15px)', zIndex: 0 }}></div>
              <img
                src={aboutImg}
                alt="About ISS"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-5 fw-bolder text-white mb-4">About International Safety Solution</h2>
            <div className="mb-4" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
            <p className="lead text-white-50 mb-4">
              We are Pakistan's leading provider of industrial and construction safety products. Our mission is to ensure every worker returns home safely at the end of the day.
            </p>
            <p className="text-white-50 mb-4">
              With over 10 years of experience in the HSE sector, we don't just sell equipment; we provide complete safety solutions tailored to your specific site requirements. All our products meet international safety standards (ANSI, OSHA, CE).
            </p>
            <div className="d-flex gap-5 mt-5">
              <div className="text-center">
                <h3 className="fw-bolder text-warning display-5 m-0">500+</h3>
                <p className="text-white-50 text-uppercase tracking-wider small fw-bold">Corporate Clients</p>
              </div>
              <div className="text-center">
                <h3 className="fw-bolder text-warning display-5 m-0">10k+</h3>
                <p className="text-white-50 text-uppercase tracking-wider small fw-bold">Products Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
