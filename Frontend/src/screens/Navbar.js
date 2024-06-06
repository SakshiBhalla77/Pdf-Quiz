import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faEnvelope,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        {/* <img src="logo.png" alt="Logo" style={styles.logo} /> */}
        <h1 style={styles.navTitle}>PDF2Quiz</h1>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" className="nav-link">
            <FontAwesomeIcon icon={faAddressBook} /> About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" className="nav-link">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/quiz" className="nav-link">
            <FontAwesomeIcon icon={faQuestionCircle} /> Quiz
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#4B0082", // Purple background
    color: "white", // White text
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  navTitle: {
    margin: "0",
    fontSize: "1.5rem",
    color: "white", // White text
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    margin: "0",
    padding: "0",
  },
  navItem: {
    marginLeft: "20px",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "1rem",
    color: "white", // White text
    transition: "color 0.3s",
  },
};

export default Navbar;
