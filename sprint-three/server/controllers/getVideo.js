const fs = require("fs");

const getVideo = (id) => {
  const videoData = fs.readFileSync("./model/videos.json");
  const filteredVideo = JSON.parse(videoData).filter(
    (video) => video.id === id
  );
  return filteredVideo;
};

module.exports = getVideo;
