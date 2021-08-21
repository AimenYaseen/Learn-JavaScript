let vegetables = [];
vegetables.push("Cabbage", "Turnip", "Radish", "Carrot");
console.log(vegetables);
console.log(vegetables.length); // 4
console.log(Object.keys(vegetables)); // [ '0', '1', '2', '3' ]
// Add an element at index 6
vegetables[6] = "Potato";
console.log(vegetables);
console.log(vegetables.length); // 7
console.log(Object.keys(vegetables)); // [ '0', '1', '2', '3', '6' ]

// Increasing Length of an Array adds undefined values
vegetables.length = 10;
console.log(vegetables.length);
console.log(vegetables); // ['Cabbage','Turnip','Radish','Carrot', <2 empty items>,'Potato', <3 empty items>]
console.log(Object.keys(vegetables)); // [ '0', '1', '2', '3', '6' ]
console.log(vegetables[3]); // Carrot
console.log(vegetables[8]); // undefined

// Decreasing the length, also deletes the Elements
vegetables.length = 3;
console.log(vegetables.length); // 3
console.log(vegetables); // [ 'Cabbage', 'Turnip', 'Radish' ]
console.log(Object.keys(vegetables)); // [ '0', '1', '2' ]
