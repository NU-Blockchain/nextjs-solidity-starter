// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract Greeter {
  string greeting;

  event greetingChanged(string msg);

  constructor(string memory _greeting) {
    // console.log("Deploying a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    // console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
    emit greetingChanged(_greeting);
  }
}
