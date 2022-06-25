// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import "contracts/gnosis-safe/base/OwnerManager.sol";

contract ContractAddOwner is OwnerManager {
    function contractAddOwner(address newOwner, uint256 threshold) external {
        require(isOwner(msg.sender));

        OwnerManager(address(this)).addOwnerWithThreshold(newOwner, threshold);
    }
}
