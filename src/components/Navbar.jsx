import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaTasks } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <FaTasks className="logo-icon" />
        <h2>TodoPro</h2>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </li>

        <li>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
        </li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;