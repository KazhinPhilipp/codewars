import { comp } from "./solution";
import { assert } from "chai";

function testing(a1: number[] | null, a2: number[] | null, expected: boolean) {
  var s1 = "";
  var s2 = "";
  if (a1 !== null) s1 = a1.toString();
  else s1 = "null";
  if (a2 !== null) s2 = a2.toString();
  else s2 = "null";
  assert.strictEqual(
    comp(a1, a2),
    expected,
    "Error with [" + s1 + "] / [" + s2 + "]\n"
  );
}

describe('Are they the "same"?', function () {
  it("Basic tests", function () {
    var a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
    var a2: number[] = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    testing(a1, a2, true);

    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = [
      11 * 21,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    testing(a1, a2, false);

    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
    testing(a1, a2, false);

    a1 = [
      91, 91, 2, 20, 64, 49, 29, 16, 4, 53, 63, 41, 13, 16, 29, 66, 10, 13, 76,
      90, 51, 76, 99,
    ];
    a2 = [
      8282, 8281, 4, 400, 4096, 2401, 841, 256, 16, 2809, 3969, 1681, 169, 256,
      841, 4356, 100, 169, 5776, 8100, 2601, 5776, 9801,
    ];
    testing(a1, a2, false);
  });
});
