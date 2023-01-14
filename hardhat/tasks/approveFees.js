const { TASK_APPROVE_FEES } = require("./task-names");
const { task, types } = require("hardhat/config");

task(TASK_APPROVE_FEES, "Approves the fees")
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
     await Swapper._approveFees(taskArgs.feeToken, "1000000000000000000000000", {
      gasLimit: 2000000,
     });
    
    console.log(`Fee approved`);
   
  });