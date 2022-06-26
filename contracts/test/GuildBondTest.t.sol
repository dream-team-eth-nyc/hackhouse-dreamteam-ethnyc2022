// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "../GuildBond.sol";
import {IWorldID} from "../worldcoin/interfaces/IWorldID.sol";

import "forge-std/Test.sol";

contract GuildBondTest is Test {
    GuildBond bond;

    // function setUp() public {
    //     // deploy singleton
    //     string memory name = "Chief Baddie";
    //     string memory symbol = "frog";
    //     bond = new GuildBond(name, symbol, IWorldID(address(1)));
    // }

    // function testSafeMintWithValidSender() public {
    //     // assertEq(bond.safeCounterCurrent(), 0);
    //     address toAddress = address(12);
    //     // bond.safeMint(toAddress);
    //     // assertEq(bond.safeCounterCurrent(), 1);
    // }

    // function testSafeMintWithInvalidSender() public {
    //     // assertEq(bond.safeCounterCurrent(), 0);
    //     address toAddress = address(0);
    //     // try bond.safeMint(toAddress) {
    //         fail();
    //     } catch {}
    // }
}
