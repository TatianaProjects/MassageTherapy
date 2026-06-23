import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Balanced Life Massage</h2>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/reviews">Client Reviews</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;