// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../src/SimpleToken.sol";
import "forge-std/Script.sol";

contract DeploySimpleToken is Script {
    function run() external {
        vm.startBroadcast();
        new SimpleToken();
        vm.stopBroadcast();
    }
}
