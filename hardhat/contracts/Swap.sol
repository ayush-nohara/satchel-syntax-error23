// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract Swap is ICrossTalkApplication {
    address public Owner;

    // address of the gateway contract
    IGateway public gatewayContract;

    // gas limit required to handle cross-chain request on the destination chain
    uint64 public destGasLimit;

     mapping(uint64 => mapping(string => bytes)) public ourContractOnChains;

     /// @notice function to convert address to bytes
  function toBytes(address a) public pure returns (bytes memory b) {
    assembly {
      let m := mload(0x40)
      a := and(a, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF)
      mstore(add(m, 20), xor(0x140000000000000000000000000000000000000000, a))
      mstore(0x40, add(m, 52))
      b := m
    }
  }

  /// @notice function to convert bytes to address
  function toAddress(
    bytes memory _bytes
  ) public pure returns (address contractAddress) {
    bytes20 srcTokenAddress;
    assembly {
      srcTokenAddress := mload(add(_bytes, 0x20))
    }
    contractAddress = address(srcTokenAddress);
  }
}

}