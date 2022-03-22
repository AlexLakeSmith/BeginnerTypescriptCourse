// Way to represent a union type.
function combine(
  inp1: number | string,
  inp2: number | string,
  // Union types X Literal types.
  // We allow specifically these two strings only, any other string value won't be allowed.
  resultType: "text" | "number"
) {
  // Makes clear that we will either always work with numbers or always work with strings. Runtime check.
  let result;
  if (
    (typeof inp1 === "number" && typeof inp2 === "number") ||
    resultType === "number"
  ) {
    result = +inp1 + +inp2;
  } else {
    result = inp1.toString() + " " + inp2.toString();
  }
  return result;
}
console.log(combine(30, 26, "number"));
console.log(combine("30", "26", "number"));
console.log(combine("alex", "sam", "text"));
