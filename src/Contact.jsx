import { useState } from "react";
import { services } from "./ServicesData";
import swal from "sweetalert";

function Contact() {

  const [appointment, setAppointment] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "name") {

      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");

      setAppointment({
        ...appointment,
        [name]: lettersOnly
      });

      return;
    }

    setAppointment({
      ...appointment,
      [name]: value
    });
  };

  const validateForm = () => {

    let newErrors = {};

    if (appointment.name.trim().length < 3) {
      newErrors.name = "Please enter at least 3 characters.";
    }

    if (appointment.phone.trim().length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (
      !appointment.email.includes("@") ||
      !appointment.email.includes(".")
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    const selectedDate = new Date(appointment.date);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      newErrors.date = "Please select today or a future date.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    localStorage.setItem(
      "appointment",
      JSON.stringify(appointment)
    );

    swal({
      title: "Appointment Booked!",
      text: "We look forward to helping you relax and restore balance.",
      icon: "success",
      button: "OK"
    });

    setAppointment({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: ""
    });

    setErrors({});
  };

  return (
    <div className="page-container contact-page">

      {/* BOOKING FORM */}

      <div className="glass-card booking-card">

        <h2 className="section-title">
          Book Your Appointment
        </h2>

        <p className="section-description">
          Schedule your preferred massage session using the form below.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={appointment.name}
            onChange={handleChange}
            required
          />

          {errors.name && (
            <p className="error">{errors.name}</p>
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={appointment.phone}
            onChange={handleChange}
            required
          />

          {errors.phone && (
            <p className="error">{errors.phone}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={appointment.email}
            onChange={handleChange}
            required
          />

          {errors.email && (
            <p className="error">{errors.email}</p>
          )}

          <select
            name="service"
            value={appointment.service}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Service
            </option>

            {services.map((service) => (
              <option
                key={service.id}
                value={service.title}
              >
                {service.title}
              </option>
            ))}

          </select>

          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />

          {errors.date && (
            <p className="error">{errors.date}</p>
          )}

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>

      {/* LOCATION */}

      <div className="location-section glass-card">

        <div className="location-info">

          <h2>Visit Our Studio</h2>

          <p>Conveniently located in Kanata, on the west side of Ottawa.</p>
          <p>Free parking available.</p>
          <p>Calm and welcoming wellness environment.</p>
          <p>Flexible appointment scheduling.</p>

        </div>

        <div className="location-map">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Kanata,Ottawa,Ontario&output=embed"
            loading="lazy"
          />

        </div>

      </div>

      {/* CONTACT INFO */}

      <h2 className="section-title">Contact Information</h2>

      <div className="contact-container">

        <div className="glass-card contact-card">
          <h3>📞 Phone</h3>
          <a href="tel:+16135551234">
            (613) 555-1234
          </a>
        </div>

        <div className="glass-card contact-card">
          <h3>✉ Email</h3>
          <a href="mailto:info@balancedlife.ca?subject=Massage Appointment">
            info@balancedlife.ca
          </a>
        </div>

        <div className="glass-card contact-card">
          <h3>🕒 Hours</h3>
          <p>Mon - Fri: 9 AM - 7 PM</p>
          <p>Sat: 10 AM - 5 PM</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;