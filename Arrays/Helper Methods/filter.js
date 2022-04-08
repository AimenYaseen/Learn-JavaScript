// Filter helper method is used to get specific values based on a condition
// used in search operations, filter results
// To produce subset of records

var products = [
  { name: "Lady Finger", type: "vegetable" },
  { name: "Orange", type: "fruit" },
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
];

// ES5 using for loop
var selectedProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "vegetable") {
    selectedProducts.push(products[i]);
  }
}
console.log(products);
console.log(selectedProducts);

// ES6 using filter
// If it returns true than it adds that particular item to new array otherwise not

var selected = products.filter(function (product) {
  return product.type === "fruit";
});
console.log(selected);

// Example # 01
var items = [
  { name: "Lady Finger", type: "vegetable", quantity: 0, price: 10 },
  { name: "Orange", type: "fruit", quantity: 10, price: 30 },
  { name: "Apple", type: "fruit", quantity: 6, price: 1 },
  { name: "Carrot", type: "vegetable", quantity: 8, price: 8 },
];

// type = 'vegetable' ; quantity > 0 ; price < 10
var filteredItems = items.filter((item) => {
  return item.type === "vegetable" && item.quantity > 0 && item.price < 10;
});
console.log(filteredItems);

// Example#02
var post = { id: 3, content: "How are you?" };
var comments = [
  { postId: 4, text: "neat" },
  { postId: 3, text: "awesome" },
  { postId: 2, text: "fine" },
  { postId: 3, text: "great" },
];

function filteredComments(post, comments) {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}

console.log(filteredComments(post, comments));
