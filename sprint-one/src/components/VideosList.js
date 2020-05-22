import React from "react";

function VideosList(props) {
  return (
    <div className="videos-list">
      <h5 className="videos-list__label">Next video</h5>
      <ul className="videos-list__ul">
        {props.videosArray.map((sideVideo) => (
          <li key={sideVideo.id} className="videos-list__video-wrapper">
            <div className="videos-list__video-thumbnail-container">
              <img
                className="videos-list__video-thumbnail"
                src={sideVideo.image}
                alt="next video thumbnail"
              />
            </div>
            <div className="videos-list__video-details-wrapper">
              <h4 className="videos-list__video-title">{sideVideo.title}</h4>
              <h5 className="videos-list__video-author">{sideVideo.channel}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default VideosList;
