// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "./GuildBond.sol";
import "./AugmentedGnosisSafe.sol";
import {IWorldID} from "./worldcoin/interfaces/IWorldID.sol";

contract GuildManager {
    mapping(AugmentedGnosisSafe => mapping(GuildBond => bool)) isSafeInGuild;

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    constructor(IWorldID _worldId){
        worldId = _worldId;
    }

    /// @notice create a guild and become its chief
    function createGuild(string memory name, string memory symbol) external returns(GuildBond) {
        GuildBond newGuild = new GuildBond(name, symbol, worldId);
        newGuild.transferOwnership(msg.sender);
        return newGuild;
    }

    function pledgeAllegiance(GuildBond guild) external {
        require(AugmentedGnosisSafe(payable(msg.sender)).isOwner(address(this)), "add the manager as owner first");

        isSafeInGuild[AugmentedGnosisSafe(payable(msg.sender))][guild] = true;
    }

    function startPlayingWithSafeInGuild(AugmentedGnosisSafe safe, GuildBond guild) external {
        require(guild.balanceOf(msg.sender) > 0, "You are not a guild member");
        require(isSafeInGuild[safe][guild], "This player did not pledge to the guild");

        safe.contractAddOwner(msg.sender, safe.getThreshold());
    }
}