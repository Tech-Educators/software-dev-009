import Database from "better-sqlite3";

// either: create a new .db file, or if it already exists then read it
const db = new Database("database.db");

db.exec(`
    CREATE TABLE leagues (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        country TEXT
    )
`);

// exec can just run any SQL we write in it
// but it can be insecure when you are allowing users to decide the information you put into it
db.exec(`
    INSERT INTO leagues (name, country) VALUES
    ('Premier League', 'UK'),
    ('Championship', 'UK');
`);

// a more secure way is to use .prepare() and .run()
// this will sanotise your inputs (ie little Bobby tables)
db.prepare(
  `
    INSERT INTO leagues (name, country) VALUES
    (?, ?),
    (?, ?)
`
).run("League 1", "UK", "League 2", "UK");
