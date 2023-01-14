//const { Contract } = require("ethers");
const { task, types } = require("hardhat/config");
const { TASK_MAP_CONTRACT } = require("./task-names");

task(TASK_MAP_CONTRACT, "Map Contracts")
  .addParam(
    "chainid",
    "Remote ChainID (Router Specs)",
    "",
    types.string
  )
  .addParam("nchainid", "Remote ChainID", "", types.string)
  .setAction(async (taskArgs, hre) => {
    const deployments = require("../deployments/deployments.json");
    const handlerABI = require("../build/contracts/genericHandler.json");

    const network = await hre.ethers.provider.getNetwork();
    const lchainID = network.chainId.toString();

    const handlerContract = await hre.ethers.getContractAt(
      handlerABI,
      deployments[lchainID].handler
    );

    await handlerContract.MapContract([
      deployments[lchainID].Swapper,
      taskArgs.chainid,
      deployments[taskArgs.nchainid].Swapper,
    ]);

    console.log("Swapper Mapping Done");
   
  });