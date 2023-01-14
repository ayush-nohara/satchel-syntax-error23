import React, { useEffect, useState,useRef } from "react";
import styles from "./SwapCard.module.css";
import Button from "../Button/Button";
import { RouterProtocol } from "@routerprotocol/router-js-sdk";
import { ethers ,providers} from "ethers";
import Web3Modal from "web3modal";
import env from "react-dotenv";

const SwapCard = () => {
  // var chainID, senderTokenAddress, recieverTokenAddress;
  const options = ["MATIC", "FTM"];
  const [amount, setAmount] = useState("");
  const [fees, setFees] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [senderChain, setSenderChain] = useState(options[0]);
  const [recieverChain, setRecieverChain] = useState(options[1]);
  const [boolSwap, setBoolSwap] = useState(false);
  const web3ModalRef = useRef();

  // if(senderChain === "MATIC"){
  //   senderTokenAddress = "0x0000000000000000000000000000000000001010";
  // }
  // else if (senderChain === "FTM") {
  //   senderTokenAddress = "0x0100000000000000000000000000000000000001";
  // }

  // if(recieverChain === "MATIC"){
  //   chainID = 137;
  //   recieverTokenAddress = "0x0000000000000000000000000000000000001010";
  // }
  // else if (recieverChain === "FTM") {
  //   chainID = 250;
  //   recieverTokenAddress = "0x0100000000000000000000000000000000000001";
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
      let SDK_ID = 24; // get your unique sdk id by contacting us on Telegram
      let chainId = 137;
      // const provider = new ethers.providers.JsonRpcProvider(
      //   "https://polygon-mainnet.g.alchemy.com/v2/3lHnfMmLVNgIynQHJVSY_3axbdbwM1AC",
      //   chainId
      // );
      const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        if (needSigner) {
          const signer = web3Provider.getSigner();
          return signer;
        }
        return web3Provider;
      };

      const provider = await getProviderOrSigner();

      const routerprotocol = new RouterProtocol(SDK_ID, chainId, provider);
      await routerprotocol.initialize();
      console.log("success");

      let args = {
        amount: ethers.utils.parseUnits(formAmount, 18).toString(),
        dest_chain_id: 250, // FTM
        src_token_address: "0x4c28f48448720e9000907BC2611F73022fdcE1fA", // MATIC on Polygon
        dest_token_address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", // FANTOM
        user_address: "0xFabb6ACD9A125B5d318a242905251A188dA31C2a", // Metamask Addresss
        fee_token_address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4", // ROUTE on Polygon
        slippage_tolerance: 2.0,
      };
      console.log("success");

      const quote = await routerprotocol.getQuote(
        args.amount,
        args.dest_chain_id,
        args.src_token_address,
        args.dest_token_address,
        args.user_address,
        args.fee_token_address,
        args.slippage_tolerance
      );
      console.log(quote.destination.tokenAmount);
      setAmount(
        `${parseInt(quote.destination.tokenAmount) / 10 ** 18} ${
          quote.destination.asset.symbol
        }`
      );
      setFees(
        `${parseInt(quote.source.bridgeFee.amount) / 10 ** 18} ${
          quote.source.bridgeFee.symbol
        }`
      );
       
    // const handleSwap = async () => {
    // get allowance and give the relevant approvals
    const wallet = new ethers.Wallet(env.REACT_APP_PRIVATE_KEY, provider); // provider was set up while initializing an instance of RouterProtocol

    let src_token_allowance = await routerprotocol.getSourceTokenAllowance(
      args.src_token_address,
      args.dest_chain_id,
      args.user_address
    );
    
    if (src_token_allowance.lt(ethers.constants.MaxUint256)) {
      await routerprotocol.approveSourceToken(
        args.src_token_address,
        args.user_address,
        ethers.constants.MaxUint256,
        args.dest_chain_id,
        wallet
      );
    }

    if (
      ethers.utils.getAddress(args.src_token_address) !==
      ethers.utils.getAddress(args.fee_token_address)
    ) {
      
      let fee_token_allowance = await routerprotocol.getFeeTokenAllowance(
        args.fee_token_address,
        args.dest_chain_id,
        args.user_address
      );

      if (fee_token_allowance.lt(ethers.constants.MaxUint256)) {
        await routerprotocol.approveFeeToken(
          args.fee_token_address,
          args.user_address,
          ethers.constants.MaxUint256,
          wallet
        );
      }

      // execute the transaction
      let tx;
      try {
        tx = await routerprotocol.swap(quote, wallet);
        console.log(`Transaction successfully completed. Tx hash: ${tx.hash}`);
      } catch (e) {
        console.log(`Transaction failed with error ${e}`);
        return;
      }

      // fetching the status of the transaction
      setTimeout(async function () {
        let status = await routerprotocol.getTransactionStatus(tx.hash);
        console.log(status);
        if (status.tx_status_code === 1) {
          console.log("Transaction completed");
          // handle the case where the transaction is complete
        } else if (status.tx_status_code === 0) {
          console.log("Transaction still pending");
          // handle the case where the transaction is still pending
        }
      }, 180000); // waiting for sometime before fetching the status of the transaction because it may take some time for the transaction to get indexed
    }
    // catch {
    //   console.log("err");
    // }

    
    
  };

  return (
    <div className={styles.sendCard}>
      <div className={styles.cardContainer}>
        <h2 className="gradient_text">Swap</h2>
        <form className={styles.sendCard} action="">
          <div className={styles.selectContainer}>
            <select
              value={senderChain}
              onChange={(e) => setSenderChain(e.target.value)}
              className={styles.selector}
            >
              <option>MATIC</option>
            </select>
            <input
              type="string"
              spellCheck="false"
              max="Infinity"
              min="0"
              onChange={(e) => setFormAmount(e.target.value)}
              placeholder="Enter Amount"
              className={styles.inputBox}
            />
          </div>
          <div className={styles.selectContainer}>
            <select
              value={recieverChain}
              onChange={(e) => setRecieverChain(e.target.value)}
              className={styles.selector1}
            >
              <option>FTM</option>
            </select>
          </div>
          <p className={styles.p}>You will get: {amount}</p>
          <p className={styles.p}>Bridge Fees: {fees}</p>
          {/* <Button onClick={handleSubmit} className={styles.SendButton} title="GET QUOTE" ></Button> */}
          <button className={styles.btn} onClick={handleSubmit}>
            SWAP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SwapCard;
