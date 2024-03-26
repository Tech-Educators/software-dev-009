// Basic example of a method inside an object
// its just a property with a value that is a function
const timsCar = {
  make: "Suzuki",
  model: "Grand Vitara",
  year: 2005,
  license: "QW55 ERT",
  noise: function () {
    console.log("Tims car goes: kaclonk... putt putt putt");
  },
};

const connorsCar = {
  make: "Audi",
  model: "A3",
  year: 2009,
  license: "FD09 JEU",
  noise: function () {
    console.log("Connors car goes: VRHRGRHRGRHOOOOM vrum vrum vrum vrum");
  },
};

timsCar.noise();

// the Document Object Model
// on the page we put <p id="ptag">This is a p tag with an ID of ptag</p>
// so we can use a method of the document object to get that p tag
console.log(document.getElementById("ptag")); // <p id="ptag">This is a p tag with an ID of ptag</p>

// methods that access the other properties of the object
const katyasCar = {
  make: "Honda",
  model: "Civic",
  year: 2009,
  license: "YU55 IOP",
  goVroom: function () {
    const p = document.createElement("p");
    p.textContent = "Honda Civic goes Vroom(e)";
    document.body.appendChild(p);
  },
};
