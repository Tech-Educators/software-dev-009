// If i write this here nothing changes, because this is a comment

// here I am putting the string "Hello world" into the console
console.log("Hello world");

// a variable is a sort of "bucket" we can put information into

// declaring a variable looks like a sentence:
// let this variable called myName be equal to "Tim"
let myName = "Tim";

// we can use variables over and over again
console.log(myName); // notice how we don't put "" around the variable name here
console.log("myName"); // here JavaScript just gives us the string "myName", not the variable

// Datatypes
// string - anything between ""
let myString = "This is my string. How quaint.";
let myConfusingString = "10";
let myWut = "true";
let stringWithQuote = 'This string has a " in it';

// number - anything that is a number
let myAge = 39;
let score = 0;
let year = 2024;
let decimal = 0.1;

// boolean
let timIsHandsome = true;
let timHasHair = false; // :(

// variable can be created using other variables
let a = 11;
let b = 21;
// awesome arithmatic averyone
let sum = a + b; // 32
let product = a * b; // 231
let quotient = a / b; // 5.2423481287234
let difference = a - b; // -10

// we can also combine strings together to make longer strings
let str1 = "Hello";
let str2 = "world";
// concatenation
let concatStr = str1 + str2; // Helloworld
let concatStrWSpace = str1 + " " + str2; // Hello world

// template literals
// for these instead of using quotes we use the backtick - `
let templateLiteral = `${str1} ${str2}`; // Hello world

// if we put ${} inside a string literal (backticks) we can put javascript into a string
// so we can do funky stuff like this
let coolestNumber = `My favourite number is ${a * b}`; // My favourite number is 231

// IMPORTANT: a variable can be called ANYTHING with the following exceptions
// it cannot be a JavaScript reserved word like: let, function etc
// it cannot include special characters excpet for: _ and numbers
// it cannot start with a number
