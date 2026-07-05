function Testimonials() {
  const reviews = [
    {
      quote: "ISS provided our entire workforce with premium safety boots and harnesses. The quality is unmatched, and their bulk pricing saved us significantly.",
      author: "Ahmed Khan",
      role: "Site Manager, ABC Construction",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "Delivery is always on time, and the products never fail our safety inspections. ISS is our go-to partner for all PPE requirements.",
      author: "Sarah Ali",
      role: "HSE Director, Skyline Builders",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "The durability of their high-vis gear and hard hats is fantastic. Even in harsh weather, the equipment holds up perfectly.",
      author: "Usman Tariq",
      role: "Project Lead, Metro Infrastructure",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="py-5 position-relative" style={{ backgroundColor: 'var(--bg-dark)', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <div className="position-absolute rounded-circle" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(252,163,17,0.1) 0%, rgba(10,14,23,0) 70%)', top: '-100px', right: '-100px', pointerEvents: 'none' }}></div>
      
      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5 fade-in-up">
          <span className="badge bg-warning text-dark px-3 py-2 mb-3 rounded-pill fw-bold text-uppercase tracking-widest">Testimonials</span>
          <h2 className="display-4 fw-bolder text-white mb-3">What Our Clients Say</h2>
          <div className="mx-auto" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
        </div>

        <div className="row justify-content-center">
          {reviews.map((review, idx) => (
            <div className={`col-lg-4 col-md-6 mb-4 fade-in-up delay-${idx % 3}`} key={idx}>
              <div className="card h-100 glass-card rounded-4 border-0 p-3 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 text-warning fs-3">"</div>
                  <p className="card-text text-white-50 fst-italic mb-4" style={{ minHeight: '80px' }}>
                    {review.quote}
                  </p>
                  <div className="mb-2">{review.rating}</div>
                  <h5 className="card-title fw-bolder text-white fs-5 m-0">{review.author}</h5>
                  <small className="text-warning fw-bold">{review.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
