//regular function

function greet(userName, userSurname) {
  return `Hello ${userName} ${userSurname}`;
}

//arrow function
const greet = (userName, userSurname) => {
  `Hello ${(userName, userSurname)}`;
};
//one parameter can be written without () brackets
// two or more parameters need brackets

//regular function
button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

//arrow function
button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

//regular function in React
export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>React is cool!</p>
    </>
  );
}

//arrow function in React
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

// export default App;

//arrow functions with methods and anonymous functions as a starting point – but it is personal preference
games.forEach((game) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});
