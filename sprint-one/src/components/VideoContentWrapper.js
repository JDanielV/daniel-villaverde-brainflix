import React from "react";
import CommentsSection from "./CommentsSection";
import VideoDetails from "./VideoDetails";

function VideoContentWrapper() {
  return (
    <div className="video-content-wrapper">
      <VideoDetails />
      <CommentsSection />
    </div>
  );
}

export default VideoContentWrapper;
