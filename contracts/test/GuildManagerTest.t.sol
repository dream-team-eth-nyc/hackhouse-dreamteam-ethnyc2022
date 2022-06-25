// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "../GuildManager.sol";

import "forge-std/Test.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

contract GuildManagerTest is Test {
    GuildManager manager;
    event Logging(string tellUsMore);

    function setUp() public {
        // deploy singleton
        manager = new GuildManager();
    }

    function testCreateGuild() public {
        string memory name = "Club Penguin";
        string memory symbol = "penguin";
        GuildBond guild = manager.createGuild(name, symbol);
        assertEq(guild.owner(), address(this));
    }

    // Helpers

    function addressToString(address _address) public pure returns(string memory) {
      uint256 i = uint256(uint160(_address));
       bytes32 _bytes = bytes32(uint256(i));
       bytes memory HEX = "0123456789abcdef";
       bytes memory _string = new bytes(42);
       _string[0] = '0';
       _string[1] = 'x';
       for(uint i = 0; i < 20; i++) {
           _string[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];
           _string[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
       }
       return string(_string);
    }

}