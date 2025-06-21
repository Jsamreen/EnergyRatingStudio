const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-0"
      style={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#000',
        backdropFilter: 'blur(4px)',
        zIndex: 1,
      }}>
      <div className="container">
        <div className="row">

          {/* LEFT: Contact Info & Links */}
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Get in Touch</h5>
            <p className="mb-1">Talha Ahmed</p>
            <p className="mb-1">0451 215 223</p>
            <p>talha@energyratingtudio.com.au</p>

            <h6 className="mt-4">Follow Us</h6>
            <a href="#" className="text-white me-3 text-decoration-none">Instagram</a>
            <a href="#" className="text-white me-3 text-decoration-none">LinkedIn</a>
            <a href="#" className="text-white text-decoration-none">YouTube</a>

            <div className="text-white text-muted small mt-4"> 
              <p className="mb-1 text-white">© {new Date().getFullYear()} Energy Rating Studio. All Rights Reserved.</p>
              <p
               className="mb-1 text-white">Privacy Policy | Designed by Javeria</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
