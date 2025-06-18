import { motion } from 'framer-motion';


const OurServices = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="position-relative"
        
        style={{
          backgroundImage: "url('/our-services1.jpeg')",
          marginTop: -30,
          paddingTop: '60px',
          paddingBottom: '60px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white fw-bold display-3 text-center"
          style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
        >
          Our Services
        </motion.h1>

       
      </div>

      <div className="bg-dark text-white py-5"
        style={{
          paddingTop: '150px',
          paddingBottom: '60px',
          paddingLeft: '100px',
          position: 'relative',
        }}>
      <div className="row align-items-start g-5">

    {/* LEFT CONTENT BLOCK */}
          <motion.div
        className="col-md-6 d-flex align-items-start gap-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
      {/* ICON */}
      <div className="pt-2">
        <i className="bi bi-lightbulb-fill text-success" style={{ fontSize: '2.5rem' }}></i>
      </div>

      {/* TEXT */}
      <div className="text-light fs-5">
        <p>
          ERS Studio delivers detailed energy evaluation reports to streamline compliance for residential and commercial buildings across Australia. Our mission is to ensure energy strategies align with design goals while staying budget-friendly.
        </p>
        <p>
          We collaborate with engineers, architects, and developers to build environmentally responsible spaces that exceed current regulations.
        </p>
      </div>
    </motion.div>

    {/* RIGHT SERVICES LIST */}
     <motion.div
      className="col-md-6"
      style={{ display: 'flex', alignItems: 'start', gap: '20px', paddingLeft: '50px' }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
    <div className="col-md-6">
      <h4 className="fw-bold mb-4 text-white">Get in touch for expert support with:</h4>
      <ul className="list-unstyled timeline-list">
        <li className="d-flex align-items-start mb-4">
          <div className="icon-circle bg-light border me-3">
            <i className="bi bi-bar-chart-line-fill text-success"></i>
          </div>
          <span className="fs-5 text-white">Energy modelling for new builds</span>
        </li>
        <li className="d-flex align-items-start mb-4">
          <div className="icon-circle bg-light border me-3">
            <i className="bi bi-file-earmark-text-fill text-success"></i>
          </div>
          <span className="fs-5 text-white">Building envelope analysis</span>
        </li>
        <li className="d-flex align-items-start mb-4">
          <div className="icon-circle bg-light border me-3">
            <i className="bi bi-droplet-fill text-success"></i>
          </div>
          <span className="fs-5 text-white">Stormwater & WSUD design documentation</span>
        </li>
      </ul>
    </div>
    </motion.div>
   </div>
</div>

      {/* CLIENT TYPES CAROUSEL */}
<div className="bg-dark text-white py-5 overflow-hidden">
  <h2 className="text-center fw-bold mb-5">Who We Work With</h2>

  <motion.div
    className="d-flex gap-4 px-4"
    style={{ width: 'max-content' }}
    animate={{ x: ['0%', '-50%'] }}
    transition={{
      repeat: Infinity,
      duration: 30,
      ease: 'linear',
    }}
  >
    {/* Duplicated once for infinite scroll loop */}
    {[...Array(2)].flatMap(() => [
      {
        title: 'Developers & Builders',
        desc: 'Fast, flexible, and reliable energy compliance for all kinds of building projects.',
        img: '/developersandbuilders.png'
      },
      {
        title: 'Commercial Consultants',
        desc: 'Collaborative solutions for architects and consultants to meet energy goals.',
        img: '/commercial_consultants.png'
      },
      {
        title: 'Design Firms',
        desc: 'We support architectural creativity while ensuring sustainability compliance.',
        img: '/Designer_firms.png'
      },
      {
        title: 'Independent Owners',
        desc: 'Helping individuals meet energy standards with simplicity and clarity.',
        img: '/independent_owner.png'
      }
    ]).map((item, idx) => (
      <div
        key={idx}
        className="card shadow-sm"
        style={{
          minWidth: '300px',
          maxWidth: '300px',
          border: 'none',
          overflow: 'hidden'
        }}
      >
        <img src={item.img} alt={item.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title text-success fw-bold">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
        </div>
      </div>
    ))}
  </motion.div>
</div>


     <div
  className="bg-dark text-white py-5"
  style={{
    backgroundColor: '#1c1e22',
    paddingTop: '200px',
    paddingBottom: '100px',
    position: 'relative',
    zIndex: 2,
  }}
>
  <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
    <h2 className="fw-bold text-white text-center mb-4 display-4">Our Service Plans</h2>
    <h4 className="fw-semibold text-secondary text-center text-white mb-5 fs-5">
      We offer a range of energy efficiency assessment services tailored to your needs.
    </h4>

    <div className="row g-5 justify-content-center">
      {/* Intro Column */}
      <div className="col-md-3 d-flex">
        <div
          className="w-100 d-flex flex-column justify-content-between p-5 rounded-4 border border-info"
          style={{ backgroundColor: '#26292e', minHeight: '100%' }}
        >
          <h4 className="fw-bold text-white mb-4">Talk to us today about our services</h4>
          <button className="btn btn-outline-light fw-bold rounded-pill mt-auto px-4 py-2">
            Our Plans →
          </button>
        </div>
      </div>

      {/* Service Cards */}
      {[
        {
          title: 'Six-star assessments and reports',
          desc: '6-star energy reports (NatHERS) assess the thermal performance of new homes to ensure they meet minimum energy efficiency standards in Australia.',
          prices: [
            { type: 'Single Storey', amount: '$250+' },
            { type: 'Double Storey', amount: '$350+' },
            { type: 'Complex / Custom', amount: '$500+' },
          ],
        },
        {
          title: 'BESS assessments and reports',
          desc: 'The BESS tool helps demonstrate sustainable design compliance for planning permits as required by many Victorian councils.',
          prices: [
            { type: 'Single Storey', amount: '$500+' },
            { type: 'Double Storey', amount: '$650+' },
            { type: 'Complex / Custom', amount: '$800+' },
          ],
        },
        {
          title: 'WSUD and Storm assessments',
          desc: 'Water Sensitive Urban Design (WSUD) and stormwater reports are required to manage runoff and improve sustainability in urban developments.',
          prices: [
            { type: 'Single Storey', amount: '$400+' },
            { type: 'Double Storey', amount: '$550+' },
            { type: 'Complex / Custom', amount: '$700+' },
          ],
        },
      ].map((service, index) => (
        <div className="col-md-3 d-flex" key={index}>
          <div
            className="w-100 d-flex flex-column justify-content-start p-5 rounded-4 border border-info"
            style={{ backgroundColor: '#26292e', minHeight: '100%' }}
          >
            <h5 className="fw-bold text-white mb-3">{service.title}</h5>
            <p className="text-secondary mb-4">{service.desc}</p>
            <ul className="list-unstyled text-light">
              {service.prices.map((item, i) => (
                <li key={i} className="mb-2 fs-6">
                  <span role="img" aria-label="house">🏡</span>{' '}
                  <strong className="text-white">{item.type}</strong> —{' '}
                  <span className="fw-bold text-success fs-6">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default OurServices;

