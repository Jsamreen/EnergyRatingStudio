
const ContactPage = () => {
  return (
    <>
      {/* HERO SECTION with Contact Form */}
      <div
        className="position-relative text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/contact_us_hero.png')",
          marginTop: -30,
          paddingTop: '60px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '75vh',
          zIndex: 1,
        }}
      >
         <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    }}
  ></div>
        <div className="text-center position-absolute" style={{ top: '5%', zIndex: 2 }}>
          <h3 className="fw-bold">Ready to power up your next build?</h3>
        </div>

        <div
          className="bg-dark rounded shadow p-4"
          style={{ maxWidth: '500px', width: '100%', zIndex: 3 }}
        >
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name (required)" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email (required)" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className=" mb-3">
              <label htmlFor="planUpload" className="form-label fw-bold">Attach Plan (optional)</label>
              <input type="file" className="form-control" id="planUpload" accept=".pdf,.doc,.docx,.jpg,.png" />
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-success px-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* EMBEDDED MAP SECTION */}
      <div className="w-100" style={{ height: '400px' }}>
        <iframe
          src="https://www.google.com/maps?q=30+Laino+Blvd,+Epping+VIC+3076,+Australia&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ERS Studio Map"
        />
      </div>
      {/* CTA FOOTER */}
      <div className="bg-light text-center py-4">
        <p className="fs-5 fw-bold">
          Get your property energy rating certified with six rate
          <button className="btn btn-success btn-sm ms-3 px-3">GET IN TOUCH</button>
        </p>
      </div>
    </>
  );
};

export default ContactPage;