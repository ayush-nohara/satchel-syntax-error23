const { task } = require("hardhat/config");
const {
  TASK_APPROVE_FEES,
  TASK_DEPLOY,
  TASK_SET_FEES_TOKEN,
  TASK_SET_LINKER,
  TASK_STORE_DEPLOYMENTS,
} = require("./task-names");

task(TASK_DEPLOY, "Deploys the project").setAction(
    async (taskArgs, hre) => {
      const deployment = require("../deployments/deployments.json");
  
      const network = await hre.ethers.provider.getNetwork();
      const chainId = network.chainId;
  
      const handler = deployment[chainId].handler;
      const feeToken = deployment[chainId].feeToken;
      const linker = deployment[chainId].linker;
  
      //const contract = await hre.ethers.getContractFactory("Greeter");
        const contractFactory = await hre.ethers.getContractFactory("Swap")
    //   const greeter = await contract.deploy(handler);
         const swapper = await contractFactory.deploy(handler);
    //   await greeter.deployed();
         await swapper.deployed();
    //   console.log(`Greeter deployed to: `, greeter.address);
  
      await hre.run(TASK_STORE_DEPLOYMENTS, {
        contractName: "Swap",
        contractAddress: Swapper.address,
      });
  
      await hre.run(TASK_SET_LINKER, {
        contractAdd: Swapper.address,
        linkerAdd: linker,
      });
  
      await hre.run(TASK_SET_FEES_TOKEN, {
        contractAdd: Swapper.address,
        feeToken: feeToken,
      });
  
      await hre.run(TASK_APPROVE_FEES, {
        contractAdd: Swapper.address,
        feeToken: feeToken,
      });
  
      
    }
  );