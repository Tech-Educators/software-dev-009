import Database from "better-sqlite3";
const db = new Database("database.db");

// create a leagues table
db.exec(`
    CREATE TABLE leagues (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )
`);

// create a teams table
db.exec(`
    CREATE TABLE teams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        league_id INTEGER
    )
`);

// create a players table
db.exec(`
    CREATE TABLE players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        team_id INTEGER
    )
`);

// populate the tables with data
// leagues
const insertLeague = db.prepare(`
    INSERT INTO leagues (name) VALUES (?)
`);

insertLeague.run("Premier League");
insertLeague.run("Championship");
insertLeague.run("League 1");
insertLeague.run("League 2");
insertLeague.run("National League");

// teams
const insertTeam = db.prepare(`
    INSERT INTO teams (name, league_id) VALUES (?, ?)
`);

insertTeam.run("Chelsea", 1);
insertTeam.run("Everton", 1);
insertTeam.run("Wrexham", 4);
insertTeam.run("Man City", 1);
insertTeam.run("Stockport", 4);
insertTeam.run("Norwich", 2);
insertTeam.run("Derby", 3);
insertTeam.run("Peterborough", 3);
insertTeam.run("Hull City", 2);
insertTeam.run("Arsenal", 1);
insertTeam.run("Nottingham Forest", 1);

// players
const insertPlayer = db.prepare(`
    INSERT INTO players (name, team_id) VALUES (?, ?)
`);

insertPlayer.run("Cole Palmer", 1);
insertPlayer.run("Paul Mullin", 3);
insertPlayer.run("Matt Turner", 11);

console.log("Created the database with the tables");
