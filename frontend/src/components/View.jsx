import { useState, useEffect } from 'react';
import Admin_navbar from "./Admin_navbar";
import Footer from "./Footer";
import axios from 'axios';

function View() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('http://localhost/Database/fetch_product.php');
        setProducts(response.data);
      }
      catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Admin_navbar />
      <div className="container flex-grow-1 py-5">
        <h2 className="fw-bold mb-4 text-white">View Inventory</h2>
        <div className="card border-0 shadow-sm bg-dark text-white">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover table-dark m-0 align-middle">
                <thead>
                  <tr className="border-secondary">
                    <th className="py-3 ps-4 text-white-50">Product ID</th>
                    <th className="py-3 text-white-50">Product Name</th>
                    <th className="py-3 text-white-50">Category</th>
                    <th className="py-3 text-white-50">Price</th>
                    <th className="py-3 text-white-50">Stock Level</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} className="border-secondary">
                      <td className="ps-4 fw-bold text-muted">#{product.id}</td>
                      <td className="fw-bold text-white">{product.name}</td>
                      <td className="text-white-50">{product.category}</td>
                      <td className="text-warning fw-bold">{product.price}</td>
                      <td>
                        <span className={`badge ${parseInt(product.stock, 10) < 50 ? 'bg-danger' : 'bg-success'} rounded-pill`}>{product.stock} units</span>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-white-50">No products found in the database.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default View;
