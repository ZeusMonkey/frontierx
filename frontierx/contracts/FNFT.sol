//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FNFT is ERC721A, Ownable{
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 1000;

    string public baseTokenUri;
    constructor() ERC721A("Frontier NFT", "FNFT"){
    }

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "Frontier NFT :: Cannot be called by a contract");
        _;
    }

    function mint(uint256 _quantity) external callerIsUser{
        require((totalSupply() + _quantity) <= MAX_SUPPLY, "Frontier NFT :: Beyond Max Supply");
        _safeMint(msg.sender, _quantity);
    }

    //return uri for certain token
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        uint256 trueId = tokenId + 1;
        return bytes(baseTokenUri).length > 0 ? string(abi.encodePacked(baseTokenUri, trueId.toString(), ".json")) : "";
    }

    function setBaseTokenUri(string memory _baseTokenUri) external onlyOwner{
        baseTokenUri = _baseTokenUri;
    }
}