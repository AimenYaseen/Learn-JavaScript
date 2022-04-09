// some helper also returns a Boolean value
// It returns TRUE if atleast one element of array satisfies the condition
// Just like OR || operator otherwise false

var computers = [
  { name: "Apple", ram: 32 },
  { name: "Dell", ram: 4 },
  { name: "Acer", ram: 64 },
];

// using for loop
var someComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  if (computers[i].ram > 16) {
    someComputersCanRunProgram = true;
    break;
  }
}

console.log("Can all computers run program ", someComputersCanRunProgram);

// using ES6

var result = computers.some((computer) => {
  return computer.ram > 16;
});

console.log("Can some computers run program using some", result);

// Example # 01

var names = ["Aimen", "Yaseen", "Joe"];

result = names.some((name) => {
  return name.length > 3;
});

console.log("Some Names has length > 3 ", result);
