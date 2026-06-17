function Contact() {
  return (
    <div className="page-container contact-page">

      <h1>Contact Us</h1>

      <div className="contact-container">

        <div className="glass-card contact-card">
          <h3>📞 Phone</h3>
          <a href="tel:+16135551234">(613) 555-1234</a>
        </div>

        <div className="glass-card contact-card">
          <h3>✉ Email</h3>
          <a href="mailto:info@renewandrelax.ca?subject=Massage Appointment">info@renewandrelax.ca</a>
        </div>

        <div className="glass-card contact-card">
          <h3>🕒 Hours</h3>
          <p>Mon - Fri: 9 AM - 7 PM</p>
          <p>Sat: 10 AM - 5 PM</p>
        </div>

      </div>

      <div className="glass-card location-card">
          <h3>📍 Location</h3>
          <p className="location-text">Conveniently located in Ottawa, Ontario.</p>
      

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Ottawa,Ontario&output=embed"
            loading="lazy"/>

      </div>


    </div>
  );
}

export default Contact;