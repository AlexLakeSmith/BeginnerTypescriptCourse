// Core data types.

// By adding the : number/boolean after the param TS checks that both of the passed vars are the correct type.
// Catching the error before it is even compiled, but the compiler will also alert you.
function add(n1: number, n2: number, tf: boolean) {
  if (tf) {
    return n1 + n2;
  }
}

// If you declare a var/const without passing the type inferencer something it may be better to declare what type it should be e.g
// let number1:number;
// This means later when assigning values you cannot assign the wrong type. Not fully necessary just an extra thing to do.

let num1 = 2;
const num2 = 4;
const printResult = true;

console.log(add(num1, num2, printResult));
console.log("hello");
