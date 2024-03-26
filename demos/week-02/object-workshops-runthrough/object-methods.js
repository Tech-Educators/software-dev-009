const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello(); // Output: Hello!

// Passing arguments
const person2 = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (name) {
    console.log(`Hello ${name}!`);
  },
};

person2.sayHello("Alice"); // Output: Hello Alice!

// Returning values
const person3 = {
  name: "Bob",
  age: 31,
  favouriteColour: "red",
  getAge: function () {
    return person3.age;
  },
};

const age = person3.getAge();

console.log(age); // Output: 30

// Advert
const car = {
  make: "Fiat",
  model: "Panda",
  colour: "Pink",
  advert: function () {
    return `Buy my ${car.make} ${car.model}! It is ${car.colour} and it works.`;
  },
};

const carAd = car.advert();

console.log(carAd);
