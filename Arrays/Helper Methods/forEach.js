// ES5 Syntax
var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ES6 introduces forEach as an alternative to for loop
// Easy to implement and has less code
// It takes an element of array and pass it to iterator function and so on

// let color = ["red", "blue", "green"];

colors.forEach(
  // iterator function
  function (color) {
    console.log(color);
  }
);
// Both prints the same output but forEach is more convenient.

// Finding the sum of of elements of array
let numbers = [1, 2, 3, 4, 5];
let sum = 0,
  sum2 = 0;

numbers.forEach(function (number) {
  sum += number;
});
console.log(sum);

// ALTERNATIVE
function adder(number) {
  sum2 += number;
}
numbers.forEach(adder); //!adder() ; it displays nothing.
console.log(sum2);
// Note that we don't add paranthesis with adder because we are passing elements of
// array one by one
