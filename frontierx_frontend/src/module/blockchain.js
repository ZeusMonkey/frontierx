import Web3 from 'web3';
import FNFT from '../config/abi/FNFT.json';
import FToken from '../config/abi/FToken.json';
import Contracts from '../config/contracts.json';

class Blockchain {
  web3 = null;
  fnftContract = null;
  ftokenContract = null;
  contracts = Contracts.testnet;

  constructor(_account, _provider) {  
    const provider = _provider;
    this.web3 = new Web3(provider);

    this.fnftContract = new this.web3.eth.Contract(FNFT, this.contracts.fnft);
    this.fnftContract.setProvider(provider);

    this.ftokenContract = new this.web3.eth.Contract(FToken, this.contracts.ftoken);
    this.ftokenContract.setProvider(provider);

    this.account = _account;
  }

  async mint(data) {
    try {
      const { quantity } = data;
      const tx = await this.fnftContract.methods.mint(quantity).send({
        from: this.account
      });
      return {
        hash: tx.blockHash,
        status: tx.status,
      }
    } catch (err) {
      console.log(err);
      return {
        status: false
      }
    }
  }

  async getTokenUri(data) {
    try {
      const { tokenID } = data;
      const tokenUri = await this.fnftContract.methods.tokenURI(tokenID).call();

      if (tokenUri) {
        var res = await fetch(tokenUri);
        res = await res.json();
        return {
          status: true,
          data: res.image
        }
      } else {
        return {
          status: false
        }
      }
    } catch (err) {
      return {
        status: false
      }
    }
  }
}
export default Blockchain;
