import React from "react";
import styles from "./Navbar.module.css";
import metmaskLogo from "./assets/metamaskLogo.svg"
import Button from "../Button/Button";
import navbarLogo from "./assets/satchelLogo.jpeg"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <div className={styles.navbarLinksLogo}>
            <img src={navbarLogo} alt="SATCHEL" />
        </div>
        <div className={styles.navbarLinksContainer}>
            <p><a href="#Holdings">Holdings</a></p>
            <p><a href="#Exchange">Exchange</a></p>
            <p><a href="#Swap">Swap</a></p>
            <p><a href="#Contact">Contact</a></p>
        </div>
        <div className={styles.navbarConnect}>
            <img src={metmaskLogo} alt="Metamask" />
            <Button title="Connect"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
