require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: { 
   polygon:{
    url: "https://polygon-mainnet.g.alchemy.com/v2/3lHnfMmLVNgIynQHJVSY_3axbdbwM1AC",
    accounts: ["1922ce68fadabe83efbd0c269bc9850160d7a1b773df3b618678f987f6893b9e"],
   }
  }
};
