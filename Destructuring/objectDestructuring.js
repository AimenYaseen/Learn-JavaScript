// Example # 01
const expense = {
  type: "Business",
  amount: "$45 USD",
};

const { type, amount } = expense;
console.log(type, amount);

// Example # 02
const savedFile = {
  name: "Destructuring",
  extention: "jpg",
  size: 14040,
};

const fileSummary = ({ name, extention, size }, { color }) => {
  return `The file ${name}.${extention} is of size ${size} with ${color} color`;
};

console.log(fileSummary(savedFile, { color: "red" }));
