// Arrays are ways to group items together
let colours = ["red", "green", "yellow", "blue"];

console.log(colours); // this gets me the whole array

console.log(colours[0]); // this gets me the item in the array with index 0 (the first item)
console.log(colours[3]); // this gets me the item in the array with index 3 (the fourth item)

// adding an item to the end array
colours.push("orange");
console.log(colours);

// removing an item from the end of an array
colours.pop();
console.log(colours);

// adding an item to the start of an array
colours.unshift("purple");
console.log(colours);

// removing an item from the start of an array
colours.shift();
console.log(colours);

// adding an item at a specific index
// add brown between green and yellow
colours.splice(2, 0, "brown");
console.log(colours);

// splice can do many things, the paramaters are:
// splice(indexStartPoint, numberofItemsToDelete, itemToAdd)
// so to make the array ["red", "teal"]
colours.splice(1, 4, "teal");
console.log(colours);
