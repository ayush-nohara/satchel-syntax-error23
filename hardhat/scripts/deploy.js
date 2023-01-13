const hre = require("hardhat");

async function main() {
  const WalletFactory = await hre.ethers.getContractFactory("Wallet");
  const Walletcontract = await WalletFactory.deploy();
  await Walletcontract.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
