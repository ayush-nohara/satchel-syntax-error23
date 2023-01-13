import React from "react";
import styles from "./Navbar.module.css";
import metmaskLogo from "./assets/metamaskLogo.svg"
import navbarLogo from "./assets/satchelLogo.jpeg"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <div className={styles.navbarLinksLogo}>
            <img src={navbarLogo} alt="SATCHEL" />
        </div>
        <div className={styles.navbarLinksContainer}>
            <p><a href="#home">Home</a></p>
            <p><a href="#home">Home</a></p>
            <p><a href="#home">Home</a></p>
            <p><a href="#home">Home</a></p>
            <p><a href="#home">Home</a></p>
        </div>
        <div className={styles.navbarConnect}>
            <img src={metmaskLogo} alt="Metamask" />
            <button>CONNECT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
