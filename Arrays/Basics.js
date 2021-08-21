//Declaration
let fruits = ["Orange", "Apple", "Banana", "Mango", "Grapes"];
console.log(fruits.length);
//Access Elements of Array
console.log(fruits[0]); // Frist => Orange
console.log(fruits[3]); // Mango
console.log(fruits[fruits.length - 1]); //Last +> Grapes
//Loop Over the Array
fruits.forEach((item, index) => {
  console.log(index, item);
});
//Add an item at the end of Array using "push"
console.log(fruits.length); //5
fruits.push("Gauva", "Leechi");
console.log(fruits);
console.log(fruits.length); //7
// Remove an item from the end of Array using "pop"
Last = fruits.pop(); // Leechi
console.log(fruits);
console.log("Removed Item : " + Last);
console.log(fruits.length); //6
// Remove an item from the beginning of an Array using "Shift"
First = fruits.shift();
console.log(fruits);
console.log("Removed Item : " + First);
console.log(fruits.length); //5
// Add an item to the beginning of an Array using "Unshift"
fruits.unshift("Strawberry");
console.log(fruits);
console.log(fruits.length); //6
// Find the index of an item in the Array
let pos = fruits.indexOf("Banana");
console.log("Index of Banana : " + pos);
// Remove an item by index position using "Splice(index, no. of elements to remove)"
let removedItem = fruits.splice(pos, 1); // delete Banana
console.log("Removed Item : " + removedItem);
console.log(fruits);
console.log(fruits.length); //5
// Remove  multile items from an index position
console.log(pos); // 2
removedItem = fruits.splice(pos, 2);
console.log("Removed Item : " + removedItem);
console.log(fruits);
console.log(fruits.length); // 3
// Copy an Array using "Slice"
let copyArray = fruits.slice();
console.log(fruits);
console.log(copyArray);
// JavaScript engine convets array indexex into String
// Array index can be accessed as strings ex: ['2']
console.log(fruits[2] != fruits[02]); // False
console.log(fruits["2"] != fruits["02"]); // True because 2 & 02 are treated different
