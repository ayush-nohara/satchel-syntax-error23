// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SendMoney {
    
    function transfer1(address token, uint256 amount, address recipient) external {
       require(IERC20(token).transfer(recipient, amount), "transfer failed"); 
    }

}