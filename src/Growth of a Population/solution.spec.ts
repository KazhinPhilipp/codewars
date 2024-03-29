import solution = require("./solution");
import { assert } from "chai";

function testing(p0, percent, aug, p, expected) {
  assert.equal(solution.G964.nbYear(p0, percent, aug, p), expected);
}

describe("Growth of a Population", function () {
  it("Basic tests nbYear", function () {
    testing(1500, 5, 100, 5000, 15);
    testing(1500000, 2.5, 10000, 2000000, 10);
    testing(1500000, 0.25, 1000, 2000000, 94);
    testing(1500000, 0.25, -1000, 2000000, 151);
  });
});
