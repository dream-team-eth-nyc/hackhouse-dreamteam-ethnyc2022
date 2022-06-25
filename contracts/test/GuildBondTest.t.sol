// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "../GuildBond.sol";

import "forge-std/Test.sol";

contract GuildBondTest is Test {
    GuildBond manager;

    function setUp() public {
        // deploy singleton
        manager = new GuildBond();
    }

    function testSafeMintWithValidSender() public {
        assertEq(manager.safeCounterCurrent(), 0);
        address toAddress = address(12);
        manager.safeMint(toAddress);
        assertEq(manager.safeCounterCurrent(), 1);
    }

    function testSafeMintWithInvalidSender() public {
        assertEq(manager.safeCounterCurrent(), 0);
        address toAddress = address(0);
        try manager.safeMint(toAddress) {
            fail();
        } catch {}
    }
}
