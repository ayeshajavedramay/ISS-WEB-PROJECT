import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";

function Shopping() {
  const { products, fetchProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    document.title = "Shopping";
    fetchProducts();
  }, []);


  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container flex-grow-1 py-5 fade-in-up">
        <div className="mb-5 text-center">
          <h1 className="display-4 fw-bolder text-white mb-3">Construction PPE Store</h1>
          <div className="mx-auto mb-4" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Browse our complete catalog of industrial-grade safety equipment. Ensure compliance and protect your workforce.
          </p>
        </div>

        <div className="row">
          {products.map((product, idx) => (
            <div className={`col-lg-4 col-md-6 mb-4 fade-in-up delay-${(idx % 3) + 1}`} key={product.id}>
              <div className="card h-100 product-card rounded-4 overflow-hidden text-white">
                <div className="product-img-wrapper" style={{ height: '220px' }}>
                  <img src={product.img} alt={product.name} className="card-img-top" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark mb-3 px-2 py-1 rounded-1">{product.category}</span>
                    <h5 className="card-title fw-bold fs-5 mb-0 text-white">{product.name}</h5>
                  </div>
                  <h4 className="text-warning fw-bold mt-auto mb-4">{product.price}</h4>
                  <button
                    type="button"
                    className="btn btn-outline-warning w-100 rounded-pill fw-bold"
                    onClick={() => { addToCart(product); alert(`${product.name} added to cart!`); }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shopping;
