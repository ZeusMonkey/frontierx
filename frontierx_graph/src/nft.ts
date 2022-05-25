import { Address } from "@graphprotocol/graph-ts";
import { Account, NFT } from "./entities/schema";
import { Transfer } from "./entities/FNFT/FNFT";

export function handleTransfer(event: Transfer): void {
  createAccount(event.params.to);

  let nft = NFT.load(event.params.tokenId.toString());
  if (nft == null) {
    nft = new NFT(event.params.tokenId.toString());
  }
  nft.account = event.params.to.toHexString();
  nft.tokenId = event.params.tokenId;
  nft.save();
}

function createAccount(addr: Address): void {
  let account = Account.load(addr.toHexString());
  if (account == null) account = new Account(addr.toHexString());
  account.save();
}
