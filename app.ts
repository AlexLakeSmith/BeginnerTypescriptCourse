// These {} are TS's notation of specialised object types.
// It allows us to give information on the structure of an object.
// You can do this, but you can also just let the inferencer figure it out for us (unless using tuples).
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // declaring a tuple type. Special
  role: [number, string];
} = {
  name: "Alex",
  age: 20,
  hobbies: ["Gaming", "Sports"],
  role: [10, "Boss"],
};

// This allows non strict array entries as opposed to defining favouriteThings:string[] which would only allow strings.
// Don't want to use often as you lose the benefits TS gives you and brings you back to the world of JS.
let favouriteThings: string[];
favouriteThings = ["Cooking"];

console.log(person);
console.log(favouriteThings);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  // TS allows us to manipulate hobby correctly because it knows it is a string so can do the above command.
  // It also knows that string cannot be mapped so will not allow the following command.
  //console.log(hobby.map())
}
