export class Factorial {
  public head(n: number): number {
    if (n === 1) return 1;

    let res1: number = this.head(n - 1);
    let result: number = n * res1;

    return result;
  }

  public tail(n: number, accumulator: number): number {
    if (n === 0) return accumulator;
    return this.tail(n - 1, n * accumulator);
  }
}
