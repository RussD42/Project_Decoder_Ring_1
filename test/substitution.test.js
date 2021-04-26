const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution()", () => {
    it("returns false if the given alphabet is greater than 26 characters long.", () => {
    const actual = substitution("too long", "plmoknijbuhvygctfxrdzeswaq@$*");
    const expected = false;
    expect(actual).to.equal(expected);
    });

    it("returns false if the given alphabet is less than 26 characters long.", () => {
    const actual = substitution("too short", "plmoknijbuhvygctfxrdzes");
    const expected = false;
    expect(actual).to.equal(expected);
    });

    it("correctly translates the given phrase, based on the alphabet given to the function.", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
    });

    it("returns false if there are any duplicate characters in the given alphabet.", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswap");
    const expected = false ;
    expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message when encoding", () => {
    const actual = substitution("tests spaces when encoding", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "dkrdr rtpmkr sjkg kgmcobgi";
    expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message when decoding", () => {
    const actual = substitution("dkrdr rtpmkr sjkg okmcobgi", "plmoknijbuhvygctfxrdzeswaq", false);
    const expected = "tests spaces when decoding";
    expect(actual).to.equal(expected);
    });

    it("ignores capital letters.", () => {
    const actual = substitution("tests caps AaBbCc", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "dkrdr mptr ppllmm";
    expect(actual).to.equal(expected);
    });
});
