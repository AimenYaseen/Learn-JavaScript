// Reduce is used to perform some opertaion on the elements of array
// And returns a single value
// It takes two arguments : iterator function nd initial value
// In iterator function, 1st argument represents the previous value and 2nd argument
// is the element of array

var numbers = [20, 30, 40, 50];
// Calculate the sum of array

// using for loop
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// using ES6
sum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log("Sum with Reduce : ", sum);

// Example #01
var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "green" }];
// Result should be ['red', 'yellow', 'green']

var result = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log("Result : ", result);
console.log(typeof result);

// Example # 02
// Balanced Paranthesis
// (()) true
// )()   false

function balanceParanthesis(string) {
  // split is used to convert string into array
  // '(' increment the previous
  // ')' decrement the previous
  // if previous = 0 then balanced otherwise not
  // ! => to return a boolean value
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous; // For handling )( this case
    }
    if (char === "(") {
      previous++;
    }
    if (char === ")") {
      previous--;
    }
    return previous; // in case if there is alphabets
  }, 0);
}

console.log(balanceParanthesis("(rreyru)try5()"));
