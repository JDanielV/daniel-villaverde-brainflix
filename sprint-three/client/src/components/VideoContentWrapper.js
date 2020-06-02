import React from "react";
import CommentsSection from "./CommentsSection";
import VideoDetails from "./VideoDetails";

function VideoContentWrapper({
  commentsArray,
  mainVideoDetails,
  submitComment,
}) {
  return (
    <main className="video-content-wrapper">
      <VideoDetails mainVideoDetails={mainVideoDetails} />
      <CommentsSection
        commentsArray={commentsArray}
        mainVideoDetails={mainVideoDetails}
      />
    </main>
  );
}

export default VideoContentWrapper;
