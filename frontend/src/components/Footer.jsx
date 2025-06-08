import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-center">
        <div className="mb-4">
          <h5 className="text-uppercase mb-1">Get in Touch</h5>
          <p className="mb-1">Talha Aejaz Ahmed</p>
          <p className="mb-1">0 451 215 223</p>
          <p>talha@energyratingsstudio.com.au</p>
        </div>

        <div className="mb-4">
          <p className="text-uppercase mb-1">Follow Us</p>
          <a href="#" className="text-white mx-2 text-decoration-none">Instagram</a>
          <a href="#" className="text-white mx-2 text-decoration-none">LinkedIn</a>
          <a href="#" className="text-white mx-2 text-decoration-none">YouTube</a>
        </div>

        <button className="btn btn-outline-light mb-3">Contact</button>

        <div className="text-muted small">
          <p className="mb-1">© {new Date().getFullYear()} Energy Ratings Studio. All Rights Reserved.</p>
          <p>Privacy Policy | Designed by Javeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

