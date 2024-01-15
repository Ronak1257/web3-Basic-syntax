const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  it("Return value of variable is 10", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.getVal()).to.equal(10);
  });
});
