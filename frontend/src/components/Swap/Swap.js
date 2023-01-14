import React from "react";
import styles from "./Swap.module.css";

const Swap = () => {
  return (
    <div className={styles.swap}>
      <div className={styles.swapContainer}>
        <div className={styles.swapContainerHeading}>Exchange Crypto</div>

        <div className={swapExchangePair}>
          <div className={swapPairInput}>
            <label className={sendLabel}>
              <span>You Send</span>
              <span>
                <input type="number" spellCheck="false" max="Infinity" min="0" className={sendInput}/>
                <div className={sendSearch}>
                    
                </div>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
