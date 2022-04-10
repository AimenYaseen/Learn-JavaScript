// Spread Operator ...
// Use to merge old arrays/objects with new arrays/objects
// ARRAYS
const array = [25, 40, 30, 60];
const newArray = [array, 1, 0]; // generate subArray
const newArray1 = [...array, 1, 0];
const newArray2 = [...array]; //Duplicate array
console.log(newArray); //[[25, 40, 30, 60], 1, 0]
console.log(newArray1); //[25, 40, 30, 60, 1, 0]
console.log(newArray2); //[25, 40, 30, 60]
//OBJECTS
const oldObject = {
  name: "Max",
  age: 20,
};
const newObject = {
  ...oldObject, // carry old object properties
  lastName: "Well",
  age: 24, // Overwritten
};
console.log(newObject);

//Rest Operator ...
// Used to merge list of arguments of a function into an array
const filter = (...args) => {
  // Receive more than one arguments
  return args.filter((el) => el === 2); // === checks type and value
};
console.log(filter(1, 2, 3, 4, 2, 3, 2));

// Another example
const sortArgs = (...args) => {
  return args.sort();
};
console.log(sortArgs(2, 6, 4, 1, 8, 0));

// Example
// Milk must be in the list

function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

console.log(validateShoppingList("egg", "bread", "orange"));
