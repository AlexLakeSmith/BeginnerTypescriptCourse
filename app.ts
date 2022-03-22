// A possible way to declare the expected return type can be seen after the parameter ()'s.
function addNums(n1: number, n2: number): number {
  return n1 + n2;
}

// This is a void return type because we are not returning some certain type like above ^.
function printResults(num: number) {
  console.log("Result " + num);
}

printResults(addNums(1, 1));
