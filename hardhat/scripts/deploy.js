const hre = require("hardhat");



async function main() {
  const contractFactory = await hre.ethers.getContractFactory("SendMoney");
  const contract = await contractFactory.deploy();
  await contract.deployed(); 

  console.log("contract deployed at: "+contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
