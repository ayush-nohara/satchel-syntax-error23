import React from "react";
import styles from "./what.module.css";
import Feature from "../../components/feature/Feature";

const what = () => {
  return (
    <div className={styles.section}>
      <h3>What is Satchel</h3>
      <p className={styles.heading}>
        Wanna do a crypto transaction? Satchel got you covered! It allows you to
        send your crypto holdings to another metamask wallet, just in a flash
        click!.<br></br> Satchel has done a cakewalk for you to know your metamask
        balance on Three different testnets simultaneously, cool isn’t it! <br></br> Wait,
        you thought we can’t do more than this, right? Satchel also saves your
        time if you want to swap your tokens between two metamask wallets.
      </p>
    </div>
  );
};

export default what;
