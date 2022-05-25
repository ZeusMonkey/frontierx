require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ROPSTEN_PRIVATE_KEY = "784d8827111013554b99746f125aa340e080e221fdb89c2998339f14bbfd65ff";
const RPC_URL = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: RPC_URL,
      accounts: [ROPSTEN_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: "QKJE1EUM2BF6XRIIK8H8SU8I4F1PA6GHPD"
  }
};
