export class G964 {
  public static nbYear = (p0, percent, aug, p): number => {
    let countYears = 0;
    while (p > p0) {
      p0 = p0 + (p0 * percent) / 100 + aug;
      countYears += 1;
    }
    return countYears;
  };
}
