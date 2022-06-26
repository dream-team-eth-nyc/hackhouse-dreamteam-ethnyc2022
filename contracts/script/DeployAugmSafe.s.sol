// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

import "../AugmentedGnosisSafe.sol";
import "contracts/gnosis-safe/proxies/GnosisSafeProxyFactory.sol";

// meant for usage on POLYGON 
contract DeployAugmentedSafe is Script {
    function setUp() public {}

    function run() public {
        // address myHotWallet = 0x13aA399f57AEEfDde78F611999B30e0A50BCe59D;
        // bytes memory emptyData;
        // address[] memory owners = new address[](1);
        // owners[0] = myHotWallet;
        // // GnosisSafeProxyFactory factory = GnosisSafeProxyFactory(0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2);

        // vm.broadcast();
    
        // // AugmentedGnosisSafe singleton = new AugmentedGnosisSafe();
        // GnosisSafeProxy newSafe = factory.createProxy(address(singleton), emptyData);
        // GnosisSafe(payable(newSafe)).setup(
        //     owners, 
        //     1,              // threshold
        //     address(0),     // Contract address for optional delegate call
        //     emptyData,      // Data payload for optional delegate call
        //     address(0),     // Handler for fallback calls to this contract
        //     address(0),     // Token that should be used for the payment (0 is ETH)
        //     0,              // Value that should be paid
        //     payable(0));    // Address that should receive the payment (or 0 if tx.origin)
    }
}
