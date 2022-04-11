// Iterate through a tree data structure using generators

//blueprint for tree nodes
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const first = [
  new Comment("1st child of 1st", []),
  new Comment("2nd child of 1st", []),
];

const children = [
  new Comment("1st child", first),
  new Comment("2nd child", []),
  new Comment("3rd child", []),
];

const tree = new Comment("Root Node", children);
console.log(tree);

const values = [];
for (let value of tree) {
  values.push(value);
}

console.log(values);
