import React from "react";
import styles from "./Footer.module.css";
import NavbarLogo from "./assets/footerLogo.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerHeading}>
          <h1 className="gradient_text">Footer</h1>
      </div>
      <div className={styles.footerBtn}>
        <p>Hello from Satchel</p>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.footerLinksLogo}>
          <img src={NavbarLogo} alt="Satchel" />
          <p>Hello from Satchel</p>
        </div>
        <div className={styles.footerLinksDiv}>
          <h4>Links</h4>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
        </div>
        <div className={styles.footerLinksDiv}>
          <h4>About us</h4>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
        </div>
        <div className={styles.footerLinksDiv}>
          <h4>Get in Touch</h4>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>© 2023. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
