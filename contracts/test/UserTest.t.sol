// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "contracts/gnosis-safe/GnosisSafe.sol";
import "contracts/gnosis-safe/proxies/GnosisSafeProxyFactory.sol";

import "forge-std/Test.sol";

contract UserTest is Test {
    GnosisSafe singleton;
    GnosisSafeProxyFactory factory;

    function setUp() public {
        // deploy singleton
        singleton = new GnosisSafe();

        // deploy factory
        factory = new GnosisSafeProxyFactory();
    }

    function testCreateUser() public {
        bytes memory data;
        GnosisSafeProxy proxy = factory.createProxy(address(singleton), data);
        address[] memory owners = new address[](1);
        owners[0] = address(this);
        GnosisSafe(payable(proxy)).setup(owners, 1, address(1), data, address(0), address(0), 0, payable(0));
    }
}