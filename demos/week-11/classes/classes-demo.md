```js
class Animal {
  // a constructor is a function that runs once, when you instantiate a new object using the class
  constructor(animalName, numLegs) {
    this.name = animalName;
    this.legs = numLegs;
  }

  speak() {
    console.log(`${this.name} says hello!`);
  }
}

// instantiate (create an instance of) Animal using the "new" keyword
const obi = new Animal("Obi", 4);
const kira = new Animal("Kira", 4);

console.log(obi);
console.log(kira);

obi.speak();
kira.speak();

// we can create another class that inherits all the properties of another class, and add more of its own properties
class Bird extends Animal {
  constructor(animalName, numLegs, canFly) {
    super(animalName, numLegs);
    this.canFly = canFly;
  }

  fly() {
    if (this.canFly) {
      console.log(`${this.name} soars through the air!`);
    } else {
      console.log("Splat.");
    }
  }
}

const sundayRoast = new Bird("Sunday Roast", 2, false);
const tweety = new Bird("Tweety", 2, true);

console.log(sundayRoast);
console.log(tweety);

sundayRoast.fly();
tweety.fly();
tweety.speak();
```
