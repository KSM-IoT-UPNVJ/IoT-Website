import React from "react";
import logo from "../assets/IoT_Logo.png";
import Today from "../assets/Today.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav>
          <ul className="footer-column">
            <h3>Contact Info</h3>
            <li>
              <a href="#">Contact Info</a>
            </li>
            <li>
              <a href="#">Contact Info</a>
            </li>
          </ul>
        </nav>

        <div className="footer-center">
          <img src={logo} alt="KSM IoT Logo" className="footer-logo" />
          <div className="footer-centerN">
            <h1>KSM Internet Of Things</h1>
            <p>UPN “Veteran” Jakarta</p>
          </div>
          <img src={Today} alt="KSM IoT Logo" className="footer-Today" />
          <div className="footer-icons">
            <a href="#">
              <FaLinkedin size={28} />
            </a>
            <a href="#">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        <nav>
          <ul className="footer-column">
            <h3>Quick Links</h3>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">IoT Insight</a>
            </li>
            <li>
              <a href="#">Article</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 – Kumkum, Fairly, And Azriel KSM IoT UPNVJ</p>
      </div>
    </footer>
  );
};

export default Footer;
