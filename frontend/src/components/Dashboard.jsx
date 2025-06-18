import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; 
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';




const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  // Inside Dashboard component...
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [stats, setStats] = useState({
    projects_completed: 0,
    services_offered: 0,
    compliance_accuracy: ''
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/dashboard/data/')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Error fetching dashboard data:', err));
  }, []);

  return (
   <div
  className="position-relative text-white"
  style={{ marginTop: 0, paddingTop: 0 , marginBotton: 0, minHeight: '100vh' }} 
>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-fixed"
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/Hero1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          position: 'fixed',        
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1,                
          pointerEvents: 'none',    
          backgroundColor: 'rgba(0, 0, 0, 0.3)' // dark overlay for readability
        }}
      >
      
        <h1 className="fw-bold text-center display-4">Welcome to Energy Ratings Studio</h1>
        <p className="lead mt-2 text-center">
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', zIndex: 1 }}>
            <Typewriter
              words={['Sustainable Energy', 'Accurate Compliance', 'Trusted Experts']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
      </div>

      
      {/* ENERGY EFFICIENCY SECTION */}
        <div
        className="energy-process-section bg-dark text-white py-5"
        style={{
          marginTop: '500px',
          marginBottom: 0,
          paddingBottom: '-100px',
          paddingTop: '150px',
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          zIndex: 2
        }}
      >
          <div className="container"
            style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <div ref={ref} className="row align-items-center">
              
              <div className={`col-md-6 mb-4 mb-md-0 transition-zoom ${inView ? 'zoom-in' : ''}`}>
                <img
                  src="/dashboard1.jpg"
                  alt="Energy Assessment"
                  className="img-fluid rounded shadow"
                />
              </div>

              <div className={`col-md-6 text-white transition-zoom ${inView ? 'zoom-in' : ''}`}>
                <h2 className="fw-bold">Energy Efficiency Assessments</h2>
                <p>
                  Looking for an energy assessment that fits your budget and timeline?
                  Our Melbourne-based team delivers reports tailored for compliance and efficiency.
                </p>
                <p>
                  We’re a certified company helping builders and developers meet regulations with fast, precise reporting. Our experience in real-world building applications ensures practical, cost-effective results.
                </p>
                <p>
                  Whether you’re a builder, architect, or homeowner—our goal is to simplify your energy compliance process without delays or extra costs.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {/* ABOUT US SECTION */}
<div
  className="text-white py-5"
  style={{
    backgroundImage: "url('/about_us_backgroud.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '100px',
    paddingBottom: '100px',
    position: 'relative',
    zIndex: 2,
  }}
>
  {/* Dark overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: 1,
    }}
  ></div>

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row align-items-center">
      {/* Image Collage with Animation */}
      <div className="col-md-6 position-relative mb-4 mb-md-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="position-relative"
          style={{ zIndex: 1 }}
        >
          <img
            src="/about_us_backgroud.jpg"
            alt="City View"
            className="img-fluid rounded shadow mb-3"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="position-relative"
          style={{ marginTop: '-100px', marginLeft: '50px', zIndex: 2 }}
        >
          <img
            src="/homes1.jpeg"
            alt="Solar Panels"
            className="img-fluid rounded shadow"
            style={{ width: '100%', maxWidth: '400px' }}
          />
        </motion.div>
      </div>

      {/* About Text */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4">About EnergyRatingsStudio</h2>
        <p>
          EnergyRatingsStudio is an energy efficiency assessment company that specialises in helping the construction industry meet energy compliance standards.
        </p>
        <p>
          With our extensive experience, we blend deep industry knowledge with practical construction expertise to assess and certify new developments with precision and professionalism.
        </p>
        <Link to="/about">
          <button
            className="btn btn-outline-light mt-3 px-4 py-2 fw-bold rounded-pill"
          >
            More About Us
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>


{/* OUR SERVICES SECTION */}
<div
  className="bg-dark text-white py-5"
  style={{
    backgroundColor: '#1c1e22',
    paddingTop: ' 200px',
    paddingBottom: '100px',
    height: '80vh',
    position: 'relative',
    zIndex: 2,
  }}
>
  <div className="container"
    style={{ paddingTop: '50px', paddingBottom: '50px' }}>
    <h2 className="fw-bold text-white text-center mb-4">Our Services</h2>
          <h4 className="fw-bold text-white-80 text-center mb-4">
            We offer a range of energy efficiency assessment services tailored to your needs.
          </h4>
    <div className="row g-4"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', paddingTop: '50px'
       }}>
      {/* Intro Column */}
      <div className="col-md-3 d-flex">
        <div className="service-card w-100 d-flex flex-column justify-content-between p-4 rounded-3 shadow"
          style={{ height: '100%' }}>
          
          <h4 className="fw-bold text-white mb-4">Talk to us today about our services</h4>
          <Link to="/our-services#service-plans">
          <button className="btn border border-white text-white fw-bold rounded-pill mt-auto px-4 py-2 transition duration-300 hover:bg-white hover:text-dark">
            Our Services →
          </button>
          </Link>
        </div>
      </div>

      {/* Card 1 */}
      <div className="col-md-3 d-flex">
        <div className="service-card w-100 d-flex flex-column justify-content-between p-4 rounded-3 shadow">
          <div>
            <h5 className="fw-bold text-white mb-2">Six-star assessments and reports</h5>
            <p className="text-white-50 mb-4">
              6-star energy reports (NatHERS) assess the thermal performance of buildings.
            </p>
          </div>
          <Link to="/our-services#service-plans">
          <button className="btn border border-white text-white fw-bold rounded-pill mt-auto px-4 py-2 transition duration-300 hover:bg-white hover:text-dark">
            Read More
          </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-3 d-flex">
        <div className="service-card w-100 d-flex flex-column justify-content-between p-4 rounded-3 shadow">
          <div>
            <h5 className="fw-bold text-white mb-2">BESS assessments and reports</h5>
            <p className="text-white-50 mb-4">
              BESS helps local councils assess sustainability performance in Victoria.
            </p>
          </div>
          <Link to="/our-services#service-plans">
          <button className="btn border border-white text-white fw-bold rounded-pill mt-auto px-4 py-2 transition duration-300 hover:bg-white hover:text-dark">
            Read More
          </button>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-3 d-flex">
        <div className="service-card w-100 d-flex flex-column justify-content-between p-4 rounded-3 shadow">
          <div>
            <h5 className="fw-bold text-white mb-2">WSUD and Storm assessments</h5>
            <p className="text-white-50 mb-4">
              WSUD and stormwater reports support sustainable urban design for development approval.
            </p>
          </div>
          <Link to="/our-services#service-plans">
          <button className="btn border border-white text-white fw-bold rounded-pill mt-auto px-4 py-2 transition duration-300 hover:bg-white hover:text-dark">
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* OUR CLIENTS SECTION */}
<div
  className="bg-dark text-white py-5"
  style={{
    backgroundColor: '#1c1e22',
    paddingTop: ' 200px',
    paddingBottom: '100px',
    height: '80vh',
    position: 'relative',
    zIndex: 2,
  }}
