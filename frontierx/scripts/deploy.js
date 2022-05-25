const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const FNFT = await hre.ethers.getContractFactory("FNFT");
  const FToken = await hre.ethers.getContractFactory("FToken");
  const fnft = await FNFT.deploy();
  const ftoken = await FToken.deploy();

  await fnft.deployed();
  await ftoken.deployed();

  console.log("FToken deployed to:", ftoken.address);
  console.log("FNFT deployed to:", fnft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
