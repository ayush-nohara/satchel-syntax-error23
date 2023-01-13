import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, balance, image }) => {
//   var containerClass;
//   if (index % 3 === 0) {
//     containerClass = styles.blueContainer;
//   } else if (index % 3 === 1) {
//     containerClass = styles.purpleContainer;
//   } else if (index % 3 === 2) {
//     containerClass = styles.yellowContainer;
//   }
  return (
    <div className={styles.container}>
      <div className={styles.images}><img className={styles.image} src={image} /></div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.amount}>{balance}</div>
        {/* <div className={styles.socials}>
          <a href={twitter} target={'_blank'}><img src={twitterLogo} alt="" /></a>
          <a href={linkedin} target={'_blank'}><img src={linkedinLogo} alt="" /></a>
        </div> */}
      </div>
    </div>
  );
};

export default Card;