import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-0"
      style={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#000',
        backdropFilter: 'blur(4px)',
        zIndex: 1,
      }}>
      <div className="container">
        <div className="row">

          {/* LEFT: Contact Info & Links */}
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Get in Touch</h5>
            <p className="mb-1">Talha Aejaz Ahmed</p>
            <p className="mb-1">0 451 215 223</p>
            <p>talha@energyratingsstudio.com.au</p>

            <h6 className="mt-4">Follow Us</h6>
            <a href="#" className="text-white me-3 text-decoration-none">Instagram</a>
            <a href="#" className="text-white me-3 text-decoration-none">LinkedIn</a>
            <a href="#" className="text-white text-decoration-none">YouTube</a>

            <div className="text-muted small mt-4">
              <p className="mb-1">© {new Date().getFullYear()} Energy Ratings Studio. All Rights Reserved.</p>
              <p>Privacy Policy | Designed by Javeria</p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="col-md-6">
            <h5 className="text-success fw-bold mb-4">Contact Us</h5>
            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name (required)</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Email (required)</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Message</label>
                <textarea className="form-control" rows="4" placeholder="Enter your message" required></textarea>
              </div>
              <button
                type="submit"
                className="btn px-4 py-2 fw-bold rounded-pill"
                style={{ backgroundColor: '#4CAF50', color: '#fff' }}
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
