//https://dev.to/heydamali/a-guide-to-building-testing-and-deploying-your-first-dapp-with-truffle-ethersjs-ganache-and-react-1mh0
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
const infuraURL = "<HTTPS ENDPOINT HERE>";

module.exports = {
  contracts_build_directory: './client/src/contracts',
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, infuraURL),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.7.1",
    }
  },
};
