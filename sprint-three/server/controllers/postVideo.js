const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Loading data from videos.json file to local variable
const videosList = JSON.parse(fs.readFileSync("./model/videos.json"));

const postVideo = (videoArray) => {
  const date = new Date();
  const timestamp = date.getTime();
  const newVideo = {
    id: uuidv4(),
    title: videoArray.title,
    channel: "BrainStation Man",
    image: "/assets/Images/Upload-video-preview.jpg",
    description: videoArray.description,
    views: "1,023,224",
    likes: "8",
    duration: "1:43",
    video: "",
    timestamp: timestamp,
    comments: [
      {
        name: "Gigio",
        comment: "Not sure how I'm typing this because I'm a cat",
        id: uuidv4(),
        likes: 0,
        timestamp: timestamp,
      },
      {
        name: "Daniel Villaverde",
        comment: "This is my first time hardcoding a comment from my own API",
        id: uuidv4(),
        likes: 0,
        timestamp: timestamp,
      },
      {
        name: "Anonymous",
        comment: "I will leak the secrets of the world anytime now.",
        id: uuidv4(),
        likes: 0,
        timestamp: timestamp,
      },
    ],
  };

  videosList.push(newVideo);

  fs.writeFileSync("./model/videos.json", JSON.stringify(videosList));
  return videosList;
};

module.exports = postVideo;
