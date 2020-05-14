import React from "react";

// Contains from the video title to the comments <ul>

function VideoDetails() {
  return (
    // Video title, author, timestamp and stats
    <div className="video-details">
      <div className="video-details__title-author-stats-wrapper">
        <h2 className="video-details__title">BMX Rampage:2018 Highlights</h2>
        <div className="video-details__author-date-wrapper">
          <span className="video-details__author">By Red Cow</span>
          <span className="video-details__date">12/18/2018</span>
        </div>
        <div className="video-details__stats-wrapper">
          <div className="video-details__views-wrapper">
            <img
              className="video-details__views-icon"
              src="../assets/Icons/Icon-views.png"
              alt="views icon"
            />
            <span className="video-details__views-count">1,001,023</span>
          </div>
          <div className="video-details__likes-wrapper">
            <img
              className="video-details__likes-icon"
              src="../assets/Icons/Icon-likes.png"
              alt="likes icon"
            />
            <span className="video-details__likes-count">110,985</span>
          </div>
        </div>
      </div>

      {/* // Video description */}
      <div className="video-details__description-container">
        <p className="video-details__description">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </div>
  );
}

export default VideoDetails;
