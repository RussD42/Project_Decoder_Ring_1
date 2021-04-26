const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if the given alphabet is greater than 26 characters long.", () => {
    const actual = substitution("too long", "plmoknijbuhvygctfxrdzeswaq@$*");
    expect(actual).to.be.false;
  });

  it("should return false if the given alphabet is less than 26 characters long.", () => {
    const actual = substitution("too short", "plmoknijbuhvygctfxrdzes");
    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function.", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });

  it("should return false if there are any duplicate characters in the given alphabet.", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswap");
    expect(actual).to.be.false;
  });

  it("should maintain spaces in the message when encoding", () => {
    const actual = substitution(
      "tests spaces when encoding",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    const expected = "dkrdr rtpmkr sjkg kgmcobgi";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message when decoding", () => {
    const actual = substitution(
      "dkrdr rtpmkr sjkg okmcobgi",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    const expected = "tests spaces when decoding";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters.", () => {
    const actual = substitution(
      "tests caps AaBbCc",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    const expected = "dkrdr mptr ppllmm";
    expect(actual).to.equal(expected);
  });
});
