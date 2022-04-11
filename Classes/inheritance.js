class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    console.log(this.title);
    return "drive";
  }
}

// const car = new Car({ title: "Toyota" });
// console.log(car.drive());

// Inheritance
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ title: "Toyota is here", color: "red" });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
