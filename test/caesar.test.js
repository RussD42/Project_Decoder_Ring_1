const { expect } = require("chai");
const   caesar   = require("../src/caesar");

describe("caesar", () => {
  it("returns false if the shift value is equal to 0.", () => {});
  const actual = caesar("Test false!", 0);
  const expected = false;
  expect(actual).to.equal(expected);

  it("returns false if the shift value is less than -25", () => {});
  const actual = caesar("Test false!", -42);
  const expected = false;
  expect(actual).to.equal(expected);

  it("returns false if the shift value is greater than 25.", () => {});
  const actual = caesar("Test false!", 42);
  const expected = false;
  expect(actual).to.equal(expected);

  it("returns false if the shift value is  not present.", () => {});
  const actual = caesar("Test false!");
  const expected = false;
  expect(actual).to.equal(expected);

  it("ignores capital letters.", () => {});
  const actual = caesar("TesTIng CaPs", 3);
  const expected = "whvwlqj fdsv";
  expect(actual).to.equal(expected);

  it("handles shifts that go past the end of the alphabet when encoding.", () => {});
  const actual = caesar("Z to A shift", 7);
  const expected = "g av h zopma";
  expect(actual).to.equal(expected);

  it("maintains spaces and other nonalphabetic symbols in the message when encoding.", () => {});
  const actual = caesar("This tests spaces & special characters!", 7);
  const expected = "aopz alzaz zwhjlz & zwljphs johyhjalyz!";
  expect(actual).to.equal(expected);

  it("maintains spaces and other nonalphabetic symbols in the message when decoding.", () => {});
  const actual = caesar("aopz alzaz zwhjlz & zwljphs johyhjalyz!", 7, false);
  const expected = "this tests spaces & special characters!";
  expect(actual).to.equal(expected);
});
