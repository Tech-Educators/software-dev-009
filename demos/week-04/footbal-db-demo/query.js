import Database from "better-sqlite3";
const db = new Database("database.db");

const leagues = db.prepare("SELECT * FROM leagues").all();
// console.log(leagues);

const teams = db.prepare("SELECT * FROM teams").all();
// console.log(teams);

const players = db.prepare("SELECT * FROM players").all();
// console.log(players);

// the infamous JOIN statements
// I AM SHOWING YOU THIS EARLY, YOU DO NOT NEED TO USE THIS YET
// but look, so pretty!
const allData = db
  .prepare(
    `
    SELECT
        players.name AS player_name,
        teams.name AS team_name,
        leagues.name AS league_name
    FROM players
    JOIN teams ON players.team_id = teams.id
    JOIN leagues ON teams.league_id = leagues.id
`
  )
  .all();

console.log(allData);
