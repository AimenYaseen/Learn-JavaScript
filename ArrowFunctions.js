// Normal Function
function printMyName(name) {
  console.log(name);
}
printMyName("Hello");

// using ES6 Arrow Function
const printName = () => {
  console.log("Pretty");
};
printName();

// With one parameter
const printName = (name) => {
  console.log(name);
};
printName("World");

// Alternative Syntax for 1 parameter
const printName = (name) => {
  console.log(name);
};

// arrow function with only return statement
const multiply = () => {
  return 2 * 2;
};

// Alternative
const multiply = () => 2 * 2;
multiply();

const multiply = (number) => number * 2;
multiply(20);
