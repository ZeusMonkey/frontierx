//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FToken is ERC20 {
    constructor() ERC20("FToken", "FTOKEN") {
        _mint(msg.sender, 1000000E18);
    }
}
