// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "contracts/gnosis-safe/GnosisSafe.sol";
import "contracts/gnosis-safe/proxies/GnosisSafeProxyFactory.sol";
import "contracts/ContractAddOwner.sol";
import "contracts/gnosis-safe/base/OwnerManager.sol";
import "../AugmentedGnosisSafe.sol";

import "forge-std/Test.sol";

contract Empty {}

contract UserTest is Test {
    GnosisSafe singleton;
    GnosisSafeProxyFactory factory;
    address user1;
    address user2;
    address user3;
    GnosisSafeProxy user1Safe;

    function setUp() public {
        // deploy singleton
        singleton = new AugmentedGnosisSafe();

        // deploy factory
        factory = new GnosisSafeProxyFactory();

        user1 = address(new Empty());
        user2 = address(new Empty());
        user3 = address(new Empty());
    }

    function testCreateUser() public {
        startHoax(user1);
        bytes memory data;
        GnosisSafeProxy proxy = factory.createProxy(address(singleton), data);
        address[] memory owners = new address[](1);
        owners[0] = address(this);
        GnosisSafe(payable(proxy)).setup(owners, 1, address(1), data, address(0), address(0), 0, payable(0));
        user1Safe = proxy;
    }

    function testAddOwner() public {
        bytes memory data;
        GnosisSafeProxy proxy = factory.createProxy(address(singleton), data);
        address[] memory owners = new address[](1);
        owners[0] = address(user1);
        GnosisSafe(payable(proxy)).setup(owners, 1, address(1), data, address(0), address(0), 0, payable(0));

        hoax(user1);
        AugmentedGnosisSafe(payable(proxy)).contractAddOwner(user2, 1);

        hoax(user2);
        AugmentedGnosisSafe(payable(proxy)).contractAddOwner(user3, 1);
    }
}