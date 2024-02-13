export class Fibonacci {
  public head(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let fib1: number = this.head(n - 1);
    let fib2: number = this.head(n - 2);
    let result = fib1 + fib2;
    return result;
  }

  public tail(n: number, a: number, b: number): number {
    if (n === 0) return a;
    if (n === 1) return b;
    return this.tail(n - 1, b, a + b);
  }
}
