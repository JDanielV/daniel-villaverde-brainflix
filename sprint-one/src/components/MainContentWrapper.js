import React from "react";
import VideoContentWrapper from "./VideoContentWrapper";
import VideosList from "./VideosList";
import MainVideo from "./MainVideo";

function MainContentWrapper(props) {
  return (
    <div className="main-content">
      <MainVideo mainVideoDetails={props.mainVideoDetails} />
      <div className="main-content__wrapper">
        <VideoContentWrapper
          commentsArray={props.commentsArray}
          mainVideoDetails={props.mainVideoDetails}
        />
        <VideosList videosArray={props.videosArray} />
      </div>
    </div>
  );
}

export default MainContentWrapper;
