import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav>

      <h2>Balanced Life Massage</h2>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/services">Services</NavLink>
        <HashLink to="/services#faq">FAQ</HashLink>

        <NavLink to="/reviews">Client Reviews</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;