>
  <div className="container 
    position-relative"
    style={{ paddingTop: '50px', paddingBottom: '50px' , zIndex: 2 }}>
    <div className="row align-items-center">

      {/* Image with scroll zoom */}
      <div className="col-md-6 mb-4 mb-md-0">
        <motion.img
          src="/clients.jpg" // 
          alt="Clients"
          className="img-fluid rounded shadow"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Text content */}
      <div className="col-md-6
        d-flex flex-column justify-content-center align-items-start"
        style={{ paddingLeft: '50px', paddingRight: '30px' }}>
        <h2 className="fw-bold mb-4">Our Clients</h2>
        <p className="mb-3">
          We work with clients from a broad range of construction and design backgrounds, including:
        </p>
        <ul className="list-unstyled fs-5">
          <li className="text-white mb-2">✔️ High-volume residential builders</li>
          <li className="text-white mb-2">✔️ Commercial builders</li>
          <li className="text-white mb-2">✔️ Residential builders</li>
          <li className="text-white mb-2">✔️ Architects</li>
          <li className="text-white mb-2">✔️ Designers</li>
          <li className="text-white mb-2">✔️ Owner builders</li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* OUR ACCREDITATIONS SECTION */}
<div
  className="bg-dark text-white py-5"
  style={{
    backgroundColor: '#1c1e22',
    position: 'relative',
    zIndex: 2,
  }}
>
  <div className="container text-center mb-5">
    <h2 className="fw-bold text-success mb-3">Our Accreditations</h2>
    <p className="text-white">Proudly aligned with trusted industry standards and programs</p>
  </div>

  <div className="container">
    <div className="row justify-content-center g-4">

      {/* Accreditation 1 */}
      <div className="col-md-5">
        <div className="accreditation-card text-center p-5 rounded-4 shadow-sm h-100 bg-white glass-effect">
          <div className="mb-3">
            <i className="bi bi-award-fill text-success" style={{ fontSize: '2rem' }}></i>
          </div>
          <h5 className="fw-bold text-dark mb-0">Member of the Design Matters</h5>
        </div>
      </div>

      {/* Accreditation 2 */}
      <div className="col-md-5">
        <div className="accreditation-card text-center p-5 rounded-4 shadow-sm h-100 bg-white glass-effect">
          <div className="mb-3">
            <i className="bi bi-shield-lock-fill text-dark" style={{ fontSize: '2rem' }}></i>
          </div>
          <h5 className="fw-bold text-dark mb-0">Nationwide House Energy Rating Scheme</h5>
        </div>
      </div>

    </div>
  </div>
</div>
      </div>
  );
};

export default Dashboard;
