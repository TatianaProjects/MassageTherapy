import {useState} from 'react';
import { services } from "./ServicesData";
import FAQ from "./FAQ";

function Services() {

  

  const [category, setCategory] = useState("All");

  const filteredServices =
  category === "All" ? services : services.filter(
        service => service.category === category
      );

return (
    <div className="page-container services-page">

      <h1>Our Services</h1>

        <div className="filter-buttons">

            <button onClick={() => setCategory("All")}>
              All
            </button>

            <button onClick={() => setCategory("Relaxation")}>
              Relaxation
            </button>

            <button onClick={() => setCategory("Therapeutic")}>
              Therapeutic
            </button>

            <button onClick={() => setCategory("Specialty")}>
              Specialty
            </button>

        </div>

      <div className="services-container">

        {filteredServices.map((service) => (
          <div className="service-card glass-card" key={service.id}>

            <h2>{service.title}</h2>
            <p>{service.duration}</p>
            <p className="price">{service.price}</p>
            <p>{service.description}</p>

          </div>
        ))}

      </div>

      <div id="faq" className="faq-section">
        <h2 className="section-title">Service Information</h2>
        <FAQ />
      </div>


    </div>
  );
}

export default Services;