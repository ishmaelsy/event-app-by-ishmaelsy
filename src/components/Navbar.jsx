import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  // menuOpen is for the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
       {/* logo is usually a link to Home page but decided to deactivate it  */}
      <Link to="#" className="logo">GhanaEvents</Link>

      {/* the "open" class shows the links on mobile */}
      <div className={menuOpen ? "links open" : "links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>

      {/* dark mode button: flips dark from true to false and back */}
      <button className="small-btn" onClick={() => props.setDark(!props.dark)}>
        {props.dark ? "Light" : "Dark"}
      </button>

      {/* this button only shows on small screens */}
      <button className="small-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>
    </nav>
  );
}

export default Navbar;
