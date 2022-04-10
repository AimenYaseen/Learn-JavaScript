// Class with constructor & Old syntax
class Human {
  constructor() {
    this.gender = "Male/Female";
  }

  printGender() {
    console.log(this.gender);
  }
}
class Man extends Human {
  // Inheritance
  constructor() {
    super(); // call the parent constructor
    this.name = "Max";
    this.gender = "Male";
  }

  printName() {
    console.log(this.name);
  }
}
const person = new Man();
person.printName();
person.printGender();

// Modern Classes
class Person {
  // no need of super keyword to call parent constructor anymore
  name = "adverd"; // no this Keyword, no constructor to initialize
  call = () => {
    // Use Arrow Funtion
    console.log("Calling");
  };
  printName() {
    console.log(this.name);
  }
}

const Person1 = new Person();
Person1.call();
console.log(Person1.name);
