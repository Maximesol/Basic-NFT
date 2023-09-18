
# BasicNFT - A Basic ERC721 Contract

## Description

This project is a basic example of an ERC721 (NFT) contract deployed on Ethereum. It utilizes OpenZeppelin for the ERC721 base and is written in Solidity.

## Features

- **mintNFT**: Allows you to create a new NFT.
- **getTokenCounter**: Returns the total number of NFTs created.
- **tokenURI**: Returns the token's URI for a given ID.

## Installation

### Prerequisites

- Node.js
- Yarn

### Steps

1. Clone this repository
   ```
   git clone [Repository URL]
   ```

2. Install dependencies
   ```
   yarn install
   ```

3. Compile the contract
   ```
   yarn hardhat compile
   ```

4. Run tests
   ```
   yarn hardhat test
   ```

## Usage

### Deployment

To deploy the contract on a network, use:

```
yarn hardhat run scripts/deploy.js --network [Network Name]
```

### Interaction

You can interact with the contract using the available scripts or by using an interface like Etherscan.

## License

This project is under the MIT license. See the `LICENSE` file for more details.

