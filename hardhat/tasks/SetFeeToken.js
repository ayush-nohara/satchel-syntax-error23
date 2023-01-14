const { TASK_SET_FEES_TOKEN } =  require("./task-names");
const { task, types } = require("hardhat/config");

task(TASK_SET_FEES_TOKEN, "Sets the fee token address")
  .addParam(
    "contractAdd",
    "address of the cross-chain contract",
    "",
    types.string
  )
  .addParam("feeToken", "address of the fee token", "", types.string)
  .setAction(async (taskArgs, hre) => {
    const contract = await hre.ethers.getContractFactory("Swap");
    const Swapper = await contract.attach(taskArgs.contractAdd);
    await Swapper.setFeesToken(taskArgs.feeToken, { gasLimit: 2000000 });
    console.log(`Fee token address set`);
    
  });