import { useForm } from 'react-hook-form';
import Navbar from "./Navbar";
import Footer from "./Footer";
import heroBg1 from '../assets/images/hero_bg_1.png';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from './AuthContext';
import { registerUsers } from '../servicesApi/registrationserviceapi';

const registrationSchema = z.object({
  fullName: z.string({ required_error: "Full name is required" })
    .min(3, "Minimum 3 characters required"),

  username: z.string({ required_error: "Username is required" })
    .min(3, "Minimum 3 characters required"),

  email: z.string({ required_error: "Email is required" })
    .email("Please enter a valid email"),

  phone: z.string({ required_error: "Phone is required" })
    .min(10, "Please enter a valid phone number"),

  password: z.string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: z.string({ required_error: "Please confirm your password" }),

  dob: z.string({ required_error: "Date of birth is required" })
    .min(1, "Date of birth is required"),

  gender: z.string({ required_error: "Gender is required" })
    .refine(val => ["Male", "Female", "Other"].includes(val), {
      message: "Please select a gender"
    }),

  address: z.string({ required_error: "Address is required" })
    .min(5, "Please enter a valid address"),

  city: z.string({ required_error: "City is required" })
    .min(2, "Please enter a valid city"),

  country: z.string({ required_error: "Country is required" })
    .min(2, "Please enter a valid country"),

  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to Terms & Conditions"
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

function Registration() {
  //const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Registration";
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registrationSchema)
  });

  const submit = async (data) => {
    try {
      const response = await registerUsers(data);
      if (response.status === 200) {
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <div className="container flex-grow-1 py-5 fade-in-up">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-10 col-xl-9">
            <div className="card glass-card rounded-4 overflow-hidden border-0 shadow-lg">
              <div className="row g-0">
                {/* Left Side Branding */}
                <div className="col-md-4 d-none d-md-flex flex-column justify-content-center align-items-center text-center p-5 position-relative" style={{ background: 'linear-gradient(135deg, rgba(252,163,17,0.9), rgba(252,163,17,0.7))', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${heroBg1})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, mixBlendMode: 'overlay' }}></div>
                  <div className="position-relative z-1">
                    <h2 className="display-4 mb-3">🚧</h2>
                    <h3 className="fw-bolder text-dark mb-3">Join ISS</h3>
                    <p className="text-dark fw-bold mb-0">Create your account to access wholesale prices and premium safety equipment.</p>
                  </div>
                </div>

                {/* Right Side Form */}
                <div className="col-md-8 p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-bolder m-0 text-white display-6">Registration</h3>
                    <p className="text-white-50 mt-1">Please fill in your details to create an account</p>
                  </div>

                  <form onSubmit={handleSubmit(submit)}>
                    <h6 className="text-warning text-uppercase tracking-wider fw-bold mb-3 border-bottom border-secondary pb-2">Account Details</h6>
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Full Name</label>
                          <input type="text" placeholder="e.g. John Doe" {...register("fullName")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.fullName && <p className="text-danger small mt-1">{errors.fullName.message}</p>}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Username</label>
                          <input type="text" placeholder="e.g. johndoe99" {...register("username")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.username && <p className="text-danger small mt-1">{errors.username.message}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Email Address</label>
                          <input type="email" placeholder="e.g. name@company.com" {...register("email")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Phone Number</label>
                          <input type="tel" placeholder="e.g. +92 300 1234567" {...register("phone")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Password</label>
                          <input type="password" placeholder="Create a strong password" {...register("password")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Confirm Password</label>
                          <input type="password" placeholder="Re-enter password" {...register("confirmPassword")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.confirmPassword && <p className="text-danger small mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                      </div>
                    </div>

                    <h6 className="text-warning text-uppercase tracking-wider fw-bold mb-3 border-bottom border-secondary pb-2">Personal & Location</h6>
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Date of Birth</label>
                          <input type="date" {...register("dob")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.dob && <p className="text-danger small mt-1">{errors.dob.message}</p>}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Gender</label>
                          <select {...register("gender")} className="form-select py-2 px-3 rounded-3 shadow-sm">
                            <option value="">Select Gender...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.gender && <p className="text-danger small mt-1">{errors.gender.message}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="text-white-50 small fw-bold mb-1 d-block">Full Address</label>
                      <input type="text" placeholder="e.g. 123 Industrial Estate, Block B" {...register("address")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                      {errors.address && <p className="text-danger small mt-1">{errors.address.message}</p>}
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">City</label>
                          <input type="text" placeholder="e.g. Lahore" {...register("city")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.city && <p className="text-danger small mt-1">{errors.city.message}</p>}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label className="text-white-50 small fw-bold mb-1 d-block">Country</label>
                          <input type="text" placeholder="e.g. Pakistan" {...register("country")} className="form-control py-2 px-3 rounded-3 shadow-sm" />
                          {errors.country && <p className="text-danger small mt-1">{errors.country.message}</p>}
                        </div>
                      </div>
                    </div>

                    <h6 className="text-warning text-uppercase tracking-wider fw-bold mb-3 border-bottom border-secondary pb-2">Profile Picture (Optional)</h6>
                    <div className="mb-4">
                      <input type="file" {...register("profilePic")} accept="image/*" className="form-control py-2 px-3 rounded-3 shadow-sm" />
                    </div>


                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        {...register("agreeTerms")}
                        className="form-check-input"
                      />
                      <label htmlFor="agreeTerms" className="form-check-label text-white-50 ms-1 small">
                        I agree to the <a href="#" className="text-warning">Terms & Conditions</a>
                      </label>
                    </div>

                    <button type="submit" className="btn btn-warning w-100 fw-bold py-3 rounded-pill text-dark shadow-lg fs-5" style={{ transition: 'all 0.3s' }}>
                      Register Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
