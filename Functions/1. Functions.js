// Normal Function
function printMyName(msg) {
  console.log(msg);
}
printMyName("Hello");

// function is treated as object in javaScript
const myFunction = function (msg) {
  console.log(msg);
};

// using ES6 Fat Arrow Function
const printName = () => {
  console.log("Pretty");
};
printName();

// With one argument
const printName1 = (name) => {
  console.log(name);
};
printName1("World");

// Alternative Syntax for 1 argument
// you can omit paranthesis if you have 1 argument
// const printName2 = name => {
//   console.log(name);
// };

const printName2 = (name) => console.log(name);
printName2("World2");

// arrow function with only return statement
const multiply = () => {
  return 2 * 2;
};

// Alternative
// 2*2 is called implicit return
const multiply2 = () => 2 * 2;
multiply2();

const multiply1 = (number) => number * 2;
multiply1(20);
