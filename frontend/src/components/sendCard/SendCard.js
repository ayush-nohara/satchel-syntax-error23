import React, { useState } from "react";
import styles from './SendCard.module.css'
import Button from "../Button/Button";
import web3modal from "web3modal";
import { providers, Contract } from "ethers";
// import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";

const SendCard = () => {
  const [selects, setSelects] = useState();






  return (
    <div className={styles.sendCard}>
    <div className={styles.cardContainer}>
        <h2 className="gradient_text">Send</h2>
      <form className={styles.sendCard} action="">
        <div className={styles.selectContainer}>
          <select className={styles.selector}>  
            <option>MATIC</option>
          </select>
          <input type="number" spellCheck="false" max="Infinity" min="0" placeholder="Enter Amount" className={styles.inputBox}/>
        </div>
        <div className={styles.selectContainer}>
          <select className={styles.selector}>
            <option>MATIC</option>
          </select>
          <input type="string" placeholder="Reciver Address" className={styles.inputBox} />
        </div>
        <Button className={styles.SendButton} title="SEND"></Button>
      </form>
      </div>
    </div>
  );
};

export default SendCard;
