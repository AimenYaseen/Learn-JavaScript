// Map works just like forEach but it combines its result in a brand new array
// It's used when we don't want to mutate the original array
// And store the results in a new array
// It returns a value while forEach is used for iterating over elements.

let numbers = [1, 2, 3, 4];

// ES5 Syntax
let doubledNumbrs = [];
for (var i = 0; i < numbers.length; i++) {
  doubledNumbrs[i] = numbers[i] * 2;
}
console.log(doubledNumbrs);

// ES6
let doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);

// Example # 01
var cars = [
  { model: "Civic", price: "cheap" },
  { model: "Ferrari", price: "expensive" },
];
var prices = cars.map(function (car) {
  return car.price;
});
console.log(prices);
// This operation is called plucking as we are plucking the property of an
// object of array

// It is mostly used to render list of data on screen like posts on Facebook.
