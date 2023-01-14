import React from "react";
import styles from "./Footer.module.css";
import NavbarLogo from "./assets/footerLogo.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerHeading}>
          <h2 className="gradient_text">Made with ❤️ by some tech geeks</h2>
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
          <h4>Supported coins</h4>
          <p>MATIC</p>
          <p>AVAX</p>
          <p>ETH</p>
          <p></p>
        </div>
        <div className={styles.footerLinksDiv}>
          <h4>Contact us</h4>
          <p><a href="https://www.linkedin.com/in/aman-lachhiramka-238085224/">LinkedIn</a></p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Mail</p>
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
