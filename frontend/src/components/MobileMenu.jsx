import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 10000 }}>
        <button
          className="btn btn-outline-light"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-black text-white d-flex flex-column justify-content-center align-items-start ps-5"
          style={{ zIndex: 9999, backdropFilter: 'blur(4px)' }}
        >
          <button
            className="position-absolute top-0 end-0 m-3 btn btn-light"
            onClick={() => setOpen(false)}
          >
            ✖️
          </button>

          <h2 className="mb-4">
            <Link to="/" onClick={() => setOpen(false)} className="text-white text-decoration-none">HOME</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/about" onClick={() => setOpen(false)} className="text-white text-decoration-none">ABOUT US</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/our-process" onClick={() => setOpen(false)} className="text-white text-decoration-none">OUR PROCESS</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/our-services" onClick={() => setOpen(false)} className="text-white text-decoration-none">OUR SERVICES</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/contact-us" onClick={() => setOpen(false)} className="text-white text-decoration-none">CONTACT US</Link>
          </h2>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
