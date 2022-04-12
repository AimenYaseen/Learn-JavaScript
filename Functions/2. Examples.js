// Example # 01
const numArray = [1, 4, 7, 9];
// const doubleNumArray = numArray.map((num) => {
//   return num * 2;
// });
// This will be equal to
const doubleNumArray = numArray.map((num) => num * 2);
console.log(numArray);
console.log(doubleNumArray);

// Where to use Arrow Functions
const team = {
  members: ["Jane", "Will"],
  teamName: "Super Squad",
  teamSummary: function () {
    // const self = this;  1 way to solve    self.teamName
    return this.members.map(
      function (member) {
        return `${member} is a part of ${this.teamName}`;
        // this.teamName returns undefined
      }
      //.bind(this)   Another way to solve this problem
    );
  },
};

console.log(team.teamSummary());

// ALTERNATIVE using Arrow functions
const team2 = {
  members: ["Jane", "Will"],
  teamName: "Super Squad",
  teamSummary() {
    return this.members.map((member) => {
      return `${member} is a part of ${this.teamName}`;
    });
  },
};

console.log(team2.teamSummary());
