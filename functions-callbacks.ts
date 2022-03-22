// A possible way to declare the expected return type can be seen after the parameter ()'s.
function addNums(n1: number, n2: number): number {
  return n1 + n2;
}

// This is a void return type because we are not returning some certain type like above ^.
function printResults(num: number) {
  console.log("Result " + num);
}

printResults(addNums(1, 1));

// This could work. By setting a pointer to addNums you could technically use combineValues with the same functionality.
// But if the let value is changed, it will not work.
// We can assign the expected type to use the the Function keyword, to ensure it is not overwritten by some other data type.
// Although it could end up pointing to a different function if assigned later on. So instead of:
//let combineValues: Function;
//You can use
let combineValues: (a: number, b: number) => number;
// This is saying that it should accept any function that takes 2 params where both are nums and the function returns a number.
combineValues = addNums;
console.log(combineValues(2, 9));

// Added functionality with callback functions.
function addAndHandle(n1: number, n2: number, cb: (t: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log("Result is " + result);
});
