import React from "react";
import Card from "../Card/Card";
import eth from "./assets/ethereum.svg";
import polygon from "./assets/polygon.svg";
import avax from "./assets/avax.svg";
import styles from "./Dashboard.module.css";
import { Outlet, useOutletContext } from "react-router-dom";

const Dashboard = (props) => {
  const { userBalance1,userBalance2,userBalance3 } = useOutletContext();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className="gradient_text">Your Holdings</h1>
        </div>
        <div className={styles.cards}>
          <Card
            index={1}
            image={polygon}
            name={"Mumbai"}
            balance={`${userBalance3} MATIC`}
          />
          <Card
            index={2}
            image={avax}
            name={"Fuji"}
            balance={`${userBalance2} AVAX`}
          />
          <Card
            index={0}
            image={eth}
            name={"GoerliETH"}
            balance={`${userBalance1} ETH`}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
