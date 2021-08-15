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
const printName1 = (name) => {
  console.log(name);
};
printName1("World");

// Alternative Syntax for 1 parameter
const printName2 = (name) => {
  console.log(name);
};

// arrow function with only return statement
const multiply = () => {
  return 2 * 2;
};

// Alternative
const multiply2 = () => 2 * 2;
multiply2();

const multiply1 = (number) => number * 2;
multiply1(20);

//
const numArray = [1, 4, 7, 9];
const doubleNumArray = numArray.map((num) => {
  return num * 2;
});
console.log(numArray);
console.log(doubleNumArray);
