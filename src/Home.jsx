import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <p className="subtitle">Wellness • Relaxation • Balance</p>

          <h1>Restore Your Body.<br />Renew Your Mind.</h1>

          <p className="hero-text">
            Experience personalized massage therapy
            designed to reduce stress and improve well-being.
          </p>

          <Link to="/contact">
              <button>Book a Session</button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Home;