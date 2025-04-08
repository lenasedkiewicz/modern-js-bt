// create a promise

const promise = new Promise((resolve, reject) => {
  // some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("Promise consumed...");
});

console.log("Hello from global scope");
