import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          International Safety Solution
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="basic-navbar-nav">
          <div className="navbar-nav ms-auto align-items-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Training Courses</Link>
            <Link to="/admin" className="btn btn-light text-primary ms-lg-3 px-4 fw-bold rounded-pill text-decoration-none">Admin Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
