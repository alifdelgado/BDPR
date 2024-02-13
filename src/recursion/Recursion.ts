export class Recursion {
  public head(n: number): void {
    console.log(`Calling the function with n = ${n}`);
    if (n === 0) {
      return;
    }

    this.head(n - 1);
    console.log(`the n value is: ${n}`);
  }

  public tail(n: number): void {
    console.log(`Calling the function with n = ${n}`);
    if (n === 0) {
      return;
    }

    console.log(`the n value is: ${n}`);
    this.tail(n - 1);
  }

  public factHead(n: number): number {
    if (n === 0) {
      console.log("Base case");
      return 1;
    }
    console.log(`Before recursion n = ${n}`);
    let result: number = n * this.factHead(n - 1);
    console.log(`After recursion res = ${result}`);
    return result;
  }

  public factTail(n: number, acc: number): number {
    if (n === 0) {
      console.log(`Base case ${acc}`);
      return acc;
    }
    console.log(`Before recursion n = ${n}`);
    let result: number = this.factTail(n - 1, n * acc);
    console.log(`After recursion res = ${result}`);
    return result;
  }
}
