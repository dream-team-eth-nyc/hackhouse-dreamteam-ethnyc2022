// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "./GuildBond.sol";
import "./AugmentedGnosisSafe.sol";
import {IWorldID} from "./worldcoin/interfaces/IWorldID.sol";

/// @notice main contract of the Guidl platform, create your guild 
contract GuildManager {
    mapping(GuildBond => AugmentedGnosisSafe) public guildToSafe;
    mapping(AugmentedGnosisSafe => mapping(GuildBond => bool)) isSafeInGuild;

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal constant worldId = IWorldID(0x9b70e899C9c19B4472472CE967a12a0079be1CD8);

    /// @notice create a guild and become its chief
    function createGuild(string memory name, string memory symbol) external returns(GuildBond) {
        GuildBond newGuild = new GuildBond(name, symbol, worldId);
        newGuild.transferOwnership(msg.sender);
        return newGuild;
    }

    function pledgeAllegiance(GuildBond guild) external {
        require(AugmentedGnosisSafe(payable(msg.sender)).isOwner(address(this)), "add the manager as owner first");
        AugmentedGnosisSafe safeForGuild = AugmentedGnosisSafe(payable(msg.sender));
        // guildToSafe[guild] = safeForGuild;
        isSafeInGuild[safeForGuild][guild] = true;
    }

    function startPlayingWithSafeInGuild(AugmentedGnosisSafe safe, GuildBond guild) external {
        require(guild.balanceOf(msg.sender) > 0, "You are not a guild member");
        require(isSafeInGuild[safe][guild], "This player did not pledge to the guild");

        safe.contractAddOwner(msg.sender, safe.getThreshold());
    }
}