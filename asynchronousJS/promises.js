// create a promise

const getUser = new Promise((resolve, reject) => {
  // some async task
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "John", age: 34 });
    } else {
      reject("Error: Something went wrong...");
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.info(user);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.info("The promise has been resolved OR rejected");
  }); // will run no matter if promise was resolved or not

console.info("Hello from global scope");
