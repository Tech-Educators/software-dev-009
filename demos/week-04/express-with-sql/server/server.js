import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// connect to the database.db file (normally this would be "connect to the database that is hosted elsewhere")
import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.get("/games", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  const games = db.prepare("SELECT * FROM games").all();
  response.json(games);
});

app.listen(8080, function () {
  console.log("AAAAAAAAAAAAAAAAAH... 8080");
});
