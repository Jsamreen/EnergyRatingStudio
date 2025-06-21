import './OurProcess.css'; 
import { Link } from 'react-router-dom';


const steps = [
  {
    title: 'Step 1',
    description: 'Submit your building plans to us online or via email.',
  },
  {
    title: 'Step 2',
    description: 'We assess your documents and prepare a custom quote.',
  },
  {
    title: 'Step 3',
    description: 'Our team conducts the energy efficiency analysis.',
  },
  {
    title: 'Step 4',
    description: 'You receive a detailed preliminary report.',
  },
  {
    title: 'Step 5',
    description: 'We finalize and issue the NatHERS certificate.',
  },
];

const OurProcess = () => {
  return (
    <div
      className="energy-process-section bg-dark text-white py-5"
      style={{
        marginTop: -30,
        marginBottom: 0,
        paddingBottom: 0,
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
            <div className="flip-card p-4 rounded-4 border border-info" key={index}>
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
          <Link to="/contact-us" className="text-decoration-none">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
