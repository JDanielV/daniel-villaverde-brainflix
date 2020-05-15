import React from "react";
import CommentsSection from "./CommentsSection";
import VideoDetails from "./VideoDetails";
import MainVideo from "./MainVideo";

function VideoContentWrapper(props) {
  return (
    <main className="video-content-wrapper">
      <MainVideo />
      <VideoDetails />
      <CommentsSection commentsArray={props.commentsArray} />
    </main>
  );
}

export default VideoContentWrapper;
