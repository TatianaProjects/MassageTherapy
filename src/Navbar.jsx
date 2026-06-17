import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Renew & Relax</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/reviews">Client Reviews</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;