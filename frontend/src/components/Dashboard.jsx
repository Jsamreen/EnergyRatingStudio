import React, { useEffect, useState } from 'react';
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
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-3">Welcome to Energy Ratings Studio</h1>
        <p className="text-center text-muted mb-5">
          Your trusted partner for sustainable energy compliance and building assessments.
        </p>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-semibold">{stats.projects_completed}</h3>
              <p className="text-muted">Projects Completed</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-semibold">{stats.services_offered}</h3>
              <p className="text-muted">Services Offered</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-semibold">{stats.compliance_accuracy}</h3>
              <p className="text-muted">Compliance Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
