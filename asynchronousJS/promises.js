// create a promise

const getUser = new Promise((resolve, reject) => {
  // some async task
  setTimeout(() => {
    let error = true;

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
  });

console.info("Hello from global scope");
