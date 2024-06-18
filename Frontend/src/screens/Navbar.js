import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import boldFont from "../screens/fonts/bold.ttf";
import lightFont from "../screens/fonts/light.ttf";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "linear-gradient(90deg, #FF7A01, #FF9901)",
      color: "white",
      borderRadius: "15px",
      margin: "10px",
      fontFamily: "BoldFont, sans-serif",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
      color: "white",
      fontFamily: "BoldFont, sans-serif",
    },
    blackText: {
      color: "#181818",
      fontSize: "2rem",
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
      position: "relative",
    },
    navLink: {
      textDecoration: "none",
      fontSize: "1.3rem",
      color: "white",
      transition: "color 0.3s, transform 0.3s",
      fontFamily: "lightFont, sans-serif",
      position: "relative",
    },
    navLinkHover: {
      color: "black",
      transform: "scale(1.1)",
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

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

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
          <li
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              style={{
                ...styles.navLink,
                ...(hoveredItem === "home" && styles.navLinkHover),
              }}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/about"
              style={{
                ...styles.navLink,
                ...(hoveredItem === "about" && styles.navLinkHover),
              }}
            >
              <FontAwesomeIcon icon={faAddressBook} /> About
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/contact"
              style={{
                ...styles.navLink,
                ...(hoveredItem === "contact" && styles.navLinkHover),
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
