import React from "react";

function MainVideo(props) {
  return (
    <div className="main-video">
      <div className="main-video__controls-overlay">
        <button className="main-video__button main-video__button--play">
          <i className="main-video__play-icon"></i>
        </button>
        <div className="main-video__time-bar">
          <div className="main-video__time-line"></div>
          <div className="main-video__duration-wrapper">
            <span className="main-video__duration">
              {props.mainVideoDetails.duration}
            </span>
          </div>
        </div>
        <div className="main-video__fullscreen-volume-buttons">
          <button className="main-video__button main-video__button--fullscreen">
            <i className="main-video__fullscreen-icon"></i>
          </button>
          <button className="main-video__button main-video__button--volume">
            <i className="main-video__volume-icon"></i>
          </button>
        </div>
      </div>
      <video
        className="main-video__video"
        poster="./assets/images/video-list-0.jpg"
      ></video>
    </div>
  );
}

export default MainVideo;
