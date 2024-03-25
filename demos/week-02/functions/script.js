// function greet() {
//   return "This is working. I greet thee.";
// }

// let myGreeting = greet();

// console.log(myGreeting);

// the anatomy of a function
// we start by saying "function" to tell it that it is a function
// we then give it a name in this case "funcName"
// then we need () - this is either empty or where we put our params
// then {} - this encapsulates the code block we will be executing when we run the function
function funcName(param) {
  return param;
}
// this function takes a parameter called "param" and returns it

// Calculator
// add
function add(a, b) {
  return a + b;
}

// subtract
function subtract(a, b) {
  return a - b;
}

// multiply
function multiply(a, b) {
  let product = a * b; // we can do as much code as we like before the return in a functions
  return product;
}

// divide
function divide(a, b) {
  return a / b;
}

// calculate (putting it all together)
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

// n.b.
// = assignment
// == comparison
