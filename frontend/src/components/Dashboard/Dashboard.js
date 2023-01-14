import React from "react";
import styles from "./Dashboard.module.css";
import { Outlet, useOutletContext } from "react-router-dom";

import After from "./After";
import Before from "./Before";

// let DashboardText="Your Holdings"

const Dashboard = (props) => {
  const { connButtonText } = useOutletContext();

  return (
    <>
      <div className={styles.container}>
        {connButtonText === "Connect" ? <Before /> : <After />}
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
