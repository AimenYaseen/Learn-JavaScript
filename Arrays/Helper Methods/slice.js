// Create Shallow Copy
// Changes in one array dosenot affect other array in case of string, number, boolean
// slice() => copy whole array
// slice(start)  =>  copy from given index to end
// slice(start, end)
// Indexing
// [0, 1, 2, 3, 4, 5]
// [-6, -5, -4, -3,-2,-1]

const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newAnimals = animals.slice();
console.log("Animals: ", animals);
console.log("Shallow Copy of Animals: ", newAnimals);
// [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2));
// [ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(1, 4)); // 4 is not included (elephant)
// [ 'bison', 'camel', 'duck' ]
console.log(animals.slice(3));
// [ 'duck', 'elephant' ]
console.log(animals.slice(2, 5)); // 5 is not included
// [ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(-2));
// [ 'duck', 'elephant' ]
console.log(animals.slice(1, -2)); // -2 is not included
// [ 'bison', 'camel' ]
console.log(animals.slice(5)); // empty Array

// Changes in one array also affects other array in case of objects
// Using slice, create newCar from myCar.

let myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
};
let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2); // myHoda and 2
// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log("myCar = ", myCar);
console.log("newCar = ", newCar);
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
