import React, { useState } from "react";
import styles from './SwapCard.module.css'
import Button from "../Button/Button";

const SendCard = () => {
  const [selects, setSelects] = useState();
  return (
    <div className={styles.sendCard}>
    <div className={styles.cardContainer}>
        <h2 className="gradient_text">Swap</h2>
      <form className={styles.sendCard} action="">
        <div className={styles.selectContainer}>
          <select className={styles.selector}>
            <option>ETH</option>
            <option>MATIC</option>
            <option>AVAX</option>
          </select>
          <input type="number" spellCheck="false" max="Infinity" min="0" placeholder="Enter Amount" className={styles.inputBox}/>
        </div>
        <div className={styles.selectContainer}>
          <select className={styles.selector}>
            <option>ETH</option>
            <option>MATIC</option>
            <option>AVAX</option>
          </select>
          <input type="string" placeholder="Reciver Address" className={styles.inputBox} />
        </div>
        <Button className={styles.SendButton} title="SWAP"></Button>
      </form>
      </div>
    </div>
  );
};

export default SendCard;
