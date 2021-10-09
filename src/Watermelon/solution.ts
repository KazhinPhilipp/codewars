export function divide(weight: number): boolean {
  if (weight < 4) {
    return false;
  }
  return weight % 2 === 0;
}
