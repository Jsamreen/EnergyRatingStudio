import './ContactUs.css';
 

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', e.target.name.value);
  formData.append('contact', e.target.contact.value);
  formData.append('email', e.target.email.value);
  formData.append('subject', e.target.subject.value);
  formData.append('message', e.target.message.value);

  const fileInput = e.target.planUpload;
  if (fileInput.files.length > 0) {
    formData.append('attachment', fileInput.files[0]);
  }

  try {
    const res = await fetch('https://energyratingstudio-backend.onrender.com/api/contact/', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Message submitted!');
      e.target.reset();
    } else {
      alert('Error submitting the form');
    }
  } catch (error) {
    console.error('Submit error:', error);
    alert('Submission failed');
  }
};

const ContactPage = () => {
  return (
    <>
      {/* HERO SECTION with Contact Form */}
      <div
        className="position-relative text-white d-flex align-items-center justify-content-center contact-hero"
        style={{
          backgroundImage: "url('/contact_us_hero.png')",
          marginTop: -20,
          paddingTop: '100px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
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

        <div className="text-center position-absolute" style={{ top: '10%', zIndex: 2 }}>
          <h3 className="fw-bold">Ready to power up your next build?</h3>
        </div>

        <div
          className="bg-dark rounded shadow p-4 contact-form-wrapper"
          style={{ maxWidth: '500px', width: '100%', zIndex: 2, marginBottom: '60px' }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name (required)"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="contact"
                className="form-control"
                placeholder="Your Contact Number (optional)"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email (required)"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="planUpload" className="form-label fw-bold">
                Attach Plan (optional)
              </label>
              <input
                type="file"
                name="planUpload"
                className="form-control"
                id="planUpload"
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
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
    </>
  );
};

export default ContactPage;
