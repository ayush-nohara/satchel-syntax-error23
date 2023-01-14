const { task, types } =  require("hardhat/config");
//const { Contract } = require("ethers");
const { TASK_UNMAP_CONTRACT } = require("./task-names");

// chainid = Chain IDs defined by Router. Eg: Polygon, Fantom and BSC are assigned chain IDs 1, 2, 3.
// nchainid = Actual Chain IDs
task(TASK_UNMAP_CONTRACT, "Unmap Contracts")
  .addParam(
    "chainid",
    "Remote ChainID (Router Specs)",
    "",
    types.string
  )
  .addParam("nchainid", "Remote ChainID", "", types.string)
  .setAction(async (taskArgs, hre)=> {
    const deployments = require("../deployments/deployments.json");
    const handlerABI = require("../build/contracts/genericHandler.json");
    const network = await hre.ethers.provider.getNetwork();
    const lchainID = network.chainId.toString();

    const handlerContract = await hre.ethers.getContractAt(
      handlerABI,
      deployments[lchainID].handler
    );

    await handlerContract.UnMapContract([
      deployments[lchainID].greeter,
      taskArgs.chainid,
      deployments[taskArgs.nchainid].greeter,
    ]);
    console.log("Greeter Un-Mapping Done");
   
  });