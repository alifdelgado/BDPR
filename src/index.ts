import { Factorial } from "./recursion/Factorial";
import { Fibonacci } from "./recursion/Fibonacci";
import { Recursion } from "./recursion/Recursion";

const main = () => {
  console.log("=====================Recursion=====================");
  const r: Recursion = new Recursion();
  console.log("=====================Head=====================");
  r.head(5);
  console.log("=====================Tail=====================");
  r.tail(5);
  console.log("=====================Fact Head=====================");
  r.factHead(5);
  console.log("=====================Fact Tail=====================");
  r.factTail(5, 1);
  console.log("=====================Factorial=====================");
  const f: Factorial = new Factorial();
  console.log("=====================Fact Head=====================");
  console.log(f.head(5));
  console.log("=====================Fact Tail=====================");
  console.log(f.tail(5, 1));
  console.log("=====================Fibonacci=====================");
  const fib: Fibonacci = new Fibonacci();
  console.log("=====================Fact Head=====================");
  console.log(fib.head(5));
  console.log("=====================Fact Tail=====================");
  console.log(fib.tail(5, 0, 1));
};

main();
