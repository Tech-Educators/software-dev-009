// " - double quote
// ' - single quote
// ` - backtick

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);
console.table(person);

// Accessing properties
console.log(person.name); // Output: Bob
console.log(person.age); // Output: 30
console.log(person.favouriteColour); // Output: red

// Adding properties
person.favouriteFood = "pizza";
console.log(person.favouriteFood); // Output: pizza
console.log(person);

// Stretch Goals
// car
const car = {
  make: "Toyota",
  model: "Rav 4",
  colour: "Deep Electric Blue",
};

const advert = `Buy my ${car.make} ${car.model}. Its ${car.colour} and works!`;
// this outputs: Buy my Toyota Rav 4. Its Deep Electric Blue and works!

console.log(advert);

// book
const book = {
  title: "The Hobbit",
  author: "JRR Tolkien",
  pages: 5,
};

const bookAdvert =
  book.title +
  " by " +
  book.author +
  " is very long, with as many as " +
  book.pages +
  " pages.";

console.log(bookAdvert);
