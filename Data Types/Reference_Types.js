// Reference Types

// Object
let person = {
  name: "Yaseen",
  age: 32,
};
// To access Properties of an object
//Dot operator
console.log(person.name);
//Bracket notation
console.log(person["name"]);

// Arrays
// Can store different types of data
let arr1 = ["name", "age", 3];
arr1[3] = true; // Dynamic
console.log(arr1);
console.log(arr1.length); // works like object

//Functions
function square(num) {
  return num * num;
}

let result = square(5);
console.log(result);
