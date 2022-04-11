// Generators are funtions that are executed and returned multiple times
// Generators are used to iterate over any data structure

// syntax
function* numbers() {
  // OR function *numbers() {
  yield; // keyword used for transition
}

const gen = numbers(); // it does not invoke any code
console.log(numbers()); // Object [Generator] {}  // things start here
console.log(gen); // Object [Generator] {}
// With yield
console.log(gen.next()); //  { value: undefined, done: false }
console.log(gen.next()); //   { value: undefined, done: true }
// Without yield
// console.log(gen.next()); //  { value: undefined, done: true }
// console.log(gen.next()); //   { value: undefined, done: true }

// Example with story

console.log("EXample _______ 01");

function* shopping() {
  //stuff on sideWalk

  // walking down the sidewalk

  // Enter the store with a cash
  const stuffFromStore = yield "cash";
  // Move Back to Home
  return stuffFromStore;
}
// stuff in the store
const shop = shopping();
console.log(shop.next()); // leaving home
// walked into store
// pirchase stuff
console.log(shop.next("groceries")); // leaving store with groceries

// we enter the generator at first next call
// execute the code untill we hit with yield
// it stops there and then move to next call
// it again re enters at the the same point (yield) with some value
// now value with yield will be updated
// then return that value

// Example with story

console.log("EXample _______ 02");

function* shopping2() {
  //stuff on sideWalk

  // walking down the sidewalk

  // Enter the store with a cash
  const stuffFromStore = yield "cash";
  // Move to laundry
  const cleanClothes = yield "laundry";
  // Move Back to Home
  return [stuffFromStore, cleanClothes];
}
// stuff in the store
const shop2 = shopping2();
console.log(shop2.next()); // leaving home
// walked into store
// purchase stuff
console.log(shop2.next("groceries")); // leaving store with groceries
// walked into laundry
// Laundry
console.log(shop2.next("clean Clothes")); // leaving with clean Clothes
