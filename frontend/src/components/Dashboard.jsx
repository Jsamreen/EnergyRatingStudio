import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; 

// Define steps array
const steps = [
  { title: 'Step One', description: 'Email us your plans' },
  { title: 'Step Two', description: 'We’ll send you a quote and request some further information' },
  { title: 'Step Three', description: 'We’ll provide you with a turn around time' },
  { title: 'Step Four', description: 'We’ll send a preliminary report including what is needed to achieve 6-star certification' },
  { title: 'Step Five', description: 'Once finalised, we’ll send a Nationwide House Energy Rating Scheme Certificate' }
];

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
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
          position: 'fixed',        // <- makes the text fixed on screen
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1,                // <- ensure it's above the video
          pointerEvents: 'none',    // <- so scroll still works
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

      {/* ENERGY PROCESS SECTION */}
      <div
        className="energy-process-section bg-dark text-white py-5"
        style={{
          marginTop: '500px',
          marginBottom: 0,
          paddingBottom: 0,
          paddingTop: '150px',
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          zIndex: 2
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our Energy Rating Process</h2>
          <div className="card-carousel">
            {steps.map((item, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h5 className="fw-bold">{item.title}</h5>
                  </div>
                  <div className="flip-card-back">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 px-3 px-md-5">
            <h5 className="fw-bold text-white text-center mb-4">
              We’ll also stamp and sign off your plans so that they are ready for you to submit to the relevant authority.
            </h5>
            <ul className="list-unstyled text-white text-center fs-5">
              <li>✔️ We issue a quote and request further information</li>
              <li>✔️ We give you a turnaround time</li>
              <li>✔️ We provide a preliminary report and summary of what is needed for 6-star certification</li>
              <li>✔️ Finalise the report and certification</li>
            </ul>
          </div>
          <div className="text-center mt-4">
          <button
            className="btn px-4 py-2 fw-bold fs-5 rounded-pill"
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none'
            }}
          >
            Submit Your Plan
          </button>
        </div>
        </div>   
      </div> 
    </div>
  );
};

export default Dashboard;
