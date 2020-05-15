import React from "react";
import VideoContentWrapper from "./VideoContentWrapper";
import VideosList from "./VideosList";

function MainContentWrapper(props) {
  return (
    <div className="main-content-wrapper">
      <VideoContentWrapper commentsArray={props.commentsArray} />
      <VideosList videosArray={props.videosArray} />
    </div>
  );
}

export default MainContentWrapper;
