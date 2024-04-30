//import artList
import { artList } from "./lib/api.js";
//I am destructuring one element from api.js

//import express
import express from "express";
import cors from "cors";

//use express
const app = express();
app.use(express.json());

//use cors
app.use(cors());

//endpoint for the root route – GET
app.get("/", (request, response) => {
  response.json({ message: "Hello!" });
});

//endpoint to read the data from the library
app.get("/artlist", (req, res) => {
  res.json(artList);
});

//listen to the PORT
app.listen(8080, () => {
  console.log("Server is listening on PORT 8080");
});
