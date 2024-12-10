import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyLogo</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="#home" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>About</a>
        </li>
        <li style={styles.navItem}>
          <a href="#services" style={styles.navLink}>Services</a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.navLink}>Contact</a>
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
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    textDecoration: "none",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default Navbar;
