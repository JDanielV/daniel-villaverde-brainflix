import React from "react";

function VideosList(props) {
  return (
    <ul className="videos-list__ul">
      {props.videosArray.map((sideVideo) => (
        <li key={sideVideo.id} className="videos-list__video-wrapper">
          <div className="videos-list__video-thumbnail" />
          <div className="video-list__video-details-wrapper">
            <h4 className="video-list__video-title">{sideVideo.title}</h4>
            <h5 className="video-list__video-author">{sideVideo.user}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default VideosList;
