// ARRAY
// this is an array of information about Tim, but its hard to see what each item is reffering to
const me = ["Tim", 29, false, true, ["Bluey", "3D Printing", "Wife"]];

// OBJECT
// instead we can use an object to give each item a bit more meaning with a key:value pair
const objMe = {
  name: "Tim",
  age: 29,
  hasHair: false,
  isHandsome: true,
  favThings: ["Bluey", "3D Printing", "Wife"],
};

// ACCESSING INDIVIDUAL ITEMS WITHIN AN OBJECT
// getting the first item in an array
console.log(me[0]); // "Tim"
// you can use [] with the key inside to retrieve the corrisponding value
console.log(objMe["name"]); // "Tim"

// even better it DOT NOTATION
console.log(objMe.name); // "Tim"
console.log(objMe.favThings); // ["Bluey", "3D Printing", "Wife"]

// ADDING ITEMS TO AN OBJECT
objMe.car = "Suzuki Grand Vitara";

console.log(objMe); // this will include the new car key:value pair - car:"Suzuki Grand Vitara"

// UPDATING EXISTING ITEMS IN AN OBJECT
objMe.age = 30;

console.log(objMe); // the age key:value pair will now be age:30

// n.b. Updating and adding items to an array are identical.
// If the item exists it will be updated, if it doesn't, it will be added

// OBJECTS AND ARRAYS WITHING OBJECTS AND ARRAYS
// hold on to your seats
// this gon' get crazy

const crazyObject = {
  arrayOne: [
    "Woah",
    1,
    [
      {
        arrayThree: [{}, {}, {}, { confused: true }],
      },
    ],
  ],
};

// this is how we would access the confused property (if we hated ourselves)
crazyObject.arrayOne[2][0].arrayThree[3].confused; // true

// REAL WORLD EXAMPLE
const products = [
  { title: "Squadron Leader", price: 25 },
  { title: "MacBook Pro", price: 2000 },
];

// how would I update the price of the MacBook Pro to 2500
products[1].price = 2500;
// we access the array (products), then the item in the array we want ([1]), the the property (.price) and use the = to update it
