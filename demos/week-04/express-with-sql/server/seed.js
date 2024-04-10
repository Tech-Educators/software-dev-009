import Database from "better-sqlite3";
const db = new Database("database.db"); // either creates a db, or gets the existing one

// create games table
db.exec(`
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        year INTEGER NOT NULL,
        imgUrl TEXT
    )
`);

// populate the games table
const insertGame = db.prepare(`
    INSERT INTO games (name, year, imgUrl) VALUES (?, ?, ?)
`);

insertGame.run(
  "Pokemon Yellow",
  2000,
  "https://archives.bulbagarden.net/media/upload/9/95/Yellow_EN_boxart.png"
);
insertGame.run(
  "Nuclear Strike",
  1997,
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Nuclear_Strike_cover_art.png/220px-Nuclear_Strike_cover_art.png"
);
insertGame.run(
  "GTA2",
  1999,
  "https://upload.wikimedia.org/wikipedia/en/2/2e/GTA2_Box_art.jpg"
);
insertGame.run(
  "Fallout 3",
  2008,
  "https://tse1.mm.bing.net/th?id=OIP.bY9nDZgKl-_nx1PbsygACgHaEK&pid=Api"
);
insertGame.run(
  "Descent",
  1995,
  "https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/07/descent.jpg"
);
insertGame.run(
  "Wings of Fury",
  1987,
  "https://i.ytimg.com/vi/ZZSwdqg6VE4/maxresdefault.jpg"
);
insertGame.run(
  "Call of Duty",
  2003,
  "https://cdn.mobygames.com/covers/4083905-call-of-duty-windows-front-cover.jpg"
);
insertGame.run(
  "Outer Wilds",
  2019,
  "https://i.ytimg.com/vi/d6LGnVCL1_A/maxresdefault.jpg"
);
insertGame.run(
  "Dark Souls 3",
  2016,
  "https://assets-prd.ignimgs.com/2023/03/03/fromsoft-dlc-ranked-blogroll-1677863442346.jpg"
);
insertGame.run(
  "Jazz Jackrabbit2",
  1998,
  "https://tcrf.net/images/thumb/9/90/Jazz_Jackrabbit_2-title.png/320px-Jazz_Jackrabbit_2-title.png"
);
