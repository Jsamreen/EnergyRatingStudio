import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
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
    <div className="position-relative text-white" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Hero Background Video */}
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
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/Hero1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-dark overlay for text clarity
          paddingTop: '80px'
        }}
      >
        <h1 className="fw-bold text-center display-4">Welcome to Energy Ratings Studio</h1>
        <p className="lead mt-2 text-center">
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>
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

        {/* Stats Section
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card bg-dark bg-opacity-75 text-white shadow-sm p-4">
                <h3 className="fw-bold text-center">{stats.projects_completed}</h3>
                <p className="text-center">Projects Completed</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark bg-opacity-75 text-white shadow-sm p-4">
                <h3 className="fw-bold text-center">{stats.services_offered}</h3>
                <p className="text-center">Services Offered</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark bg-opacity-75 text-white shadow-sm p-4">
                <h3 className="fw-bold text-center">{stats.compliance_accuracy}</h3>
                <p className="text-center">Compliance Accuracy</p>
              </div>
            </div>
          </div>
        </div> */}
      </div> 
    </div>
  );
};

export default Dashboard;
