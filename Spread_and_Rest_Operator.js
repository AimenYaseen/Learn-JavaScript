// Spread Operator ...
// Use to merge old arrays/objects with new arrays/objects
// ARRAYS
const array = [25, 40, 30, 60];
const newArray = [...array, 1, 0];
//OBJECTS
const oldObject = {
  name: "Max",
  age: 20,
};
const newObject = {
  ...oldObject,
  lastName: "Well",
  age: 24, // Overwritten
};
