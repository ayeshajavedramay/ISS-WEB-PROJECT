import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/about_image.png';
import { useEffect } from 'react';
function HomeAbout() {
  useEffect(() => { document.title = "Home"; }, []);

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container py-5 fade-in-up delay-2">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <span className="badge bg-warning text-dark px-3 py-2 mb-3 rounded-pill fw-bold text-uppercase tracking-widest">About Us</span>
            <h2 className="display-5 fw-bolder text-white mb-4">Leading the Way in Construction Safety</h2>
            <div className="mb-4" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
            <p className="lead text-white-50 mb-4">
              At International Safety Solution, we understand that nothing is more important than ensuring your workforce returns home safely every day.
            </p>
            <p className="text-white-50 mb-5">
              We provide industry-leading, ANSI/OSHA compliant protective gear specifically designed for rigorous construction environments. With over a decade of expertise, we are your trusted partners in hazard prevention.
            </p>
            <Link to="/about" className="btn btn-outline-warning px-5 py-3 fw-bold rounded-pill text-uppercase tracking-wider shadow-sm">
              Read Our Full Story
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="position-absolute top-0 end-0 w-100 h-100 bg-warning rounded-4" style={{ transform: 'translate(15px, 15px)', zIndex: 0, opacity: 0.8 }}></div>
              <img
                src={aboutImg}
                alt="Construction Safety"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute bottom-0 start-0 bg-dark p-4 rounded-3 shadow-lg" style={{ zIndex: 2, transform: 'translate(-20px, 20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 className="text-warning fw-bolder m-0">10+ Years</h3>
                <p className="text-white-50 m-0 small text-uppercase fw-bold">Of Safety Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
