require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
const { HardhatUserConfig, task } = require("hardhat/config");
/** @type import('hardhat/config').HardhatUserConfig */

const URL = process.env.URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_URL = process.env.GOERLI_URL;
module.exports = {
  solidity: "0.8.17",
  networks: { 
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    } ,
    mumbai:{
      url: URL,
      accounts: [PRIVATE_KEY],
    } ,
    fuji:{
      url: FUJI_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};
