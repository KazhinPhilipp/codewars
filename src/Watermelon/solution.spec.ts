import { expect } from "chai";

import { divide } from "./solution";

describe("Watermelon", () => {
  it("Basic test should work", () => {
    expect(divide(4)).to.equal(true, `testing for ${4}`);
    expect(divide(88)).to.equal(true, `testing for ${88}`);
    expect(divide(99)).to.equal(false, `testing for ${99}`);
  });
});
