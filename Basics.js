// NaN stands for not a number
// undefined means variable was declared but has no value
// null is the property of an object which defines that the object is empty
// undefined and null are two different things

// Equal Operator
// 1.  ""="" assigns value to a variable
// 2.  ""=="" it only compare/checks the value not the type
//      if type of 1 operand is different to other, it typecast it
//      if(0 == false) => it returns true
//      despite the fact that 0 is a number while false is a boolean
// 3.  ""==="" it compares the value as well as type of the variables
//      if(0 === false) => it returns false

// Variables
var number = 30; // old approach
let fisrtName = "Miss"; // new approach
console.log(number);
console.log(fisrtName);
number = 78; // No Error
console.log(number);

// Constants
const lastName = "Yaseen";
console.log(lastName);
const num = 50; // you can not change the value of constants
//num = 20; //ERROR
console.log(num);

// plus (+)
// It act as both operator and concatenator
console.log(lastName + number);
// + here converts the number into string
