import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { CartContext } from "./CartContext";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3 sticky-top" style={{ backgroundColor: 'rgba(10, 14, 23, 0.95)', borderBottom: '1px solid rgba(252, 163, 17, 0.2)' }}>
      <div className="container">
        <Link to="/" className="navbar-brand fw-bolder text-white d-flex align-items-center">
          <div className="bg-warning text-dark rounded d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
            🚧
          </div>
          <span style={{ letterSpacing: '1px' }}>ISS</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="basic-navbar-nav">
          <div className="navbar-nav ms-auto align-items-center gap-3">
            <Link to="/" className="nav-link text-white-50 hover-white text-uppercase small fw-bold tracking-wider">Home</Link>
            <Link to="/about" className="nav-link text-white-50 hover-white text-uppercase small fw-bold tracking-wider">About Us</Link>
            <Link to="/shopping" className="nav-link text-white-50 hover-white text-uppercase small fw-bold tracking-wider">Products</Link>
            <Link to="/cart" className="nav-link text-white-50 hover-white text-uppercase small fw-bold tracking-wider d-flex align-items-center gap-2">
              <span>🛒</span>
              <span className="badge bg-warning text-dark rounded-pill">{cartCount}</span>
            </Link>
            <button 
              type="button"
              onClick={toggleTheme} 
              className="btn btn-outline-warning btn-sm rounded-circle d-flex align-items-center justify-content-center" 
              style={{ width: '35px', height: '35px', border: '1px solid rgba(252, 163, 17, 0.4)' }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            {isAuthenticated && user?.role === "admin" && (
              <Link to="/admin" className="nav-link text-warning hover-white text-uppercase small fw-bold tracking-wider">Admin Panel</Link>
            )}
            <div className="d-none d-lg-block mx-2" style={{ height: '20px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            {isAuthenticated ? (
              <>
                <span className="text-white-50 small fw-bold text-uppercase tracking-wider">Hi, {user.name}</span>
                <button onClick={logout} className="btn btn-outline-danger px-4 btn-sm fw-bolder rounded-pill shadow-sm text-uppercase small tracking-wider" style={{ transition: 'all 0.3s ease' }}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link text-white-50 hover-white text-uppercase small fw-bold tracking-wider">Login</Link>
                <Link to="/register" className="btn btn-warning text-dark px-4 fw-bolder rounded-pill shadow-sm text-uppercase small tracking-wider" style={{ transition: 'all 0.3s ease', textDecoration: 'none' }}>Registration</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
