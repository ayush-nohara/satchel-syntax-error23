import React from "react";
import styles from "./Sponsor.module.css";

import RouterLogo from "./assets/RouterLogo.png";
import PolygonLogo from "./assets/PolygonLogo2.svg";

const replitLogo = "https://blog.replit.com/images/logo-dark.png";

const Sponsor = () => {
  return (
      <div className={styles.sponsor} >
        <span className="gradient_text">Powered By</span>
        
      <div>
        <img className={styles.Router} src={RouterLogo} alt="sponsorLogo" />
      </div>
      <div>
        <img className={styles.Polygon} src={PolygonLogo} alt="sponsorLogo"/>
      </div>
      {/* <div>
        <img className={styles.Replit} src={replitLogo} alt="sponsorLogo"/>
      </div> */}
    </div>
  );
};

export default Sponsor;
