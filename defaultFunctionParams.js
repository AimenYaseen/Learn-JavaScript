// Default params work when you do not provide the value for that particular argument

// Old Way
function makeRequest(url, method) {
  if (!method) {
    method = "GET"; // setting default value if user doesn't pass it
  }
  // Some logic here
}

makeRequest("google.com"); // method will be undefined so it will contain default value
makeRequest("google.com", "GET");

// ES6
function makeRequest(url, method = "GET") {
  return method;
  // Some logic here
}

console.log(makeRequest("google.com")); // method will be undefined so it will contain default value
console.log(makeRequest("google.com", "POST")); // method will be equal to POST
console.log(makeRequest("google.com", null)); // nothing will be printed || null
console.log(makeRequest("google.com", undefined)); // GET

//
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());

console.log(createAdminUser());
console.log(createAdminUser(user));
