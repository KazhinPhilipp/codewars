import add from "./solution";
import { assert } from "chai";

describe("A Chain adding function", () => {
  it("should work when called once", () => {
    assert(add(1) == 1);
  });
  it("should work when called twice", () => {
    assert(add(1)(2) == 3);
  });
  it("should work when called 5 times", () => {
    assert(add(1)(2)(3)(4)(5) == 15);
  });
});
