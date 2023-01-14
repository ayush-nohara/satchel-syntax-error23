const hre = require("hardhat");

// import { RouterProtocol } from "@routerprotocol/router-js-sdk"

// let SDK_ID = 24 // get your unique sdk id by contacting us on Telegram
// let chainId = 137
// const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com", chainId)
// const routerprotocol = new RouterProtocol(SDK_ID, chainId, provider)
// await routerprotocol.initialize()

async function main() {
  const WalletFactory = await hre.ethers.getContractFactory("Wallet");
  const Walletcontract = await WalletFactory.deploy();
  await Walletcontract.deployed();
 

  const SwapFactory = await hre.ethers.getContractFactory("Wallet");
  const Swapcontract = await SwapFactory.deploy();
  await Swapcontract.deployed();


  console.log("deployed address wallet : ",Walletcontract.address);
  console.log("deployed address swap : ",Swapcontract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
