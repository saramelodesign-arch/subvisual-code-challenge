// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import "../src/SimpleToken.sol";

contract SimpleTokenTest is Test{
    SimpleToken token;

    function setUp() public {
        token = new SimpleToken();
    }

    function testMintIncreasesBalance() public {
        token.mint(10);
        assertEq(token.balances(address(this)), 10);
    }

    function testBalancesAreIndependent() public {
        address userA = address(0x1);
        address userB = address(0x2);

        vm.prank(userA);
        token.mint(10);

        vm.prank(userB);
        token.mint(5);

        assertEq(token.balances(userA), 10);
        assertEq(token.balances(userB), 5);
    }
}