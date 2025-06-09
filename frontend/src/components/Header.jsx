import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({ onToggleMenu }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <header
      className={`fixed-top shadow-sm border-bottom border-secondary z-3`}
      style={{
        backgroundColor: isDashboard ? 'rgba(0, 0, 0, 0.6)' : '#000',
        backdropFilter: isDashboard ? 'blur(4px)' : 'none'
      }}
    >
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center">
          <div
            style={{
              backgroundColor: '#fff',
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

        <nav className="d-none d-md-flex">
          {['/', '/about', '/projects', '/services', '/contact'].map((path, idx) => {
            const labels = ['Home', 'About', 'Projects', 'Services', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  'mx-3 text-decoration-none nav-link-custom ' +
                  (isActive ? 'text-white border-bottom border-white fw-bold' : 'text-white')
                }
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
