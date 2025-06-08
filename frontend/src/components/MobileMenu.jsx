import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="position-fixed top-0 end-0 p-3 z-3">
        <button
          className="btn btn-outline-light"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-black text-white d-flex flex-column justify-content-center align-items-start ps-5 z-2"
          style={{ zIndex: 1000 }}
        >
          <h2 className="mb-4">
            <Link to="/about" onClick={() => setOpen(false)} className="text-white text-decoration-none">ABOUT</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/projects" onClick={() => setOpen(false)} className="text-white text-decoration-none">PROJECTS</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/services" onClick={() => setOpen(false)} className="text-white text-decoration-none">SERVICES</Link>
          </h2>
          <h2 className="mb-4">
            <Link to="/contact" onClick={() => setOpen(false)} className="text-white text-decoration-none">CONTACT</Link>
          </h2>
          <p className="text-muted mt-5">Agents apply to join our network →</p>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
