import React, { useEffect, useState } from "react";
import styles from "./SwapCard.module.css";
import Button from "../Button/Button";
import { RouterProtocol } from "@routerprotocol/router-js-sdk";
import { ethers } from "ethers";

const SwapCard = () => {
  var chainID, senderTokenAddress, recieverTokenAddress;
  const options = ["MATIC","FTM"]
  const [amount, setAmount] = useState("");
  const [fees, setFees] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [senderChain, setSenderChain] = useState(options[0]);
  const [recieverChain, setRecieverChain] = useState(options[1]);

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
    try {
      let SDK_ID = 24; // get your unique sdk id by contacting us on Telegram
      let chainId = 137;
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-rpc.com",
        chainId
      );
      const routerprotocol = new RouterProtocol(SDK_ID, chainId, provider);
      await routerprotocol.initialize();
      console.log("success");

      let args = {
        amount: ethers.utils.parseUnits(formAmount, 18).toString(),
        dest_chain_id: 250, // ETH
        src_token_address: "0x0000000000000000000000000000000000001010", // MATIC on Polygon
        dest_token_address: "0x0100000000000000000000000000000000000001", // FANTOM
        user_address: "0xFabb6ACD9A125B5d318a242905251A188dA31C2a", // Metamask Addresss
        fee_token_address: "0x0000000000000000000000000000000000001010", // MATIC on Polygon
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
    } catch {
      console.log("err");
    }
  };

  return (
    <div className={styles.sendCard}>
      <div className={styles.cardContainer}>
        <h2 className="gradient_text">Swap</h2>
        <form className={styles.sendCard} action="">
          <div className={styles.selectContainer}>
          <select value={senderChain} 
       onChange={e => setSenderChain(e.target.value)} className={styles.selector}>
            {options.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
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
            <select value={recieverChain} 
       onChange={e => setRecieverChain(e.target.value)} className={styles.selector}>
            {options.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <p>You will get: {amount}</p>
          <p>Bridge Fees: {fees}</p>
          {/* <Button className={styles.SendButton} title="SWAP" ></Button> */}
          <button onClick={handleSubmit}>Get Quote</button>
        </form>
      </div>
      {/* {console.log((formAmount))} */}
    </div>
  );
};

export default SwapCard;
