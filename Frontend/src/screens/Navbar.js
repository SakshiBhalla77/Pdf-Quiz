import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

import boldFont from "../screens/fonts/bold.ttf"; // Import bold font file
import lightFont from "../screens/fonts/light.ttf"; // Import light font file

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "linear-gradient(90deg, #FF7A01, #FF9901)", // Gradient background
      color: "white", // White text
      borderRadius: "15px", // Rounded edges
      margin: "10px", // Optional: add margin to ensure it doesn't touch the edges of the screen
      fontFamily: "BoldFont, sans-serif", // Apply custom font family
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow for depth
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
      fontFamily: "BoldFont, sans-serif", // Apply custom font family
    },
    blackText: {
      color: "#181818", // Black text
      fontSize: "2rem", // Larger font size
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      margin: "0",
      padding: "0",
    },
    navItem: {
      marginLeft: "20px",
      fontSize: "1.1rem",
      position: "relative", // For underline hover effect
    },
    navLink: {
      textDecoration: "none",
      fontSize: "1rem",
      color: "white", // White text
      transition: "color 0.3s, transform 0.3s",
      fontFamily: "lightFont, sans-serif", // Apply light font family
      position: "relative",
    },
    navLinkHover: {
      color: "#FFD700", // Hover text color
      transform: "scale(1.1)", // Slightly enlarge on hover
    },
    navLinkUnderline: {
      content: "",
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-4px",
      left: "0",
      backgroundColor: "#FFD700",
      transition: "width 0.3s",
    },
    navLinkUnderlineHover: {
      width: "100%",
    },
  };

  const fontStyles = `
    @font-face {
      font-family: 'BoldFont';
      src: url(${boldFont}) format('truetype');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'lightFont';
      src: url(${lightFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  `;
  return (
    <>
      <style>{fontStyles}</style>
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 style={styles.navTitle}>
              PDF<span style={styles.blackText}>2</span>Quiz
            </h1>
          </Link>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>
              <FontAwesomeIcon icon={faAddressBook} /> About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
