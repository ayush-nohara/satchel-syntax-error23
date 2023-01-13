// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Wallet is Ownable,ReentrancyGuard {

constructor() {

}

function sendToken(uint _amount, address payable _to ) public payable nonReentrant {
     // swap the token with voyager
     // add in our account balance
     // transferfrom account
}
 

receive() external payable {} 
}
