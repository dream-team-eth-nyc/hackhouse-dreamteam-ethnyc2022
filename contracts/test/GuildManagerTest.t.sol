// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "../GuildManager.sol";

import "forge-std/Test.sol";

import "@openzeppelin/contracts/utils/Strings.sol";
import {IWorldID} from "../worldcoin/interfaces/IWorldID.sol";

contract GuildManagerTest is Test {
    GuildManager manager;
    // event Logging(string tellUsMore);

    function setUp() public {
        // deploy singleton
        manager = new GuildManager(IWorldID(address(1)));
    }

    function testCreateGuild() public {
        string memory name = "Club Penguin";
        string memory symbol = "penguin";
        GuildBond guild = manager.createGuild(name, symbol);
        assertEq(guild.owner(), address(this));
    }

    function testPledgeAlleigiance() public {
        string memory name = "Club Penguin";
        string memory symbol = "penguin";
        GuildBond guild = manager.createGuild(name, symbol);
        manager.pledgeAllegiance(guild);

        // console.log("DEBUGGING YO WTF");
        // console.log(manager.guildToSafe[guild]);
        // console.log("DEBUGGING safeForGuild");
        // console.log(safeForGuild);
        // assert(manager.isSafeInGuild[safeForGuild][guild]);
    }

    // Helpers
    function addressToString(address _address) public pure returns(string memory) {
      uint256 i = uint256(uint160(_address));
       bytes32 _bytes = bytes32(uint256(i));
       bytes memory HEX = "0123456789abcdef";
       bytes memory _string = new bytes(42);
       _string[0] = '0';
       _string[1] = 'x';
       for(uint j = 0; j < 20; j++) {
           _string[2+j*2] = HEX[uint8(_bytes[j + 12] >> 4)];
           _string[3+j*2] = HEX[uint8(_bytes[j + 12] & 0x0f)];
       }
       return string(_string);
    }

}