// It works like filter but it returns a single value instead of a series of
// elememts
// It gives you the single element from the collection of data

var users = [
  { name: "Bill", id: 1 },
  { name: "ABC", id: 2 },
  { name: "Will", id: 3 },
  { name: "Smith", id: 4 },
];

// ES5 using for loop
var user;
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Will") {
    user = users[i];
    break;
  }
}

console.log(user);

// ES6 using find
let result = users.find((user) => {
  return user.name === "Will";
});

console.log(result);

// Example#01

var posts = [
  { id: 1, title: "new post" },
  { id: 2, title: "old post" },
];
var comments = { postId: 2, content: "dbchdwe" };

function postForComment(posts, comment) {
  return posts.find((post) => {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comments));

// Example#02
// Find a specific Car

function Car(model) {
  this.model = model;
}

var cars = [new Car("Buick"), new Car("Focus"), new Car("Camaro")];

var findModel = cars.find((car) => {
  return car.model === "Focus";
});

console.log("hjgaduad ", findModel);
