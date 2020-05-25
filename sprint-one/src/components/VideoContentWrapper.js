import React from "react";
import CommentsSection from "./CommentsSection";
import VideoDetails from "./VideoDetails";

function VideoContentWrapper({ commentsArray, mainVideoDetails }) {
  return (
    <main className="video-content-wrapper">
      <VideoDetails mainVideoDetails={mainVideoDetails} />
      <CommentsSection commentsArray={commentsArray} />
    </main>
  );
}

export default VideoContentWrapper;
