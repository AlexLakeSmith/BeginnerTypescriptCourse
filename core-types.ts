// These {} are TS's notation of specialised object types.
// It allows us to give information on the structure of an object.
// You can do this, but you can also just let the inferencer figure it out for us (unless using tuples).

enum Roled {
  INTERN = 0,
  JUNIOR = 1,
  SENIOR = 2,
  ADMIN = 3,
}

var person = {
  name: "Alex",
  age: 20,
  hobbies: ["Gaming", "Sports"],
  role: Roled.JUNIOR,
};

// BE AWARE THAT role.push('Senior') will not be caught by TS. Some loophole...

// This allows non strict array entries as opposed to defining favouriteThings:string[] which would only allow strings.
// Don't want to use often as you lose the benefits TS gives you and brings you back to the world of JS.
var favouriteThings: string[];
favouriteThings = ["Cooking"];

console.log(person);
console.log(favouriteThings);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  // TS allows us to manipulate hobby correctly because it knows it is a string so can do the above command.
  // It also knows that string cannot be mapped so will not allow the following command.
  //console.log(hobby.map())
}
