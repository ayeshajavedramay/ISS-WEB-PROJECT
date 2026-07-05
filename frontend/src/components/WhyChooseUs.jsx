function WhyChooseUs() {
  const features = [
    {
      icon: "🛡️",
      title: "Certified Products",
      desc: "All our PPE meets stringent ANSI, CE, and OSHA international safety standards."
    },
    {
      icon: "🚚",
      title: "Fast Nationwide Delivery",
      desc: "We deliver to any construction site in Pakistan within 48 hours."
    },
    {
      icon: "🤝",
      title: "Corporate Discounts",
      desc: "Exclusive B2B pricing and bulk discounts for large construction firms."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc: "Dedicated safety consultants available around the clock for your site needs."
    }
  ];

  return (
    <div className="why-choose-us py-5" style={{ backgroundColor: '#131b29' }}>
      <div className="container py-5">
        <div className="text-center mb-5 fade-in-up">
          <span className="badge bg-warning text-dark px-3 py-2 mb-3 rounded-pill fw-bold text-uppercase tracking-widest">Why Choose ISS</span>
          <h2 className="display-4 fw-bolder text-white mb-3">Your Trusted Safety Partner</h2>
          <div className="mx-auto" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
        </div>

        <div className="row">
          {features.map((feature, idx) => (
            <div className={`col-lg-3 col-md-6 mb-4 fade-in-up delay-${idx % 4}`} key={idx}>
              <div className="card h-100 bg-transparent border-0 text-center">
                <div className="card-body p-4 d-flex flex-column align-items-center">
                  <div className="mb-4 bg-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '80px', height: '80px', border: '1px solid rgba(252, 163, 17, 0.3)' }}>
                    <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                  </div>
                  <h5 className="card-title fw-bolder text-white mb-3 fs-4">{feature.title}</h5>
                  <p className="card-text text-white-50">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
