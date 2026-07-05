import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

function Admin_navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3 sticky-top" style={{ backgroundColor: '#0a0e17', borderBottom: '1px solid rgba(252, 163, 17, 0.4)' }}>
      <div className="container">
        <Link to="/admin" className="navbar-brand fw-bolder text-warning d-flex align-items-center">
          <div className="bg-warning text-dark rounded d-flex align-items-center justify-content-center me-2 fw-bold" style={{ width: '35px', height: '35px' }}>
            A
          </div>
          <span style={{ letterSpacing: '1px' }}>ISS Admin Panel</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="admin-navbar-nav">
          <div className="navbar-nav ms-auto gap-2 align-items-center">
            <Link to="/admin" className="nav-link text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Dashboard</Link>
            <Link to="/view" className="nav-link text-white-50 hover-white small fw-bold text-uppercase tracking-wider">View Products</Link>
            <Link to="/add" className="nav-link text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Add Product</Link>
            <Link to="/update" className="nav-link text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Update Product</Link>
            <Link to="/delete" className="nav-link text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Delete Product</Link>
            <div className="d-none d-lg-block mx-2" style={{ height: '20px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)', alignSelf: 'center' }}></div>
            <button 
              type="button"
              onClick={toggleTheme} 
              className="btn btn-outline-warning btn-sm rounded-circle d-flex align-items-center justify-content-center me-2" 
              style={{ width: '35px', height: '35px', border: '1px solid rgba(252, 163, 17, 0.4)' }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button onClick={logout} className="btn btn-outline-danger btn-sm px-3 fw-bold rounded-pill text-uppercase">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Admin_navbar;
