import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors()); // this allows our client to communicate with the serve without being blocked

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude!");
});

app.post("/message", function (request, response) {
  const newMessage = request.body;
  // this console log will appear in the terminal beacuase that is where the server is running
  console.log(newMessage);

  // here is the response. At the moment we are just sendning back what the client sent with their own request
  // soon we will do stuff with that information, like adding it to a database
  response.json(newMessage);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
