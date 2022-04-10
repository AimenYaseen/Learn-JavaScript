// Normal Function
function printMyName(msg) {
  console.log(msg);
}
printMyName("Hello");

// using ES6 Fat Arrow Function
const printName = () => {
  console.log("Pretty");
};
printName();

// With one argument
const printName1 = (name) => {
  console.log(name);
};
printName1("World");

// Alternative Syntax for 1 argument
// you can omit paranthesis if you have 1 argument
// const printName2 = name => {
//   console.log(name);
// };

const printName2 = (name) => console.log(name);
printName2("World2");

// arrow function with only return statement
const multiply = () => {
  return 2 * 2;
};

// Alternative
// 2*2 is called implicit return
const multiply2 = () => 2 * 2;
multiply2();

const multiply1 = (number) => number * 2;
multiply1(20);

//
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
