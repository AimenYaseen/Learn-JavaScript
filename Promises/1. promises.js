// JavaScript executes our code line by line without any pauses
// But sometimes we want to wait for a long processes to get data
// Like a network request , so only when process ends that time
// we want to execute remining snippet of code

// Here comes promises
// three states
// 1. unresolved : waiting for something to finish: process has just started
// 2. resolved : process finished and it went OK
// 3. rejected : process finished but something bad happen

// promise => resolved => then(callback)
// promise => rejected => catch(callback)

// Create promise
let promise = new Promise((resolve, reject) => {
  // resolve();
  // reject();
  setTimeout(() => {
    resolve();
  }, 3000); // 3000 ===  3 sec
});

promise
  .then(() => {
    console.log("Finally!!!!");
  })
  .catch(() => {
    console.log("OOOPPPSSSSsss!!!!");
  });

console.log(promise);
