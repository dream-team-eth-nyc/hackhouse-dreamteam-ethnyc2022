// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "forge-std/Script.sol";
import "contracts/GuildManager.sol";

contract DeployGuildManager is Script {
    function run() public {
        vm.broadcast();

        new GuildManager(IWorldID(address(1)));
    }
}