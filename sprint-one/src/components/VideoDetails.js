import React from "react";

// Contains from the video title to the comments <ul>

function VideoDetails({ mainVideoDetails }) {
  const FormatDate = (timestamp) => {
    const dateObj = new Date(timestamp);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    console.log(day);

    return `${month}/${day}/${year}`;
  };

  return (
    // Video title, author, timestamp and stats
    <div className="video-details">
      <div className="video-details__title-author-stats-wrapper">
        <h1 className="video-details__title">{mainVideoDetails.title}</h1>
        <div className="video-details__author-stats-wrapper">
          <div className="video-details__author-date-wrapper">
            <span className="video-details__author">
              {mainVideoDetails.channel}
            </span>
            <span className="video-details__date">
              {FormatDate(mainVideoDetails.timestamp)}
            </span>
          </div>
          <div className="video-details__stats-wrapper">
            <div className="video-details__views-wrapper">
              <img
                className="video-details__views-icon"
                src="assets/Icons/PNG/Icon-views.png"
                alt="views icon"
              />
              <span className="video-details__views-count">
                {mainVideoDetails.views}
              </span>
            </div>
            <div className="video-details__likes-wrapper">
              <img
                className="video-details__likes-icon"
                src="assets/Icons/PNG/Icon-likes.png"
                alt="likes icon"
              />
              <span className="video-details__likes-count">
                {mainVideoDetails.likes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* // Video description */}
      <div className="video-details__description-container">
        <p className="video-details__description">
          {mainVideoDetails.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetails;
