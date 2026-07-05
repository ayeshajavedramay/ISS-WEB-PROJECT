import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-warning">International Safety Solution</h5>
            <p className="text-white-50">
              Your trusted partner in workplace safety. We provide top-quality construction safety products and PPE to keep your team protected on site.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover-white">About Us</Link></li>
              <li className="mb-2"><Link to="/shopping" className="text-white-50 text-decoration-none hover-white">Shop PPE</Link></li>
              <li className="mb-2"><Link to="/admin" className="text-white-50 text-decoration-none hover-white">Admin Panel</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">📍 Office #221, Westwood Colony, Lahore, Pakistan</li>
              <li className="mb-2">📧 info@internationalsafetysolution.com</li>
              <li className="mb-2">📞 +92 320 9274658</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary mt-4 mb-4" />
        <div className="text-center text-white-50">
          <small>&copy; {new Date().getFullYear()} International Safety Solution. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
