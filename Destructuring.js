// Destructuring pulls one or more elements from array/object
// And then store them in a variable

// Array Destructuring
const numbers = [1, 2, 3, 6, 5, 7];
[num1, num2] = numbers; // 1 & 2
console.log(num1, num2);
[, , , num4, num5] = numbers; // 6 & 5
console.log(num4, num5);

// Object Destructing
const Person = {
  name1: "Max",
  age: 23,
};
const { name1 } = Person;
console.log(name1);
//const { name1, age } = Person;
//console.log(name1, age);
const { firstName } = Person; // undefined
const { lastName = "Well" } = Person;
console.log(firstName, lastName);
