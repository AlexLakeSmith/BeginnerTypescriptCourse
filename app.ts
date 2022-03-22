// We could use this if we don't know what will be entered at decleration time.
// Can store any value in it without getting errors.
let userInput: unknown;
let userName: string;
userInput = "Alex";
//You need an extra type check with unkown to be able to assign an unknown value to a value with a fixed type.
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: String, number: number) {
  throw { message: message, errorCode: number };
}

generateError("Error occured", 100);
