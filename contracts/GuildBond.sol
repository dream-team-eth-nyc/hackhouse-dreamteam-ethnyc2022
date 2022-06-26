// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import {ByteHasher} from "./worldcoin//helpers/ByteHasher.sol";
import {IWorldID} from "./worldcoin/interfaces/IWorldID.sol";

/// @notice soulbond contract to track guild members (non transferrable nft)
contract GuildBond is ERC721, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    using ByteHasher for bytes;

    event Invitation (
        address pendingMember
    );

    Counters.Counter private _tokenIdCounter;
    mapping(address => bool) private isInvited;

    /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    /// @dev The World ID group ID (always 1)
    uint256 internal constant groupId = 1;

    /// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
    mapping(uint256 => bool) internal nullifierHashes;

    /// @param _worldId The WorldID instance that will verify the proofs
    constructor(string memory name, string memory symbol, IWorldID _worldId) ERC721(name, symbol) {
        worldId = _worldId;
    }

    function invite(address newMember) external onlyOwner {
        require(balanceOf(newMember) == 0, "This player is already in your guild");
        require(!isInvited[newMember], "You already invited this player");
        
        isInvited[newMember] = true;

        // This event is meant to be picked up by the graph protocol to send an EPNS notification to the new member
        emit Invitation(newMember);
    }

    /// @notice humanity of the new player is checked through worldcoin
    function joinGuild(uint256 root, uint256 nullifierHash, uint256[8] calldata proof) external {
        // First, we make sure this person hasn't done this before
        if (nullifierHashes[nullifierHash]) revert InvalidNullifier();
        require(balanceOf(msg.sender) == 0, "You are already in this guild");

        address signal = msg.sender;

        // We now verify the provided proof is valid and the user is verified by World ID
        worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(signal).hashToField(),
            nullifierHash,
            abi.encodePacked(address(this)).hashToField(),
            proof
        );       

        // We now record the user has done this, so they can't do it again (proof of uniqueness)
        nullifierHashes[nullifierHash] = true;

        safeMint(msg.sender);
    }
 
    function safeMint(address to) internal {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.
    function _afterTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721)
    {
        super._afterTokenTransfer(from, to, tokenId);
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal override(ERC721)
    {
        // if sender is a 0 address, this is a mint transaction, not a transfer
        require(from == address(0), "ERR: TOKEN IS SOUL BOUND");
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
