const pi = Math.PI;
console.log(pi);

const e = Math.E;
console.log(e);

let [x, y] = [-7, -15];
console.log(Math.abs(x - y));

let random = Math.random();
console.log(random);

let log = Math.log(100);
console.log(log);

let naturaLog2 = Math.LN2;
console.log(naturaLog2);

let max = Math.max(1, 12, 5, 3, 100, -3);
console.log(max);

let min = Math.min(1, 12, 5, 3, 100, -3);
console.log(min);

console.log(Math.tan(45));
console.log(Math.sqrt(25));
console.log(Math.floor(6.9));
console.log(Math.ceil(6.9));

// Modulo %
let num = 63;
let hours = Math.floor(num / 60);
let minutes = num % 60;
console.log(hours + " hour : " + minutes + " minutes");
