// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17; 

contract PriceConverter {

    constructor(){}

    function eth2matic (uint _value) external pure returns(uint){
        return (_value*6462)/10000000;
    }
    function matic2eth (uint _value) external pure returns(uint){
        return (_value*10000000)/6462;
    }
    function avax2eth (uint _value) external pure returns(uint){
        return (_value*1092)/10000;
    }
    function eth2avax (uint _value) external pure returns(uint){
        return (_value*10000)/1092;
    }
    function avax2matic (uint _value) external pure returns(uint){
        return (_value*17);
    }
    function matic2avax (uint _value) external pure returns(uint){
        return (_value/17);
    }
}