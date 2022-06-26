// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GuildBond is ERC721 {
    uint256 public totalSupply;

    event SoulBonded (address soul);

    constructor() ERC721("Guild Bond", "GB") {}

    function emitSoulBond(address to) external {
        _mint(to, ++totalSupply);
        emit SoulBonded(to);
    }
}
