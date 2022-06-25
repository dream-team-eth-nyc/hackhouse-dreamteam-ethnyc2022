// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract GuildBond is ERC721, ERC721Burnable, Ownable {
    using Counters 
    for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    event Logging(string tellUsMore);

    constructor() ERC721("MyToken", "MTK") {}
 
    function _baseURI() internal pure override returns (string memory) {
        return "https://www.myapp.com";
    }

    function safeCounterCurrent() public returns (uint256) {
        return _tokenIdCounter.current();
    }

    function safeMint(address to) public {
        require(to != address(0), "ERR: CANNOT MINT TO THE 0 ADDRESS");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.
    function _afterTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721)
    {
        emit Logging("DEBUGGING _afterTokenTransfer");
        super._afterTokenTransfer(from, to, tokenId);
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal override(ERC721)
    {
        emit Logging("DEBUGGING _beforeTokenTransfer");
        // if sender is a 0 address, this is a mint transaction, not a transfer
        require(from == address(0), "ERR: TOKEN IS SOUL BOUND");
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
