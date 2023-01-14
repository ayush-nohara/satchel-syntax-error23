const { task, types } =  require("hardhat/config");
const { TASK_SET_LINKER } = require("./task-names");

task(TASK_SET_LINKER, "Sets the linker address")
  .addParam(
    "contractAdd",
    "address of the cross-chain contract",
    "",
    types.string
  )
  .addParam("linkerAdd", "address of the linker", "", types.string)
  .setAction(async (taskArgs, hre) => {
    const contract = await hre.ethers.getContractFactory("Swap");
    const Swapper = await contract.attach(taskArgs.contractAdd);
    await Swapper.setLinker(taskArgs.linkerAdd, { gasLimit: 1000000 });
    console.log(`Linker address set`);
    
  });
