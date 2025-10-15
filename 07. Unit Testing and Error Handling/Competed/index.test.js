const sum = require("./index");
const { assert } = require("chai");

describe("sum function test", () => {
  it("test with two number", () => {
    assert.equal(sum(3, 4), 7);
  });
});
