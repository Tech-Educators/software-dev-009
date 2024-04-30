import express, { response } from "express";
import cors from "cors";
import { db } from "./seed.js"; //destructuring this element

//add .env config
import dotenv from "dotenv";
dotenv.config();

// use express and cors
const app = express();
app.use(express.json());
app.use(cors());

// listen to PORT
const PORT = "8080";
app.listen(PORT, () => {
  console.log(`─=≡Σ((( つ◕ل͜◕)つ Server started on PORT: ${PORT} `);
});

// get root route
app.get("/", (req, res) => {
  res.send("Café Disco c[_] ᕕ(⌐■_■)ᕗ ♪♬");
});

// get artworks route
app.get("/artworks", async (request, response) => {
  const result = await db.query(`SELECT * FROM artworks`);
  response.json(result.rows);
});

//add new artworks to my db
app.post("/artworks", async (req, res) => {
  const result = await db.query(
    `INSERT INTO artworks (title, author, url) VALUES ('My title', 'My author', 'My url')`
  );
  res.json(result.rows);
});

//update a current artwork
app.put("/artworks", async (req, res) => {
  const result = await db.query(
    `UPDATE artworks SET title = 'New Title', author = 'New Author', url = 'New Url' WHERE id = 13 RETURNING * `
  );
  res.json(result.rows);
});

//delete a row of data
app.delete("/artworks", async (req, res) => {
  const result = await db.query(`DELETE FROM artworks WHERE id = 13`);
  res.json(result.rows);
});

// POST --> Create
// GET --> Read
// PUT --> Update
// DELETE --> Delete

// CR / UD
