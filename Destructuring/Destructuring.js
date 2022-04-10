// Destructuring pulls one or more elements/properties from array/object
// And then store them in a variable

// Array Destructuring
const numbers = [1, 2, 3, 6, 5, 7];
const [num1, num2] = numbers; // 1 & 2
console.log(num1, num2);
const [, , , num4, num5] = numbers; // 6 & 5
console.log(num4, num5);

// Object Destructing

// Property which you are going to destructure from object must have identical name.
// Order is not important in argument object destructuring

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
console.log(Person);

// Destructuring with objects and arrays
// Example #01
const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Park Vila" },
  { name: "Uber", location: "San Fransisco" },
];

// pull value "Mountain View"
const [{ location }] = companies; // [] determines 1st element then location
console.log(location); // "Mountain View"

// pull value "Facebook"
const [, { name }] = companies;
console.log(name); // "Facebook"

// Example # 02
const Google = {
  locations: ["San Francisco", "New York", "Mountain View"],
};

// pull value 'San Francisco'
const {
  locations: [locat],
} = Google;
console.log(locat); // 'San Francisco'
