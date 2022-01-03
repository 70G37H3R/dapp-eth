//https://dev.to/heydamali/a-guide-to-building-testing-and-deploying-your-first-dapp-with-truffle-ethersjs-ganache-and-react-1mh0
module.exports = {
  contracts_build_directory: './client/src/contracts',
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
  },

  compilers: {
    solc: {
      version: "0.8.9"
    }
  }
};
