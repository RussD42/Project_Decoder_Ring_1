const { expect } = require("chai");
const  polybius  = require("../src/polybius");

describe("polybius", () => {
    it("translates the letters i and j to 42 when encoding", () => {});
    const actual = polybius("tests i and j");
    const expected ="4451344434 42 113341 42";
    expect(actual).to.equal(expected);

    it("translates 42 to (i/j) when decoding", () => {});
    const actual = polybius("4451344434 42", false);
    const expected ="tests (i/j)";
    expect(actual).to.equal(expected);

    it("ignores capital letters.", () => {});
    const actual = polybius("TEsTS CapS");
    const expected ="4451344434 31115334";
    expect(actual).to.equal(expected);

    it("maintains spaces in the message when encoding", () => {});
    const actual = polybius("tests spaces encoding");
    const expected = "4451344434 345311315134 5133314341423322";
    expect(actual).to.equal(expected);

    it("maintains spaces in the message when decoding", () => {});
    const actual = polybius("4451344434 345311315134 4151314341423322", false);
    const expected ="tests spaces decod(i/j)ng";
    expect(actual).to.equal(expected);
});
