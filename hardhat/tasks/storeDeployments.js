const { task, types } = require("hardhat/config");
const { TASK_STORE_DEPLOYMENTS } = require("./task-names");
const fs = require("fs");

task(TASK_STORE_DEPLOYMENTS, "store deployments")
  .addParam("contractName", "Contract Name", "", types.string)
  .addParam("contractAddress", "Contract Address", "", types.string)
  .setAction(async (taskArgs, { ethers }) => {
    const network = await ethers.provider.getNetwork();
    const networkID = network.chainId;

    const deployedContracts = require("../deployments/deployments.json");

    if (typeof deployedContracts[networkID] === "undefined") {
      deployedContracts[networkID] = {};
    }

    deployedContracts[networkID][taskArgs.contractName] =
      taskArgs.contractAddress;

    fs.writeFileSync(
      "deployments/deployments.json",
      JSON.stringify(deployedContracts)
    );

   
  });