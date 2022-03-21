// Core data types.

// By adding the : number/boolean after the param TS checks that both of the passed vars are the correct type.
// Catching the error before it is even compiled, but the compiler will also alert you.
function add(n1: number, n2: number, tf: boolean) {
  if (tf) {
    return n1 + n2;
  }
}

const num1 = 2;
const num2 = 4;
const printResult = true;

console.log(add(num1, num2, printResult));
