// Every helper returns a boolean value.
// It returns TRUE if every element of array satisfies the condition like
// && operator otherwise false

var computers = [
  { name: "Apple", ram: 32 },
  { name: "Dell", ram: 4 },
  { name: "Acer", ram: 64 },
];

// using for loop
var allComputersCanRunProgram = true;

for (var i = 0; i < computers.length; i++) {
  if (computers[i].ram < 16) {
    allComputersCanRunProgram = false;
    break;
  }
}

console.log("Can all computers run program ", allComputersCanRunProgram);

// using ES6

var result = computers.every((computer) => {
  return computer.ram > 16;
});

console.log("Can all computers run program using every", result);

// Example # 01

var names = ["Aimen", "Yaseen", "Joe"];

result = names.every((name) => {
  return name.length > 3;
});

console.log("Each Name has length > 3 ", result);

// Example #02
// Validation of Empty Fields in Login/SignUp forms

function Field(value) {
  this.value = value;
}

// Check if field is empty??
Field.prototype.validate = function () {
  return this.value.length > 0;
};
// Initializing Fields
var username = new Field("Amen");
var password = new Field("my_password");
var birthDate = new Field("10/10/2000");

// One way
console.log(username.validate() && password.validate() && birthDate.validate());

// The Other Way using every
var fields = [username, password, birthDate];

var isValidate = fields.every((field) => {
  return field.validate();
});

console.log(isValidate);
