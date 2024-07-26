require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = '9a4a2ed4f71965ac692b0e9f456135c1d569be4fd010d637c551d8b82708b47b'
module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.24",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  }
};
