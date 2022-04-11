// combine multiple generators together

const testingTeam = {
  lead: "Jane",
  tester: "Obi",
};

const engineeringTeam = {
  testingTeam,
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
  const testingGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingGenerator; // calling another generator
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const members = [];

for (let member of TeamIterator(engineeringTeam)) {
  members.push(member);
}
console.log(members);
