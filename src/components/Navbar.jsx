import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaTasks } from "react-icons/fa";

import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig/Firebaseconfig";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successfully!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <FaTasks className="logo-icon" />
        <h2>TodoPro</h2>
      </div>

      {/* Links */}
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

      {/* Logout Button */}
      <button className="nav-btn" onClick={handleLogout}>
        Sign Out
      </button>

      {/* Mobile Menu */}
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