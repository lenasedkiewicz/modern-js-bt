// create a promise

const getUser = new Promise((resolve, reject) => {
  // some async task
  setTimeout(() => {
    resolve({ name: "John", age: 34 });
  }, 1000);
}).then((user) => {
  console.log(user);
});

console.log("Hello from global scope");
