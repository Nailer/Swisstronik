require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = '9a4a2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxb47b'  // use the private key as a const due to security of my wallet on the terminal
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
