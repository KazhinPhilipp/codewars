export default function add(x: number): any {
  const sum = (num: number) => {
    return add(x + num);
  };
  sum.valueOf = function () {
    return x;
  };

  return sum;
}
