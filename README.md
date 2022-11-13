
# A full stack dApp starter built on Ethereum (Solidity) with Next.js (React)

This repo contains boilerplate code for interacting with a simple smart contract from the client-side using [Solidity](https://soliditylang.org/), [React](https://reactjs.org/) and [TailwindCSS](https://tailwindcss.com/).

![Solidity + Next.js Starter](/public/screenshot.png)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MetaMask wallet browser extension](https://metamask.io/download.html).
- [Truffle](https://www.trufflesuite.com/truffle)

## Getting Started

### Environment Setup

Duplicate `.env.example` to `.env` and populate the `ADDR_x` fields from your ganache chain. 

Run `npm install` from the root directory

### Running The Smart Contract Locally

Compile the ABI for the smart contract using `truffle compile`.

If you're successful, you'll recieve a confirmation message of:

```
Compiling your contracts...
===========================
> Compiling .\contracts\Greeter.sol
> Compiling .\contracts\Greeter.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to C:\Users\marco\_01_docs\Coding\Blockchain\solidity-nextjs-starter\abis
> Compiled successfully using:
   - solc: 0.8.9+commit.e5eed63a.Emscripten.clang
```
And json files will be generated in the `abis` directory.
### Adding A Local Account To MetaMask

Open your MetaMask browser extension and change the network to `Localhost 7545`.

Next, import one of the accounts by adding its Private Key from ganache account list to MetaMask.

If you're successful, you should see the a balance resembling something like `100 ETH` in the wallet.

### Connecting The Front-End

Run `truffle migrate` to deploy the smart contract to your local blockchain.

If you're successful, you'll recieve a confirmation message of:
```
Compiling your contracts...
===========================
> Compiling .\contracts\Greeter.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to C:\Users\marco\_01_docs\Coding\Blockchain\solidity-nextjs-starter\abis
> Compiled successfully using:
   - solc: 0.8.9+commit.e5eed63a.Emscripten.clang



Starting migrations...
   > Blocks: 0            Seconds: 0
   > contract address:    0xC51cB6EA7c64748c6C26ce473eC58344a7fd10e1
   > block number:        2107
   > block timestamp:     1668369074
   > account:             0xAd4f27e8c72eA67506dfE4F5b9956019654867Ae
   > balance:             46.433012519999999974
   > gas used:            344177 (0x54071)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00688354 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00688354 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.00688354 ETH
```


In `.env` set the `NEXT_PUBLIC_GREETER_ADDRESS` environment variable to the address your smart contract was deployed to. For example, `0xC51cB6EA7c64748c6C26ce473eC58344a7fd10e1`.

In a new terminal window, load the front-end with `npm run dev`. If you want to use an alternate port from `3000`, use `npm run dev -- --port=1234`, or whatever port number you prefer.

## Demo'ing The Functionality

Once set up, go to `localhost:3000` (or whatever post number you used), to view your dApp in the browser.

Clicking `Fetch greeting from the blockchain` should bring back a value of `Hello world!` in the input above. This is the default string passed to the smart contract on first deloy.

To update the greeting value, type something in the input with placeholder `Write a new greeting`, then click `Set new greeting on the blockchain`. If you're successful, a MetaMask window will open in your browser. From here you can connect the local account you added earlier and sign the transaction.

Click `Fetch greeting from the blockchain` again to see the changes you've made.

## Editing The Front-End

To modify the front page of your application, edit `pages/index.js`.

All [TailwindCSS classes](https://tailwindcss.com/docs) are available to you.

To lint your front-end code, use `npm run lint`.

## Testing

To test your smart contracts, run `truffle test ./test/greeter-test.js` or `truffle test --show-events  ./test/greeter-test.js`.

A sample test can be found in `test/greeter-test.js`.