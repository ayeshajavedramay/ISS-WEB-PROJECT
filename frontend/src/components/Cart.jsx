import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Order placed successfully! Thank you for purchasing from International Safety Solution.");
    clearCart();
    navigate("/shopping");
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container flex-grow-1 py-5 fade-in-up">
        <div className="mb-5 text-center">
          <h1 className="display-4 fw-bolder text-white mb-3">Your Shopping Cart</h1>
          <div className="mx-auto" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-5 glass-card bg-dark rounded-4 p-5 max-w-lg mx-auto" style={{ maxWidth: '600px' }}>
            <span style={{ fontSize: '4rem' }}>🛒</span>
            <h3 className="fw-bold mt-4 text-white">Your Cart is Empty</h3>
            <p className="text-white-50 mb-4">You haven't added any premium safety gear yet. Protect your workforce today!</p>
            <Link to="/shopping" className="btn btn-warning px-5 py-3 fw-bold rounded-pill text-dark shadow-sm">
              Explore Catalog
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {/* Cart Items List */}
            <div className="col-lg-8">
              <div className="card glass-card bg-dark border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="card-header bg-transparent border-secondary py-3">
                  <h5 className="mb-0 fw-bold text-white">Selected Safety Equipment</h5>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover table-dark m-0 align-middle">
                      <thead style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <tr>
                          <th className="py-3 ps-4 text-white-50 border-secondary">Product</th>
                          <th className="py-3 text-white-50 border-secondary">Price</th>
                          <th className="py-3 text-white-50 border-secondary text-center">Quantity</th>
                          <th className="py-3 text-white-50 border-secondary">Subtotal</th>
                          <th className="py-3 text-white-50 border-secondary text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => {
                          const numericPrice = typeof item.price === 'number' ? item.price : parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0;
                          const subtotal = numericPrice * item.quantity;

                          return (
                            <tr key={item.id} className="border-secondary">
                              <td className="ps-4 py-3">
                                <div className="d-flex align-items-center">
                                  <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }} 
                                  />
                                  <div className="ms-3">
                                    <div className="fw-bold text-white mb-0">{item.name}</div>
                                    <small className="text-white-50">{item.category}</small>
                                  </div>
                                </div>
                              </td>
                              <td className="text-white">{item.price}</td>
                              <td className="py-3">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                  <button 
                                    type="button" 
                                    className="btn btn-outline-warning btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                                    style={{ width: '28px', height: '28px' }} 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <span className="text-white fw-bold px-2">{item.quantity}</span>
                                  <button 
                                    type="button" 
                                    className="btn btn-outline-warning btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                                    style={{ width: '28px', height: '28px' }} 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="text-warning fw-bold">Rs. {subtotal.toLocaleString()}</td>
                              <td className="text-center">
                                <button 
                                  type="button" 
                                  className="btn btn-outline-danger btn-sm rounded-circle" 
                                  onClick={() => removeFromCart(item.id)}
                                  title="Remove item"
                                >
                                  🗑️
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-lg-4">
              <div className="card glass-card bg-dark border-0 shadow-lg rounded-4 p-4">
                <h4 className="fw-bold text-white mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-white-50">Subtotal</span>
                  <span className="text-white fw-bold">Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-white-50">Delivery Charge</span>
                  <span className="text-success fw-bold">FREE</span>
                </div>
                <hr className="border-secondary mb-4" />
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="text-white fw-bold">Total</h5>
                  <h5 className="text-warning fw-bolder">Rs. {cartTotal.toLocaleString()}</h5>
                </div>
                <button 
                  type="button" 
                  className="btn btn-warning w-100 fw-bold py-3 rounded-pill text-dark shadow-sm fs-5"
                  onClick={handleCheckout}
                >
                  Place Wholesale Order
                </button>
                <div className="text-center mt-3">
                  <Link to="/shopping" className="text-white-50 text-decoration-none small hover-white">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
