import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import About from './components/About';
import OurServices from './components/OurServices';
import ContactUs from './components/ContactUs';
import OurProcess from './components/OurProcess'; 


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-process" element={<OurProcess />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
