# Satchel-Syntax-Error23

## About
SATCHEL is a open source cross-chain crypto exchange wallet that allows swapping of ERC20 tokens and sending of ERC20 tokens to other addresses across different chains to the native token in that chain on the main net of different chains using the router protocol .

## Advantages
SATCHEL with its catchy and easy to use UI eases the process of swapping and sending of different ERC20 tokens . Crypto Tokens can be sent cross chain without having to go through swap and then sending manually in different DEXes. 

## Challenges Faced
Router protocol V1 js sdk doesn't support testnets so we had to switch to mainnet . Because on the main net we had to pay the bridge fee we faced a crunch on mainnet funds as the least amount to buy funds was Rs 2000  which slowed down our speed of completion. We choose not to use V2 because of it being in its nascent stage and with lesser documentation compared to V1.

## Learnings
We learnt how to integrate MetaMask to the frontend . We integrated the router protocol js SDK to swap the crypto token among different ERC20 chains and send them to the desired addresses.We learnt how to integrate different decentralised API's to get real time prices of the crypto tokens and the balance of tha EOA on different chains simultaneously.

## Features
1. Displays your crypto assets on the different chain on the same EOA
2. The receipent receives the token in the native token of the chain his account is presently on by swapping the assets to different chains using router and then sending it to the desired address .

## How it is made
### Tech Stack Used
<ul>
  <li>React</li>
  <li>CSS Modules</li>
  <li>Solidity</li>
  <li>Ethersjs</li>
  <li>Router Protocol</li>
  <li>Web3Modal</li>
  <li>Deployed on Vercel</li>
</ul>

### Test Deployment: https://satchel-syntax-error23-r22w.vercel.app/
