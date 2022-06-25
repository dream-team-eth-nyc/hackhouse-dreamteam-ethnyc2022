// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "../GuildBond.sol";

import "forge-std/Test.sol";

contract GuildBondTest is Test {
    GuildBond bond;

    function setUp() public {
        // deploy singleton
        string memory name = "Club Penguin";
        string memory symbol = "penguin";
        bond = new GuildBond(name, symbol);
    }

    function testSafeMintWithValidSender() public {
        assertEq(bond.safeCounterCurrent(), 0);
        address toAddress = address(12);
        bond.safeMint(toAddress);
        assertEq(bond.safeCounterCurrent(), 1);
    }

    function testSafeMintWithInvalidSender() public {
        assertEq(bond.safeCounterCurrent(), 0);
        address toAddress = address(0);
        try bond.safeMint(toAddress) {
            fail();
        } catch {}
    }
}
