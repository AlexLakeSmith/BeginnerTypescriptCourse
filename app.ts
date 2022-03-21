// These {} are TS's notation of specialised object types.
// It allows us to give information on the structure of an object.
// You can do this, but you can also just let the inferencer figure it out for us.
/*const person: {
  name: string;
  age: number;
} = {
  name: "Alex",
  age: 20,
};*/

const person = {
  name: "Alex",
  age: 20,
};

console.log(person);
