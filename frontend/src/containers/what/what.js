import React from "react";
import styles from "./what.module.css";

const what = () => {
  return (
    <div className={styles.section}>
      <h3>What is Satchel</h3>
      <hr className={styles.line}/>
      <p className={styles.heading}>
        Wanna do a crypto transaction? Satchel got you covered! It allows you to
        send your crypto holdings to another metamask wallet even on different chains, just in a flash
        click!.<br></br> Satchel has made it a cakewalk for you to know your metamask
        balance on three different main-nets simultaneously, cool isn’t it! <br></br> Wait,
        you thought we can’t do more than this, right? Satchel also saves your
        time if you want to swap your tokens between two metamask wallets even cross-chain.
      </p>
    </div>
  );
};

export default what;
