import React from "react";
import VideoContentWrapper from "./VideoContentWrapper";

function MainContentWrapper() {
  return (
    <div className="main-content-wrapper">
      <VideoContentWrapper />
      <VideosList />
    </div>
  );
}

export default MainContentWrapper;
