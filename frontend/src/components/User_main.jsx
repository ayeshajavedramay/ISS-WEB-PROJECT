import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import HomeAbout from './HomeAbout';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import heroBg1 from '../assets/images/hero_bg_1.png';
import heroBg2 from '../assets/images/hero_bg_2.png';
import heroBg3 from '../assets/images/hero_bg_3.png';
import { CartContext } from './CartContext';
import { ProductContext } from './ProductContext';

function User_main() {
  const { addToCart } = useContext(CartContext);
  const { products, fetchProducts } = useContext(ProductContext);
  const [bgIndex, setBgIndex] = useState(0);
  const heroBackgrounds = [
    heroBg1,
    heroBg2,
    heroBg3
  ];

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="hero-section text-white text-center py-5 d-flex align-items-center justify-content-center position-relative" 
        style={{ 
          minHeight: '85vh',
          backgroundImage: `url(${heroBackgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle, rgba(252,163,17,0.1) 0%, rgba(10,14,23,0.8) 100%)' }}></div>
        
        <div className="container position-relative fade-in-up" style={{ zIndex: 1 }}>
          <span className="badge bg-warning text-dark px-3 py-2 mb-4 rounded-pill fw-bold text-uppercase tracking-widest">Premium Safety Gear</span>
          <h1 className="display-2 fw-bolder mb-4 text-white">Protect What Matters</h1>
          <p className="lead mb-5 fs-4 mx-auto opacity-75" style={{ maxWidth: '800px' }}>
            International Safety Solution (ISS) provides top-grade, industrial-tested Personal Protective Equipment (PPE) for demanding construction sites.
          </p>
          <div className="fade-in-up delay-1">
            <Link to="/shopping" className="btn btn-warning btn-lg me-3 px-5 py-3 fw-bold rounded-pill text-dark shadow-lg">
              Explore Catalog <i className="ms-2">→</i>
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <HomeAbout />
      <WhyChooseUs />

      {/* Featured Products */}
      <div className="py-5" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container py-5">
          <div className="text-center mb-5 fade-in-up delay-2">
            <h2 className="display-4 fw-bold text-white mb-3">Top Rated Equipment</h2>
            <div className="mx-auto" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
          </div>
          
          <div className="row">
            {featuredProducts.map((product, idx) => (
              <div className={`col-md-4 mb-4 fade-in-up delay-${(idx % 3) + 1}`} key={product.id}>
                <div className="card h-100 product-card rounded-4 overflow-hidden">
                  <div className="product-img-wrapper" style={{ height: '250px' }}>
                    <img src={product.img} alt={product.name} className="card-img-top" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <h5 className="card-title fw-bold fs-4 mb-2 text-white">{product.name}</h5>
                    <h5 className="text-warning fw-bold mb-3">{product.price}</h5>
                    <p className="card-text text-white-50 flex-grow-1">
                      {product.description}
                    </p>
                    <button 
                      type="button"
                      onClick={() => { addToCart(product); alert(`${product.name} added to cart!`); }}
                      className="btn btn-outline-warning w-100 rounded-pill mt-3 fw-bold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {featuredProducts.length === 0 && (
              <div className="col-12 text-center py-4 text-white-50">
                No featured products found. Add some from the admin panel!
              </div>
            )}
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

export default User_main;
