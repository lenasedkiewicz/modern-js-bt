const library = [
  {
    title: "Myth of Normal",
    author: "Daniel Mate, Gabor Mate",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Lord of The Rings",
    author: "J.R.R. Tolkien",
    status: { own: true, reading: false, read: false },
  },
];

// Finish reading books? Change that!

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Destructuring

const { title: firstBook } = library[0];
console.log(firstBook);

// JSON

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
