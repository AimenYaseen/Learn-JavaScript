// Example
function* colors() {
  yield "red";
  yield "yellow";
  yield "green";
  // need four next calls to execute this
  // no return value
}

const gen = colors();
console.log(gen.next()); // 'red' , done : false
console.log(gen.next()); // 'yellow' , done : false
console.log(gen.next()); // 'green' , done : false
console.log(gen.next()); // undefined , done : true

// with for of loop
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors); //[ 'red', 'yellow', 'green' ]

// EXample #02
// Generator is used to iterate through very particular properties of Object
// Custom Iteration
console.log("EXAMPLE # 02 ____________");
const engineeringTeam = {
  size: 3,
  department: "engineering",
  lead: "Jill",
  manager: "Jaxon",
  engineer: "Bill",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const members = [];

for (let member of TeamIterator(engineeringTeam)) {
  members.push(member);
}
console.log(members); // [ 'Jill', 'Jaxon', 'Bill' ]
