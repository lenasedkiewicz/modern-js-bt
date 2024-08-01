const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    age: 23,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    age: 25,
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michaeljohnson@example.com",
    phone: "555-123-4567",
    age: 35,
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    email: "emilybrown@example.com",
    phone: "444-987-6543",
    age: 28,
  },
  {
    firstName: "David",
    lastName: "Lee",
    email: "davidlee@example.com",
    phone: "777-321-0987",
    age: 20,
  },
  {
    firstName: "Olivia",
    lastName: "Miller",
    email: "oliviamiller@example.com",
    phone: "666-789-4561",
    age: 32,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

// Challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);

/// Challenge 3

const words = ["programmer", "coder", "developer"];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(cWords);
