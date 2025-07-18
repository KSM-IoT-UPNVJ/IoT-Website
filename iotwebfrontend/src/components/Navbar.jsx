import React, { useState } from 'react';
import logo from "../assets/IoT_Logo.png";
import Today from "../assets/Today.png";
import { FaChevronDown } from "react-icons/fa"; // Install dulu: npm i react-icons

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="KSM IoT Logo" className="navbar-logo" />
        <div className="logo">
          <span>
            KSM Internet Of Things<br />
            <small>UPN “Veteran” Jakarta</small>
          </span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-toggle">
                About <FaChevronDown size={12} />
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="#">About Us</a></li>
                  <li><b href="#">Kepengurusan</b></li>
                </ul>
              )}
            </li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <img src={Today} alt="Today Logo" className="navbar-Today" />
      </div>
    </header>
  );
};

export default Navbar;