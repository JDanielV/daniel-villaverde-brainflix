const fs = require("fs");

const getVideoList = () => {
  const videoData = fs.readFileSync("./model/videos.json");

  const filteredVideoData = JSON.parse(videoData).map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  return filteredVideoData;
};

module.exports = getVideoList;
