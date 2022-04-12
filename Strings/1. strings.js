// Strings are immutable in javaScript that is you can't modify them directly

// length
let string = "hello world";
console.log(string.length); // 11

// replace
console.log(string.replace("hello", "goodbye")); // goodbye world
console.log(string); // hello world

string = string.replace("hello", "goodbye");
console.log(string); // goodbye world

// Capitalize the String
let str = "arugument goes here";
let words = str.split(" ");

let capString = words.map((word) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
  // console.log(word);
});

console.log(words);
console.log(capString); // [ 'Argument', 'Goes', 'Here' ]
str = capString.join(" ");
console.log(str); // Argument Goes Here

// // forEach
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((a) => {
//   a *= a;
// });

// console.log(arr);
