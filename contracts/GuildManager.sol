// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "./GuildBond.sol";
import "./AugmentedGnosisSafe.sol";

contract GuildManager {
    mapping(AugmentedGnosisSafe => mapping(GuildBond => bool)) isSafeInGuild;

    /// @notice create a guild and become its chief
    function createGuild(string memory name, string memory symbol) external returns(GuildBond) {
        GuildBond newGuild = new GuildBond(name, symbol);
        newGuild.transferOwnership(msg.sender);
        return newGuild;
    }

    function pledgeAllegiance(GuildBond guild) external {
        // TypeError: Explicit type conversion not allowed from non-payable "address" to "contract AugmentedGnosisSafe", which has a payable fallback function.
        // address nftAddress = address(msg.sender);
        // address payable addr = address(uint160(nftAddress));
        require(AugmentedGnosisSafe(msg.sender).isOwner(address(this)), "add the manager as owner first");

        isSafeInGuild[AugmentedGnosisSafe(msg.sender)][guild] = true;
    }

    function startPlayingWithSafeInGuild(AugmentedGnosisSafe safe, GuildBond guild) external {
        require(guild.balanceOf(msg.sender) > 0, "You are not a guild member");
        require(isSafeInGuild[safe][guild], "This player did not pledge to the guild");

        safe.contractAddOwner(msg.sender, safe.getThreshold());
    }
}