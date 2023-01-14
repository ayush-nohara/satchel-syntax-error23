import React from "react";
import styles from "./Dashboard.module.css";
import { Outlet, useOutletContext } from "react-router-dom";
import Card from "../Cards/Card";
import eth from "./assets/ethereum.svg";
import polygon from "./assets/polygon.svg";
import avax from "./assets/avax.svg";

const After = () => {
  const { userBalance1, userBalance2, userBalance3, connButtonText } =
    useOutletContext();
  return (
    <>
      <div className={styles.heading}>
        <h1 className="gradient_text">Your Holdings</h1>
      </div>
      <div className={styles.cards}>
        <Card
          index={1}
          image={polygon}
          name={"Polygon"}
          balance={`${userBalance3} MATIC`}
        />
        {/* <Card
          index={2}
          image={avax}
          name={"Fuji"}
          balance={`${userBalance2} AVAX`}
        /> */}
        <Card
          index={0}
          image={eth}
          name={"Ethereum "}
          balance={`${userBalance1} ETH`}
        />
      </div>
      <Outlet />
    </>
  );
};

export default After;
