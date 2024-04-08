// import express from our node_modules
import express from "express";

// instantiate our express app
const app = express();

// tell express to expect information in the body of the request
app.use(express.json());

// our root endpoint
app.get("/", function (request, response) {
  console.log("/ is called");
  response.json("You are looking at my root route. How roude.");
});

// start our server
app.listen(8080, function () {
  console.log("App is running on PORT 8080");
});
