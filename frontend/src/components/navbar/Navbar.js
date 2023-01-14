import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import styles from "./Navbar.module.css";
import metmaskLogo from "./assets/metamaskLogo.svg";
import Button from "../Button/Button";
import navbarLogo from "./assets/navbarLogo.png";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const INFURA_ID = "39d0a671f0054022b0397310142aa07d";
  const ALCHEMY_ID = "3lHnfMmLVNgIynQHJVSY_3axbdbwM1AC";
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance1, setUserBalance1] = useState(null);
  const [userBalance2, setUserBalance2] = useState(null);
  const [userBalance3, setUserBalance3] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect");
  const [provider1, setProvider1] = useState(null);
  const [provider2, setProvider2] = useState(null);
  const [provider3, setProvider3] = useState(null);

  // const [text, setText]=useState("Connect Your Meta Mask");

  const connectWalletHandler = () => {
    // setText("Your Holdings");
    // console.log(text);
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider1(
        new ethers.providers.JsonRpcProvider(
          `https://eth-mainnet.g.alchemy.com/v2/pyZ_6xWRa6kYR6b6eiFTGiNX3wDX_xJD`
        )
      );
      setProvider2(
        new ethers.providers.JsonRpcProvider(
          `https://avalanche-fuji.infura.io/v3/${INFURA_ID}`
        )
      );
      setProvider3(
        new ethers.providers.JsonRpcProvider(
          `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`
        )
      );

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });

      //set Dashboard text
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider1.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance1(ethers.utils.formatEther(balanceResult).slice(0,6));
      });
    }
  }, [defaultAccount]);
  useEffect(() => {
    if (defaultAccount) {
      provider2.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance2(ethers.utils.formatEther(balanceResult).slice(0,6));
      });
    }
  }, [defaultAccount]);
  useEffect(() => {
    if (defaultAccount) {
      provider3.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance3(ethers.utils.formatEther(balanceResult).slice(0,6));
      });
    }
  }, [defaultAccount]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <div className={styles.navbarLinksLogo}>
            <img src={navbarLogo} alt="SATCHEL" />
          </div>
          <div className={styles.navbarLinksContainer}>
            <p>
              <a href="#Holdings">Holdings</a>
            </p>
            <p>
              <a href="#Send">Send</a>
            </p>
            <p>
              <a href="#Swap">Swap</a>
            </p>
            <p>
              <a href="#Contact">Contact</a>
            </p>
          </div>
          <div className={styles.navbarConnect}>
            <img src={metmaskLogo} alt="Metamask" />
            <button onClick={connectWalletHandler}>{connButtonText}</button>
          </div>
          {/* <div style={{ color: "white" }}>{userBalance1}</div>
          <div style={{ color: "white" }}>{userBalance2}</div>
          <div style={{ color: "white" }}>{userBalance3}</div> */}
        </div>
      </div>
      <Outlet
        context={{
          userBalance1,
          setUserBalance1,
          userBalance3,
          setUserBalance3,
          userBalance2,
          setUserBalance2,
          connButtonText,
          setConnButtonText,
        }}
      />
    </>
  );
};

export default Navbar;
