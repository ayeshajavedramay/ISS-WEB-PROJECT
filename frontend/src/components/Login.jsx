import { useForm } from 'react-hook-form';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const loginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }).email("Please enter a valid email address"),

  password: z.string({
    required_error: "Password is required",
  }).min(6, "Password must be at least 6 characters"),
});
function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  function submit(data) {
    const result = login(data.email, data.password);
    if (result.success) {
      alert(`Logged in successfully as ${result.role === 'admin' ? 'Admin' : 'Customer'}!`);
      if (result.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/shopping");
      }
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5 fade-in-up">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card glass-card rounded-4 overflow-hidden border-0">
              <div className="text-center py-5 px-4 pb-0">
                <div className="mx-auto mb-3 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="fs-3 text-dark">🔐</i>
                </div>
                <h3 className="fw-bolder m-0 text-white">Welcome Back</h3>
                <p className="mt-2 mb-0 text-white-50">Login to your ISS Account</p>
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit(submit)}>
                  <div className="mb-4">
                    <label className="form-label fw-bold text-white-50 small text-uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                      className="form-control py-3 rounded-3 border-secondary"
                    />
                    {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <label className="form-label fw-bold text-white-50 small text-uppercase tracking-wider">Password</label>
                      <a href="#" className="text-warning text-decoration-none small">Forgot?</a>
                    </div>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      {...register("password")}
                      className="form-control py-3 rounded-3 border-secondary"
                    />
                    {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
                  </div>
                  <button type="submit" className="btn btn-warning w-100 fw-bold py-3 rounded-pill mt-4 text-dark shadow-sm">
                    Access Dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
