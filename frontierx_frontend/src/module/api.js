import BigNumber from 'bignumber.js'

class Api {
  baseUrl = 'http://127.0.0.1:8000/order';
  
  constructor() {
  }

  async makeSellOrder(data) {
    const {maker, price, img, tokenId, makerSignature} = data;
    var res = await fetch(`${this.baseUrl}/makeSellOrder?maker=${maker}&img=${img}&price=${this.toBigNum(price, 18)}&tokenId=${tokenId}&makerSignature=${makerSignature}`);
    res = await res.json();
    return res;
  }

  async findSellOrders(data) {
    const {account} = data;
    var res = await fetch(`${this.baseUrl}/findAvailableSellOrders?address=${account}`);
    res = await res.json();
    return res;
  }

  async getOrders(data) {
    const {ids} = data;
    var res = await fetch(`${this.baseUrl}/getMySellRequests?ids=${ids.toString()}`);
    res = await res.json();
    return res;
  }

  async removeOrder(data) {
    const {tokenId} = data;
    var res = await fetch(`${this.baseUrl}/removeOrder?tokenId=${tokenId.toString()}`);
    res = await res.json();
    return res;
  }

  //---------------------- Common functions ---------------------
  toHuman(num, decimals) {
    const humanNum = new BigNumber(num).div(new BigNumber(10).pow(new BigNumber(decimals)));
    return humanNum;
  }

  toBigNum(num, decimals) {
    return new BigNumber(num).times(new BigNumber(10).pow(new BigNumber(decimals)));
  }
}
export default Api;
