const { expect, assert } = require("chai");
const { Contract } = require("ethers");
const { ethers, artifacts } = require("hardhat");

describe("FNFT contract", function () {
  before(async () => {
    const [owner] = await ethers.getSigners();
    FNFT = await ethers.getContractFactory("FNFT");
    FNFTContract = await FNFT.deploy();
  })
  it("Should return the correct baseURI once it's set", async function () {
    await FNFTContract.setBaseTokenUri("ipfs://");
    assert((await FNFTContract.baseTokenUri()) === "ipfs://", "incorrect baseURI");
  });
});