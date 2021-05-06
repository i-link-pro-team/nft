const { expect } = require("chai");

describe("Umka", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Umka = await ethers.getContractFactory("Umka");
    const umka = await Umka.deploy("Hello, world!");
    
    await umka.deployed();

  });
});

