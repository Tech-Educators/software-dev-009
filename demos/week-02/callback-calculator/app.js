// add
function add(a, b) {
  console.log("adding");
  return a + b;
}

// subtract
function subtract(a, b) {
  console.log("subtracting");
  return a - b;
}

// multiply
function multiply(a, b) {
  console.log("multipying");
  return a * b;
}

// divide
function divide(a, b) {
  console.log("dividing");
  return a / b;
}

// with callback functions
function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  console.log(result);
}

calculate(3, 6, add);
calculate(9, 12, multiply);

// calculate OLD
function calculateOld(a, b, operator) {
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
      return "Thats not maths.";
  }
}
