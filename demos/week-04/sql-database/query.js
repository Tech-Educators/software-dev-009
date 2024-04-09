import Database from "better-sqlite3";
const db = new Database("database.db");

const leagues = db.prepare(`SELECT * FROM leagues`).all();

console.log(leagues);
