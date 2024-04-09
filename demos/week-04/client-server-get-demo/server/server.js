import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const games = [
  {
    title: "Pokemon Yellow",
    year: 2000,
    imgUrl:
      "https://archives.bulbagarden.net/media/upload/9/95/Yellow_EN_boxart.png",
  },
  {
    title: "Nuclear Strike",
    year: 1997,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Nuclear_Strike_cover_art.png/220px-Nuclear_Strike_cover_art.png",
  },
  {
    title: "GTA2",
    year: 1999,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/GTA2_Box_art.jpg",
  },
  {
    title: "Fallout 3",
    year: 2008,
    imgUrl:
      "https://tse1.mm.bing.net/th?id=OIP.bY9nDZgKl-_nx1PbsygACgHaEK&pid=Api",
  },
  {
    title: "Descent",
    year: 1995,
    imgUrl:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/07/descent.jpg",
  },
  {
    title: "Wings of Fury",
    year: 1987,
    imgUrl: "https://i.ytimg.com/vi/ZZSwdqg6VE4/maxresdefault.jpg",
  },
  {
    title: "Call of Duty",
    year: 2003,
    imgUrl:
      "https://cdn.mobygames.com/covers/4083905-call-of-duty-windows-front-cover.jpg",
  },
  {
    title: "Outer Wilds",
    year: 2019,
    imgUrl: "https://i.ytimg.com/vi/d6LGnVCL1_A/maxresdefault.jpg",
  },
  {
    title: "Dark Souls 3",
    year: 2016,
    imgUrl:
      "https://assets-prd.ignimgs.com/2023/03/03/fromsoft-dlc-ranked-blogroll-1677863442346.jpg",
  },
  {
    title: "Jazz Jackrabbit2",
    year: 1998,
    imgUrl:
      "https://tcrf.net/images/thumb/9/90/Jazz_Jackrabbit_2-title.png/320px-Jazz_Jackrabbit_2-title.png",
  },
];

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude!");
});

app.get("/games", function (request, response) {
  response.json(games);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
