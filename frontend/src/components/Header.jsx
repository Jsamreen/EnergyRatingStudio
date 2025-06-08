import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ onToggleMenu }) => {
  return (
    <header className="fixed-top bg-black shadow-sm border-bottom border-secondary z-3">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000',
              fontWeight: 'bold',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '20px',
            }}
          >
            ers
          </div>
          <div className="ms-2 text-white fw-bold fs-5">Studio</div>
        </div>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex">
          {['/', '/about', '/projects', '/services', '/contact'].map((path, idx) => {
            const labels = ['Home', 'About', 'Projects', 'Services', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  'mx-3 text-decoration-none nav-link-custom ' +
                  (isActive ? 'text-info fw-bold active' : 'text-white')
                }
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </nav>

        {/* Hamburger - only on mobile */}
        <button
  className="hamburger-toggle btn border-0"
  onClick={onToggleMenu}
>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
  </div>
</button>
      </div>
    </header>
  );
};

export default Header;
