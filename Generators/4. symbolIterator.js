// Issue with generator delegation is that object is totally seperate
// from its iterator function

// Symbol iterator is a tool that teaches objects how to respond to for of loop
// It combines generator (iterator function) with the object
// It is used for custom Iteration through any data structure

// Arrays have default Symbol Iterator property that's why you use for of loop
// directly on arrays

const testingTeam = {
  lead: "Jane",
  tester: "Obi",
  // [Symbol.iterator] is a key
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "engineering",
  lead: "Jill",
  manager: "Jaxon",
  engineer: "Bill",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam;
}

const members = [];
for (let member of engineeringTeam) {
  members.push(member);
}
console.log(members);
