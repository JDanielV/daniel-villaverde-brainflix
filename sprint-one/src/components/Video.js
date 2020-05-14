import React from "react";

function Video() {
  return (
    <li className="videos-list__video-wrapper">
      <div className="videos-list__video-thumbnail" />
      <div className="video-list__video-details-wrapper">
        <h4 className="video-list__video-title">
          Become A Travel Pro In One Easy Lesson
        </h4>
        <h5 className="video-list__video-author">Todd Welch</h5>
      </div>
    </li>
  );
}

export default Video;
