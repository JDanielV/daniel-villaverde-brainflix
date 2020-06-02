const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

// importing methods in controller folder
const getVideo = require("./controllers/getVideo");
const getVideoList = require("./controllers/getVideoList");
const postVideo = require("./controllers/postVideo");

// middleware here
app.use(express.json());
app.use(cors());

// Endpoints ahead

// Route to get the side videos list information -
// only id, title, channel and image URL
app.get("/videos", (req, res) => {
  res.json(getVideoList());
});

app.post("/videos", (req, res) => {
  res.json(postVideo(req.body));
});

// Route to get the single video with complete details,
// based on it's id (match.params.id)
app.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  res.json(getVideo(videoId));
});

app.listen(5000, console.log("app is listening to port 5000"));
