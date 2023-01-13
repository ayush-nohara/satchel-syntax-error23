import React, {useState, useEffect} from "react";
import {ethers} from 'ethers'
import styles from "./Navbar.module.css";
import metmaskLogo from "./assets/metamaskLogo.svg"
import Button from "../Button/Button";
import navbarLogo from "./assets/satchelLogo.jpeg"

const Navbar = () => {

  const INFURA_ID='39d0a671f0054022b0397310142aa07d';
  const ALCHEMY_ID='9dWF1cZRZn3v2bp_txmtjieSMlkCJZDB';
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance1, setUserBalance1] = useState(null);
  const [userBalance2, setUserBalance2] = useState(null);
  const [userBalance3, setUserBalance3] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect');
	const [provider1, setProvider1] = useState(null);
  const [provider2, setProvider2] = useState(null);
  const [provider3, setProvider3] = useState(null);


  const connectWalletHandler = () => {
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			setProvider1(new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`));
      setProvider2(new ethers.providers.JsonRpcProvider(`https://avalanche-fuji.infura.io/v3/${INFURA_ID}`));
      setProvider3(new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				setConnButtonText('Wallet Connected');
				setDefaultAccount(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

  useEffect(() => {
    if(defaultAccount){
    provider1.getBalance(defaultAccount)
    .then(balanceResult => {
      setUserBalance1(ethers.utils.formatEther(balanceResult));
    })
    };
  }, [defaultAccount]);
  useEffect(() => {
    if(defaultAccount){
    provider2.getBalance(defaultAccount)
    .then(balanceResult => {
      setUserBalance2(ethers.utils.formatEther(balanceResult));
    })
    };
  }, [defaultAccount]);
  useEffect(() => {
    if(defaultAccount){
    provider3.getBalance(defaultAccount)
    .then(balanceResult => {
      setUserBalance3(ethers.utils.formatEther(balanceResult));
    })
    };
  }, [defaultAccount]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <div className={styles.navbarLinksLogo}>
            <img src={navbarLogo} alt="SATCHEL" />
        </div>
        <div className={styles.navbarLinksContainer}>
            <p><a href="#Holdings">Holdings</a></p>
            <p><a href="#Exchange">Exchange</a></p>
            <p><a href="#Swap">Swap</a></p>
            <p><a href="#Contact">Contact</a></p>
        </div>
        <div className={styles.navbarConnect}>
            <img src={metmaskLogo} alt="Metamask" />
            <button onClick={connectWalletHandler}>{connButtonText}</button>
        </div>
        <div style={{color: "white"}}>{userBalance1}</div>
        <div style={{color: "white"}}>{userBalance2}</div>
        <div style={{color: "white"}}>{userBalance3}</div>
        
      </div>
    </div>
  );
};

export default Navbar;
