export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 == null || a2 == null) {
    return false;
  }
  if (a1.length === 0 && a2.length === 0) {
    return true;
  }
  let result = true;
  a1.forEach((value) => {
    const square = value * value;
    const includes: boolean = a2.includes(square);
    if (!includes) {
      result = false;
    } else {
      const index = a2.findIndex((a) => a === square);
      if (index != null) {
        a2.splice(index, 1);
      }
    }
  });
  return result;
}
