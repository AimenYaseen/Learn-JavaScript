// Example # 01
const company = ["Google", "Apple", "Uber"];
const { length } = company; // 3
const [n, ...rest] = company;
console.log(rest); // ['Apple','Uber']

// Example # 02
const pairs = [
  [1, 0],
  [4, 2],
  [5, 9],
];
// Result must be [{x:1, y:0}, {x:4, y:2}, {x:5, y:9} ]
const points = pairs.map(([x, y]) => {
  // const [x, y] = pair;
  return { x, y };
});

console.log(points);
