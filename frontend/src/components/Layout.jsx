import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileMenu />
      <main  style={{ paddingTop: '90px' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
